'use client'
import React, { useState } from 'react'
import {
    Box,
    TextField,
    Typography,
    Button,
    MenuItem,
    FormControlLabel,
    Switch,
    Paper,
    Modal,
    } from '@mui/material'

const categories = [
    'Calzado',
    'Ropa',
    'Accesorios',
    'Deportes',
    'Tecnología',
    'Hogar',
]

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    maxWidth: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 3,
    p: 3,
    outline: 'none',
}

const ProductEdit = ({ open, product = {}, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: product.name || '',
        price: product.price || '',
        stock: product.stock || '',
        category: product.category || '',
        description: product.description || '',
        active: product.active ?? true,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSwitch = (e) => {
        setFormData({ ...formData, active: e.target.checked })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave?.(formData)
    }

    return (
        <Modal
        open={open}
        onClose={onCancel}
        aria-labelledby="editar-producto"
        sx={{
            backdropFilter: 'blur(4px)',
        }}
        >
        <Box sx={modalStyle}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
            Editar producto
            </Typography>

            <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Nombre del producto"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
            />

            <TextField
                fullWidth
                label="Precio"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                margin="normal"
                required
            />

            <TextField
                fullWidth
                label="Stock"
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleChange}
                margin="normal"
                required
            />

            <TextField
                select
                fullWidth
                label="Categoría"
                name="category"
                value={formData.category}
                onChange={handleChange}
                margin="normal"
                required
            >
                {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                    {cat}
                </MenuItem>
                ))}
            </TextField>

            <TextField
                fullWidth
                label="Descripción"
                name="description"
                multiline
                rows={3}
                value={formData.description}
                onChange={handleChange}
                margin="normal"
            />

            <FormControlLabel
                control={
                <Switch
                    checked={formData.active}
                    onChange={handleSwitch}
                    color="primary"
                />
                }
                label={formData.active ? 'Activo' : 'Inactivo'}
                sx={{ mt: 1 }}
            />

            <Box
                mt={3}
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                gap={2}
            >
                <Button
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={onCancel}
                >
                Cancelar
                </Button>
                <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                >
                Guardar cambios
                </Button>
            </Box>
            </form>
        </Box>
        </Modal>
    )
}

export default ProductEdit
