import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <NavBar />
      <h1>React Router</h1>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
