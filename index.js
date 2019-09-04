/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppContainer from './navigation';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
