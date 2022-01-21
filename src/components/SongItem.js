import React from 'react';
import styled from 'styled-components';

const SongItem = ({song}) => {
    return (
        <SongItemWrapper>
            <img src={song.album.cover_medium} alt={`album`}/>
            <SongInfo>
                <span>{song.title}</span>
                <span>{song.artist.name}</span>
            </SongInfo>
        </SongItemWrapper>
    );
};

export default SongItem;

const SongItemWrapper=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid black;
  margin: 5px 0;
  gap: 10px;
  padding: 10px 0 10px 10px;
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }  
`

const SongInfo=styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
`;