import React from 'react';
import styled from 'styled-components';
import PlaylistItems from "./PlaylistItems";
import AddIcon from '@material-ui/icons/Add';

const Playlist = () => {

    return (
        <PlaylistWrapper>
            <Content>
                <h2>Your playlists </h2><AddIcon/>
                {[1, 2, 3, 4, 5].map(item => <PlaylistItems key={item}/>)}
            </Content>
        </PlaylistWrapper>
    );
};

export default Playlist;

const PlaylistWrapper = styled.div`
  width: 30%;
  min-height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Content = styled.div`
  padding: 20px 30px;
`;
