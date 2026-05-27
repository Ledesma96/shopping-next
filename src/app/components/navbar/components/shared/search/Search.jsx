'use client'
import React, { useEffect, useState } from 'react'
import './search.scss'
import { IoIosSearch } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { IoMdTime, IoMdClose } from 'react-icons/io' // Iconos extra

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [height, setHeight] = useState('0px')

    // 1. Cargar historial al montar el componente
    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setHistory(savedHistory);
    }, []);

    // 2. Función para guardar en el historial
    const saveToHistory = (term) => {
        const trimmedTerm = term.trim();
        if (!trimmedTerm) return;

        // Evitar duplicados y mantener solo las últimas 5 búsquedas
        const newHistory = [
            trimmedTerm,
            ...history.filter(item => item !== trimmedTerm)
        ].slice(0, 5);

        setHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    };

    const handleSearch = (term) => {
        if (term.trim() !== '') {
            saveToHistory(term);
            router.push(`/products?search=${term}`);
            setSearch('');
            setShowHistory(false);
        }
    };

    const deleteHistoryItem = (e, item) => {
        e.stopPropagation(); // Evita que se dispare la búsqueda al borrar
        const newHistory = history.filter(h => h !== item);
        setHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    };

    useEffect(() => {
        const newHeight = (30 * history.length) + 'px';
        setHeight(newHeight);
    }, [history])

    return (
        <div className="container-search">
            <div className="search-box">
                <input
                    placeholder="Buscar productos..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(search)}
                    onFocus={() => setShowHistory(true)}
                    onBlur={() => setTimeout(() => setShowHistory(false), 200)} // Timeout para permitir el click en el historial
                />
                <IoIosSearch className="icon" onClick={() => handleSearch(search)} />

                {/* 3. Renderizado del Historial */}
                {showHistory && history.length > 0 && (
                    <div className="history-dropdown" style={{height}}>
                        {history.map((item, index) => (
                            <div key={index} className="history-item" onClick={() => handleSearch(item)}>
                                <div className="content">
                                    <IoMdTime className="clock-icon" />
                                    <p>{item}</p>
                                </div>
                                <IoMdClose 
                                    className="delete-icon" 
                                    onClick={(e) => deleteHistoryItem(e, item)} 
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search