import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import getPhoto from "./api/unsplash"

function App() {
  useEffect(() => {
    getPhoto("asia Walk the Great Wall of China").then(res => console.log(res.urls.regular))
    
  }, [])

  return (
    <div className="App">
      <nav>nav</nav>
      <Outlet />
    </div>
  )
}

export default App
