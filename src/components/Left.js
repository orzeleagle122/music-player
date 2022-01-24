import React, {useState} from 'react';
import styled from 'styled-components';
import PlaylistItems from "./PlaylistItems";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {v4 as uuidv4} from 'uuid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Playlist from "./Playlist";

const Left = ({playlists, setPlaylists}) => {
    const [showPlaylistSongs, setShowPlaylistSongs] = useState(true);
    const [currentIdPlaylist, setCurrentIdPlaylist] = useState();

    const handleClickedOnPlaylist = (id) => {
        setShowPlaylistSongs(false);
        setCurrentIdPlaylist(id);
    }

    const handleAddNewPlaylist = () => {
        setPlaylists(prevState => {
            const newPlaylists = [
                ...prevState,
                {
                    id: uuidv4(),
                    name: `New playlist ${prevState.length + 1}`,
                    songs: []
                }
            ];
            localStorage.setItem("playlists", JSON.stringify(newPlaylists));
            return newPlaylists
        });
    }

    const playlistName = playlists.find(item => item.id === currentIdPlaylist);

    return (
        <PlaylistWrapper>
            <Content>
                <h2>
                    {playlistName ? `${playlistName?.name}` : "Your playlist"}
                </h2>

                {
                    showPlaylistSongs
                        ?
                        <Wrapper>
                            {playlists.map((item, index) => <Playlist key={item.id} item={item}
                                                                      handleClickedOnPlaylist={handleClickedOnPlaylist}
                                                                      setPlaylists={setPlaylists}/>)}
                        </Wrapper>
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
                        </Wrapper>
                }
            </Content>
            {showPlaylistSongs
                ? <AddButton><AddIcon onClick={handleAddNewPlaylist}/></AddButton>
                : <AddButton onClick={() => {
                    setShowPlaylistSongs(true);
                    setCurrentIdPlaylist(null)
                }}><ArrowBackIcon/></AddButton>}
        </PlaylistWrapper>
    );
};

export default Left;

const PlaylistWrapper = styled.div`
  width: 30%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 600px;
  position: relative;

  @media screen and (max-width: 1000px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    height: 300px;
    width: 90%;
  }
`;

const Content = styled.div`
  padding: 20px 20px 20px 30px;
  position: relative;
  height: inherit;
  overflow: auto;

  h2 {
    margin-bottom: 20px;
  }

  svg {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`

  //height: 520px;

  span {
    cursor: pointer;
    border-bottom: 1px solid black;
    height: 40px;
    display: flex;
    align-items: center;
    width: 100%;
    transition: 0.25s;
    justify-content: space-between;

    :hover {
      background-color: ${({theme}) => theme.toggleBorder};
      font-weight: bold;
    }
  }
`;

const AddButton = styled.button`
  position: absolute;
  color: white;
  background-color: #FF7626;
  bottom: 35px;
  right: 45px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  svg {
    color: ${({theme}) => theme.text};
  }
`;





