import React from "react";
import { playAudio } from "../util";
const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  currentSong,
}) => {
  const songSelectHandler = (e) => {
    setCurrentSong(song);
    audioRef.current.play();

    // const newSong = songs.map((song) => {
    //   if (song.id === currentSong.id) {
    //     return {
    //       ...song,
    //       active: true,
    //     };
    //   }
    //   setSongs(newSong);
    // });

    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover} />

      <div className="song-description">
        <h3>{song.name}</h3>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
