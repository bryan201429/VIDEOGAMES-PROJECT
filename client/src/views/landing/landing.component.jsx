import './landing.style.css'
import backGroundVideo from '../../assets/waves.mp4'
function Landing(){
    return(
        <div>
            <p>LANDING</p>
            <video id='backgroundVideo' autoPlay muted loop>
                <source src={backGroundVideo} type='video/mp4'/>
            </video>
            
        </div>

    )
}

export default Landing;