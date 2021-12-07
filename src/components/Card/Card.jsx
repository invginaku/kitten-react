import React from 'react';

import './Card.css';

import Like from '../Like/Like'

const Card = ({
                  file
              }) => {

    const description = file.data.title;

    if (file.data.preview) {
        if( file.data.preview.enabled) {
            console.log(file.data);
            let previewImage = file.data.preview.images[0].resolutions[file.data.preview.images[0].resolutions.length - 1].url;
            previewImage = previewImage.replace(/&amp;/g,"&");
            return (
                <div className="card">
                    <img src={previewImage} className="card__photo" alt={description}/>
                    <Like />
                </div>
            );
        }
    }
    return (
        <>
        </>
    );

}

export default Card;
