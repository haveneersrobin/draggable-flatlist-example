import {StyleSheet} from 'react-native';

export interface FlatListTestData {
  label: string;
}
export const flatListTestData: FlatListTestData[] = [
  {label: 'Hello'},
  {label: 'World'},
  {label: 'Test'},
  {label: '123'},
];

export const flatListStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    marginVertical: 20,
  },
});

export const flatListOptions = {
  topBar: {
    drawBehind: false,
    noBorder: false,
    animate: true,
    largeTitle: {
      visible: true,
      color: 'black',
    },
    title: {
      text: 'Large title',
    },
  },
};
