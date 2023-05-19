import React from 'react';
import './style.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Albums from './pages/Albums';
import Album from './pages/Album';
import Photo from './pages/Photo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Albums />,
      },
      {
        path: 'album/:albumId/photos',
        element: <Album />,
      },
      {
        path: 'photos/:photoId',
        element: <Photo />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
