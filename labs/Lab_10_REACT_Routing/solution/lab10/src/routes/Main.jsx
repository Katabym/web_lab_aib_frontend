import React from 'react';
import CharacterList from '../components/CharacterList';
import '../styles/main.css'

const Main = () => {
    return (
        <>
            <h1 className='title'>Rick and Morty Characters</h1>
            <div className='App.css'>
                <CharacterList/>
            </div>
        </>
    )
}

export default Main;
