// Imported libraries
// this library knows how q componene tshould behave, and how to take a bunch of componenets and make them work together 
import React from 'react';
// this library know how to take output from a component and place it on the screen, and it provides defaut core components like text, images, etc.
//However, the technique used below is a simpler way to use features from the React Native library, without having to import all of them 
// import reactNative from 'react-native';
// technique used here is called import destructing
import { AppRegistry, ScrollView} from 'react-native';
// import header component from src/components folder
import Mainpage from './src/components/Mainpage';
import Repos from './src/components/Repos';
import CardSection from './src/components/CardSection';


// Create a FUNCTIONAL component, used for only static data, very simple
// A componenent is javascript function that returns some amout of JSX, react native will take component and render it to the screen device
const reactApp = () => {
  return(
    <ScrollView>
        {/* Rendering the following components in the root component, known as component nesting*/}
        <Mainpage />
        <Repos />
        <CardSection />
     </ScrollView>   
  );
};

// Render (register) component to the device
// Application name is reactapp
// Only the root app will have the AppRegistry library
AppRegistry.registerComponent('reactapp', () => reactApp);



