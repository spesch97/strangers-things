import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../api";

const Register = ({ username, setUsername, password, setPassword }) => {
  const navigate = useNavigate();
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const authFormSubmitHandler = async (event) => {
    event.preventDefault();
    const data = await fetchRegister(username, password);
    if (data.success) {
      setPassword("");
      setUsername("");
      alert("Registration successful. Please login.");
      navigate("/login");
    } else {
      alert(`${data.error.message}`);
    }
  };
  return (
    <>
      <h3 className="subtitle">Register</h3>
      <h6 className="subSubtitle">
        To register please create a username and a password with at least 5
        characters
      </h6>
      <form id="login" onSubmit={authFormSubmitHandler}>
        <label>Username</label>
        <Input
          placeholder="username"
          prefix={<UserOutlined />}
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label>Password</label>
        <Input
          placeholder="minimum of 5 characters"
          prefix={<UserOutlined />}
          id="pasword"
          type="password"
          value={password}
          minLength={5}
          onChange={passwordChangeHandler}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
