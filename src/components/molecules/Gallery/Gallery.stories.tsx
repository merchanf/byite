import Gallery from './Gallery';

export default {
  component: Gallery,
  title: 'molecules/Gallery',
};

const images = Array.from(
  { length: 10 },
  () => `https://picsum.photos/1720/1080?random=${Math.random()}`
);

export const Default = () => (
  <Gallery images={images} name="La choza de susana" />
);
