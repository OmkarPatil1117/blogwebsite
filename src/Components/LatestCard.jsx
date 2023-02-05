
import { useNavigate } from "react-router-dom"
import BlogPage from "./BlogPage"

const LatestCard = (props) => {
  const Navigate = useNavigate()

  const getBlog = (data) => {
    Navigate("/blogPage", { state : { img : data } })
  }
  return (
    <>
    <div className="latestContainerflex">
    {props.value.map( (item, index)=> {
        return (
            <div className="cardContainer" key={index} onClick={ ()=> getBlog(item.imgUrl) } >
            <div className="imgDiv" style={{ backgroundImage :  ` url(${item.imgUrl})`  }}>
    
            </div>
            <strong>{item.heading}</strong> <br />
            <span>{item.content}</span> 
        </div>
        )
    } )}
    </div>
    </>
  )
}

export default LatestCard