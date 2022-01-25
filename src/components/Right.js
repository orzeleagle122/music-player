import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SongItem from './SongItem';
import AddIcon from '@mui/icons-material/Add';
import { getSearchedSongs } from '../api/getSearchedSongs';
import Loader from './Loader';

const Right = ({
    searchedSong,
    setSelectedSong,
    selectedSong,
    setIsOpenModal,
    setSearchSong,
    setIsLoading,
    isLoading,
    setErrorMessage,
    errorMessage,
}) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        let delayTypingSearch;
        if (inputValue.length > 0) {
            setIsLoading(true);
            setErrorMessage('');
            delayTypingSearch = setTimeout(() => {
                getSearchedSongs(inputValue)
                    .then((response) => {
                        if (response.data.hasOwnProperty('error')) {
                            setErrorMessage(response.data.error.message);
                            setSearchSong([]);
                        } else {
                            setSearchSong(response.data.data);
                        }
                    })
                    .catch((err) => console.log(err))
                    .finally(() => setIsLoading(false));
            }, 1000);
        }
        return () => clearTimeout(delayTypingSearch);
    }, [inputValue, setErrorMessage, setIsLoading, setSearchSong]);

    return (
        <SongWrapper>
            <Content>
                <h2>Search songs</h2>
                <input
                    placeholder={`search...`}
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />

                {errorMessage.length > 0 ? <>{errorMessage}</> : null}
                <form onSubmit={() => null}>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {searchedSong?.map((item) => (
                                <SongItem
                                    key={item.id}
                                    song={item}
                                    setSelectedSong={setSelectedSong}
                                />
                            ))}
                        </>
                    )}
                </form>
            </Content>
            {selectedSong.length > 0 ? (
                <AddButton
                    onClick={() => {
                        setIsOpenModal(true);
                    }}
                >
                    <AddIcon />
                </AddButton>
            ) : null}
        </SongWrapper>
    );
};

export default Right;

const SongWrapper = styled.div`
    width: 60%;
    height: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;

    @media screen and (max-width: 1000px) {
        width: 50%;
    }

    @media screen and (max-width: 600px) {
        height: 300px;
        width: 90%;
        margin-bottom: 40px;
    }
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
    background-color: #ff7626;
    bottom: 35px;
    right: 45px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    svg {
        background-color: inherit;
        color: ${({ theme }) => theme.text};
    }
`;
