interface IGeoLocation {
  lat: number;
  lng: number;
}

interface ISession {
  userUid: string;
  sessionId: string;
}

export { IGeoLocation, ISession };
