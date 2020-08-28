import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {
    return (
    <div className="p-card-info">
        <a href={props.item.link} target="_blank" rel="noopener noreferrer">
            <p className="p-card-image-box">
                <img className="p-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            </p>
        </a>
        {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
    </div>
    );
}
export default Card;