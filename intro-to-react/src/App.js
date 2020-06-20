import React, { useState } from 'react';

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

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;