import { withSession } from '@components/HOCs/index';
import SelectLocationView from './SelectLocation/SelectLocation';
import Launcher from './Launcher/Launcher';
import SwipeView from './Swipe/Swipe';
import SettingsPage from './Settings/Settings';
import WhoamiPage from './Whoami/Whoami';

const SelectLocation = withSession(SelectLocationView);
const Swipe = withSession(SwipeView);
const Settings = withSession(SettingsPage);
const Whoami = withSession(WhoamiPage);

export { SelectLocation, Launcher, Swipe, Settings, Whoami };
