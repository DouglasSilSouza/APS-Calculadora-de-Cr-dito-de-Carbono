import React, { useCallback, useMemo } from "react";
import { useDataStore } from "../../../hooks/dataStore"; // Importar Zustand

import Calc_transportes from "./Calc_transportes";
import Calc_residencial from "./Calc_residencial";
import Calc_aereo from "./Calc_aereo";

import CalcFinal from "./calcFinal";

function Inicio() {
  // Estado global do Zustand
  const {
    dados,
    currentStep,
    changeStep,
    updateFieldHandler,
    resetData,
  } = useDataStore();

  // Mapeamento dos componentes de cada etapa
  const calcComponents = useMemo(
    () => [
      <Calc_transportes data={dados} updateFieldHandler={updateFieldHandler} />,
      <Calc_residencial data={dados} updateFieldHandler={updateFieldHandler} />,
      <Calc_aereo data={dados} updateFieldHandler={updateFieldHandler} />,
      <CalcFinal />,
    ],
    [dados, updateFieldHandler]
  );

  const isLastStep = currentStep === calcComponents.length - 1;
  const isFirstStep = currentStep === 0;

  // Função para avançar de etapa
  const nextStep = useCallback(
    (e) => {
      e.preventDefault();
      if (!isLastStep) {
        changeStep(currentStep + 1);
      }
    },
    [currentStep, isLastStep, changeStep]
  );

  // Função para voltar de etapa
  const prevStep = useCallback(() => {
    if (!isFirstStep) {
      changeStep(currentStep - 1);
    }
  }, [currentStep, isFirstStep, changeStep]);

  // Função para resetar os dados
  const hundleReset = useCallback(() => {
    resetData();
    }, [resetData]);

  function emptyData() {
    if (dados.inputConsumo ||dados.consumokwheletrico || dados.consumoglp || dados.nacional || dados.internacional !== "" ) {
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="container text-center"
        style={{
          margin: "2rem auto",
        }}
      >
          {currentStep !== 3 && (
              <>
                <p className="fs-3 fw-bold">Realize os cálculos abaixo</p>
                <p className="mb-0">Os cálculos abaixo são sugestivos e baseados em médias de cálculos científicos</p>
              </>
            )}
          {currentStep == 2 && emptyData() && 
            <div className="alert alert-danger" style={{width: "fit-content", margin: '10px auto'}} role="alert">
              Preencha algum campo para realizar os cálculos.
            </div>
          }
          <form
            onSubmit={nextStep}
            className="container"
            style={{
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              backgroundColor: "#7ab562",
              boxShadow: "3px 3px 17px -5px #185539",
              color: "#FFF",
              margin: 'auto',
            }}
          >
            {calcComponents[currentStep]}

            <div
              className="buttom"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "center",
                margin: "10px 0",
              }}
            >
              {!isLastStep && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={prevStep}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Voltar
                </button>
              )}

              {currentStep <= 2 ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={currentStep == 2 && emptyData()}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  {currentStep <= 1 ? "Avançar" : "Calcular"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => hundleReset()}
                  className="btn btn-success"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  Re - calcular
                </button>
              )}
            </div>
          </form>
          <p className="text-break m-auto mt-5 container-sm" style={{fontSize: '1.5rem', fontWeight: '400', backgroundColor: "#d6eed7", borderRadius: "10px", padding: "15px"}}>Você sabia que dá para saber quantas árvores precisamos plantar para compensar o CO2 que soltamos em um ano? Para isso, criamos a Calculadora de CO2. É bem fácil de usar e qualquer pessoa pode preencher. Com ela, você descobre quanto de CO2 você emite por ano e pode compensar essa emissão plantando árvores da Mata Atlântica.</p>
      </div>
    </>
  );
}

export default Inicio;
