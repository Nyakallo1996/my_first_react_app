import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Auth} from "./pages/auth/index"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
