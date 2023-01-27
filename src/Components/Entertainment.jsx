import React, { useContext } from 'react'
import EntertainmentMap from './EntertainmentMap'

const Entertainment = (props) => {
  return (
    <>
     <div className="latestContainer">
    <h1 style={{ borderBottom : "0.2rem solid black", width : "10rem" }} > {props.value.latest} </h1>

    <div className="entContainer" style={{ display : "flex" }}>

        <div className='filmSection'>
            <EntertainmentMap arr={props.value.bollyWood}></EntertainmentMap>
        </div>

        <div className="adSection" style={{ height : '40rem', width : "20rem", border : "10px solid black", display : "flex", alignItems : "center", justifyContent : "center"}}>
            advertisment
        </div>

    </div>
    </div>
    </>
  )
}

export default Entertainment