const LatestCard = (props) => {
  return (
    <>
    <div className="latestContainerflex" style={{ display : "flex" }}>
    {props.value.map( (item, index)=> {
        return (
            <div className="cardContainer" key={index} style={{ margin : "1rem" }} >
            <div className="imgDiv">
    
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