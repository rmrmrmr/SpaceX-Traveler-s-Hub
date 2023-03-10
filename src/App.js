import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MyProfile from './pages/Profile';
import RocketsList from './pages/Rockets';
import MissionsList from './pages/Missions';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/profile"
          element={(
            <MyProfile />
)}
        />
        <Route
          path="/"
          element={(
            <RocketsList />
)}
        />
        <Route
          path="/missions"
          element={(
            <MissionsList />
)}
        />
      </Routes>
    </Router>
  );
}
