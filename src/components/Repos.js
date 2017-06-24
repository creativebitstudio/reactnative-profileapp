 import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Repos extends Component {
    render() {
        return (
          <View style={styles.repos}>

            <View style={[styles.itemBorder, styles.itemSeparator]}>
                <Text style={styles.textRepo}>12K</Text>
                <Text style={styles.textRepo}>Followers</Text>
            </View>

            <View style={styles.itemBorder}>
                <Text style={styles.textRepo}>348</Text>
                <Text style={styles.textRepo}>Following</Text>
            </View>

              </View>  
        );
    }
}

const styles = StyleSheet.create ({
    repos: {
        backgroundColor: '#4527A0',
        height: 75,
        flexDirection: 'row' 
    },

    itemSeparator: {
        borderRightWidth: 2
    },

    itemBorder: {
        flex: 1,
        padding: 18,
        alignItems: 'center'
    },

    textRepo: {
        color: '#fff',
        fontSize: 14,
    }
})

export default Repos;