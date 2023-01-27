import React from 'react'

const EntertainmentMap = (props) => {
  return (
    <>
    {props.arr.map( (item)=> {
                return (
                    <div className="cardContainer"  style={{ margin : "1rem", display : "flex", textAlign : "center" , width : "75%" }} >

                    <div className="imgDiv">
            
                    </div>
                    <div>
                    <strong style={{ display : "flex", justifyContent : "center"  , alignItems : "end"}} >{item.filmName}</strong> <br />
                    <span>{item.content}</span> 
                    </div>
                </div>
                )
    } )}
    </>
  )
}

export default EntertainmentMap