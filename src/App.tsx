import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom"
import styles from "./App.module.scss"
import { Profile, StepOne, StepTwo, StepTree } from "./pages"

function App() {
  return (
    <div className={styles.App}>
      <a href="/">на главную</a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
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
