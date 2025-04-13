
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import QuotesApp from './QuotesApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<QuotesApp />} />
      </Routes>
    </Router>
  );
}

export default App;