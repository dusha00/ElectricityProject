/**
 * @format
 */

import {AppRegistry} from 'react-native';
import setup from './setup';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => setup());
