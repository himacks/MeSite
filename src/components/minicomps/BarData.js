import React from 'react'
import '../../styling/BarData.css';

export default function BarData(props) {

  return (
    <div className="dataBarCont">
        <t2 className="dataBarLabel">{props.label}</t2>
        <div className="dataBarRectCont">
            <div className="dataBarRect" style={{ width: `${props.width}%` }} />
            <div className="dataBarRectLeft" style={{ width: `${100 - props.width}%` }} />
        </div>
    </div>
  )
}
