import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  songs,
  setCurrentSong,
  isPlaying,
  setSongs,
  currentSong,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              audioRef={audioRef}
              songs={songs}
              setCurrentSong={setCurrentSong}
              song={song}
              key={song.id}
              isPlaying={isPlaying}
              setSongs={setSongs}
              currentSong={currentSong}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
