import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import User from "./pages/user";
import Tweet from "./pages/tweet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<User />} />
      <Route path="/saptweet" element={<Tweet />} />
    </Routes>
  );
}

export default App;
