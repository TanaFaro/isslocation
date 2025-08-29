import axios from 'axios';
import { useState, useEffect } from 'react';
import Images from './Images';
import sateliteImage from './images/satelite.jpg';
import './App.css';

//App actualizada para vercel - 2024-12-19 15:30//

const App = () => {
  const [issPosition, setIssPosition] = useState(null);
  const [location, setLocation] = useState('Buscando ubicación...');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [locationDescription, setLocationDescription] = useState('');
  const [showIssImage, setShowIssImage] = useState(false);

  // Función para obtener la posición actual de la ISS
  const getIssPosition = async () => {
    try {
      const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
      const { latitude, longitude, timestamp } = response.data;
      
      setIssPosition({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) });
      setLastUpdate(new Date(timestamp * 1000));
      
      // Obtener la ubicación geográfica
      await getLocationName(latitude, longitude);
      
      return { latitude, longitude };
    } catch (error) {
      console.error('Error obteniendo posición de la ISS:', error);
      setLocation('Error al obtener posición');
    }
  };

  // Función para obtener el nombre de la ubicación
  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&lang=es&apiKey=${process.env.REACT_APP_POSITION_KEY}`
      );
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        const locationFeatures = data.features[0];
        const { properties: { country, city, formatted, name, state, continent } } = locationFeatures;
        const locationName = city || country || formatted || name || 'Océano';
        setLocation(locationName);
        
        // Crear descripción del lugar en español
        let description = '';
        if (city && country) {
          description = `${city}, ${country}`;
        } else if (country) {
          description = country;
        } else if (continent) {
          description = `Región de ${continent}`;
        } else {
          description = 'Región oceánica del planeta Tierra';
        }
        
        // Agregar información adicional si está disponible
        if (state && state !== country) {
          description += `, ${state}`;
        }
        
        setLocationDescription(description);
      } else {
        setLocation('Océano');
        setLocationDescription('Región oceánica del planeta Tierra');
      }
    } catch (error) {
      console.error('Error obteniendo nombre de ubicación:', error);
      setLocation('Ubicación desconocida');
      setLocationDescription('Ubicación no identificada en el planeta');
    }
  };

  // Función para obtener imágenes del lugar
  const getLocationImages = async () => {
    if (!location || location === 'Buscando ubicación...' || location === 'Error al obtener posición') {
      alert('Primero debe obtener la ubicación de la ISS');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${location}&per_page=12&image_type=photo`
      );
      setImages(response.data.hits);
    } catch (error) {
      console.error('Error obteniendo imágenes:', error);
      alert('Error al obtener imágenes del lugar');
    } finally {
      setLoading(false);
    }
  };

  // Actualizar posición de la ISS cada 10 segundos
  useEffect(() => {
    getIssPosition();
    
    const interval = setInterval(() => {
      getIssPosition();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Función para formatear coordenadas
  const formatCoordinates = (coord) => {
    return coord.toFixed(4);
  };

  // Función para obtener dirección de las coordenadas
  const getDirection = (coord, type) => {
    if (type === 'lat') {
      return coord >= 0 ? 'N' : 'S';
    } else {
      return coord >= 0 ? 'E' : 'O';
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🚀 ISS Location App- vercel test</h1>
        <p>Ubicación en tiempo real de la Estación Espacial Internacional</p>
      </header>

      <div className="iss-info-container">
        <div className="iss-position-card">
          <h2>📍 Posición Actual de la ISS</h2>
          
          {issPosition ? (
            <div className="coordinates">
              <div className="coordinate-item">
                <span className="coordinate-label">Latitud:</span>
                <span className="coordinate-value">
                  {formatCoordinates(issPosition.latitude)}° {getDirection(issPosition.latitude, 'lat')}
                </span>
              </div>
              <div className="coordinate-item">
                <span className="coordinate-label">Longitud:</span>
                <span className="coordinate-value">
                  {formatCoordinates(issPosition.longitude)}° {getDirection(issPosition.longitude, 'lon')}
                </span>
              </div>
            </div>
          ) : (
            <p>Cargando posición...</p>
          )}

          <div className="location-info">
            <h3>🌍 Ubicación:</h3>
            <p className="location-name">{location}</p>
          </div>

          <button
            onClick={() => setShowIssImage(!showIssImage)}
            className="show-iss-btn"
          >
            {showIssImage ? '🛰️ Ocultar ISS' : '🛰️ Ver ISS'}
          </button>

          {showIssImage && (
            <div className="iss-image-container">
              <img 
                src={sateliteImage} 
                alt="Estación Espacial Internacional" 
                className="iss-image"
                onError={(e) => {
                  console.error('Error cargando imagen:', e);
                  e.target.style.display = 'none';
                }}
              />
              
              <div className="iss-info-text">
                <h4>🛰️ Estación Espacial Internacional (ISS)</h4>
                <p>
                  La ISS es un laboratorio orbital que orbita la Tierra a <strong>400 km</strong> de altura, 
                  viajando a <strong>28,000 km/h</strong>. Es el objeto más grande construido por humanos en el espacio, 
                  con el tamaño de un campo de fútbol americano.
                </p>
                
                <div className="iss-facts">
                  <h5>🌟 Funciones Principales:</h5>
                  <ul>
                    <li>🔬 Investigación científica en microgravedad</li>
                    <li>👨‍🚀 Estudios sobre el cuerpo humano en el espacio</li>
                    <li>🚀 Desarrollo de tecnologías espaciales</li>
                    <li>🌍 Cooperación internacional entre 15 países</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {lastUpdate && (
            <div className="last-update">
              <small>Última actualización: {lastUpdate.toLocaleTimeString('es-ES')}</small>
            </div>
          )}

          <button
            onClick={getLocationImages}
            disabled={loading || !issPosition}
            className="get-images-btn"
          >
            {loading ? '🔄 Obteniendo imágenes...' : '📸 Ver imágenes del lugar'}
          </button>
        </div>
      </div>

      {images.length > 0 && (
        <div className="images-section">
          <h2>🖼️ Imágenes de {location}</h2>
          <div className="images-container">
            {images.map(image => (
              <Images image={image} key={image.id} />
            ))}
          </div>
          <div className="location-description">
            <h3>📍 Información del Lugar</h3>
            <p>{locationDescription}</p>
            <div className="location-details">
              <span>🌍 Coordenadas: {issPosition ? `${formatCoordinates(issPosition.latitude)}° ${getDirection(issPosition.latitude, 'lat')}, ${formatCoordinates(issPosition.longitude)}° ${getDirection(issPosition.longitude, 'lon')}` : 'Cargando...'}</span>
              <span>🕐 Capturado: {lastUpdate ? lastUpdate.toLocaleString('es-ES') : 'Reciente'}</span>
            </div>
          </div>
        </div>
      )}

      {images.length === 0 && !loading && issPosition && (
        <div className="no-images">
          <p>Presiona el botón para ver imágenes de este lugar</p>
        </div>
      )}

      <div className="signature">
        <span>Created by Tana</span>
      </div>
    </div>
  );
};

export default App;