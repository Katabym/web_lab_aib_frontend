import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/about.css'
import { Link } from 'react-router-dom'


const About = () => {
    const { id } = useParams();
    const [character, setChar] = useState({})

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((resp) => {
            const charact = resp.data;
            setChar(charact);
    });
    }, []);

    return (
        <div className="content">
            <h1>Full character information: {character.name}</h1>
            <div className='image'>
                <img src={character.image}/>
                <ul className='discription'>
                    <li>Name: {character.name}</li>
                    <li>Status: {character.status}</li>
                    <li>Species: {character.species}</li>
                    <li>Type: {character.type}</li>
                    <li>Gender: {character.gender}</li>
                </ul>
            </div>
            <Link to='/'>
                <button className='backToMenu'>Назад</button>
            </Link>
        </div>
    )
}

export default About;
