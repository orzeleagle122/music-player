import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PlaylistItems from "./PlaylistItems";
import {getAllPlaylist} from "../redux/slices/playlistSlice";
import {useSelector} from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// TODO: Playlista się nie aktualizuje po dodaniu piosenek
const Playlist = () => {
    const [clickedPlaylist, setClickedPlaylist] = useState({});
    const [showPlaylistSongs, setShowPlaylistSongs] = useState(true);

    const playlists = useSelector(getAllPlaylist);

    const handleClickedOnPlaylist = (id) => {
        setShowPlaylistSongs(false);
        const playlist = playlists.find(i => i.id === id);
        setClickedPlaylist(playlist);
    }

    return (
        <PlaylistWrapper>
            <Content>
                <h2>Your playlists </h2>
                {showPlaylistSongs ? <AddIcon/> :
                    <ArrowBackIcon onClick={() => setShowPlaylistSongs(true)}/>}

                {showPlaylistSongs ? <>{
                        <>{playlists.map(item => <span key={item.id}
                                                       onClick={() => handleClickedOnPlaylist(item.id)}>{item.name}<br/></span>)}</>

                    }</> :
                    <PlaylistItems key={clickedPlaylist.name} name={clickedPlaylist.name} songs={clickedPlaylist.songs}
                                   setClickedPlaylist={setClickedPlaylist}/>}

            </Content>
        </PlaylistWrapper>
    );
};

export default Playlist;

const PlaylistWrapper = styled.div`
  width: 30%;
  min-height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Content = styled.div`
  padding: 20px 30px;

  svg {
    cursor: pointer;
  }
`;



