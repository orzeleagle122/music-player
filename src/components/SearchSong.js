import React, {useState} from 'react';
import styled from 'styled-components';
import SongItem from "./SongItem";
import {useDispatch, useSelector} from "react-redux";
import {getSearchSong, moreSongActions, searchSongActions} from "../redux/slices/playlistSlice";
import {DelayInput} from 'react-delay-input';

const SearchSong = () => {

    const [inputValue, setInputValue] = useState('');
    const songList = useSelector(getSearchSong)

    const dispatch = useDispatch();


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
                {songList.map(item => <SongItem key={item.id} song={item}/>)}
                {songList.length ?
                    <button onClick={(inputValue) => dispatch(moreSongActions(inputValue))}>More</button> : null}
            </Content>
        </SongWrapper>
    );
};

export default SearchSong;

const SongWrapper = styled.div`
  width: 60%;
  max-height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-x: auto;
`;

const Content = styled.div`
  padding: 20px 30px;


  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    margin: 10px 0 10px 0;
    box-sizing: border-box;

  }
`;