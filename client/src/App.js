//import {useNavigate, Route, Routes,useLocation} from 'react-router-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from '../src/views/home/home.component';
import Detail from './views/detail/detail.component';
import Landing from './views/landing/landing.component';
import Form from './views/form/form.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/home' component={Home }></Route>
        <Route path='/home/:id' component={Detail}></Route>
        <Route path='/form' component={Form}></Route>
      </BrowserRouter>


    </div>
  );
}

export default App;
