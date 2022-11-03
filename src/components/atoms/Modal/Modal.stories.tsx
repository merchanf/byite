import { useState } from 'react';
import Modal from './Modal';

export default {
  component: Modal,
  title: 'atoms/Modal',
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          nisl vitae nisl aliquet, nec aliquam nisl aliquet. Nulla facilisi.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla facilisi. Nulla facilisi. Nulla
          facilisi.
        </p>
      </Modal>
    </>
  );
};
