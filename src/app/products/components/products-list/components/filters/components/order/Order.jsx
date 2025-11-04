import React from 'react'
import './order.scss'

const Order = ({btn, handleClick, handleChangeOrder, order}) => {
    return (
        <aside className={`${btn.order ? 'order-on' : 'order-off'} order`}>
            <button onClick={() => handleClick('order')}>X</button>
            <label>
                <input type="radio" name="order" value="az" checked={order === "az"} onChange={handleChangeOrder}/>
                A → Z
            </label>
            <label>
                <input type="radio" name="order" value="za" checked={order === "za"} onChange={handleChangeOrder}/>
                Z → A
            </label>
            <label>
                <input type="radio" name="order" value="price-asc" checked={order === "price-asc"} onChange={handleChangeOrder}/>
                Precio: menor a mayor
            </label>
            <label>
                <input type="radio" name="order" value="price-desc" checked={order === "price-desc"} onChange={handleChangeOrder}/>
                Precio: mayor a menor
            </label>
        </aside>
    )
}

export default Order