import React from 'react'
import { Card } from './components'

const page = () => {
    return (
        <main>
            <Card
                title={'Direcciones'}
                description={'Administra tus direcciones de envío y facturación para recibir tus compras donde prefieras.'}
                url={'/addresses'}
            />

            <Card
                title={'Métodos de pago'}
                description={'Gestiona tus tarjetas y métodos de pago para compras más rápidas y seguras.'}
                url={'/payment-methods'}
            />

            <Card
                title={'Preferencias de notificación'}
                description={'Elige cómo y cuándo recibir alertas sobre tus compras, ventas y promociones.'}
                url={'/notifications'}
            />

            <Card
                title={'Seguridad'}
                description={'Actualiza tu contraseña y configura opciones de seguridad para proteger tu cuenta.'}
                url={'/security'}
            />

            <Card
                title={'Mis ventas'}
                description={'Revisa tus productos vendidos, estados de envíos y estadísticas de ventas.'}
                url={'/sales'}
            />

            <Card
                title={'Datos personales'}
                description={'Modifica tu nombre, alias y otros datos visibles en tu perfil público.'}
                url={'/personal-data'}
            />

            <Card
                title={'Centro de ayuda'}
                description={'Obtén asistencia y resuelve tus dudas sobre compras, ventas y más.'}
                url={'/help-center'}
            />
        </main>
    )
}

export default page