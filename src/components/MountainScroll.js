import React from 'react'
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import '../styling/MountainContent.css';
import MountainContent from './MountainContent.js'


import bg1 from "../imgs/background/bg1.png";
import bg2 from "../imgs/background/bg2.png";
import bg3 from "../imgs/background/bg3.png";
import bg4 from "../imgs/background/bg4.png";
import bg5 from "../imgs/background/bg5.png";
import bg6 from "../imgs/background/bg6.png";
import bg7 from "../imgs/background/bg7.png";


export default function MountainScroll() {
  return (
    <div className="mountainRidgeCont">
        <ParallaxProvider>
        <ParallaxBanner
            className="mountainBanner"
            layers={[
            {
                image: bg1,
                translateY: [0, 20],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
            },
            {
                image: bg2,
                translateY: [5, 35],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
            },
            {
                image: bg3,
                translateY: [10, 45],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
            },
            {
                image: bg4,
                translateY: [15, 55],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
            },
            {
                image: bg5,
                translateY: [20, 65],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
            },
            {
                image: bg6,
                translateY: [25, 75],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
            },
            {
                image: bg7,
                translateY: [15, 30],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
            },
            {
                children: <MountainContent />,
            }
            ]}
            />
        </ParallaxProvider>
    </div>
  )
}
