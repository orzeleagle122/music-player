import React from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {useDispatch} from "react-redux";
import {deleteSongFromPlaylistAction} from "../redux/slices/playlistSlice";

const PlaylistItems = ({setClickedPlaylist, name, songs, clickedPlaylist}) => {

    const dispatch = useDispatch();

    return (
        <PlaylistItemWrapper>
            {songs.map(item => (
                <span key={item.id}>{item.title} <DeleteForeverIcon onClick={() => {
                    dispatch(deleteSongFromPlaylistAction(item.id, clickedPlaylist.id))
                }}/></span>
            ))}
        </PlaylistItemWrapper>
    );
};

export default PlaylistItems;

const PlaylistItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 5px 0;
  cursor: pointer;
  height: 500px;
  overflow-x: auto;

  span {
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`;