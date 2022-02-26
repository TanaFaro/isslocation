import React from 'react';


const Images = ({ image }) => {
    
    console.log(image);
    return (
        <div className="container">
            <img src={image.webformatURL} key={image.id} alt={""}/>
            <h2>{image.tags}</h2> 
        </div>
    )
}

export default Images;
