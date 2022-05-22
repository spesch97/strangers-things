import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../api";

const Login = ({ setToken, username, setUsername, password, setPassword }) => {

  const navigate = useNavigate();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const authFormSubmitHandler = async (event) => {
    event.preventDefault();
    const data = await fetchLogin(username, password);
    if (data.success) {
      setToken(data.data.token)
      window.localStorage.setItem('username', username);
      window.localStorage.setItem('token', data.data.token);
      navigate("/profile")
  } else {
    alert(`${data.error.message}`)
  }
}
  return (
    <form
      id="login"
      onSubmit={authFormSubmitHandler}
      >
      <label>Username</label>
      <input
          id="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={usernameChangeHandler}
      />
      <label>Password</label>
      <input
        id="pasword"
        type="password"
        value={password}
        minLength={5}
        onChange={passwordChangeHandler}
      />
      <button type="submit">Submit</button>
    </form>
   )
  }

export default Login;