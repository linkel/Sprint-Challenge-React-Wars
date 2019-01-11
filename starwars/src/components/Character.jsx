import React from 'react';

const Character = (props) => {
    return (
        <li>{props.name}, who has {props.hair_color === 'none' || props.hair_color === 'n/a' ? 'no' : props.hair_color} hair and {props.skin_color} skin, is about {props.height} tall.</li>
    )
}

export default Character;