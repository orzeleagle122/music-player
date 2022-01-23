import React, {useState} from 'react';
import styled from 'styled-components';
import PlaylistItems from "./PlaylistItems";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {v4 as uuidv4} from 'uuid';

const Playlist = ({playlists, setPlaylists}) => {
    const [showPlaylistSongs, setShowPlaylistSongs] = useState(true);
    const [currentIdPlaylist, setCurrentIdPlaylist] = useState();

    const handleClickedOnPlaylist = (id) => {
        setShowPlaylistSongs(false);
        setCurrentIdPlaylist(id);
    }

    const handleAddNewPlaylist = () => {
        setPlaylists(prevState => {
            return [
                ...prevState,
                {
                    id: uuidv4(),
                    name: `New playlist ${prevState.length + 1}`,
                    songs: []
                }
            ]
        })
    }

    return (
        <PlaylistWrapper>
            <Content>
                <h2>Your playlists </h2>

                {
                    showPlaylistSongs
                        ?
                        <>
                            <Wrapper>
                                {playlists.map((item, index) => {
                                    return (
                                        <span key={item.id}
                                              onClick={() => handleClickedOnPlaylist(item.id)}
                                              style={{cursor: "pointer"}}
                                        >
                                        {index + 1}. {item.name}<br/>
                                    </span>
                                    )
                                })}
                            </Wrapper>
                            <AddButton><AddIcon onClick={handleAddNewPlaylist}/></AddButton>
                        </>
                        :
                        <Wrapper>
                            {playlists.find(item => item.id === currentIdPlaylist).songs.map((item, index) => {
                                return (
                                    <PlaylistItems
                                        key={item.id}
                                        // songOrder={index}
                                        title={item.title}
                                        id={item.id}
                                        setPlaylists={setPlaylists}
                                        currentIdPlaylist={currentIdPlaylist}
                                    />
                                )
                            })}
                            <AddButton><ArrowBackIcon onClick={() => setShowPlaylistSongs(true)}/></AddButton>
                        </Wrapper>
                }

            </Content>
        </PlaylistWrapper>
    );
};

export default Playlist;

const PlaylistWrapper = styled.div`
  width: 30%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Content = styled.div`
  padding: 20px 0 20px 30px;
  position: relative;
  height: 541px;

  h2 {
    margin-bottom: 20px;
  }

  svg {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  overflow: auto;
  height: 100%;
`;

const AddButton = styled.button`
  position: absolute;
  color: white;
  background-color: #FF7626;
  bottom: -25px;
  right: 45px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;



