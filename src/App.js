import './App.css';
import Posts from './components/Posts';
import { Routes, Route, Link } from "react-router-dom";
import PostDetails from './components/PostDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
