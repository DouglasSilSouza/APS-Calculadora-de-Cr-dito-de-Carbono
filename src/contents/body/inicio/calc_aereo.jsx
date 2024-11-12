import React from "react";

function Calc_aereo({ data, updateFieldHandler }) {
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
        >
          Calculo de Viagens Areas:
        </h5>
        <div style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: "1.4rem", color: "grey" }}>Trecho de Viagem:</p>
          <div className="container"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div>
              <label htmlFor="nacional" className="form-label">
                Viagens Nacionais
              </label>
              <input
                value={data.nacional || ""}
                onChange={(e) =>
                  updateFieldHandler("nacional", e.target.value)
                }
                name="nacional"
                className="form-control"
                type="number"
                id="nacional"
                aria-describedby="nacionalHelp"
              />
              <div id="nacionalHelp" className="form-text">
                Viagens por Ano
              </div>
            </div>

            <div>
              <label htmlFor="internacional" className="form-label">
                Viagens Internacionais
              </label>
              <input
                value={data.internacional || ""}
                onChange={(e) =>
                  updateFieldHandler("internacional", e.target.value)
                }
                name="internacional"
                className="form-control"
                type="number"
                id="internacional"
                aria-describedby="internacionalHelp"
              />
              <div id="internacionalHelp" className="form-text">
                Viagens por Ano
              </div>
            </div>
          </div>
              <p>Nacionais: Utilizando como padrão 1.600km (ida e volta) ou seja, 800km cada trecho. <br/>
              Internacionais: Utilizando como padrão 20.000km (ida e volta), ou seja, 10.000km cada trecho.</p>
        </div>
      </section>
    </>
  );
}

export default Calc_aereo;
