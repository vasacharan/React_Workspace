import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Forms from './Components/Forms';
import Calculator from './Components/Calculator';


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
        </Routes>
        </BrowserRouter>
        
        </div>
    )
}

export default Router;