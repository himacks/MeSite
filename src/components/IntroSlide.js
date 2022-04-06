import React, { useEffect, useState, useRef } from "react";
import {GitHub, Linkedin, Mail} from 'react-feather';

import '../styling/IntroSlide.css';
import profilePic from'../imgs/profilephoto.png';
import Particles from "react-tsparticles";


export default function IntroSlide() {

    const wordPool = ["Web Design.", "Learning Code.", "Web Scraping.", "Data Analytics.", "Task Automation.", "Task Automation."];
    const [currentWordIndex, setWordIndex] = useState(0);
    const [translateAmt, setTranslateAmt] = useState(0);
    const [transitionDelay, setDelay] = useState(0);
    const [aboveWordOpacity, setAboveOpacity] = useState(1);
    const [belowWordOpacity, setBelowOpacity] = useState(0);

    const stateRef = useRef();
    stateRef.translateAmt = translateAmt;
    stateRef.transitionDelay = transitionDelay;


    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(currentWordIndex => (currentWordIndex === (wordPool.length - 2) ? 0 : currentWordIndex + 1));
        }, 2000);
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setDelay(transitionDelay => (transitionDelay === 0 ? 0.25 : 0));
            setTranslateAmt(translateAmt => (translateAmt === 0 ? -35 : 0));

            if(stateRef.transitionDelay === 0.25)
            {
                setAboveOpacity(0);
                setBelowOpacity(1);
            }
            else
            {
                setAboveOpacity(1);
                setBelowOpacity(0);
            }

        }, 1000);
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])
 
    
    return (
    <div className="introSlide">
        <Particles
        params={{
          fpsLimit: 60,
          fullScreen: false,
          particles: {
            number: {
                limit: 50
            },
            color: {
              value: "#ffffff"
            },
            links: {
              enable: false,
              color: "#ffffff",
              distance: 75
            },
            move: {
              enable: true,
              gravity: {
                  accerlation: 0.1,
                  enable: true,
                  maxSpeed: 4
              }
            }
          }
        }}
        />
        <div className="introCont">
            <div className="profilePicCont">
                <div className="profilePicBorder">
                    <img src={profilePic} className="profilePicImg" />
                </div>
            </div>
            <div className="introTextCont">
                <t1 className="introText headingText">Hi, I'm Maxim Karpinsky.</t1>
            </div>
            <div className="slidingWordCont">
                <div className="slidingWordTextCont">
                    <div className="staticWordsCont">
                        <t2 className="staticText headingText">Here, you'll find my passion for </t2>
                    </div>
                    <div className="dynamicWordCont">
                        <t2 id="aboveWord" className="slidingWord headingText" style={{transform: `translate(0px, ${translateAmt}px)`, transition: `transform ${transitionDelay}s, opacity ${transitionDelay}s`, opacity: `${aboveWordOpacity}`}} >{wordPool[currentWordIndex === 0 ? wordPool.length-1 : currentWordIndex - 1]}</t2>
                        <t2 id="belowWord" className="slidingWord headingText" style={{transform: `translate(0px, ${translateAmt}px)`, transition: `transform ${transitionDelay}s, opacity ${transitionDelay}s`, opacity: `${belowWordOpacity}`}} >{wordPool[currentWordIndex === wordPool.length-1 ? 0 : currentWordIndex ]}</t2>
                    </div> 
                </div>
            </div>
            <div className="externalLinksCont">
                <GitHub className="svgIcon"/>
                <Linkedin className="svgIcon"/>
                <Mail className="svgIcon"/>
            </div>
        </div>
    </div>
    )
}
