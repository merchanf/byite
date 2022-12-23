// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useState, useEffect, useCallback } from 'react';
import PhotoGallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';

interface IGalleryProps {
  pictures: string[];
}

interface ICustomPicture {
  srcSet?: string[] | undefined;
  caption?: string[] | undefined;
  src: string;
  width: number;
  height: number;
}

const Gallery: FC<IGalleryProps> = ({ pictures }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [customPictures, setCustomPictures] = useState<ICustomPicture[]>([]);
  const [views, setViews] = useState<ViewType[]>([]);

  useEffect(() => {
    if (pictures.length > 0) {
      const newPictures = pictures.slice(0, 6).map((picture) => ({
        src: picture,
        width: 1,
        height: 1,
      }));
      const newViews = newPictures.map(({ src }) => ({
        source: src,
      }));
      setCustomPictures(newPictures);
      setViews(newViews);
    }
  }, [pictures]);

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    (customPictures && customPictures.length > 0 && (
      <>
        <PhotoGallery
          photos={customPictures}
          direction="column"
          columns={3}
          onClick={openLightbox}
        />
        <ModalGateway>
          {viewerIsOpen && (
            <Modal onClose={closeLightbox}>
              <Carousel currentIndex={currentImage} views={views} />
            </Modal>
          )}
        </ModalGateway>
      </>
    )) || <h1>No pictures</h1>
  );
};

export default Gallery;
