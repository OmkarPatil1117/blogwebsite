import React from 'react'
import { useContext } from 'react'
import { BollyWoodArr, Fitness, Food, Hollywood, LatestTechnology, MainLatestArr } from '../App'
import Banner from './Banner'
import Entertainment from './Entertainment'
import Latest from './Latest'


function Home() {
  const LatestArr = useContext(MainLatestArr)
  const tech = useContext(LatestTechnology)
  const bollyWood = useContext(BollyWoodArr)
  const hollyWood = useContext(Hollywood)
  const fitness = useContext(Fitness)
  const foodArr = useContext(Food)
  return (
    <>
    <Banner></Banner>
    <Latest value={{ latestArr : LatestArr, latest : "Latest"}} ></Latest>
    <Latest value={{ latestArr : tech, latest : "Lates Technology"}} ></Latest>
    <Entertainment value={ {bollyWood : bollyWood, latest : "Bollywood Movies"}  } ></Entertainment>
    <Entertainment value={ {bollyWood : hollyWood, latest : "Hollywood Movies"}  } ></Entertainment>
    <Latest value={{ latestArr : fitness, latest : "Latest Fitness"}}  ></Latest>
    <Latest value={{ latestArr : foodArr, latest : "Latest Food"}}  ></Latest>
    </>
  )
}

export default Home