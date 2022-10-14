import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 8rem;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: #ffffffd0;
  width: 30rem;
  height: 13rem;
  @media (max-width: 1120px) {
    width: 30rem;
  }
  @media (max-width: 50rem) {
    width: 90%;
  }
  min-height: 13rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IModal {
  _handleModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ _handleModal, children, ...rest }: IModal) => {
  return (
    <Container>
      <Background
        onClick={() => {
          _handleModal();
        }}
      />
      <ModalBlock {...rest}>
        <Contents>{children}</Contents>
      </ModalBlock>
    </Container>
  );
};

export default Modal;
