import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  //state del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  // extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  const [consultar, setConsultar] = useState(false);

  const [resultado, setResultado] = useState({});

  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = "314f5a12e8379ebc27c37f22911dfe65";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsultar(false);

        //Detecta si hubo resultados correctos en la consulta

        if(resultado.cod === "404"){
          setError(true);
        }else{
          setError(false);
        } 
      }
    };
    consultarAPI();
  }, [consultar]);


  let componente;
  if(error){
    componente = <Error 
                  mensaje="No hay resultados" 
                  />
  }else{
    componente = <Clima
                  resultado={resultado}
                  />
  }


  return (
    <Fragment>
      <Header title="Clima react app" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
                {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
