import React from 'react';
import Character from "./Character.jsx"

const CharacterList = (props) => {
    return (
        <ul className="character-list">
            {props.list.map((char) =>
            <Character key={char.name} name={char.name} hair_color={char.hair_color} skin_color={char.skin_color} height={char.height}/>
            )}
        </ul>
    )
}

export default CharacterList;