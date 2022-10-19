import { withSession } from '@components/HOCs/index';
import SettingsView from './Settings/Settings';
import Launcher from './Launcher/Launcher';
import SwipeView from './Swipe/Swipe';

const Settings = withSession(SettingsView);
const Swipe = withSession(SwipeView);

export { Settings, Launcher, Swipe };
