import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlogPage from './BlogPage'

const EntertainmentMap = (props) => {
  const Navigate = useNavigate();
  const getBlog = (data) => {
    Navigate("/blogPage", { state : { img : data } })
  }
  return (
    <>
    {props.arr.map( (item, index)=> {
                return (
                    <div className="cardContainer" key={index}  onClick={ ()=> {
                      getBlog(item.imgUrl)
                    } } >

                    <div className="imgDiv" style={{ backgroundImage : `url("${ item.imgUrl }") `, width: "25rem", marginRight : "2rem" }}>
            
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