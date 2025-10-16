'use client'
import React, { useState } from 'react'
import { Box, Grid, Card, CardContent, Typography, Chip, Button, useMediaQuery } from '@mui/material'
import { MdInventory2, MdEdit, MdDelete } from "react-icons/md"
import './productList.scss'
import ProductEdit from '../product-edit/ProductEdit'
import DeleteProduct from '../delete-product/DeleteProduct'

const mockProducts = [
  { id: 1, name: 'Zapatillas Nike Air', price: 12000, stock: 25, active: true },
  { id: 2, name: 'Camiseta Adidas', price: 9500, stock: 10, active: false },
  { id: 3, name: 'Guantes Puma', price: 4500, stock: 40, active: true },
  { id: 4, name: 'Pelota Fútbol Pro', price: 16000, stock: 5, active: true },
]

const ProductList = () => {
  const isMobile = useMediaQuery('(max-width:768px)', { noSsr: true });
  
  // Estado unificado para modales
  const [modalState, setModalState] = useState({
    edit: false,
    delete: false,
    selectedProduct: null
  });

  // Función unificada para abrir/cerrar modales
  const toggleModal = (type, product = null) => {
    setModalState((prev) => ({
      ...prev,
      [type]: !prev[type],
      selectedProduct: product || prev.selectedProduct
    }));
  };

  // Función unificada para acciones (guardar/confirmar eliminar)
  const handleAction = (type) => {
    console.log(`${type} producto:`, modalState.selectedProduct);
    toggleModal(type); // cerrar modal
    // Aquí podrías llamar a tu API o actualizar Redux
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>Lista de productos</Typography>

      {isMobile ? (
        <Grid container spacing={2} justifyContent="center">
          {mockProducts.map((product) => (
            <Grid item xs={12} sm={10} key={product.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2, backgroundColor: '#fff' }}>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2}>
                    <MdInventory2 size={40} color="#1976d2" />
                    <Box flex={1}>
                      <Typography variant="h6" fontWeight="bold">{product.name}</Typography>
                      <Typography variant="body2" color="text.secondary">Precio: ${product.price.toLocaleString()}</Typography>
                      <Typography variant="body2" color="text.secondary">Stock: {product.stock}</Typography>
                      <Chip label={product.active ? 'Activo' : 'Inactivo'} color={product.active ? 'success' : 'default'} size="small" sx={{ mt: 1 }} />
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button variant="contained" size="small" startIcon={<MdEdit />} sx={{ flex: 1, mr: 1 }} onClick={() => toggleModal('edit', product)}>Editar</Button>
                    <Button variant="outlined" color="error" size="small" startIcon={<MdDelete />} sx={{ flex: 1 }} onClick={() => toggleModal('delete', product)}>Eliminar</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ overflowX: 'auto', borderRadius: 3, boxShadow: 2 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#1976d2', color: '#fff' }}>
                <th>Producto</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price.toLocaleString()}</td>
                  <td>{product.stock}</td>
                  <td>
                    <Chip label={product.active ? 'Activo' : 'Inactivo'} color={product.active ? 'success' : 'default'} size="small" />
                  </td>
                  <td>
                    <Button variant="text" startIcon={<MdEdit />} sx={{ color: '#1976d2' }} onClick={() => toggleModal('edit', product)}>Editar</Button>
                    <Button variant="text" startIcon={<MdDelete />} sx={{ color: 'red' }} onClick={() => toggleModal('delete', product)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      )}

      <ProductEdit 
        open={modalState.edit} 
        onSave={() => handleAction('edit')} 
        onCancel={() => toggleModal('edit')} 
      />
      <DeleteProduct
        isOpen={modalState.delete}
        onClose={() => toggleModal('delete')}
        onDelete={() => handleAction('delete')}
        productName={modalState.selectedProduct?.name || ''}
      />
    </Box>
  )
}

export default ProductList

