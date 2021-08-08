// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack';
// import * as React from 'react';

// // Screen
// import Home from './screens/Home';
// import Details from './screens/Details';

// // Stack
// const Stack = createStackNavigator();

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="Home"
//                     component={Home}
//                 />
//                 <Stack.Screen name="Detail" component={Details} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default App;

// Counter app

import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import Counter from './components/Counter';

const App = () => {
    return (
        <View style={styles.container}>
            <Button title='Show Counter Component' />
            <Counter name="Sing handsome" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default App;