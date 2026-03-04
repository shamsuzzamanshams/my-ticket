
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import NavBar from './Components/NavBar/NavBar'

function App() {

  const fetchCardData = async () =>{
    const res = await fetch("/card_data.json")
    return res.json();
  }

  const cardDatapromise = fetchCardData();
 

  return (
    <>
      
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Card cardDatapromise={cardDatapromise}></Card>
      </Suspense>
      
    </>
  )
}

export default App
