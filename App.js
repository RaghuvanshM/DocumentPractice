import React from 'react';
import { Text, View, FlatList } from 'react-native';
// import DonatChart from './src/DontChart';
// import OnBoard from './src/onboard';
// import FlatlistAnimation from './src/FlatlistScrollview';
import Gallary from './src/gallary';
import StartWindow from './src/VIewResident/StartWindow';
import Home from './src/VIewResident/Home';
import Appearancce from './src/VIewResident/Appearance';
import AppearenceTitle from './src/VIewResident/ApprenceTitle';
const App = () => {
  const data = ['1', '2', '3', '4', '5', '6']
  return (
    <FlatList
    data={data}
    contentContainerStyle={{
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}

    renderItem={()=><AppearenceTitle />}
    keyExtractor={(_,i)=>String(i)}
    numColumns={2}
    />

  )
}
export default App;