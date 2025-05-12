import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("martinadanvargaslopez@gmail.com");
  const [password, setPassword] = useState("123123");

  const { registerUser } = useContext(UserContext);

  const navegate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("procesando form..." + email + password);
    try {
      await registerUser(email, password);
      console.log("Usuario registrado");
      navegate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        console.log("El email ya esta en uso");
      } else if (error.code === "auth/weak-password") {
        console.log("La contraseña debe tener al menos 6 caracteres");
      } else if (error.code === "auth/invalid-email") {
        console.log("El email no es valido");
      } else {
        console.log("Ocurrio un error");
      }
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
};

export default Register;
