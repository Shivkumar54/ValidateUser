import React, { useState } from "react"
import ReactDOM from "react-dom"
import Login from "./src/Login"
import Home from "./src/Home.js"

const App = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <div>
      {isLoggedin ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
