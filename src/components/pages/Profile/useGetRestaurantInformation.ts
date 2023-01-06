import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { IRestaurantDetails, getRestaurantDetails } from '@services/index';
import { gMapsInstanceAtom } from '@recoil/index';

const useGetRestaurantInformation = (placeId: string) => {
  const [loading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState<IRestaurantDetails>();
  const gMapsInstance = useRecoilValue(gMapsInstanceAtom) as google.maps.Map;

  const callback = (restaurantDetails: IRestaurantDetails) => {
    setRestaurant(restaurantDetails);
  };

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      await getRestaurantDetails(placeId, gMapsInstance, callback);
      setLoading(false);
    };
    if (placeId && gMapsInstance) fetchRestaurantDetails();
  }, [placeId, gMapsInstance]);

  return { loading, restaurant };
};

export default useGetRestaurantInformation;
