import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../api";

const Register = ({ username, setUsername, password, setPassword }) => {
  const navigate = useNavigate();
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }
  
  const authFormSubmitHandler = async (event) => {
    event.preventDefault();
    const data = await fetchRegister(username, password);
    console.log(data)
    if (data.success) {
    navigate("/login")
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
          placeholder="minimum 5 characters"
          value={password}
          minLength={5}
          onChange={passwordChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }

export default Register;