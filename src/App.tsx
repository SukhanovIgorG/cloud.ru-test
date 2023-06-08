import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom"
import styles from "./App.module.scss"
import { Main, StepOne, StepTwo, StepTree } from "./pages"

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/stepone" element={<StepOne />} />
          <Route path="/steptwo" element={<StepTwo />} />
          <Route path="/steptree" element={<StepTree />} />
          <Route path="/*" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
