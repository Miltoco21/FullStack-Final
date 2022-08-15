import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/login";
      const { data: res } = await axios.post(url, data);
      console.log(data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className={`${styles.login_container} container-fluid     `}>
      <div className={`${styles.login_form_container} row `}>
        <div className={`${styles.left} col my-5`}>
          <form
            className={`${styles.form_container} row d-flex justify-content-center`}
            onSubmit={handleSubmit}
          >
            <h1 className="text-center">Inicia Sesión</h1>
            <div className={`${styles.inputbox}  row`}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
            </div>
            <div className={`${styles.inputbox} row`}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={`${styles.input} row`}
              />
            </div>

            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div className={`${styles.right} col my-5  `}>
          <div className="col">
            <h1 className="text-center" > Eres nuevo?</h1>
          <div className="col  d-flex justify-content-center align-content-center my-5"> 
            <Link to="/registro">
            <button
              type="button"
              className={`${styles.white_btn} justify-content-center `}
            >
              Registrate
            </button>
            </Link>

          </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Login;
