import React, { useEffect, useState } from 'react';
import { useDataStore } from "../../../hooks/dataStore"; 

const stylesP = {
  bold: "strong",
  color: "#FFF",
  fontSize: "18px",
  lineHeight: "24px",
  marginBottom: "10px",
};

function legenda (dado) {
  switch (dado) {
    case "carro": return "Carro";
    case "moto": return "Moto";
    case "onibusUrbano": return "Ônibus Urbano";
    case "onibusRodovia": return "Ônibus Rodovia";
    case "consumokwheletrico": return "Consumo de Energia Elétrica";
    case "consumoglp": return "Consumo de Gás de Cozinha";
    case "nacional": return "Viagens Nacionais";
    case "internacional": return "Viagens Internacionais";
    case "gasolina": return "Gasolina";
    case "alcool": return "Álcool";
    case "diesel": return "Diesel";
    case "gas_natural": return "Gás Natural Veicular (GNV)";
    default: return "";
  }
}

function RigthResult() {
  const {
    calculateEmissao,
    emissaoAutomovel,
    emissaoEletricidade,
    emissaoGLP,
    emissaoViagensNacionais,
    emissaoViagensInternacionais,
    dados
  } = useDataStore();

  useEffect(() => {
    calculateEmissao(); // Dispara o cálculo assim que o componente é montado
  }, [dados, calculateEmissao]); // Observe mudanças em `dados`

  return (
    <>
      <section className="col-md-6 col-12 pt-3"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
          {dados.inputConsumo && (
            <p style={stylesP}>
              Com <b>{legenda(dados.selectedAutomovel)}</b> usando combustível{" "}
              {legenda(dados.consumoAutomovel)} você consumiu <b>{dados.inputConsumo}</b> Km, emitindo{" "}
              <b>{emissaoAutomovel.toFixed(2)}</b> KG de CO2
            </p>
          )}

          {dados.consumokwheletrico && (
            <p style={stylesP}>
              Com <b>{dados.consumokwheletrico}</b> kWh de luz você emitiu{" "}
              <b>{emissaoEletricidade.toFixed(2)}</b> KG de CO2
            </p>
          )}

          {dados.consumoglp && (
            <p style={stylesP}>
              Com <b>{dados.consumoglp}</b> Litro(s) de gás de cozinha você emitiu{" "}
              <b>{emissaoGLP.toFixed(2)}</b> KG de CO2
            </p>
          )}

          {dados.nacional && (
            <p style={stylesP}>
              Com <b>{dados.nacional}</b> viagens nacionais você emitiu{" "}
              <b>{emissaoViagensNacionais.toFixed(2)}</b> KG CO2
            </p>
          )}

          {dados.internacional && (
            <p style={stylesP}>
              Com <b>{dados.internacional}</b> viagens internacionais você emitiu{" "}
              <b>{emissaoViagensInternacionais.toFixed(2)}</b> KG CO2
            </p>
          )}
      </section>
    </>
  );
}

export default RigthResult;
