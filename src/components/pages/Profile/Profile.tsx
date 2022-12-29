import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '@components/templates/index';
import { RestaurantDetails, Loader } from '@components/molecules/index';
import useGetRestaurantInformation from './useGetRestaurantInformation';

type State = {
  placeId: string;
};

const Profile: FC = () => {
  const { state } = useLocation();
  const { placeId } = state as State;
  const { loading, restaurant } = useGetRestaurantInformation(placeId);

  return (
    <Layout>
      {!loading && restaurant && (
        <RestaurantDetails restaurant={restaurant} showGallery />
      )}
      {loading && <Loader />}
    </Layout>
  );
};

export default Profile;
