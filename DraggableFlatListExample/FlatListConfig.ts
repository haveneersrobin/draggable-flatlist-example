import {StyleSheet} from 'react-native';

export interface FlatListTestData {
  label: string;
}
export const flatListTestData: FlatListTestData[] = [
  {label: 'Hello'},
  {label: 'World'},
  {label: 'Test'},
  {label: '123'},
  {label: '4'},
  {label: '5'},
  {label: '6'},
  {label: '7'},
  {label: '8'},
  {label: '9'},
  {label: '10'},
  {label: '11'},
  {label: '12'},
  {label: '13'},
  {label: '14'},
  {label: '15'},
];

export const flatListStyles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
  },
  flex: {
    flex: 1,
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
