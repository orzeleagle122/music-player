import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';


const modalContainer = document.getElementById('modal-container')

const Modal = ({handleCloseModal, playlists, setPlaylists, selectedSong}) => {

    const modalNode = document.createElement('div');

    useEffect(() => {

        modalContainer.appendChild(modalNode);

        return () => {
            modalContainer.removeChild(modalNode);
        }
    }, [modalNode])

    return ReactDOM.createPortal(
        <OpacityBackground onClick={() => {
            handleCloseModal();
        }}>
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
                <h2>Choose playlist</h2>
                <PlaylistWrapper>
                    {playlists.map(item => {
                        return (
                            <span
                                key={item.id}
                                onClick={() => {
                                    setPlaylists((prevState) => {
                                        const newState = prevState.map(i => {
                                            if (i.id === item.id) {
                                                return {
                                                    ...i,
                                                    songs: [
                                                        ...i.songs,
                                                        ...selectedSong
                                                    ]
                                                };
                                            }
                                            return i
                                        })
                                        return newState;
                                    });
                                    handleCloseModal();
                                }}
                            >
                        {item.name}
                    </span>
                        )
                    })}
                </PlaylistWrapper>
                <button onClick={handleCloseModal}>close modal</button>
            </ModalWrapper>
        </OpacityBackground>,
        modalNode
    );
};

export default Modal;

const OpacityBackground = styled.div`
  background: black;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;


const ModalWrapper = styled.div`
  opacity: 1 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  overflow: auto;
`;

const PlaylistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: auto;
  gap: 10px;
`;