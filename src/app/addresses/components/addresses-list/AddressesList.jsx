import AddOrEditAddress from "../add-or-edit-address/AddOrEditAddress";
import "./addressesList.scss"

export default function AddressesList({ addresses }) {

    const safeAddresses = Array.isArray(addresses) ? addresses : [];

    return (
        <div className='addressList'>

            {safeAddresses.length === 0 ? (
                <p className="no-addresses">
                    No tenés direcciones cargadas todavía 🏠
                </p>
            ) : (
                <ul>
                    {safeAddresses.map((address, index) => (
                        <li key={address._id || index}>
                            <span className='addressName'>{address.addressType}</span>
                            <span className='addressInfo'>{address.street}</span>
                            <span className='addressInfo'>{address.city}</span>
                            <span className='addressInfo'>{address.cp}</span>
                            <AddOrEditAddress address={address} />
                        </li>
                    ))}
                </ul>
            )}

            <div className='addNewSection'>
                <h2>Agregar nueva dirección</h2>
                <AddOrEditAddress />
            </div>

        </div>
    );
}
