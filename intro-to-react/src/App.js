import React, { useState, useEffect } from 'react';

import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {

    // initialize projects state with an empty array
    const [projects, setProjects] = useState([]);

    useEffect(() =>{
        api.get('projects').then(response => {
            setProjects(response.data);            
        })
    }, []);


    // add project button
    async function handleAddProject() { 
        
        // make the post request and store its response 
        const response = await api.post('projects', {
            title: "Balada No. 1 em Sol menor, Op. 23",
            author: "Frédéric Chopin",
            nationality: "Polish/French"
        });

        // get the data object from the response
        const project = response.data;

        // change the state
        setProjects([...projects, project]);
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