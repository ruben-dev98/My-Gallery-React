import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { MainPage } from './pages/MainPage';
import { store } from './app/store'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainPage />}>
    <Route index element={<HomePage />} />
    <Route path='/search' element={<HomePage />} />
    <Route path='/favorites' element={<FavoritesPage />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
