import React, { useEffect, useState, useRef } from "react";
import {ArrowLeft, ArrowRight} from 'react-feather';

import '../styling/CodeTimeline.css';

import { timelineData } from './helpers/timelineData'


export default function CodeTimeline() {

    const [currentTimeline, changeTimeline] = useState(0);

    return (
        <div className="timelineCont">
            <div className="timelineTitleCont">
                <t1 className="headingText titleText">
                    {timelineData[currentTimeline].title}                
                </t1>
            </div> 
            <div className="timelineDetailsCont">
                <div className="dateCont">
                <t1 className="dateText">
                    {timelineData[currentTimeline].date}
                    {/* Have a slider and when the next timeline comes up the date increases one month by one day by one year until we reach the next date*/}
                </t1>
                </div>
                <div className="infoCont">
                    <div className="subTitleCont outcomeCont">
                        <t1 className="infoTitle outcomeTitle">
                            Outcome
                        </t1>
                        <t2 className="infoText outcomeText">
                            {timelineData[currentTimeline].outcome}
                        </t2>
                    </div>
                    <div className="subTitleCont learnedCont">
                        <t1 className="infoTitle learnedTitle">
                            Revelations
                        </t1>
                        <t2 className="infoText learnedText">
                            {timelineData[currentTimeline].revelations}
                        </t2>
                    </div>
                    <div className="subTitleCont utilitiesCont">
                        <t1 className="infoTitle utilitiesTitle">
                            Code Covered
                        </t1>
                        <t2 className="infoText learnedText">
                            {timelineData[currentTimeline].coverage}
                        </t2>
                    </div>
                </div>
            </div>
            <div className="timeLineBtnsCont">
                <ArrowLeft className="svgIcon" onClick={ () => { changeTimeline(currentTimeline <= 0 ? timelineData.length - 1 : currentTimeline - 1) }}/>
                <ArrowRight className="svgIcon" onClick={ () => { changeTimeline(currentTimeline >= timelineData.length - 1 ? 0 : currentTimeline + 1) }}/>
            </div>

        </div>
  )
}
