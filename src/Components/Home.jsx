import React from 'react'
import { useContext } from 'react'
import { BollyWoodArr, Hollywood, MainLatestArr } from '../App'
import Banner from './Banner'
import Entertainment from './Entertainment'
import Latest from './Latest'


function Home() {
  const LatestArr = useContext(MainLatestArr)
  const bollyWood = useContext(BollyWoodArr)
  const hollyWood = useContext(Hollywood)
  return (
    <>
    <Banner></Banner>
    <Latest value={{ latestArr : LatestArr, latest : "Latest"}} ></Latest>
    <Latest value={{ latestArr : LatestArr, latest : "Lates Technology"}} ></Latest>
    <Entertainment value={ {bollyWood : bollyWood, latest : "Bollywood Movies"}  } ></Entertainment>
    <Entertainment value={ {bollyWood : hollyWood, latest : "Hollywood Movies"}  } ></Entertainment>
    </>
  )
}

export default Home