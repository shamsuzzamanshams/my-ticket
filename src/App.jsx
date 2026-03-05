
import { Suspense } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify';

function App() {

  const fetchCardData = async () => {
    const res = await fetch("/card_data.json")
    return res.json();
  }

  const cardDatapromise = fetchCardData();


  return (
    <>

      <NavBar></NavBar>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Card cardDatapromise={cardDatapromise}></Card>
      </Suspense>
      <Footer></Footer>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
