import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

export default function App() {

    const [projects, setProjects] = useState([]);

    useEffect( () => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        })
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                {projects.map(project => (
                    <View key={project.id} style={styles.project}>
                        <Text style={styles.title}>{project.title}</Text>
                        <Text style={styles.author}>{project.author}</Text>
                    </View>
                ))}
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        padding: 16,
        justifyContent: 'center'
    },
    project: {
        marginBottom: 16
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    author: {
        fontSize: 24
    }
})