import React from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const PlaylistItems = ({title, idWhenDuplicate, setPlaylists, currentIdPlaylist}) => {

    return (
        <PlaylistItemWrapper>
            <span>{title} <DeleteForeverIcon onClick={() => {
                setPlaylists((prevState) => {
                    const newState = prevState.map(item => {
                        if (item.id === currentIdPlaylist) {
                            const filteredSongsInPlaylist = item.songs.filter(item => item.idWhenDuplicate !== idWhenDuplicate)
                            return {
                                ...item,
                                songs: [
                                    ...filteredSongsInPlaylist
                                ]
                            };
                        }
                        return item
                    })

                    localStorage.setItem("playlists", JSON.stringify(newState));
                    return newState;
                })
            }}/></span>
        </PlaylistItemWrapper>
    );
};

export default PlaylistItems;

const PlaylistItemWrapper = styled.div`
  width: 100%;

  span {
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`;