import React, {useState} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import styled from "styled-components";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const Playlist = ({item, handleClickedOnPlaylist, setPlaylists}) => {

    const [inputValue, setInputValue] = useState(`${item.name}`);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <span onClick={() => handleClickedOnPlaylist(item.id)}>
            {isEditing
                ? <input value={inputValue} onClick={(e) => e.stopPropagation()}
                         onChange={e => setInputValue(e.target.value)}
                />
                : `${item.name}`
            }

            <ButtonWrapper onClick={(e) => e.stopPropagation()}>

                {!isEditing
                    ? <EditIcon onClick={() => setIsEditing(prevState => !prevState)}/>
                    : <DoneOutlineIcon onClick={() => setIsEditing(prevState => !prevState)}/>
                }

                <DeleteForeverIcon onClick={() => {
                    setPlaylists(prevState => {
                        const newPlaylists = prevState.filter(i => i.id !== item.id)
                        localStorage.setItem("playlists", JSON.stringify(newPlaylists));
                        return newPlaylists;
                    })
                }}/>
               </ButtonWrapper>
            </span>
    )
};

export default Playlist;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  gap: 15px
`;