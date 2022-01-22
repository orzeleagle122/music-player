import React, {useEffect} from 'react';
import styled from 'styled-components';
import SearchSong from "./SearchSong";
import Playlist from "./Playlist";
import {useSelector} from "react-redux";
import {getAllMusicInfo} from "../redux/slices/playlistSlice";

const Main = () => {


    return (
        <MainWrapper>
            <Container>
                <Playlist/>
                <SearchSong/>
            </Container>

        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`;


