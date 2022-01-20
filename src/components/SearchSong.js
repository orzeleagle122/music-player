import React from 'react';
import styled from 'styled-components';
import SongItem from "./SongItem";

const SearchSong = () => {

    return (
        <SongWrapper>
            <Content>
                <h2>Search songs</h2>
                <input placeholder={`search...`}/>
                {[1,2,3,4,5].map(item=><SongItem key={item}/>)}
            </Content>
        </SongWrapper>
    );
};

export default SearchSong;

const SongWrapper = styled.div`
  width: 60%;
  min-height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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