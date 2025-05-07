import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Login</h1>
            <p>{user ? "Bienvenido" : "No estas logueado"}</p>
            <button
              onClick={() => {
                setUser(!user);
                navigate("/");
              }}
            >
              {user ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
