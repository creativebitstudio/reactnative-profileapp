import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

class CardSection extends Component {
    render() {
        return (
          <ScrollView>
                <View style={styles.repoWrap}>
                    <Text style={styles.repoText}>React Native Auth App with Firebase</Text>
                </View>

                <View style={styles.repoWrap}>
                    <Text style={styles.repoText}>MEAN Stack Starter</Text>
                </View>

                <View style={styles.repoWrap}>
                    <Text style={styles.repoText}>Passportjs Express Authentication</Text>
                </View>

                <View style={styles.repoWrap}>
                    <Text style={styles.repoText}>REST API with Express & MongoDB</Text>
                </View>

                <View style={styles.repoWrap}>
                    <Text style={styles.repoText}>Simple React App</Text>
                </View>

                <View style={styles.repoWrap}>
                    <Text style={styles.repoText}>Simple React App</Text>
                </View>
        </ScrollView>  
        );
    }
}

const styles = StyleSheet.create ({

    repoWrap: {
        backgroundColor: '#EEEEEE',
        height: 90,
        alignItems: 'center',
        borderBottomWidth: 1,
        width: '100%'
    },
    repoText: {
        color: '#000',
        marginTop: 35,
        color: '#000'
    }
}) 

export default CardSection;