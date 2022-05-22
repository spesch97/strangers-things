import { useNavigate } from "react-router-dom";

const Logout = ({ token, setToken }) => {
  const navigate = useNavigate();
  if (token) {
    return (
      <button
        onClick={() => {
          window.localStorage.clear();
          setToken();
          navigate("/");
        }}
      >
        Logout
      </button>
    );
  }
};

export default Logout;
