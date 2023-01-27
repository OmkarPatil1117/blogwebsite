import React from 'react'
import LatestCard from './LatestCard'

const Latest = (props) => {
  return (
    <>
    <div className="latestContainer">
    <h1 style={{ borderBottom : "0.2rem solid black", width : "10rem" }} >{ props.value.latest } </h1>
    <LatestCard value={props.value.latestArr} ></LatestCard>
    </div>
    </>
  )
}


export default Latest
