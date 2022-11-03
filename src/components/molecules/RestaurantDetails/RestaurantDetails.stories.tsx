import RestaurantDetails from './RestaurantDetails';

export default {
  component: RestaurantDetails,
  title: 'molecules/RestaurantDetails',
};

const restaurant = {
  name: 'La choza de susana',
  pictures: Array.from(
    { length: 10 },
    () => `https://picsum.photos/1720/1080?random=${Math.random()}`
  ),
  phoneNumber: '123456789',
  address: 'Calle falsa 123',
  placeId: '123',
  location: {
    latitude: 123,
    longitude: 123,
  },
  rating: 4.5,
};

export const Default = () => <RestaurantDetails restaurant={restaurant} />;
