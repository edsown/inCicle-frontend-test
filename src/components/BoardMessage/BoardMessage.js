import React from "react";
import { useState } from "react";
import "./styles.css";

function BoardMessage() {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
  };

  return visible ? ( // Se o state visible for TRUE, retorna o conteúdo;
    <div className="outerBox">
      <h2>Endomarketing</h2>
      <p className="text">
        Endomarketing está relacionado às ações de treinamento ou qualificação
        dos colaboradores da empresa visando um melhor serviço para o cliente.
        Marketing interno, devido ao nome, é usualmente confundido com
        Endomarketing mesmo sendo conceitos diferentes.
      </p>
      <button
        className="dismissButton"
        onClick={() => {
          handleDismiss(); // Função que gerencia o state visible;
        }}
      >
        DISPENSAR
      </button>
    </div>
  ) : (
    <></> // Se o state visible for FALSE, retornar div vazia.
  );
}

export default BoardMessage;
