import React from 'react';
import styled from 'styled-components';


const SongItem = () => {
    return (
        <SongItemWrapper>
            <img src={`https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg`} alt={`album`}/>
            <SongInfo>
                <span>8 Mila</span>
                <span>Eminem</span>
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