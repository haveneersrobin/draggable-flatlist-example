import React from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = ({componentId}: NavigationComponentProps) => {
  const goToDraggableFlatList = () => {
    Navigation.push(componentId, {
      component: {
        name: 'DraggableFlatList',
      },
    });
  };

  const goToFlatList = () => {
    Navigation.push(componentId, {
      component: {
        name: 'FlatList',
      },
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.lighter}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{paddingVertical: 20}}>
          <Button
            title="Navigate to draggable flatlist"
            onPress={goToDraggableFlatList}></Button>
        </View>
        <View style={{paddingVertical: 20}}>
          <Button
            title="Navigate to React Native Gesture Handler flatlist"
            onPress={goToFlatList}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
