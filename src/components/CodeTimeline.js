import React from 'react'

import '../styling/CodeTimeline.css';


export default function CodeTimeline() {
  return (
    <div className="timelineCont">
        <div className="timelineTitleCont">
            <t1 className="headingText titleText">
                Automating Amazon Orders
            </t1>
        </div> 
        <div className="timelineDetailsCont">
            <div className="dateCont">
            <t1 className="dateText">
                05/05/2012
                {/* Have a slider and when the next timeline comes up the date increases one month by one day by one year until we reach the next date*/}
            </t1>
            </div>
            <div className="infoCont">
                <div className="subTitleCont outcomeCont">
                    <t1 className="infoTitle outcomeTitle">
                        Outcome
                    </t1>
                    <t2 className="infoText outcomeText">
                        Basic summary of what the outcome of doing this project entailed. Eg amazon order allowed me to automate my orders so I no longer have to type anything.
                    </t2>
                </div>
                <div className="subTitleCont learnedCont">
                    <t1 className="infoTitle learnedTitle">
                        Revelations
                    </t1>
                    <t2 className="infoText learnedText">
                        Basic summary of what I learned from this. How this changed my view on coding on what I can accomplish and do with writing code in real world applications.
                    </t2>
                </div>
                <div className="subTitleCont utilitiesCont">
                    <t1 className="infoTitle utilitiesTitle">
                        Code Covered
                    </t1>
                    <t2 className="infoText learnedText">
                        Basicn List of what services and languages/libraries you used during these projects, like used python, used selenium, blah blah blah
                    </t2>
                </div>
            </div>
        </div>

    </div>
  )
}
