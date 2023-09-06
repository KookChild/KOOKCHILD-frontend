import './App.less'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import GlobalStyle from './GlobalStyle'
import {
  LoginPage,
  MainPage,
  SignUpPage,
  MissionCreatePage,
  MissionDetailPage,
  MissionViewPage,
  ChallengeDetailPage,
  ChallengeViewPage,
} from '@pages'

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route path="/mission/create" element={<MissionCreatePage />} />
            <Route path="/mission/detail" element={<MissionDetailPage />} />
            <Route path="/mission/view" element={<MissionViewPage />} />
            <Route path="/challenge/detail" element={<ChallengeDetailPage />} />
            <Route path="/challenge/view" element={<ChallengeViewPage />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  )
}

export default App
