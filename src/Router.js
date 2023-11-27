import React from 'react';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Forms from './Components/Forms';
import Calculator from './Components/Calculator';
import TableDataApi from './Components/TableDataApi';
import Expuseref from './Components/Expuseref';
import TodoList from './Components/TodoList';
import { Weather } from './Components/Weather';
import { DataSort } from './Components/DataSort';
import { Pagination1 } from './Components/Pagination1';
// import FoodItems from './Components/FoodItems';
import Shop from './Components/Shop';
const LazyFooditem = React.lazy(()=>import('./Components/FoodItems'))


function Router(){
    return(
        <div>
        <BrowserRouter>
        <Header />
        
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Services' element={<Services />} />
            <Route exact path='/Blog' element={<Blog />} />
            <Route exact path='/Forms' element={<Forms />} />
            <Route exact path='/Calculator' element={<Calculator />} />
            <Route exact path='/TableDataApi' element={<TableDataApi />} />
            <Route exact path='/Expuseref' element={<Expuseref />} />
            <Route exact path='/TodoList' element={<TodoList />} />
            <Route exact path='/Weather' element={<Weather />} />
            <Route exact path='/DataSort' element={<DataSort />} />
            <Route exact path='/Pagination1' element={<Pagination1 />} />
            <Route exact path='/FoodItems' element={<React.Suspense fallback='Loading...'><LazyFooditem /></React.Suspense>} />
            <Route exact path='/Shop' element={<Shop />} />
        </Routes>
        </BrowserRouter>
        
        </div>
    )
}

export default Router;