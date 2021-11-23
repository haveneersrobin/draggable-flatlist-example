import React, {useCallback, useState} from 'react';
import {View, Text, RefreshControl, TouchableOpacity} from 'react-native';
import {
  flatListOptions,
  flatListStyles,
  FlatListTestData,
  flatListTestData,
} from './FlatListConfig';
import RNDraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

export const DraggableFlatList = () => {
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = useCallback(
    ({item, drag, isActive}: RenderItemParams<FlatListTestData>) => (
      <ScaleDecorator>
        <View
          style={[
            flatListStyles.item,
            {backgroundColor: isActive ? 'lightblue' : undefined},
          ]}>
          <TouchableOpacity onLongPress={drag}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        </View>
      </ScaleDecorator>
    ),
    [],
  );

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 3000);
  };

  return (
    <View style={flatListStyles.root}>
      <RNDraggableFlatList
        data={flatListTestData}
        keyExtractor={item => item.label}
        onRefresh={onRefresh}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="black"
          />
        }
        refreshing={refreshing}
        renderItem={renderItem}>
        Home Screen
      </RNDraggableFlatList>
    </View>
  );
};

DraggableFlatList.options = {
  ...flatListOptions,
};
