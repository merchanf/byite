import { FC, useEffect, useState } from 'react';
import {
  GooglePlacesAutocomplete,
  CircularProgress,
} from '@components/atoms/index';
import { env } from '@constants/index';
import { IRestaurantDetails, getRestaurantDetails } from '@services/index';
import type {
  IGeoLocation,
  IGooglePlacesAutocomplete,
} from '@interfaces/index';
import styles from './PlacesAutoComplete.module.scss';

interface IPlacesAutoComplete {
  setGeoLocation: (geoLocation: IGeoLocation) => void;
  country: string;
  googleMapsInstance: google.maps.Map;
}

const { GOOGLE_API_KEY } = env;

const PlacesAutoComplete: FC<IPlacesAutoComplete> = ({
  country,
  googleMapsInstance,
  setGeoLocation,
}) => {
  const [zone, setZone] = useState<IGooglePlacesAutocomplete>();
  const [loading, setLoading] = useState(false);

  const callback = ({
    location: { latitude, longitude },
  }: IRestaurantDetails) => {
    setGeoLocation({
      lat: Number(latitude),
      lng: Number(longitude),
    });
  };

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      setLoading(true);
      if (zone?.value?.place_id) {
        await getRestaurantDetails(
          zone.value.place_id,
          googleMapsInstance,
          callback
        );
        setLoading(false);
      }
    };
    if (zone) fetchRestaurantDetails();
  }, [zone]);

  return (
    <div className={styles.PlacesAutoComplete}>
      <div className={styles.PlacesAutoComplete__GooglePlacesAutocomplete}>
        <GooglePlacesAutocomplete
          apiKey={GOOGLE_API_KEY}
          onChange={setZone}
          country={country}
        />
      </div>
      {loading && <CircularProgress />}
    </div>
  );
};

export default PlacesAutoComplete;
