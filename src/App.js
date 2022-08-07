import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from './components/Main';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
              path="/home"
              element={<Navigate to="/"/>}
          />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
