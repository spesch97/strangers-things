import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./App.css";
import { Home, Profile, Login, NewPost, Register, Posts } from "./routes";

const { Header, Content, Footer } = Layout;

function App() {
  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Link className="nav" to="/">
            Home
          </Link>
          <Link className="nav" to="/posts">
            Posts
          </Link>
          {token ? (
            <Link className="nav" to="/new-post">
              New Post
            </Link>
          ) : null}
          {token ? (
            <Link className="nav" to="/profile">
              Profile
            </Link>
          ) : null}
          {token ? null : (
            <Link className="nav" to="/register">
              Register
            </Link>
          )}
          {token ? null : (
            <Link className="nav" to="/login">
              Login
            </Link>
          )}
        </Menu>
      </Header>
      <Content className="contentBody">
        <div className="site-layout-content">
          <h1>Stranger's Things</h1>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="profile"
            element={
              <Profile
                token={token}
                username={username}
                setToken={setToken}
                setUsername={setUsername}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                setToken={setToken}
              />
            }
          />
          <Route path="new-post" element={<NewPost token={token} />} />
          <Route
            path="register"
            element={
              <Register
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
              />
            }
          />
          <Route
            path="posts"
            element={<Posts token={token} username={username} />}
          />
        </Routes>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Created by Sarah Pesch ©2022
      </Footer>
    </Layout>
  );
}

export default App;
