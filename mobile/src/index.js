import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

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

            <SafeAreaView style={styles.container}>
                <FlatList
                    
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <View style={styles.project}>
                            <Text style={styles.title}>{project.title}</Text>
                            <Text style={styles.author}>{project.author}</Text>
                        </View>                    
                    )}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
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
    }
})