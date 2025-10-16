'use client';
import React, { useState } from 'react';
import './sales.scss';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

// Datos de ejemplo (30 días)
const salesData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(2025, 8, i + 1); // Septiembre 2025
    return {
        date: date.toISOString().split('T')[0], // yyyy-mm-dd
        total: Math.floor(Math.random() * 500) + 50, // total random
    };
});

const Sales = () => {
    const [filter, setFilter] = useState('month');

    const getFilteredData = () => {
        if (filter === 'week') {
        return salesData.slice(-7); // últimos 7 días
        }
        if (filter === 'month') {
        return salesData; // últimos 30 días
        }
        if (filter === 'quarter') {
        // Simulación trimestre (90 días)
        const longData = [
            ...salesData,
            ...salesData.map((d, i) => ({ ...d, date: `2025-08-${i + 1}` })),
            ...salesData.map((d, i) => ({ ...d, date: `2025-07-${i + 1}` })),
        ];
        return longData.slice(-90);
        }
        return salesData;
    };

    return (
        <div className="container-graphic">
            <div className='container-title'>
                <p>Ventas</p>
            </div>
            <div className="filter-bar">
                <label htmlFor="salesFilter">Filtrar: </label>
                <select
                id="salesFilter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="week">Última semana</option>
                    <option value="month">Último mes</option>
                    <option value="quarter">Último trimestre</option>
                </select>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={getFilteredData()} margin={{ top: 10, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis
                    label={{
                    value: 'Ventas ($)',
                    position: 'insideLeft',
                    angle: -90,
                    offset: 0,
                    }}
                />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#6c63ff"
                    strokeWidth={2}
                    name="Ventas"
                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Sales;
