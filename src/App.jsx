import './App.css'
import Nav from './components/Nav'

import { Outlet } from "react-router-dom";
function App() {
  return (<>
  <Nav/>
  <main>

  <Outlet/>
  </main>
  <footer>I am foot</footer>
  </>)
}

export default App
