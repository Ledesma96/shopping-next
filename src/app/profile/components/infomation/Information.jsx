import React from 'react';
import { FaCheckCircle, FaClock, FaMapMarkerAlt, FaShoppingCart, FaTimesCircle } from 'react-icons/fa';
import './information.scss';

const Information = ({ data }) => {
    return (
        <section className="perfil-publico">
            <h3>Información del usuario</h3>
            <div className="perfil-publico__info-item">
                <FaMapMarkerAlt />
                <span>{data.location}</span>
            </div>
            <div className="perfil-publico__info-item">
                <FaClock />
                <span>Miembro desde {data.memberSince}</span>
            </div>
            <div className="perfil-publico__info-item">
                <FaShoppingCart />
                <span>{data.sales} ventas realizadas</span>
            </div>
            <div className="perfil-publico__info-item">
                {data.verified ? (
                    <>
                        <FaCheckCircle className="verified" />
                        <span>Cuenta verificada</span>
                    </>
                ) : (
                    <>
                        <FaTimesCircle className="not-verified" />
                        <span>Cuenta no verificada</span>
                    </>
                )}
            </div>
        </section>
    );
};

export default Information;
