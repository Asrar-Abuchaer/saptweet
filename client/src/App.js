import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import Tweet from "./pages/tweet";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<User />} />
      <Route path="/saptweet" element={<Tweet />} />
    </Routes>
  );
}

export default App;
