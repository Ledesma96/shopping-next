import { SalesList } from "./components";

export default function page() {
    return (
        <section className="sales-page-container">
            <div className="sales-page-header">
                <h1>Panel de Ventas</h1>
                <p>Gestioná tus pedidos y estados de envío</p>
            </div>
            <SalesList />
        </section>
    );
}