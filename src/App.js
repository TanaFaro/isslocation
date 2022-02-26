import axios from 'axios';
import { useState } from 'react';
import Images from './Images';
import './App.css';


const App = () => {
const [location, setLocation] = useState('Ocean');
const [images, setImages] = useState([]);

const handleSearch = (e) => {
const URL_API1 =  `http://api.open-notify.org/iss-now.json`;
e.preventDefault ();
axios.get(URL_API1)
.then(resp => {
  const { latitude, longitude } = resp.data.iss_position;
  console.log(latitude, longitude)
const URL_API2 =  `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${process.env.REACT_APP_POSITION_KEY}`;
fetch (URL_API2)
.then ( response  => response.json())
.then(data => {
  const {features} = data;
  const locationFeatures = features && features.length > 0 && features[0];
  const {properties: {country, formatted, name }} = locationFeatures;
  const locationApi = country || formatted || name || 'Ocean';
  setLocation(locationApi);
  
  console.log ( data )
  const URL_API3 = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${locationApi}&per_page=12`;
  axios.get(URL_API3)
  .then(resp => {
    setImages(resp.data.hits);
    console.log(resp.data.hits);
  });
    
});
});
};


return (
<div className="App">
  <h1>ISS LOCATION PIXABAY</h1>
  <form onSubmit= {handleSearch}>
    <button
        type="submit"
        className="btn m-3 btn-block btn-inline-primary"
    > Where is the ISS?
  
    </button>
  </form>
  
  <div className="images-container">
    {
        images.map( image => (
            <Images image={image} key={image.id} />
          ))
      }
  </div>
  {images && images.length === 0 &&<p>No hay imagenes para mostrar</p>}

</div>
);
}

export default App;
