'use client'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { name: 'Pendientes', value: 25 },
  { name: 'En proceso', value: 40 },
  { name: 'Enviados', value: 15 },
  { name: 'Entregados', value: 18 },
  { name: 'Cancelados', value: 2 },
];

const COLORS = ['#FFBB28', '#2196F3', '#00C49F', '#4CAF50', '#F44336'];

const RADIAN = Math.PI / 180;

// 📊 Etiquetas personalizadas con porcentaje
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const OrdersStatusChart = () => {
    return (
        <Box
        sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            padding: 2,
            boxShadow: 1,
            width: '100%',
            minWidth: 350,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 4
        }}
        >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Estado de pedidos
            </Typography>

            <ResponsiveContainer width="100%" height={300} minWidth={350}>
                <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    innerRadius={70}
                    dataKey="value"
                    isAnimationActive={true}
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value} pedidos`, name]} />
                <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default OrdersStatusChart;
