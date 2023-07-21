import './landing.style.css';
import backGroundVideo from '../../assets/waves.mp4';
import {NavLink} from 'react-router-dom';
import image from '../../assets/control.png'

function Landing(){
    return(
        <div className='landPage'>
            <div className='imgContainer'>            </div>
            <div className='box'>
                <label id='welcome'>Welcome</label>
                <label id='description'>Videogames Cards S.P.A.</label>
                <NavLink to='/home' className='AccessContainer'><button id='Access'>Access</button></NavLink>
                
            </div>
            <video id='backgroundVideo' autoPlay muted loop><source src={backGroundVideo} type='video/mp4'/></video>
        </div>

    )
}

export default Landing;