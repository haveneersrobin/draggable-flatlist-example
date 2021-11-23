import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';

import App from './App';
import {DraggableFlatList} from './DraggableFlatList';
import {FlatList} from './FlatList';

Navigation.registerComponent('App', () => gestureHandlerRootHOC(App));
Navigation.registerComponent('DraggableFlatList', () =>
  gestureHandlerRootHOC(DraggableFlatList),
);
Navigation.registerComponent('FlatList', () => gestureHandlerRootHOC(FlatList));

Navigation.setDefaultOptions({
  topBar: {
    visible: 'true',
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
    },
  });
});
