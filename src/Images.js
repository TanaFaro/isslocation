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
                    {/* Estadísticas removidas para interfaz más limpia */}
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
                            {/* Estadísticas removidas para interfaz más limpia */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Images;
