import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import "./deleteProduct.scss";

const DeleteProduct = ({ isOpen, onClose, onDelete, productName }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="delete-product-modal">
            <DialogTitle>Eliminar Producto</DialogTitle>
            <DialogContent>
                <Typography>
                ¿Estás seguro que deseas eliminar <strong>{productName}</strong>? Esta acción no se puede deshacer.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined" color="inherit">
                Cancelar
                </Button>
                <Button onClick={onDelete} variant="contained" color="error">
                Eliminar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteProduct;
