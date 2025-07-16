'use client';
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './reviews.scss';

const Reviews = () => {
    const exampleReviews = [
        { name: "Mariana", rating: 5, comment: "¡Excelente calidad, llegó en tiempo y forma!" },
        { name: "Carlos", rating: 4, comment: "Muy buena relación precio-calidad." },
        { name: "Laura", rating: 3, comment: "La tela es un poco más fina de lo que esperaba, pero cómoda." },
    ];

    const [reviews, setReviews] = useState(exampleReviews);
    const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

    const handleChange = (e) => {
        setNewReview({ ...newReview, comment: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.rating > 0 && newReview.comment.trim()) {
        setReviews([{ name: 'Anónimo', ...newReview }, ...reviews]);
        setNewReview({ rating: 0, comment: '' });
        }
    };

    return (
        <section className="reviews-container">
        <h3 className="reviews-container__title">Reseñas del producto</h3>

        <div className="reviews-container__list">
            {reviews.length > 0 ? (
            reviews.map((review, index) => (
                <div key={index} className="reviews-container__item">
                    <div className="reviews-container__header">
                        <p className="reviews-container__name">{review.name}</p>
                        <div className="reviews-container__stars">
                        {Array.from({ length: review.rating }, (_, i) => (
                            <FaStar key={i} color="#FFD166" />
                        ))}
                        </div>
                    </div>
                    <p className="reviews-container__comment">{review.comment}</p>
                </div>
            ))
            ) : (
                <p className="reviews-container__empty">Aún no hay reseñas. ¡Sé el primero en opinar!</p>
            )}
        </div>

        <form className="reviews-container__form" onSubmit={handleSubmit}>
            <h4 className="reviews-container__subtitle">Deja tu reseña</h4>
            
            <div className="reviews-container__rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                key={star}
                size={24}
                color={star <= newReview.rating ? "#FFD166" : "#ddd"}
                onClick={() => setNewReview({ ...newReview, rating: star })}
                style={{ cursor: "pointer" }}
                />
            ))}
            </div>

            <textarea
            name="comment"
            placeholder="Escribe tu reseña..."
            rows="4"
            value={newReview.comment}
            onChange={handleChange}
            required
            />

            <button type="submit">Enviar reseña</button>
        </form>
        </section>
    );
};

export default Reviews;

