import React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Playlist = () => {
    return (
        <span key={item.id}
              onClick={() => handleClickedOnPlaylist(item.id)}
        >
                                        {index + 1}.
                                        <input value={item.name} onClick={(e) => e.stopPropagation()}/>
                                        <ButtonWrapper onClick={(e) => e.stopPropagation()}>
                                                <EditIcon/>
                                                <DeleteForeverIcon onClick={() => {
                                                    setPlaylists(prevState => {
                                                        const newPlaylists = prevState.filter(i => i.id !== item.id)
                                                        localStorage.setItem("playlists", JSON.stringify(newPlaylists));
                                                        return newPlaylists;
                                                    })
                                                }}/>
                                            </ButtonWrapper>
                                    </span>
    )
};

export default Playlist;