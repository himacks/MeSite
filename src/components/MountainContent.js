import React, { createContext } from 'react'
import CodeTimeline from "./CodeTimeline"
import SkillSet from "./SkillSet"
import '../styling/MountainContent.css';


export default function MountainContent() {


    return (
        <div className="mountainTextCont">
            <div className="meInfoCont mountainFlexDiv">
                <div className="aboutTextCont meInfoBlock">
                    <div className="aboutTitleCont">
                        <t1 className="headingText aboutTitleText">
                            The Polar Plunge 
                        </t1>
                    </div>   
                    <div>
                        <div className="upperTextCont">
                            <t1 className="bodyText">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </t1>
                        </div>
                        <div className="lowerTextCont">
                            <t1 className="bodyText">
                                lets limit the amount of text we have to read so its more visual, change this to like a bunch of bar graphs with what you feel like your skills are eg. communication, quick learning, envisioning and creating
                            </t1>
                        </div>
                    </div>
                </div>
                <div className="skillsCont meInfoBlock">
                    <div className="skillTitleCont">
                        <t1 className="headingText skillTitleText">
                            Visualizing Me
                            <hr></hr>
                        </t1>
                    </div>
                    <SkillSet />
                </div>
            </div>
            <div className="codeTimeLineDiv mountainFlexDiv">
                <CodeTimeline />
            </div>
        </div>
    )
}
