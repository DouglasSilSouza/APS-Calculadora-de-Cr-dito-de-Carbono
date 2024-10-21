import React, { useEffect, useState } from "react";
import ImgPlanetGreen from "../../../assets/images/planet_green.jpg";

import { useDataStore } from "../../../hooks/dataStore"; // Importar Zustand

function formatarReal(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function useNumberFormat(locale = "pt-BR") {
  const formatter = new Intl.NumberFormat(locale);

  return (value) => formatter.format(value);
}
const formatNumber = useNumberFormat();

function LeftResult() {
  const { calcFinal, emissaoFinal, dados } = useDataStore();
  const [calculo, setCalculo] = useState(0); // Estado local para armazenar o resultado do cálculo

  useEffect(() => {
    calcFinal(); // Dispara o cálculo assim que o componente é montado
  }, [dados, calcFinal]); // Observe mudanças em `dados` e `calcFinal`

  useEffect(() => {
    setCalculo(emissaoFinal); // Atualiza o estado local sempre que o cálculo final mudar
  }, [emissaoFinal]);

  const n = calculo || 0; // Verifica se o cálculo já foi atualizado
  const t = Math.ceil(n / 0.16314);
  const tAmount = 19.9 * t; // Supondo que `Oc.amountPerTree` seja 19.9

  return (
    <>
      <section
        className="col-md-6 col-12 p-0"
        style={{
          backgroundImage: `url(${ImgPlanetGreen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
        }}
      >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#83E764',
              opacity: 0.9,
              borderRadius: "10px",
            }}
          >
            <h4>Atualmente você emitiu</h4>
            <p>
              {" "}
              <b>{formatNumber(n)}</b> Toneladas de CO2
            </p>

            <h4>Quantidade de Mudas necessárias:</h4>
            <p>
              <b>{t}</b>
            </p>

            <h4>Valor total de mudas:</h4>
            <p><b>{formatarReal(tAmount)}</b></p>
          </div>
      </section>
    </>
  );
}

export default LeftResult;
