import React, { useState } from "react";
import Formularios from "../Components/Formulario";
import Lista from "../Components/Lista";
import style from "./App.module.scss";
import Cronometro from "../Components/Cronometro";
import { ITarefa } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formularios setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
