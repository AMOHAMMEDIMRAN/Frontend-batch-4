// import FetchData from "./components/FetchData"
// import axios from "axios"
// import { useState, useEffect } from "react"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

const App = () => {
  // const [user, setUser] = useState([]);



  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  //       console.log(res.data)
  //       setUser(res.data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   fetchUser();
  // }, [])



  return (
    <div>
      {/* <FetchData data={user} /> */}
    
      <Router>
        <Routes>
              <Route path='/' index element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>

    </div>
  )
}
export default App