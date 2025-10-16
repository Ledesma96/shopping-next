'use client'
import React from 'react'
import { Grid, Card, CardContent, Typography, Box } from '@mui/material'
import { LuTrendingUp } from "react-icons/lu";
import { MdOutlinePendingActions, MdLocalShipping, MdInventory, MdOutlinePeopleAlt } from "react-icons/md";

const metrics = [
    {
        title: 'Ventas del mes',
        value: '$124,500',
        icon: <LuTrendingUp style={{ fontSize: 40, color: '#1976d2' }} />,
        color: '#E3F2FD'
    },
    {
        title: 'Pedidos pendientes',
        value: 8,
        icon: <MdOutlinePendingActions style={{ fontSize: 40, color: '#F57C00' }} />,
        color: '#FFF3E0'
    },
    {
        title: 'Pedidos entregados',
        value: 120,
        icon: <MdLocalShipping style={{ fontSize: 40, color: '#388E3C' }} />,
        color: '#E8F5E9'
    },
    {
        title: 'Productos activos',
        value: 58,
        icon: <MdInventory style={{ fontSize: 40, color: '#6A1B9A' }} />,
        color: '#F3E5F5'
    },
    {
        title: 'Clientes nuevos',
        value: 23,
        icon: <MdOutlinePeopleAlt style={{ fontSize: 40, color: '#0288D1' }} />,
        color: '#E1F5FE'
    }
]

const OrdersSummary = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2} justifyContent="center">
                {metrics.map((metric, index) => (
                    <Grid 
                        item 
                        xs={12}      // en mobile ocupa toda la fila
                        sm={6}       // en tablet ocupa la mitad
                        md={4}       // en desktop ocupa un tercio
                        lg={2.4}     // en pantallas grandes ocupa 2.4 columnas
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Card
                            sx={{
                                backgroundColor: metric.color,
                                borderRadius: 3,
                                boxShadow: 2,
                                height: '100%',
                                width: { xs: '95vw', sm: '90%', md: '100%' }, // ancho responsive
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2
                                }}
                            >
                                {metric.icon}
                                <Box>
                                    <Typography variant="h6">{metric.value}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {metric.title}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default OrdersSummary
