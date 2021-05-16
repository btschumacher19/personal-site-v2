import { useState, useEffect } from 'react';

import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };

  const StyledModal = styled(Modal)`
    z-index: 99;
  `;

// Modal.setAppElement('#yourAppElement')

function ModalComponent({modalIsOpen, setIsOpen, openModal, closeModal}){

    return (
      <span style={{zIndex: "99"}}>
        <StyledModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 >Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </StyledModal>
        </span>
    );
}

export { ModalComponent }