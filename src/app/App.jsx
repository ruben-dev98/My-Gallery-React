import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Link, NavLink } from 'react-router-dom';
import { HomePage} from '../pages/HomePage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { MainPage } from '../pages/MainPage';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainPage/>}>
        <Route index element={<HomePage />} />
        <Route path='/search' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
    </Route>
));




function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;