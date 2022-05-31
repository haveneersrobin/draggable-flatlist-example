import React, {useCallback, useState} from 'react';
import {
  ListRenderItem,
  View,
  Text,
  RefreshControl,
  FlatList as RNFlatList,
} from 'react-native';
import {FlatList as RNGHFlatList} from 'react-native-gesture-handler';
import {
  flatListOptions,
  flatListStyles,
  FlatListTestData,
  flatListTestData,
} from './FlatListConfig';

export const FlatList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const renderItem: ListRenderItem<FlatListTestData> = useCallback(
    ({item}) => <Text style={flatListStyles.item}>{item.label}</Text>,
    [],
  );

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 3000);
  };

  return (
    <View style={[flatListStyles.container, flatListStyles.flex]}>
      <RNFlatList
        data={flatListTestData}
        keyExtractor={item => item.label}
        onRefresh={onRefresh}
        scrollEnabled={scrollEnabled}
        onScrollBeginDrag={() => {
          setTimeout(() => setScrollEnabled(false), 1000);
          // setTimeout(() => setScrollEnabled(true), 3000);
        }}
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
