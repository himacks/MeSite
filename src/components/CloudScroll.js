import React from 'react'
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import IntroSlide from './IntroSlide';
import '../styling/CloudScroll.css';

import cloud1 from "../imgs/background/cloud1.png";
import cloud2 from "../imgs/background/cloud2.png";
import cloud3 from "../imgs/background/cloud3.png";
import sun from "../imgs/background/sun.png";

export default function CloudScroll() {
  return (
    <div className="cloudScrollCont">
        <ParallaxProvider>
            <ParallaxBanner
                className="skyCloudsBanner"
                layers={[
                {
                    image: sun,
                    translateX: [17, -30],
                    translateY: [-34, -15],
                    speed: 1,
                    scale: [0.3, 0.3, 'easeOutBack'],
                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                    style: { "background-repeat": "no-repeat", "background-size": "unset"  }
                },
                {
                    image: cloud1,
                    scale: [0.4, 0.4, 'easeOutBack'],
                    opacity: [0.75, 0.75],
                    translateX: [-10, -60],
                    translateY: [-10, -25],
                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                    style: { "background-repeat": "no-repeat", "background-size": "unset"}
                },

                {
                    image: cloud2,
                    translateX: [30, 60],
                    opacity: [0.65, 0.65],
                    translateY: [-20, -25],
                    scale: [0.4, 0.4, 'easeOutBack'],
                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                    style: { "background-repeat": "no-repeat", "background-size": "unset"  }
                },
                
                {
                    image: cloud3,
                    translateX: [-30, -50],
                    opacity: [0.6, 0.6],
                    translateY: [-30, -35],
                    scale: [0.4, 0.4, 'easeOutBack'],
                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                    style: { "background-repeat": "no-repeat", "background-size": "unset"  }
                },
                {
                    children: <IntroSlide />,
                }
                ]}
                />
            </ParallaxProvider>
        </div>
  )
}
