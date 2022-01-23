import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SongItem from "./SongItem";
import {useDispatch, useSelector} from "react-redux";
import {
    addSongToPlaylistAction,
    getSearchSong,
    moreSongActions,
    searchSongActions
} from "../redux/slices/playlistSlice";
import {DelayInput} from 'react-delay-input';
import AddIcon from '@mui/icons-material/Add';

const SearchSong = () => {

    const [inputValue, setInputValue] = useState('');
    const songList = useSelector(getSearchSong);
    const dispatch = useDispatch();
    const [selectedSong, setSelectedSong] = useState([]);


    return (
        <SongWrapper>
            <Content>
                <h2>Search songs</h2>
                <DelayInput element={`input`} placeholder={`search...`} value={inputValue} onChange={(e) => {
                    setInputValue(e.target.value);
                    // console.log(e.target.value);
                    setTimeout(() => dispatch(searchSongActions(e.target.value)), 2000);
                }}
                            minLength={2} delayTimeout={500}

                />
                <form onSubmit={() => null}>
                    {songList?.map(item => <SongItem key={item.id} song={item} setSelectedSong={setSelectedSong}/>)}

                </form>
                {songList?.length ?
                    <button onClick={() => dispatch(moreSongActions())}>More</button> : null}
            </Content>
            {selectedSong.length > 0 ? <AddButton onClick={() => {
                dispatch(addSongToPlaylistAction(selectedSong, 1));
            }}><AddIcon/></AddButton> : null}
        </SongWrapper>
    );
};

export default SearchSong;

const SongWrapper = styled.div`
  width: 60%;
  max-height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
`;

const Content = styled.div`
  padding: 20px 30px;
  height: 100%;
  overflow-x: auto;

  form {
    position: relative !important;
    overflow-x: auto;
  }


  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    margin: 10px 0 10px 0;
    box-sizing: border-box;

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
`;