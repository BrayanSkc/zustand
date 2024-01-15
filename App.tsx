import React from 'react';
import { View } from 'react-native';
import { DashboardScreen } from './src/modules';
import { colors } from './src/modules/theme/Theme';


const App = () => {
  return (
    <View style={{backgroundColor: colors.backgroundColor, flex: 1}}> 
    <DashboardScreen/>
    </View>
  );
};


export default App;
