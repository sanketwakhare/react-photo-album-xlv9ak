const getAlbums = () => {
  return fetch('https://jsonplaceholder.typicode.com/albums');
};

const getPhotosByAlbumId = (albumId) => {
  return fetch(
    'https://jsonplaceholder.typicode.com/albums/' + albumId + '/photos'
  );
};

const getPhotosDetailsById = (photoId) => {
  return fetch('https://jsonplaceholder.typicode.com/photos/' + photoId);
};

export { getAlbums, getPhotosByAlbumId, getPhotosDetailsById };
