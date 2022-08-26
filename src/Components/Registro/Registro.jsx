import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Swal from "sweetalert2";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import clientAxios from "../../config/clientAxios";

const Registro = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const showHidePassword = (e) => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!validationEmail.test(data.email)) {
      Swal.fire("Email no es valido,favor revisar");
      return;
    }

    const validationPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (!validationPass.test(data.password)) {
      Swal.fire("Contraseña no es valida");
      return;
    }

    try {
      await clientAxios
        .post("/registro", {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          if (response.data.message === "1") {
            Swal.fire("Registro Exitoso!", "Usuario creado!", "success");
            navigate("/login");
          } else {
            Swal.fire(
              "Registro fallido!",
              "Este mail ya existe por otro usuario!",
              "error"
            );
          }
          console.log(response.message);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    e.target.reset();
  };

  return (
    <div className={`${styles.signup_container} container-fluid `}>
      <div className={`${styles.signup_form_container} col-sm-12`}>
        <div className={`${styles.left}  col`}>
          <h1>Ya tienes Cuenta?</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Iniciar sesión
            </button>
          </Link>
        </div>
        <div className={`${styles.right}  col`}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1> Registrate a StrangerFlix </h1>
            <div className={`${styles.inputbox}  row`}>
              <input
                type="text"
                placeholder="Nombre"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className={styles.input}
              />
            </div>
            <div className={`${styles.inputbox}  row`}>
              <input
                type="text"
                placeholder="Apellido"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className={styles.input}
              />
            </div>

            <div className={`${styles.inputbox}  row`}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required={"Email es requerido"}
                className={styles.input}
              />
            </div>

            <div className={`${styles.inputbox}  row`}>
              <input
                type={type}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <div className={styles.icon} onClick={showHidePassword}>
                <Icon size={21} icon={icon} />
              </div>
            </div>

            <p className={styles.p}>
              *La contraseña debe tener al entre 8 y 16 caracteres, al menos un
              dígito, al menos una minúscula y al menos una mayúscula. Puede
              tener otros símbolos
            </p>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Registro
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
