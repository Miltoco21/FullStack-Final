import React, { useState, useEffect } from "react";
import "../Main/ListaPeliculas.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../../Loader/Loader";
import clientAxios from "../../config/clientAxios";
const ListaPeliculas = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [listImages, setListImages] = useState([]);
  const [listProximos, setListProximos] = useState([]);
  const [listMejores, setListMejores] = useState([]);
  const [listTv, setListTv] = useState([]);
  const [populares, setPopulares] = useState([]);
  const [proximos, setProximos] = useState([]);
  const [mejores, setMejores] = useState([]);
  const [tv, setTv] = useState([]);
  const [flag, setFlag] = useState(false);

  const getData = () => {
    clientAxios.get(`/imagenes`).then((response) => {
      setListImages(response.data);
      setIsLoader(true);
      console.log(listImages);
    });
  };
  const getDataProximos = () => {
    clientAxios.get(`/proximos`).then((response) => {
      setListProximos(response.data);
      setIsLoader(true);
      console.log(listProximos);
    });
  };
  const getDataMejores = () => {
    clientAxios.get(`/mejores`).then((response) => {
      setListMejores(response.data);
      setIsLoader(true);
      console.log(listMejores);
    });
  };
  const getDataTv = () => {
    clientAxios.get(`/tv`).then((response) => {
      setListTv(response.data);
      setIsLoader(true);
      console.log(listTv);
    });
  };
  const getPopulares = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=08f4ac90b9e9e07dad9b84738e14c7f2&language=es-MX"
    )
      .then((response) => response.json())
      .then((response) => {
        setPopulares(response.results);
        console.log(populares);
      });
  };
  const getProximos = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=08f4ac90b9e9e07dad9b84738e14c7f2&language=es-MX"
    )
      .then((response) => response.json())
      .then((response) => {
        setProximos(response.results);    
        console.log(proximos);
      });
  };
  const getMejores = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=08f4ac90b9e9e07dad9b84738e14c7f2&language=es-MX"
    )
      .then((response) => response.json())
      .then((response) => {
        setMejores(response.results);   
        console.log(mejores);
      });
  };
  const getTv = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=08f4ac90b9e9e07dad9b84738e14c7f2&language=es-MX"
    )
      .then((response) => response.json())
      .then((response) => {
        setTv(response.results);
        setFlag(true);
        console.log(tv);
      });
  };
  const postPopulares = () => {
    populares.map((popular) => {
      fetch(`${process.env.REACT_APP_URL_BASE}/imagenes`, {
        method: "POST",
        body: JSON.stringify({
          name: `${popular.title}`,
          url: `https://image.tmdb.org/t/p/original/${popular.poster_path}`,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    });
  };
  const postProximos = () => {
    proximos.map((proximo) => {
      fetch(`${process.env.REACT_APP_URL_BASE}/proximos`, {
        method: "POST",
        body: JSON.stringify({
          name: `${proximo.title}`,
          url: `https://image.tmdb.org/t/p/original/${proximo.poster_path}`,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    });
  };
  const postMejores = () => {
    mejores.map((mejor) => {
      fetch(`${process.env.REACT_APP_URL_BASE}/mejores`, {
        method: "POST",
        body: JSON.stringify({
          name: `${mejor.title}`,
          url: `https://image.tmdb.org/t/p/original/${mejor.poster_path}`,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    });
  };
  const postTv= () => {
    tv.map((tv) => {
      fetch(`${process.env.REACT_APP_URL_BASE}/tv`, {
        method: "POST",
        body: JSON.stringify({
          name: `${tv.name}`,
          url: `https://image.tmdb.org/t/p/original/${tv.poster_path}`,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    });
  };

  useEffect(() => {
    getData();
    getDataProximos();
    getDataMejores();
    getDataTv();
    getPopulares();
    getProximos();
    getMejores();
    getTv()
    postPopulares();
    postProximos();
    postMejores();
    postTv();
  }, [flag]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <>
      <div className="imagenesDestacadas">
        <div
          id="indicadoresDestacada"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#indicadoresDestacada"
              data-bs-slide-to="0"
              className="active bg-primary bg-gradient"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#indicadoresDestacada"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="bg-primary bg-gradient"
            ></button>
            <button
              type="button"
              data-bs-target="#indicadoresDestacada"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="bg-primary bg-gradient"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="pelicula-destacada pelicula1">
                <div className="container">
                  <h3 className="titulo">
                    The Batman
                    <span className="iconoDestacado">
                      <img
                        src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                        alt="icono destacado"
                      />
                    </span>
                  </h3>

                  <p className="description">
                    Cuando un asesino se dirige a la élite de Gotham con una
                    serie de maquinaciones sádicas, un rastro de pistas
                    crípticas envía Batman a una investigación en los bajos
                    fondos. A medida que las pruebas comienzan a acercarse a su
                    casa y se hace evidente la magnitud de los planes del autor,
                    Batman debe forjar nuevas relaciones, desenmascarar al
                    culpable y hacer justicia al abuso de poder y la corrupción
                    que durante mucho tiempo han asolado Gotham City.
                  </p>
                  <button type="button" className="btn boton">
                    <i className="fa-solid fa-play"></i>Reproducir
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="pelicula-destacada pelicula2">
                <div className="container">
                  <h3 className="titulo">
                    Uncharted
                    <span className="iconoDestacado">
                      <img
                        src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                        alt="icono destacado"
                      />
                    </span>
                  </h3>

                  <p className="description">
                    Un descendiente del explorador Sir Francis Drake descubre la
                    ubicación de la legendaria ciudad de El Dorado. Con la ayuda
                    de su mentor Victor Sullivan y la ambiciosa periodista Elena
                    Fischer, Nathan Drake trabajará para descubrir sus secretos,
                    mientras sobreviven en una isla llena de piratas,
                    mercenarios, y un misterioso enemigo, se embarcarán en una
                    búsqueda sin precedentes por alcanzar el tesoro antes que
                    sus perseguidores. Adaptación del aclamado videojuego
                    homónimo.
                  </p>
                  <button type="button" className="btn boton">
                    <i className="fa-solid fa-play"></i>Reproducir
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="pelicula-destacada pelicula3">
                <div className="container">
                  <h3 className="titulo">
                    Spider-Man: No Way Home
                    <span className="iconoDestacado">
                      <img
                        src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                        alt="icono destacado"
                      />
                    </span>
                  </h3>

                  <p className="description">
                    Peter Parker es desenmascarado y por tanto no es capaz de
                    separar su vida normal de los enormes riesgos que conlleva
                    ser un súper héroe. Cuando pide ayuda a Doctor Strange, los
                    riesgos pasan a ser aún más peligrosos, obligándole a
                    descubrir lo que realmente significa ser Spider-Man.
                  </p>
                  <button type="button" className="btn boton">
                    <i className="fa-solid fa-play"></i>Reproducir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="titulo-controles">
        <h3>Populares</h3>
      </div>
      {isLoader ? (
        <>
          <div className="my-5">
            <h1 className=" tituloSlider text-center d-flex justify-content-center align-items-center">
              POPULARES
            </h1>
          </div>
          <Slider {...settings}>
            {listImages.map((image, i) => (
              <div className="card-wrapper" key={i}>
                <div className="card">
                  <div className="card-image">
                    <img src={image.url} alt={image.name} />
                  </div>
                  <ul className="social-icons p-0">
                    <li>
                      <a href="/">
                        <i className="fa fa-play"></i>
                      </a>
                    </li>
                    {/* <li>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li> */}
                  </ul>
                  <div className="details">
                    <h2>{image.name}</h2>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="images/15.jpg" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="images/7.jpg" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="images/16.jpg" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div> */}
          </Slider>

          <div className="mt-5">
            <h1 className=" tituloSlider text-center d-flex justify-content-center align-items-center">
              PROXIMAMENTE
            </h1>
          </div>
          <Slider className="mt-5" {...settings}>
            {listProximos.map((image, i) => (
              <div className="card-wrapper" key={i}>
                <div className="card">
                  <div className="card-image">
                    <img src={image.url} alt={image.name} />
                  </div>
                  <ul className="social-icons p-0">
                    <li>
                      <a href="/">
                        <i className="fa fa-play"></i>
                      </a>
                    </li>
                    {/* <li>
               <a href="/">
                 <i className="fa fa-instagram"></i>
               </a>
             </li>
             <li>
               <a href="/">
                 <i className="fa fa-twitter"></i>
               </a>
             </li>
             <li>
               <a href="/">
                 <i className="fa fa-dribbble"></i>
               </a>
             </li> */}
                  </ul>
                  <div className="details">
                    <h2>
                      {image.name}{" "}
                      <span className="job-title">UI Developer</span>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="card-wrapper">
       <div className="card">
         <div className="card-image">
           <img src="images/15.jpg" />
         </div>
         <ul className="social-icons">
           <li>
             <a href="/">
               <i className="fa fa-facebook"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-dribbble"></i>
             </a>
           </li>
         </ul>
         <div className="details">
           <h2>
             John Doe <span className="job-title">UI Developer</span>
           </h2>
         </div>
       </div>
     </div>
     <div className="card-wrapper">
       <div className="card">
         <div className="card-image">
           <img src="images/7.jpg" />
         </div>
         <ul className="social-icons">
           <li>
             <a href="/">
               <i className="fa fa-facebook"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-dribbble"></i>
             </a>
           </li>
         </ul>
         <div className="details">
           <h2>
             John Doe <span className="job-title">UI Developer</span>
           </h2>
         </div>
       </div>
     </div>
     <div className="card-wrapper">
       <div className="card">
         <div className="card-image">
           <img src="images/16.jpg" />
         </div>
         <ul className="social-icons">
           <li>
             <a href="/">
               <i className="fa fa-facebook"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-dribbble"></i>
             </a>
           </li>
         </ul>
         <div className="details">
           <h2>
             John Doe <span className="job-title">UI Developer</span>
           </h2>
         </div>
       </div>
     </div> */}
          </Slider>
          <div className="mt-5">
            <h1 className=" tituloSlider text-center d-flex justify-content-center align-items-center">
              MEJOR PUNTUACION
            </h1>
          </div>
          <Slider className="mt-5" {...settings}>
            {listMejores.map((image, i) => (
              <div className="card-wrapper" key={i}>
                <div className="card">
                  <div className="card-image">
                    <img src={image.url} alt={image.name} />
                  </div>
                  <ul className="social-icons p-0">
                    <li>
                      <a href="/">
                        <i className="fa fa-play"></i>
                      </a>
                    </li>
                    {/* <li>
               <a href="/">
                 <i className="fa fa-instagram"></i>
               </a>
             </li>
             <li>
               <a href="/">
                 <i className="fa fa-twitter"></i>
               </a>
             </li>
             <li>
               <a href="/">
                 <i className="fa fa-dribbble"></i>
               </a>
             </li> */}
                  </ul>
                  <div className="details">
                    <h2>
                      {image.name}{" "}
                      <span className="job-title">UI Developer</span>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="card-wrapper">
       <div className="card">
         <div className="card-image">
           <img src="images/15.jpg" />
         </div>
         <ul className="social-icons">
           <li>
             <a href="/">
               <i className="fa fa-facebook"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-dribbble"></i>
             </a>
           </li>
         </ul>
         <div className="details">
           <h2>
             John Doe <span className="job-title">UI Developer</span>
           </h2>
         </div>
       </div>
     </div>
     <div className="card-wrapper">
       <div className="card">
         <div className="card-image">
           <img src="images/7.jpg" />
         </div>
         <ul className="social-icons">
           <li>
             <a href="/">
               <i className="fa fa-facebook"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-dribbble"></i>
             </a>
           </li>
         </ul>
         <div className="details">
           <h2>
             John Doe <span className="job-title">UI Developer</span>
           </h2>
         </div>
       </div>
     </div>
     <div className="card-wrapper">
       <div className="card">
         <div className="card-image">
           <img src="images/16.jpg" />
         </div>
         <ul className="social-icons">
           <li>
             <a href="/">
               <i className="fa fa-facebook"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-dribbble"></i>
             </a>
           </li>
         </ul>
         <div className="details">
           <h2>
             John Doe <span className="job-title">UI Developer</span>
           </h2>
         </div>
       </div>
     </div> */}
          </Slider>
          <div className="my-5">
            <h1 className=" tituloSlider text-center d-flex justify-content-center align-items-center">
              TV
            </h1>
          </div>
          <Slider className="mt-5" {...settings}>
            {listTv.map((image, i) => (
              <div className="card-wrapper" key={i}>
                <div className="card">
                  <div className="card-image">
                    <img src={image.url} alt={image.name} />
                  </div>
                  <ul className="social-icons p-0">
                    <li>
                      <a href="/">
                        <i className="fa fa-play"></i>
                      </a>
                    </li>
                    {/* <li>
               <a href="/">
                 <i className="fa fa-instagram"></i>
               </a>
             </li>
             <li>
               <a href="/">
                 <i className="fa fa-twitter"></i>
               </a>
             </li>
             <li>
               <a href="/">
                 <i className="fa fa-dribbble"></i>
               </a>
             </li> */}
                  </ul>
                  <div className="details">
                    <h2>
                      {image.name}{" "}
                      <span className="job-title">UI Developer</span>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="card-wrapper">
       <div className="card">
         <div className="card-image">
           <img src="images/15.jpg" />
         </div>
         <ul className="social-icons">
           <li>
             <a href="/">
               <i className="fa fa-facebook"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-dribbble"></i>
             </a>
           </li>
         </ul>
         <div className="details">
           <h2>
             John Doe <span className="job-title">UI Developer</span>
           </h2>
         </div>
       </div>
     </div>
     <div className="card-wrapper">
       <div className="card">
         <div className="card-image">
           <img src="images/7.jpg" />
         </div>
         <ul className="social-icons">
           <li>
             <a href="/">
               <i className="fa fa-facebook"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-dribbble"></i>
             </a>
           </li>
         </ul>
         <div className="details">
           <h2>
             John Doe <span className="job-title">UI Developer</span>
           </h2>
         </div>
       </div>
     </div>
     <div className="card-wrapper">
       <div className="card">
         <div className="card-image">
           <img src="images/16.jpg" />
         </div>
         <ul className="social-icons">
           <li>
             <a href="/">
               <i className="fa fa-facebook"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-instagram"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-twitter"></i>
             </a>
           </li>
           <li>
             <a href="/">
               <i className="fa fa-dribbble"></i>
             </a>
           </li>
         </ul>
         <div className="details">
           <h2>
             John Doe <span className="job-title">UI Developer</span>
           </h2>
         </div>
       </div>
     </div> */}
          </Slider>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default ListaPeliculas;
