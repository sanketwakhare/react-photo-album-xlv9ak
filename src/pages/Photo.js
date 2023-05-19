import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPhotosDetailsById } from '../services/Apis';
import classes from './Photo.module.css';

const initialPhoto = {
  albumId: null,
  id: null,
  title: null,
  url: null,
  thumbnailUrl: null,
};

const Photo = () => {
  const params = useParams();
  const [photoDetails, setPhotoDetails] = useState(initialPhoto);

  useEffect(() => {
    const response = getPhotosDetailsById(params.photoId);
    response.then((resp) => {
      resp.json().then((data) => {
        setPhotoDetails(data);
      });
    });
  }, []);

  return (
    <div className={classes['photo-details']}>
      <div>
        <label>Id: </label>
        <span>{photoDetails.id}</span>
      </div>
      <div>
        <label>Title: </label>
        <span>{photoDetails.title}</span>
      </div>
      <img src={photoDetails.url}></img>
    </div>
  );
};

export default Photo;
