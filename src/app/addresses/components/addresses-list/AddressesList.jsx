// app/addresses/AddressesList.js
import AddOrEditAddress from '../add-or-edit-address/AddOrEditAddress';
import './addressesList.scss';
export default function AddressesList({ addresses }) {
    return (
        <div className='addressList'>
            <ul>
                {addresses.map((address) => (
                <li key={address.id}>
                    <span className='addressName'>{address.name}</span>
                    <span className='addressInfo'>{address.street}</span>
                    <span className='addressInfo'>{address.city}</span>
                    <span className='addressInfo'>{address.zip}</span>
                    <AddOrEditAddress address={address} />
                </li>
                ))}
            </ul>

            <div className='addNewSection'>
                <h2>Agregar nueva dirección</h2>
                <AddOrEditAddress />
            </div>
        </div>
    );
}
