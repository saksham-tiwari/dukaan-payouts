import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import SidePanel from "./components/SidePanel/SidePanel"
import Dashboard from "./components/Dashboard/Dashboard"
import TableWrapper from "./components/TableWrapper/TableWrapper"

function App() {
  const [sidePanelActive, setSidePanelActive] = useState(false)

  return (
    <div className="App">
      <div className="main">
          <SidePanel sidePanelActive = {sidePanelActive} setSidePanelActive={setSidePanelActive}/>
          <section className="RightSection">
            <Navbar sidePanelActive = {sidePanelActive} setSidePanelActive={setSidePanelActive} />
            <Dashboard />
            <TableWrapper />
          </section>
      </div>
    </div>
  )
}

export default App
