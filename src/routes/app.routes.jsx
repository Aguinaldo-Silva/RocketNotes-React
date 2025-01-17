import {Routes, Route} from 'react-router-dom';

import {New} from '../pages/New';
import {Home} from '../pages/Home';
import {Profile} from '../pages/Profile';
import {Details} from '../pages/details';


export function AppRoutes(){

        return(
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/New' element={<New/>}/> 
                <Route path='/Profile' element={<Profile/>}/> 
                <Route path='/Details/:id' element={<Details/>}/> 

            </Routes>
        )

}