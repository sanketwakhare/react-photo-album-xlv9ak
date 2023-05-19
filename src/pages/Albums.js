import { getAlbums } from '../services/Apis';
import React, { useEffect, useState } from 'react';
import classes from './Albums.module.css';
import { Link } from 'react-router-dom';

const initialAlbums = [];

const Albums = () => {
  const [albums, setAlbums] = useState(initialAlbums);

  useEffect(() => {
    const data = getAlbums();
    data.then((resp) => {
      resp.json().then((dt) => {
        setAlbums(dt);
      });
    });
  }, []);

  // return 'Home';

  return (
    <div className={classes['albums-container']}>
      {albums.map((album) => {
        return (
          <div key={'album' + album.id} className={classes.album}>
            <div id={`album-${album.id}`}>
              <Link to={`album/${album.id}/photos`}>{album.title}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Albums;
