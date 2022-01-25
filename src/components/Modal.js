import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { v4 as uuidv4 } from 'uuid';
import { useAlert } from 'react-alert';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleCloseModal, playlists, setPlaylists, selectedSong }) => {
    const modalNode = document.createElement('div');
    const alert = useAlert();

    useEffect(() => {
        modalContainer.appendChild(modalNode);

        return () => {
            modalContainer.removeChild(modalNode);
        };
    }, [modalNode]);

    return ReactDOM.createPortal(
        <OpacityBackground
            onClick={() => {
                handleCloseModal();
            }}
        >
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={handleCloseModal}>
                    <CloseIcon />
                </CloseButton>
                <h2>Choose playlist </h2>
                <PlaylistWrapper>
                    {playlists.length === 0 ? (
                        <h4>First create a playlist</h4>
                    ) : null}
                    {playlists.map((item) => {
                        return (
                            <span
                                key={item.id}
                                onClick={() => {
                                    setPlaylists((prevState) => {
                                        const newState = prevState.map((i) => {
                                            if (i.id === item.id) {
                                                return {
                                                    ...i,
                                                    songs: [
                                                        ...i.songs,
                                                        ...selectedSong.map(
                                                            (v) => ({
                                                                ...v,
                                                                idWhenDuplicate:
                                                                    uuidv4(),
                                                            })
                                                        ),
                                                    ],
                                                };
                                            }
                                            return i;
                                        });
                                        localStorage.setItem(
                                            'playlists',
                                            JSON.stringify(newState)
                                        );
                                        return newState;
                                    });
                                    handleCloseModal();
                                    alert.success('Sound added to playlist!');
                                }}
                            >
                                {item.name}
                            </span>
                        );
                    })}
                </PlaylistWrapper>
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
    background-color: ${({ theme }) => theme.body};

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 100%;
    }
`;

const PlaylistWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: auto;

    span {
        cursor: pointer;
        width: 100%;
        border-bottom: 1px solid black;
        height: 40px;
        display: flex;
        align-items: center;
        transition: 0.25s;

        :hover {
            background-color: ${({ theme }) => theme.toggleBorder};
            font-weight: bold;
        }
    }
`;

const CloseButton = styled.button`
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: white;
    background-color: #ff7626;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 20px;
    right: 20px;

    @media only screen and (max-width: 600px) {
        width: 35px;
        height: 35px;
    }

    svg {
        background-color: inherit;
        color: ${({ theme }) => theme.text};
    }
`;
