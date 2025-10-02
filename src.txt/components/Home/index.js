import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoLL from '../../assets/images/LL.webp';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "Welcome to".split("");
    const jobArray = "Ligalytics!".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
      <>
        <div className = "container home-page">
            <video autoPlay loop muted className="background-video">
            <source src={require('../../assets/videos/video.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="text-zone">
                <h1>
                <img src={LogoLL} alt = "Ligalytics" />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} /> 
                </h1>
                <Link to="/teams" className="flat-button">GET STARTED</Link>
            </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Home