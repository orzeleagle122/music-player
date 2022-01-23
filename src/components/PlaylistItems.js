import React from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const PlaylistItems = ({songOrder, title, id, setPlaylists, currentIdPlaylist}) => {

    return (
        <PlaylistItemWrapper>
            <span>{title} <DeleteForeverIcon onClick={() => {
                setPlaylists((prevState) => {
                    // return prevState.map(item => {
                    //     if (item.id === currentIdPlaylist) {
                    //         item.songs = item.songs.filter((song, index) => index !== songOrder)
                    //     }
                    //     return item;
                    // })
                    const newState = prevState.map(item => {
                        if (item.id === currentIdPlaylist) {
                            const filteredSongsInPlaylist = item.songs.filter(item => item.id !== id)
                            return {
                                ...item,
                                songs: [
                                    ...filteredSongsInPlaylist
                                ]
                            };
                        }
                        return item
                    })
                    return newState;
                })
            }}/></span>
        </PlaylistItemWrapper>
    );
};

export default PlaylistItems;

const PlaylistItemWrapper = styled.div`
  padding-right: 30px;

  span {
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`;