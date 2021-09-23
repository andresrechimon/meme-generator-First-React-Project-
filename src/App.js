import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setlinea1] = useState("");
  const [linea2, setlinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setlinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setlinea2(evento.target.value);
  };

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">Aliens</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philoraptor</option>
        <option value="smart">Smart guy</option>
      </select>
      <br />

      <input onChange={onChangeLinea1} type="text" placeholder="Línea 1" />
      <br />

      <input onChange={onChangeLinea2} type="text" placeholder="Línea 2" />
      <br />

      <button onClick={onClickExportar}>EXPORTAR</button>

      <div className="meme" id="meme">
        <span>{linea2}</span>
        <br />
        <span>{linea1}</span>
        <br />

        <img src={"/img/" + imagen + ".jpg"} />
      </div>
    </div>
  );
}

export default App;
