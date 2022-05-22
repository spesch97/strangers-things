import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import LogOut from './components/Logout';
import {
  Home,
  Profile,
  Login,
  NewPost,
  Register,
  Posts,
} from './routes'


function App() {
  const [username, setUsername] = useState(window.localStorage.getItem('username'));
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(window.localStorage.getItem('token'))

  return (
    <div>
      <h1>Stranger's Things</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        {token ? <Link to="/new-post">New Post</Link> : null}
        {token ? <Link to="/profile">Profile</Link> : null}
        {token ? null : <Link to="/register">Register</Link>}
        {token ? null : <Link to="/login">Login</Link>}
        <LogOut token={token} setToken={setToken}/>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile token={token} username={username} />} />
          <Route path="login" element={<Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} setToken={setToken}/>} />
          <Route path="new-post" element={<NewPost token={token} />} />
          <Route path="register" element={<Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />} />
          <Route path="posts" element={<Posts token={token} username={username}/>} />
      </Routes>
    </div>
  );
}

export default App;
