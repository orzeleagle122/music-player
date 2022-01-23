import React, {useState} from 'react';
import styled from 'styled-components';

const SongItem = ({song, setSelectedSong}) => {
    const [checked, setChecked] = useState(false);

    return (
        <SongItemWrapper>
            <input type="checkbox" name={`${song.id}-${song.title}`} id={`${song.id}-${song.title}`}
                   value={`${song.id}-${song.title}`}
                   checked={checked}
                   onChange={e => {
                       setChecked(prevState => !prevState);
                       setSelectedSong(prevState => {
                           if (!checked) return [...prevState, song];
                           if (checked) {
                               const newState = prevState.filter(item => item.id !== song.id);
                               return [...newState];
                           }
                       })
                   }}/>
            <label htmlFor={`${song.id}-${song.title}`}>
                <img src={song.album.cover_medium} alt={`album`}/>
                <SongInfo>
                    <span>{song.title}</span>
                    <span>{song.artist.name}</span>
                </SongInfo>
            </label>

        </SongItemWrapper>
    );
};

export default SongItem;

const SongItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid black;
  margin: 5px 0;
  gap: 10px;
  padding: 10px 0 10px 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  input[type="checkbox"], input[type="checkbox"]:checked {
    width: 20px;
  }
`

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
`;