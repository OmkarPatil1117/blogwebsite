import { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


const MainLatestArr = createContext();
const LatestTechnology = createContext();
const BollyWoodArr = createContext()
const Hollywood = createContext()

function App() {
  const [LatestArr, setLatestArr ] = useState([{ heading : "Lorem ipsum dolor sit amet.", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in." },{ heading : "Lorem ipsum dolor sit amet.", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in." },{ heading : "Lorem ipsum dolor sit amet.", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in." }])

  const [latestTechnology, setlatestTechnology ] = useState([{ heading : "Lorem ipsum dolor sit amet.", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in." },{ heading : "Lorem ipsum dolor sit amet.", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in." },{ heading : "Lorem ipsum dolor sit amet.", content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in." }])

  const [bollywood, setbollywood ] = useState([
    {
      filmName : "Don1",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Rebel",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Baahubali",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Forest Gump",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Rowdy Rathod",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Seeta Raman",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    }
  ])

  const [hollyWood, sethollywood ] = useState([
    {
      filmName : "Avengers",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Attack on Titan",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Titanic",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Forest Gump",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Fast and Furies",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    },
    {
      filmName : "Iron Man",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in."
    }
  ])


  return (
  <>
  <Navbar></Navbar>
  <MainLatestArr.Provider value={LatestArr}>
    <LatestTechnology.Provider value={latestTechnology} >
      <BollyWoodArr.Provider value={bollywood}>
        <Hollywood.Provider value={hollyWood}>
        <Home></Home>
        </Hollywood.Provider>
    </BollyWoodArr.Provider>
    </LatestTechnology.Provider>
  </MainLatestArr.Provider>
  </>
  );
}

export default App;
export {MainLatestArr}
export {LatestTechnology}
export {BollyWoodArr}
export {Hollywood} 