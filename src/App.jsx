import './App.less'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import GlobalStyle from './GlobalStyle'

import {
  ParentMainPage,
  ChildMainPage,
  ChallengeChildDetailPage,
  ChallengeParentDetailPage,
  ChallengeViewPage,
  CompletePage,
  LoginPage,
  GraphDetailPage,
  GraphMainPage,
  ManagementPage,
  MissionChildViewPage,
  MissionCreatePage,
  MissionDetailPage,
  MissionParentViewPage,
  RegisterPage,
} from '@pages'

// * 9/6 지은 생각: 부모일때랑 자식일때 url을 동일하게 할 수는 없을까
// TODO: utility 폴더에 path 따로 분리해놓기

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route exact path="/" element={<ParentMainPage />} />
            <Route path="/child" element={<ChildMainPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route path="/mission/create" element={<MissionCreatePage />} />
            <Route path="/mission/detail/:missionId" element={<MissionDetailPage />} />
            <Route
              path="/mission/parentview"
              element={<MissionParentViewPage />}
            />
            <Route
              path="/mission/childview"
              element={<MissionChildViewPage />}
            />
            <Route
              path="/challenge/child/detail/:id"
              element={<ChallengeChildDetailPage />}
            />
            <Route
              path="/challenge/parent/detail/:id"
              element={<ChallengeParentDetailPage />}
            />
            <Route path="/challenge" element={<ChallengeViewPage />} />
            <Route path="/complete" element={<CompletePage />} />
            <Route path="/graph" element={<GraphMainPage />} />
            <Route path="/graph/detail" element={<GraphDetailPage />} />
            <Route path="/management" element={<ManagementPage />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  )
}

export default App
