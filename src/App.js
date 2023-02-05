import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogPage from './Components/BlogPage';
import Entertainment from './Components/Entertainment';
import Home from './Components/Home';
import Latest from './Components/Latest';
import Navbar from './Components/Navbar';


const MainLatestArr = createContext();
const LatestTechnology = createContext();
const BollyWoodArr = createContext()
const Hollywood = createContext()
const Fitness = createContext()
const Food = createContext()

function App() {
  const [LatestArr, setLatestArr ] = useState([
    {
      heading : "Adani Enterprises share price today is around 15 per cent lower from its FPO price",
      content : "Adani Enterprises FPO: Amid bloodbath on Dalal Street and Hindenburg Research report raising concern over debt positions of Adani group companies, the follow-on public offer (FPO) of Adani Enterprise…",
      imgUrl : "https://images.livemint.com/img/2023/01/28/600x338/Adani_Enterprises_share_price_today_1674886423298_1674886423518_1674886423518.jpg" 
    },
    { 
      heading : "The Suzuki Jimny Electric will make its way to the European market first, which prompts a possibility of the model making its way to the Indian market as a five-door electric off-roader.",
      content : "Details on Jimny electrics launch arent known just yet. But the companys presentation suggests that it will begin the brands electric onslaught in the next fiscal. We believe the first model to arriv… ",
      imgUrl : "https://images.hindustantimes.com/auto/img/2023/01/28/1600x900/Jimny_Electric_1674882466247_1674882471807_1674882471807.jpg" 
    },
    { heading : "A man who worked as a recruiter at Google saidhe discovered he had been sacked by the tech giant in the middle of an interview last Friday",
     content : "Google last week announced it's making 12,000 roles redundant\r\nNew Delhi: A man who worked as a recruiter at Google said he discovered he had been sacked by the tech giant in the middle of an intervi…",
     imgUrl : "https://c.ndtvimg.com/2023-01/d96ium5o_google-employee_625x300_28_January_23.jpg" 
    },
    {
      heading : "Hyundai releases sales data for December 2022. This car tops list - Hindustan Times",
      content : "Hyundai has released its sales data for December 2022. According to HT's sister publication Live Hindustan, which cited the company's figures, the Creta SUV sold the maximum units for the Korean auto",
      imgUrl : "https://images.hindustantimes.com/img/2023/01/28/1600x900/20200624_170710-01_1593496947684_1593496973632_3_1674886963887_1674886964061_1674886964061.jpeg"
    }
  ])

  const [latestTechnology, setlatestTechnology ] = useState([
    { heading : "Here's the first look of OnePlus Buds Pro 2!#OnePlus #OnePlusBudsPro #OnePlusBudsPro2 #OnePlus11 - Mashable India",
     content : "" ,
     imgUrl : "https://i.ytimg.com/vi/igmzVomOPMc/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYciBEKD8wDw==&rs=AOn4CLBM-JHMWOb-fgLIWvq1TIzcCqdAzg"
    },
    { 
     heading : "The Tech Weekender | Top news from the world of technology this week - Moneycontrol",
     content : "During this week, India said its ready to roll out indigenous 5G and 4G tech, Halo studio 343 industries have been hit hard by layoffs, camera features for the Samsung Galaxy S23 Ultra are teased and Che" ,
     imgUrl : "https://images.moneycontrol.com/static-mcnews/2022/10/software-770x433.jpg"
    },
    { heading : "Speed Up Your Old Laptop With This App! #shorts #app #laptop - Guiding Tech",
      content : "Your old laptop is working very slowly these days? Don't worry, we've got you covered. Check out this video and speed up your old laptop with this official a..." ,
      imgUrl : "https://i.ytimg.com/vi/ad_AhVJYWUk/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLADHpSBmAb7QX6jeZV95SYWCdC88A"
   },
   {
    heading : "The first half of the year will be jam-packed with slab phone announcements leading up to the Mobile World Congress in late February to early March.",
    content : "While 2022 was a year for iterative upgrades in terms of smartphones, 2023 is shaping up to be the year that paves the way for tech in the years to come. The flagship smartphone launches have already…",
    imgUrl : "https://images.moneycontrol.com/static-mcnews/2020/10/TECHNOLOGY-770x433.jpg"
   }
  ])

  const [bollywood, setbollywood ] = useState([
    {
      filmName : " Rocketry: The Nambi Effect (2022)",
      content : "Based on the life of Indian Space Research Organization scientist Nambi Narayanan, who was framed for being a spy and arrested in 1994. Though free, he continues to fight for justice against the officials who falsely implicated him.",
      imgUrl : "https://pinkroom-main.s3.amazonaws.com/8631dc65-f534-4824-92f7-3ec75c936c30.jpg"
    },
    {
      filmName : "RRR",
      content : "RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad.",
      imgUrl : "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      filmName : "Baahubali",
      content : "Baahubali: The Beginning is a 2015 Indian epic action film co-written and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni ...",
      imgUrl : "https://www.hollywoodreporter.com/wp-content/uploads/2015/07/bahubali_warrior_poster_p_15.jpg?w=2000&h=1126&crop=1"
    },
    {
      filmName : "Ponniyin silvan",
      content : " Ponniyin Selvan: I ( transl. The Son of Ponni) is a 2022 Indian Tamil-language epic historical action adventure film directed by Mani Ratnam, who co-wrote ...",
      imgUrl : "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/PonniyinSelvan_300922_1200.jpg?itok=TiDVhMdm"
    },
    {
      filmName : "Seeta Raman",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in.",
      imgUrl : "https://static.india.com/wp-content/uploads/2022/08/sitaraman.jpg?impolicy=Medium_Widthonly&w=700&h=467"
    }
  ])

  const [hollyWood, sethollywood ] = useState([
    {
      filmName : "Avengers",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in.",
      imgUrl : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      filmName : "Attack on Titan",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in.",
      imgUrl : "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/a9d4c1493f80703fe86dd83fb3b37623.jpe"
    },
    {
      filmName : "Avatar",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in.",
      imgUrl : "https://ca-times.brightspotcdn.com/dims4/default/21abeb9/2147483647/strip/true/crop/2048x1080+0+0/resize/1486x784!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdd%2F3b%2Fd0fc5ba1426ca5abc56bb60111a4%2Fs2267-0270-marketingselect-comp2k-v01.1145_R.jpg"
    },
    {
      filmName : "Top Gun",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in.",
      imgUrl : "https://m.media-amazon.com/images/S/pv-target-images/5099b0bb5c1a20bc2f43fe3a4934c94412c842a595deb5220d70a7ee959aae29._UR1920,1080_.jpg"
    },
    {
      filmName : "Fast and Furies",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in.",
      imgUrl: "https://stat4.bollywoodhungama.in/wp-content/uploads/2020/01/Fast-And-Furious-9-The-Fast-Saga-English.jpg"
    },
    {
      filmName : "Iron Man",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur. Repellendus quibusdam, vitae possimus maxime praesentium nobis in.",
      imgUrl: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-63228,resizemode-1,msid-93373112/magazines/panache/buzz/is-electronic-arts-developing-iron-man-single-player-game-all-you-need-to-know.jpg"
    }
  ])

  const [fitnessArr, setfitnessArr ] = useState([
    {
      heading : "Fitness starts with defining small goals and then making sure you work every day towards achieving them’: Milind Soman",
      content : "Milind Soman never ceases to amaze us — whether it is with his chiselled physique, his fabulous fitness levels, his commitment to living clean and healthy, or even his on-screen charm. So, it would not be erroneous to say that Milind refuses to be boxed into a single category and has always paved his own path, one that has been both eventful and inspiring in equal measure. But, despite being someone who sets workout goals (almost) every single day, Milind does not believe in spending hours at the gym. Instead, he is someone who believes in “defining small goals”, and then being committed to achieving them.",
      imgUrl : "https://images.indianexpress.com/2023/01/Milind-Soman.jpg" 
    },
    { 
      heading : "Hrithik Roshan, Samantha, Sara Ali Khan: Know Bollywood stars' fitness trainers",
      content : "Want fitness inspiration? Look no further than our beloved Bollywood celebrities. Know the trainers who help these celebrities on their fitness journeys.",
      imgUrl : "https://resize.indiatvnews.com/en/resize/gallery/835_-/2023/01/celeb-1675156406.jpg" 
    },
    { heading : "Treadmill vs. Elliptical: What's better for weight loss?",
     content : "A treadmill is a gym equipment that is generally used for walking, running and climbing without having to move around a lot. It is a stationary machine that promotes indoor cardio workout. It comes with a range of speed and incline settings and can be stationed at home too. Similar to a treadmill, an elliptical is a stationary exercise machine used to walk, run or stair climb, without putting too much pressure on the joints. This makes the equipment low-impact. It involves a running movement with stair climbing motion which targets the leg muscles, glutes, hamstrings, quads and hip flexors.",
     imgUrl : "https://images.everydayhealth.com/images/everything-you-need-know-about-fitness-1440x810.jpg" 
    },
    {
      heading : "Shilpa Shetty shares her fitness mantra, says 'You have to be consistent to...'",
      content : "Shilpa Shetty is a well-known actress in Bollywood. She is counted among the fittest actresses in the industry. Even at the age of 47, Shilpa Shetty has maintained her body in such a way that no one can guess her age by looking at it. From yoga to gym workouts, getting fitness like Shilpa Shetty is not so easy. Shilpa herself keeps sharing the secret of her fitness on Instagram. By following this you too can achieve your fitness goals.",
      imgUrl : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/01/30/2569601-untitled-design-22.jpg"
    }
  ])

  const [foodArr, setfoodArr ] = useState([
    {
      heading : "India Gets Its First Smart Food Court In Pune; Details Inside",
      content : "We live in a digitalised world where everything is available in just a few clicks. Today, we perform almost every task digitally. Post pandemic, we have realised the convenience even more. The hospitality sector has also taken up the trend quite fast - food apps being the perfect instance of the same. We reply on these apps on a regular basis to get our favourite dishes. Taking a step forward (towards digitalisation),",
      imgUrl : "https://c.ndtvimg.com/2023-01/f33u4lu8_food-court_625x300_31_January_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350" 
    },
    { 
      heading : "5 Food Combinations To Avoid If You Suffer From Acidity, Boating And Constipation",
      content : "Food combinations have a bigger effect on our system than we realise. Wrong food pairing can lead to bloating, constipation, acidity, fatigue, heartburn and other digestive issues.",
      imgUrl : "https://c.ndtvimg.com/2023-01/ul7nadu_chicken-and-french-fries_625x300_31_January_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350" 
    },
    { heading : "Food service van flagged off at Red Cross Bhawan",
     content : "With the aim of providing free food to the needy, the Jalandhar Red Cross Society, under Deputy Commissioner Jaspreet Singh, launched a food service van here today, in collaboration with NGO Aakhri Umeed Welfare Society.",
     imgUrl : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_1405424100.jpg" 
    },
    {
      heading : "GT Food News: Your news wrap for all things food",
      content : "One of the world's top culinary talents - Simon Rogan - is coming to Australia for a five-week takeover by the sea in Sydney. The British chef is one of the leaders of farm-to-table dining, which has since become a widespread global movement, and his flagship restaurant",
      imgUrl : "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Gt/2023/01/31/20710/Bathers-Pavilion-IG.jpg?width=922&height=768&mode=crop&anchor=topcenter&quality=75"
    }
  ])



  return (
  <>
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={
        <MainLatestArr.Provider value={LatestArr}>
        <LatestTechnology.Provider value={latestTechnology} >
          <BollyWoodArr.Provider value={bollywood}>
            <Hollywood.Provider value={hollyWood}>
              <Fitness.Provider value={fitnessArr}>
                <Food.Provider value={foodArr}>
            <Home></Home>
                </Food.Provider>
            </Fitness.Provider>
            </Hollywood.Provider>
        </BollyWoodArr.Provider>
        </LatestTechnology.Provider>
      </MainLatestArr.Provider>
    } ></Route>
    <Route path='/bollywood' element={<Entertainment value={ {bollyWood : bollywood, latest : "Bollywood Movies"}  } ></Entertainment>} ></Route>
    <Route path='/technology' element={<Latest value={{ latestArr : latestTechnology, latest : "Lates Technology"}}  ></Latest>} ></Route>
    <Route path='/hollywood' element={<Entertainment value={ {bollyWood : hollyWood, latest : "Hollywood Movies"}  } ></Entertainment>} ></Route>

    <Route path='/fitness' element={<Latest value={{ latestArr : fitnessArr, latest : "Latest Fitness"}}  ></Latest>} ></Route>
    <Route path='/food' element={<Latest value={{ latestArr : foodArr, latest : "Latest Food"}}  ></Latest>} ></Route>
    <Route path='/blogPage' element={<BlogPage></BlogPage>}></Route>
  </Routes>




  </>
  );
}

export default App;
export {MainLatestArr}
export {LatestTechnology}
export {BollyWoodArr}
export {Hollywood} 
export {Fitness}
export {Food}