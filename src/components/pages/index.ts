import { withSession } from '@components/HOCs/index';
import Launcher from './Launcher/Launcher';
import ProfilePage from './Profile/Profile';
import SelectLocationView from './SelectLocation/SelectLocation';
import SettingsPage from './Settings/Settings';
import SwipeView from './Swipe/Swipe';
import WhoamiPage from './Whoami/Whoami';

const SelectLocation = withSession(SelectLocationView);
const Swipe = withSession(SwipeView);
const Settings = withSession(SettingsPage);
const Whoami = withSession(WhoamiPage);
const Profile = withSession(ProfilePage);

export { SelectLocation, Launcher, Swipe, Settings, Whoami, Profile };
