import React from 'react';

import './Card.css';

function Card ({file}) {

    const [isLike, setIsLike] = React.useState( JSON.parse(localStorage.getItem('saveCard')) || false);
    const description = file.data.title;
    const id = file.data.id;

    let className = isLike ? 'like like_active' : 'like';

    if (file.data.preview) {
        if( file.data.preview.enabled) {
            let previewImage = file.data.preview.images[0].resolutions[file.data.preview.images[0].resolutions.length - 1].url;
            previewImage = previewImage.replace(/&amp;/g,"&");
            console.log(previewImage)

            const card = {
                id,
                description,
                previewImage,
                isLike
            };

            function handleClick () {
                setIsLike(!isLike)
            }

            if (isLike === true) {
                localStorage.setItem('saveCard', JSON.stringify(card))
            } else if (isLike === false) {
                localStorage.removeItem('saveCard', JSON.stringify(card))
            }

            return (
                <div className="card">
                    <img src={previewImage} className="card__photo" alt={description}/>
                    <button className={className} onClick={handleClick} />
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
