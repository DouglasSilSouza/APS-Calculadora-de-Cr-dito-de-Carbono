import React, { useState, useContext } from "react";

function Calc_transportes({ data, updateFieldHandler }) {
  return (
    <>
      <section>
        <h5
          style={{
            color: "#FFF",
            backgroundColor: "#c6c6c6",
            margin: "10px auto",
            padding: "10px",
            width: "fit-content",
            borderRadius: "10px",
            position: "sticky",
          }}
        >Calculo de Transporte Terrestre</h5>
        <div className="div-main-container container-fluid"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <div className="div-select row">
            <div className="col-md-6 col-12 mb-3"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <label htmlFor="selectedAutomovel" className="form-label">
                Automóvel:
              </label>
              <select
              onChange={(e) =>
                updateFieldHandler("selectedAutomovel", e.target.value)
              }
                name="selectedAutomovel"
                className="form-control"
                id="selectedAutomovel"
              >
                <option value="" disabled selected>Selecione um automável</option>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="onibusUrbano">Ônibus Urbano</option>
                <option value="onibusRodovia">Ônibus em Rodovia</option>
              </select>
            </div>
            <div className="col-md-6 col-12 mb-3"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <label htmlFor="consumoAutomovel" className="form-label">
                Combustivel:
              </label>
              <select
              onChange={(e) =>
                updateFieldHandler("consumoAutomovel", e.target.value)
              }
              disabled={data.selectedAutomovel === ''}
                name="consumoAutomovel"
                className="form-control"
                id="consumoAutomovel"
              >
                <option value="" selected disabled>Selecio um Combustivel</option>
                {data.selectedAutomovel === 'carro' ? (
                  <>
                    <option value="gasolina">Gasolina</option>
                    <option value="alcool">Álcool</option>
                    <option value="diesel">Diesel</option>
                    <option value="gas_natural">Gás Natural Veicular (GNV)</option>
                  </>
                ) : data.selectedAutomovel === 'moto' ? (
                    <option value="gasolina">Gasolina</option>
                ) : (data.selectedAutomovel === 'onibusUrbano' || data.selectedAutomovel === 'onibusRodovia') && (
                    <option value="diesel">Diesel</option>
                )}                
              </select>
            </div>
          </div>
          <div className="form-label col-md-6 col-12"
          >
            <label htmlFor="inputConsumo">
              Insira Kilometragem média por mês:
            </label>
            <input
            disabled={data.consumoAutomovel === ''}
              value={data.inputConsumo || ""}
              onChange={(e) =>
                updateFieldHandler("inputConsumo", e.target.value)
              }
              type="number"
              className="form-control"
              name="inputConsumo"
              id="inputConsumo"
              placeholder="KM por mês"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Calc_transportes;
