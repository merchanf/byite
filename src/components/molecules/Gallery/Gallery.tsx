import { FC, useState } from 'react';
import cx from 'classnames';
import { uid } from 'uid';
import styles from './Gallery.module.scss';
import './Gallery.css';

interface IGalleryProps {
  name: string;
  images: string[];
}

const Gallery: FC<IGalleryProps> = ({ images, name }) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleOnPreviousClick = () => {
    setActiveImage(activeImage - 1);
  };

  const handleOnNextClick = () => {
    setActiveImage(activeImage + 1);
  };

  return (
    <div className={styles.Gallery}>
      <div className={styles.Gallery__Frame}>
        {images.map((image, index) => (
          // Google maps does not provide alt text
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            className={cx(styles.Gallery__Img, {
              [styles.Gallery__ShowPicture]: activeImage === index,
            })}
            src={image}
            key={uid()}
          />
        ))}
      </div>
      <button
        className={cx(
          styles.Gallery__Button,
          styles.Gallery__Button__Previous,
          {
            [styles.Gallery__Button__Disabled]: activeImage === 0,
          }
        )}
        aria-label="Previous picture"
        disabled={activeImage === 0}
        type="button"
        onClick={handleOnPreviousClick}
      />
      <button
        className={cx(styles.Gallery__Button, styles.Gallery__Button__Next, {
          [styles.Gallery__Button__Disabled]: activeImage === images.length - 1,
        })}
        aria-label="Next picture"
        disabled={activeImage === images.length - 1}
        type="button"
        onClick={handleOnNextClick}
      />
      <p className={styles.Gallery__Name}>
        <b>{name}</b>
      </p>
    </div>
  );
};

export default Gallery;
