import { create } from "zustand";

const dataTemplates = {
  selectedAutomovel: "",
  consumoAutomovel: "",
  inputConsumo: "",
  consumokwheletrico: "",
  consumoglp: "",
  nacional: "",
  internacional: "",
};

const calcBasesEmissao = {
  carros: {
    gasolina: 12 * 0.182, //Por KM de combustível por mês
    alcool: 12 * 0.059949,
    diesel: 12 * 0.25762,
    gas_natural: 12 * 0.26068,
  },
  motos: {
    gasolina: 12 * 0.10568, //Por KM de combustível por mês
  },
  onibusUrbano: {
    diesel: 12 * 0.059949,
  },
  onibusRodovia: {
    diesel: 12 * 0.059949,
  },
  energia_eletrica: 12 * 0.0125,
  glp: 12 * 2.9910628,
  viagensNacionais: 1600 * 0.100164512,
  viagensInternacionais: 2e4 * 0.112464512,
  amountPerTree: 19.9,
};

// Função auxiliar para calcular a emissão de automóveis
function calculateCarroCombustivel(consumoCombustivel, consumoKM) {
  switch (consumoCombustivel) {
    case "gasolina":
      return consumoKM * calcBasesEmissao.carros.gasolina;
    case "alcool":
      return consumoKM * calcBasesEmissao.carros.alcool;
    case "diesel":
      return consumoKM * calcBasesEmissao.carros.diesel;
    case "gas_natural":
      return consumoKM * calcBasesEmissao.carros.gas_natural;
    default:
      return 0;
  }
}

// Função de cálculo da emissão
function calculateEmissao(dados) {
  let emissao = 0;

  if (dados.consumokwheletrico) {
    emissao += dados.consumokwheletrico * calcBasesEmissao.energia_eletrica;
  }

  if (dados.consumoglp) {
    emissao += dados.consumoglp * calcBasesEmissao.glp;
  }

  if (dados.nacional) {
    emissao += dados.nacional * calcBasesEmissao.viagensNacionais;
  }

  if (dados.internacional) {
    emissao += dados.internacional * calcBasesEmissao.viagensInternacionais;
  }

  switch (dados.selectedAutomovel) {
    case "carro":
      emissao += calculateCarroCombustivel(
        dados.consumoAutomovel,
        dados.inputConsumo
      );
      break;
    case "moto":
      emissao += dados.inputConsumo * calcBasesEmissao.motos.gasolina;
      break;
    case "onibusUrbano":
      emissao += dados.inputConsumo * calcBasesEmissao.onibusUrbano.diesel;
      break;
    case "onibusRodovia":
      emissao += dados.inputConsumo * calcBasesEmissao.onibusRodovia.diesel;
      break;
    default:
      emissao += 0;
  }

  return emissao;
}

// Função para calcular o resultado final
function calcFinal(dados) {
  const emissao = calculateEmissao(dados);
  const emissaoFinal = emissao / 1e3; // Converte para toneladas (por exemplo)
  return emissaoFinal;
}

export const useDataStore = create((set) => ({
  dados: { ...dataTemplates },
  currentStep: 0, // Estado do step atual
  emissaoFinal: 0, // Armazena o resultado final da emissão
  emissaoAutomovel: 0,
  emissaoEletricidade: 0,
  emissaoGLP: 0,
  emissaoViagensNacionais: 0,
  emissaoViagensInternacionais: 0,

  // Função para atualizar os dados de uma etapa
  updateFieldHandler: (key, value) =>
    set((state) => ({ dados: { ...state.dados, [key]: value } })),

  // Função para mudar o step
  changeStep: (step) => set({ currentStep: step }),

  // Função para resetar os dados
  resetData: () => set({ dados: { ...dataTemplates }, currentStep: -1 }),

  // Função para calcular a emissão com base nos dados atuais
  calculateEmissao: () =>
    set((state) => {
      const dados = state.dados;

      // Cálculo de emissão de automóvel
      let emissaoAutomovel = 0;
      if (dados.selectedAutomovel && dados.inputConsumo) {
        emissaoAutomovel = calculateCarroCombustivel(
          dados.consumoAutomovel,
          dados.inputConsumo
        );
      }

      // Cálculo de emissão de eletricidade
      let emissaoEletricidade = 0;
      if (dados.consumokwheletrico) {
        emissaoEletricidade =
          dados.consumokwheletrico * calcBasesEmissao.energia_eletrica;
      }

      // Cálculo de emissão de GLP
      let emissaoGLP = 0;
      if (dados.consumoglp) {
        emissaoGLP = dados.consumoglp * calcBasesEmissao.glp;
      }

      // Cálculo de viagens nacionais
      let emissaoViagensNacionais = 0;
      if (dados.nacional) {
        emissaoViagensNacionais =
          dados.nacional * calcBasesEmissao.viagensNacionais;
      }

      // Cálculo de viagens internacionais
      let emissaoViagensInternacionais = 0;
      if (dados.internacional) {
        emissaoViagensInternacionais =
          dados.internacional * calcBasesEmissao.viagensInternacionais;
      }

      return {
        emissaoAutomovel,
        emissaoEletricidade,
        emissaoGLP,
        emissaoViagensNacionais,
        emissaoViagensInternacionais,
      };
    }),

  // Função para calcular o resultado final
  calcFinal: () => set((state) => {
    const emissaoFinal = calcFinal(state.dados);
    return { emissaoFinal };
  }),
}));
