import React from "react";

function Calc_residencial({ data, updateFieldHandler }) {
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
          Calculo de Consumo Residencial
        </h5>
        <div className="container row m-auto"
        >
            <span className="col-md-6 col-12"
            >
              <label htmlFor="consumokwheletrico" className="form-label">
                Consumo de Energia Elétrica:
              </label>
              <input
                value={data.consumokwheletrico || ""}
                onChange={(e) =>
                    updateFieldHandler("consumokwheletrico", e.target.value)
                  }
                name="consumokwheletrico"
                className="form-control"
                type="number"
                id="consumokwheletrico"
                placeholder="KWh por mês | KW (KiloWatt)"
              />
            </span>

            <span className="col-md-6 col-12"
            >
              <label htmlFor="consumoglp" className="form-label">
                Consumo de gás de cozinha:
              </label>
              <input
                value={data.consumoglp || ""}
                onChange={(e) =>
                    updateFieldHandler("consumoglp", e.target.value)
                  }
                name="consumoGLP"
                className="form-control"
                type="number"
                id="consumoglp"
                placeholder="Kg por mês | GLP (GÁS Liquefeito De Petróleo - BOTIJÃO)"
              />
            </span>
        </div>
      </section>
    </>
  );
}

export default Calc_residencial;
