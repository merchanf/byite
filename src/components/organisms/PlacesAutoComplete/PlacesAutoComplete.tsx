import { FC, useEffect, useState } from 'react';
import {
  GooglePlacesAutocomplete,
  CircularProgress,
} from '@components/atoms/index';
import { env } from '@constants/index';
import { getRestaurantDetails } from '@services/index';
import type {
  IGeoLocation,
  IGooglePlacesAutocomplete,
} from '@interfaces/index';
import styles from './PlacesAutoComplete.module.scss';

interface IPlacesAutoComplete {
  setGeoLocation: (geoLocation: IGeoLocation) => void;
  country: string;
}

const { GOOGLE_API_KEY } = env;

const PlacesAutoComplete: FC<IPlacesAutoComplete> = ({
  setGeoLocation,
  country,
}) => {
  const [zone, setZone] = useState<IGooglePlacesAutocomplete>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      setLoading(true);
      if (zone?.value?.place_id) {
        const {
          // needed for a bug in the google places interface
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          location: { latitude: lat, longitude: lng },
        } = await getRestaurantDetails(zone.value.place_id);
        setGeoLocation({ lat, lng });
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
