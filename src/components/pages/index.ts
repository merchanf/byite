import { withSession } from '@components/HOCs/index';
import SelectLocationView from './SelectLocation/SelectLocation';
import Launcher from './Launcher/Launcher';
import SwipeView from './Swipe/Swipe';

const SelectLocation = withSession(SelectLocationView);
const Swipe = withSession(SwipeView);

export { SelectLocation, Launcher, Swipe };
