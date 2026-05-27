'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import './connect-mp.scss'
import { vincularCuentaMercadoPago } from '../api/mercadoPago.api'

const Page = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: null, message: '' })

    // Captura el ?code=TG-... de la barra de direcciones
    const code = searchParams.get('code')

    // Variables del .env.local de Next.js
    const CLIENT_ID = process.env.NEXT_PUBLIC_MP_CLIENT_ID
    const REDIRECT_URI = process.env.NEXT_PUBLIC_MP_REDIRECT_URI

    // Armamos el enlace de Mercado Pago
    const oauthUrl = `https://auth.mercadopago.com.ar/authorization?client_id=${CLIENT_ID}&response_type=code&platform_id=mp&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`

    useEffect(() => {
        if (code) {
            enviarCodigoAlBackend(code)
        }
    }, [code])

    const enviarCodigoAlBackend = async (authorizationCode) => {
        setLoading(true)
        setStatus({ type: null, message: '' })
        
        try {
            // Llamada al servicio JS
            await vincularCuentaMercadoPago(authorizationCode)

            setStatus({ type: 'success', message: '¡Cuenta de Mercado Pago vinculada con éxito!' })
            
            // Redirección al panel
            setTimeout(() => {
                router.push('/dashboard') 
            }, 3000)

        } catch (error) {
            setStatus({ type: 'error', message: error.message || 'Hubo un problema de conexión.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="connect-mp-container">
            <div className="connect-mp-card">
                
                {/* 1. CARGANDO */}
                {loading && (
                    <>
                        <h2 className="loading">Procesando vinculación...</h2>
                        <p>Estamos configurando tus credenciales de cobro de forma segura.</p>
                    </>
                )}

                {/* 2. ÉXITO */}
                {!loading && status.type === 'success' && (
                    <>
                        <h2 className="success">🎉 ¡Listo!</h2>
                        <p>{status.message}</p>
                    </>
                )}

                {/* 3. ERROR */}
                {!loading && status.type === 'error' && (
                    <>
                        <h2 className="error">❌ Error de vinculación</h2>
                        <p>{status.message}</p>
                        <a href={oauthUrl} className="btn-mp">
                            Reintentar conexión
                        </a>
                    </>
                )}

                {/* 4. VISTA INICIAL */}
                {!loading && !code && !status.type && (
                    <>
                        <h2 className="idle">Conectá tu Mercado Pago</h2>
                        <p>
                            Necesitamos que vincules tu cuenta para poder depositarte el dinero de las compras que hagan tus clientes directamente en tu billetera.
                        </p>
                        <a href={oauthUrl} className="btn-mp">
                            Vincular Cuenta
                        </a>
                    </>
                )}
            </div>
        </div>
    )
}

export default Page