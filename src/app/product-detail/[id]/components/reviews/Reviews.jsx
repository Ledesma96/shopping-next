'use client';
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { createReview, getReview } from "../../../../api/review.api";
import './reviews.scss';

const Reviews = ({id}) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({product: '', rating: 0, comment: '' });

    const handleChange = (e) => {
        setNewReview({ ...newReview, comment: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (newReview.rating > 0 && newReview.comment.trim()) {
            const result = await createReview({...newReview, product: id});
            if(result){
                setReviews([{ name: 'Anónimo', ...newReview }, ...reviews]);
                setNewReview({ rating: 0, comment: '' });
            }
        }
    };

    useEffect(() => {
        const fetchReviews = async() => {
            try {
                    const result = await getReview(id);
                    setReviews(result)
            } catch (error) {
                console.log(error);
            }
        }
        if(id) fetchReviews();
    }, [id])

    return (
        <section className="reviews-container">
        <h3 className="reviews-container__title">Reseñas del producto</h3>

        <div className="reviews-container__list">
            {reviews?.length > 0 ? (
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

