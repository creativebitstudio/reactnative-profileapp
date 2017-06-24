// importing libraries 
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

// This is a class based component, we use it to create a component
// This is a child component from the main root component (App)
// Class components - use dynamic sources of data, handles any data that might change (fetching data, user events, etc.). Knws when it gets renedered to the device (useful data fetching). Usually there is more code to right when compareed to a function component.
class Mainpage extends Component  {
    render() {
        return (
            <Image style={styles.mainImg} source ={require('./images/citypbdos.png')}>

                <View style={styles.codebitWrap}>
                    <Text style={styles.titleText}>Welcome to Codebits</Text>
                </View> 

                <View style={styles.imgBorder}>
                    <Image style={styles.profileImg} source ={require('./images/cbs7.png')} />
                </View>    

                    <Text style={styles.firstText}>Learn  -  Code  -  Create</Text>

                <View style={styles.infoWrap}>
                    <Image style={styles.icons} source ={require('./images/web.png')} />
                    <Text style={styles.secondText}>creativebitstudio.com</Text>
                </View>

                <View style={styles.infoWrap}>
                    <Image style={styles.icons} source ={require('./images/email2.png')} />
                    <Text style={styles.secondText}>info@creativebitstudio.com</Text>
                </View>

                <View style={styles.infoWrap}>
                    <Image style={styles.icons} source ={require('./images/phone.png')} />
                    <Text style={styles.secondText}>416 - 555 - 5555</Text>
                </View>

                <View style={styles.infoWrap}>
                    <Image style={styles.icons} source ={require('./images/insta2.png')} />
                    <Text style={styles.secondText}>@creativebitstudio</Text>
                </View>
            </Image>
    );
  }
} 

// Styling code here 
const styles = StyleSheet.create ({

    container:{
        backgroundColor: '#4527A0', 
        width: '100%',
        alignItems: 'center',
    },

    codebitWrap: {
        borderBottomWidth: 1, 
        borderBottomColor: '#4527A0', 
        width: '100%', 
        backgroundColor: 'transparent', 
        height: 60, 
        alignItems: 'center',
    },

    infoWrap: {
        flexDirection: 'row',
        marginTop: 3
    },

    icons: {
        height: 18, 
        width: 18, 
        marginRight: 10,
        marginTop: 4 
    },

    titleText: {
        color: '#fff',
        fontSize: 21,
        marginTop: 14
    },

    mainImg: {
        height: 400,
        alignItems: 'center',
        width: '100%',
    },

    cbitText: {
       color: '#fff',
       marginTop: 15,
       marginBottom: 25,
       fontSize: 13,
       width: '80%',
       textAlign: 'center'
    },

    imgBorder: {
        borderWidth: 1, 
        borderRadius: 70, 
        marginTop: 30, 
        padding: 12, 
        borderColor: '#311B92', 
        backgroundColor: '#311B92',
        alignContent: 'center'
    },

    profileImg: {
        height: 80,
        width: 80,
  },

  imgTitle: {
    height: 60, 
    width: 360,
    marginTop: 20
  },

  firstText: {
      color: '#fff',
      marginTop: 15,
      marginBottom: 20,
      fontSize: 11,
      
  },
  secondText: {
    color: '#ffffff',
      marginTop: 4,
      fontSize: 13,

  },

  button: {
      color: '#fff',
      marginTop: 60,
      fontSize: 25
  }
}); 

// Exporting component to other areas of the application
export default Mainpage;

