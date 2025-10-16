'use client'
import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { useAnimate, useAnimateBar, useDrawingArea } from '@mui/x-charts/hooks';
import { PiecewiseColorLegend } from '@mui/x-charts/ChartsLegend';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';
import Box from '@mui/material/Box';
import votesTurnout from './dataset/votes.json';
import { useState, useEffect } from 'react';
import './topProducts.scss'

const TopProducts = () => {
  const [products, setProducts] = useState(votesTurnout.sort((a,b) => b.percentage - a.percentage));
  const [category, setCategory] = useState('todo');
  const [categoryValue, setCategoryValue] = useState('todo');

  const filters = [
    {
      category: "Calzado",
      items: ["Zapatillas", "Crocks", "Botines de fútbol"],
    },
    {
      category: "Ropa",
      items: ["Remeras", "Camisa", "Campera de abrigo"],
    },
    {
      category: "Accesorios",
      items: ["Medias", "Reloj", "Gorra", "Mochila"],
    },
  ];

  useEffect(() => {
    let filtered = votesTurnout;

    // Filtro por categoría
    if (category !== 'todo') {
      const selectedFilter = filters.find(f => f.category === category);
      if (selectedFilter) {
        filtered = filtered.filter(p =>
          selectedFilter.items.some(item => p.product.includes(item))
        );
      }
    }

    // Filtro por producto específico
    if (categoryValue !== 'todo') {
      filtered = filtered.filter(p => p.product.includes(categoryValue));
    }

    setProducts(filtered);
  }, [category, categoryValue]);

  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: 'white',
        borderRadius: 2,
        marginTop: 2,
        padding: 2,
      }}
    >

<Typography
        sx={{
          margin: 2,
          fontSize: '1.2rem',
          fontWeight: 700,
          paddingTop: 2,
        }}
      >
        Productos más vendidos
      </Typography>
      <div className="filter-bar">
        <label htmlFor="categoryFilter">Categoría: </label>
        <select
          id="categoryFilter"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCategoryValue('todo');
          }}
        >
          <option value="todo">Todos</option>
          {filters.map((f) => (
            <option key={f.category} value={f.category}>
              {f.category}
            </option>
          ))}
        </select>
      </div>
      {category !== 'todo' && (
        <div className="filter-bar">
          <label htmlFor="productFilter">Producto: </label>
          <select
            id="productFilter"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            <option value="todo">Todos</option>
            {filters
              .find((f) => f.category === category)
              ?.items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
      )}

      <BarChart
        height={300}
        dataset={products}
        series={[
          {
            id: 'percentage',
            dataKey: 'percentage',
            stack: 'voter percentage',
            valueFormatter: (value) => `${value}%`,
          },
        ]}
        layout="horizontal"
        xAxis={[
          {
            id: 'color',
            min: 0,
            max: 100,
            colorMap: {
              type: 'piecewise',
              thresholds: [10, 20],
              colors: ['#d32f2f', '#78909c', '#1976d2'],
            },
            valueFormatter: (value) => `${value}%`,
          },
        ]}
        barLabel={(v) => `${v.value}%`}
        yAxis={[
          {
            scaleType: 'band',
            dataKey: 'product',
            width: 140,
          },
        ]}
        slots={{
          legend: PiecewiseColorLegend,
          barLabel: BarLabelAtBase,
          bar: BarShadedBackground,
        }}
        slotProps={{
          legend: {
            axisDirection: 'x',
            markType: 'square',
            labelPosition: 'inline-start',
            labelFormatter: ({ index }) => {
              if (index === 0) return 'Poco vendidos';
              if (index === 1) return 'Venta media';
              return 'Más vendidos';
            },
          },
        }}
      />
    </Box>
  );
};

const BarShadedBackground = (props) => {
  const { ownerState, skipAnimation, ...other } = props;
  const theme = useTheme();

  const animatedProps = useAnimateBar(props);
  const { width } = useDrawingArea();

  return (
    <>
      <rect
        {...other}
        fill={(theme.vars || theme).palette.text.primary}
        opacity={theme.palette.mode === 'dark' ? 0.05 : 0.1}
        x={other.x}
        width={width}
      />
      <rect
        {...other}
        filter={ownerState.isHighlighted ? 'brightness(120%)' : undefined}
        opacity={ownerState.isFaded ? 0.3 : 1}
        data-highlighted={ownerState.isHighlighted || undefined}
        data-faded={ownerState.isFaded || undefined}
        {...animatedProps}
      />
    </>
  );
};

const Text = styled('text')(({ theme }) => ({
  ...theme?.typography?.body2,
  stroke: 'none',
  fill: (theme.vars || theme).palette.common.white,
  transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
  textAnchor: 'start',
  dominantBaseline: 'central',
  pointerEvents: 'none',
  fontWeight: 600,
}));

const BarLabelAtBase = (props) => {
  const { xOrigin, y, height, skipAnimation, ...otherProps } = props;

  const animatedProps = useAnimate(
    { x: xOrigin + 8, y: y + height / 2 },
    {
      initialProps: { x: xOrigin, y: y + height / 2 },
      createInterpolator: interpolateObject,
      transformProps: (p) => p,
      applyProps: (element, p) => {
        element.setAttribute('x', p.x.toString());
        element.setAttribute('y', p.y.toString());
      },
      skip: skipAnimation,
    }
  );

  return <Text {...otherProps} {...animatedProps} />;
};

export default TopProducts;
export { BarShadedBackground, BarLabelAtBase };
