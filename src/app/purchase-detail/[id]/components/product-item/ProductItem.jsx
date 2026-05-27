import './productItem.scss'
const ProductItem = ({ product }) => {
    // Extraemos la info del producto populado
    const { title, images } = product.productId;

    return (
        <div className='product-row'>
            <div className="product-row__img-container">
                <img src={images[0]} alt={title} />
                <span className="quantity-badge">{product.quantity}</span>
            </div>
            <div className="product-row__info">
                <p className="product-row__name">{title}</p>
                <p className="product-row__unit-price">
                    Unidad: ${product.price.toLocaleString('es-AR')}
                </p>
            </div>
            <div className="product-row__total">
                ${(product.price * product.quantity).toLocaleString('es-AR')}
            </div>
        </div>
    );
};

export default ProductItem