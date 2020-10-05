import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';

const ModalWrapper = ({ buttonText, color, onClickWrapper, modalTitle, className }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color={color} onClick={toggle}>
        {buttonText}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className={''} toggle={toggle}>
          Delete Confirmation
        </ModalHeader>
        <ModalBody>
          {modalTitle}
          <br />
          <span className={'text-danger'}>This process cannot be undone.</span>
        </ModalBody>
        <ModalFooter className={'align-center'}>
          <Button color="success" onClick={toggle}>
            Cancel
          </Button>{' '}
          <Button
            color="danger"
            onClick={() => {
              onClickWrapper();
              toggle();
            }}>
            {buttonText}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalWrapper;

ModalWrapper.propTypes = {
  buttonText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClickWrapper: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  className: PropTypes.string
};
