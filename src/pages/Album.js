import React, { useState, useEffect } from 'react';
import { getPhotosByAlbumId } from '../services/Apis';
import classes from './Album.module.css';

import { useParams, Link } from 'react-router-dom';

const initialPhotos = [];
const Album = () => {
  const params = useParams();
  const [photos, setPhotos] = useState(initialPhotos);

  useEffect(() => {
    const response = getPhotosByAlbumId(params.albumId);
    response.then((resp) => {
      resp.json().then((data) => {
        setPhotos(data);
      });
    });
  }, []);

  return (
    <div className={classes['photos-container']}>
      {photos.map((photo) => {
        return (
          <div className={classes.photo}>
            <Link to={`/photos/${photo.id}`} relative="path">
              <img src={photo.thumbnailUrl}></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Album;
