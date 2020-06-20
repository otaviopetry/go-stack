import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {

    const [projects, setProjects] = useState(['Voz Animal', 'North Drone', 'otavio.site']);

    function handleAddProject() {
        // projects.push(`Novo projeto ${Date.now()}`);

        setProjects([...projects, 'Primeiro emprego']);
    }

    return (
        <>
            <Header title="Projects" />

            <img src={backgroundImage} />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;