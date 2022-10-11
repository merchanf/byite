const getGeoLocation = async (): Promise<GeolocationPosition> =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        resolve(position);
      },
      (error: GeolocationPositionError) => {
        reject(error);
      },
      { enableHighAccuracy: true, maximumAge: 300000 }
    );
  });

export default getGeoLocation;
