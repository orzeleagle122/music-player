import React, {useState} from 'react';
import styled from 'styled-components';
import PlaylistItems from "./PlaylistItems";
import AddIcon from '@material-ui/icons/Add';
import {getAllPlaylist} from "../redux/slices/playlistSlice";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {useSelector} from "react-redux";

const Playlist = () => {

    const [clickedPlaylist, setClickedPlaylist] = useState([]);
    const playlist = useSelector(getAllPlaylist);

    return (
        <PlaylistWrapper>
            <Content>
                <h2>Your playlists </h2>{!clickedPlaylist.length ? <AddIcon/> :
                <KeyboardBackspaceIcon onClick={() => setClickedPlaylist([])}/>}
                {!clickedPlaylist.length ? <>{
                    playlist.map(item => <PlaylistItems key={item.name} name={item.name} songs={item.songs}
                                                        setClickedPlaylist={setClickedPlaylist}/>)
                }</> : <>{clickedPlaylist.map(item => <span>{item.title}<br/></span>)}</>}

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
  
  svg{
    cursor: pointer;
  }
`;
