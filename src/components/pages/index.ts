import { withSession } from '@components/HOCs/index';
import SelectLocationView from './SelectLocation/SelectLocation';
import Launcher from './Launcher/Launcher';
import SwipeView from './Swipe/Swipe';
import SettingsPage from './Settings/Settings';

const SelectLocation = withSession(SelectLocationView);
const Swipe = withSession(SwipeView);
const Settings = withSession(SettingsPage);

export { SelectLocation, Launcher, Swipe, Settings };
