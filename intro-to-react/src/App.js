import React, { useState, useEffect } from 'react';

import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {

    // initialize projects state with an empty array
    const [projects, setProjects] = useState([]);

    // make api get request everytime projects change
    useEffect(() =>{
        api.get('projects').then(response => {
            setProjects(response.data);            
        })
    }, [projects]);


    // add project button
    function handleAddProject() {
        api.post('projects', {
            title: "Balada No. 1 em Sol menor, Op. 23",
            author: "Frédéric Chopin",
            nationality: "Polish/French"
        })
    }

    return (
        <>
            <Header title="Projects" />

            <ul>
                { projects.map( project => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.author}</p>
                        <p>{project.nationality}</p>
                    </li>
                )) }
                {/* {projects.map(project => <li key={project}>{project}</li>)} */}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;