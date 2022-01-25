import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Right from "./Right";
import Left from "./Left";
import Modal from "./Modal";

const Main = () => {
    const [playlists, setPlaylists] = useState([]);
    const [searchedSong, setSearchSong] = useState([]);
    const [selectedSong, setSelectedSong] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        try {
            const savedPlaylist = localStorage.getItem("playlists");
            if (savedPlaylist) setPlaylists(JSON.parse(savedPlaylist));
        } catch (e) {
            console.log(e);
        }

    }, [])

    return (
        <MainWrapper>
            {isOpenModal
                ? <Modal
                    handleCloseModal={() => setIsOpenModal(false)}
                    playlists={playlists}
                    selectedSong={selectedSong}
                    setPlaylists={setPlaylists}
                />
                : null}
            <Container>
                <Left
                    playlists={playlists}
                    setPlaylists={setPlaylists}
                />
                <Right
                    searchedSong={searchedSong}
                    selectedSong={selectedSong}
                    setSelectedSong={setSelectedSong}
                    setPlaylists={setPlaylists}
                    playlists={playlists}
                    setIsOpenModal={setIsOpenModal}
                    setSearchSong={setSearchSong}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                />
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

  @media screen and (max-width: 1000px) {

  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;


