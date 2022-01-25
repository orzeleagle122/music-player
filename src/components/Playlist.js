import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styled from 'styled-components';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import {useAlert} from 'react-alert';

const Playlist = ({item, handleClickedOnPlaylist, setPlaylists}) => {
    const [inputValue, setInputValue] = useState(`${item.name}`);
    const [isEditing, setIsEditing] = useState(false);
    const alert = useAlert();

    return (
        <span onClick={() => handleClickedOnPlaylist(item.id)}>
            {isEditing ? (
                <input
                    value={inputValue}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            ) : (
                `${item.name}`
            )}

            <ButtonWrapper onClick={(e) => e.stopPropagation()}>
                {!isEditing ? (
                    <EditIcon
                        onClick={() => setIsEditing((prevState) => !prevState)}
                    />
                ) : (
                    <>
                        {inputValue.length !== 0 ? (
                            <DoneOutlineIcon
                                onClick={() => {
                                    if (inputValue.length !== 0) {
                                        setPlaylists((prevState) => {
                                            const newState = prevState.map(
                                                (i) => {
                                                    if (i.id === item.id) {
                                                        i.name = inputValue;
                                                    }
                                                    return i;
                                                }
                                            );
                                            localStorage.setItem(
                                                'playlists',
                                                JSON.stringify(newState)
                                            );
                                            return newState;
                                        });
                                        setIsEditing((prevState) => !prevState);
                                        alert.success('Name is changed!');
                                        return;
                                    }
                                    setPlaylists((prevState) => prevState);
                                    alert.error('Invalid playlist name');
                                }}
                            />
                        ) : null}
                    </>
                )}

                <DeleteForeverIcon
                    onClick={() => {
                        setPlaylists((prevState) => {
                            const newPlaylists = prevState.filter(
                                (i) => i.id !== item.id
                            );
                            localStorage.setItem(
                                'playlists',
                                JSON.stringify(newPlaylists)
                            );
                            return newPlaylists;
                        });
                        alert.info('Deleted playlist!');
                    }}
                />
            </ButtonWrapper>
        </span>
    );
};

export default Playlist;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  gap: 15px;
`;
