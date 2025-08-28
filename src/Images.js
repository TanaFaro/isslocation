import React, { useState } from 'react';

const Images = ({ image }) => {
    const [showModal, setShowModal] = useState(false);
    
    const handleImageClick = () => {
        setShowModal(true);
    };
    
    const closeModal = () => {
        setShowModal(false);
    };
    
    return (
        <>
            <div className="image-card" onClick={handleImageClick}>
                <div className="image-container">
                    <img 
                        src={image.webformatURL} 
                        alt={image.tags || 'Imagen del lugar'} 
                        loading="lazy"
                    />
                    <div className="image-overlay">
                        <span className="view-full">👁️ Ver completa</span>
                    </div>
                </div>
                <div className="image-info">
                    <h3>{image.tags || 'Sin título'}</h3>
                    <div className="image-stats">
                        <span>❤️ {image.likes || 0}</span>
                        <span>👁️ {image.views || 0}</span>
                        <span>💬 {image.comments || 0}</span>
                    </div>
                </div>
            </div>
            
            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <img 
                            src={image.largeImageURL || image.webformatURL} 
                            alt={image.tags || 'Imagen del lugar'} 
                        />
                        <div className="modal-info">
                            <h3>{image.tags || 'Sin título'}</h3>
                            <p>📸 Fotógrafo: {image.user || 'Desconocido'}</p>
                            <div className="modal-stats">
                                <span>❤️ Me gusta: {image.likes || 0}</span>
                                <span>👁️ Visualizaciones: {image.views || 0}</span>
                                <span>💬 Comentarios: {image.comments || 0}</span>
                                <span>📏 Dimensiones: {image.imageWidth}x{image.imageHeight}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Images;
