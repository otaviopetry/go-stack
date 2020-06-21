import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {

    const [projects, setProjects] = useState([]);

    useEffect( () => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Valsa ${Date.now()}`,
            author: 'Mozart',
            nationality: 'Austrian'
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <StatusBar barStyle="light-content" />

            <SafeAreaView style={styles.container}>
                <FlatList
                    
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <View style={styles.project}>
                            <Text style={styles.title}>{project.title}</Text>
                            <Text style={styles.author}>{project.author}</Text>
                            <Text style={styles.nationality}>{project.nationality}</Text>
                        </View>                    
                    )}
                />

                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.8} 
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}>Adicionar obra</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    project: {
        marginBottom: 16,
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    author: {
        fontSize: 24
    },
    nationality: {
        fontSize: 20,
        fontStyle: 'italic'
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#1B2A23',
        padding: 16,
        marginBottom: 24,
    },
    buttonText: {
        textAlign: 'center',
        color: '#95C765',
        fontWeight: 'bold'
    }
})