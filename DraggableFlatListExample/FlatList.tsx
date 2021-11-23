import React, {useCallback, useState} from 'react';
import {ListRenderItem, View, Text, RefreshControl} from 'react-native';
import {FlatList as RNGHFlatList} from 'react-native-gesture-handler';
import {
  flatListOptions,
  flatListStyles,
  FlatListTestData,
  flatListTestData,
} from './FlatListConfig';

export const FlatList = () => {
  const [refreshing, setRefreshing] = useState(false);

  const renderItem: ListRenderItem<FlatListTestData> = useCallback(
    ({item}) => <Text style={flatListStyles.item}>{item.label}</Text>,
    [],
  );

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 3000);
  };

  return (
    <View style={flatListStyles.root}>
      <RNGHFlatList
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
        renderItem={renderItem}
      />
    </View>
  );
};

FlatList.options = {
  ...flatListOptions,
};
