import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {RootNavigator} from './src/navigation';

AppRegistry.registerComponent(appName, () => RootNavigator);
