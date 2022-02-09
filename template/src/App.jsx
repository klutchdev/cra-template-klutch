// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />

      {/* 
      Example code for router v6:
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Router> 
      */}
    </div>
  );
}

export default App;
