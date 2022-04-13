import React, { componentDidMount } from 'react'
import BarData from './minicomps/BarData'
import '../styling/SkillSet.css';



export default function SkillSet() {


  return (
    <div className="statsDiv">
        <BarData label="Problem Decomposition" width={75} />
        <BarData label="Communication" width={62} />
        <BarData label="Quick Learning" width={94} />
        <BarData label="Creativity" width={82} />
        <BarData label="Pattern Recognition" width={88} />
    </div>
  )
}

