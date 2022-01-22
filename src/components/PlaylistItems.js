import React from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const PlaylistItems = ({setClickedPlaylist, name, songs}) => {
    console.log(songs);
    return (
        <PlaylistItemWrapper>
            {/*<h3 onClick={() => setClickedPlaylist(songs)}>{name} <DeleteForeverIcon/></h3>*/}
        </PlaylistItemWrapper>
    );
};

export default PlaylistItems;

const PlaylistItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid black;
  margin: 5px 0;
  padding: 10px 0 10px 10px;
  cursor: pointer;
`;