export const InstrumentValues = [
  "GUITARRISTA",
  "TECLADISTA",
  "BATERISTA",
  "VOCALISTA",
  "COMPOSITOR",
  "BAIXISTA",
  "DJ",
  "OUTRO",
] as const;

export type Instrument = typeof InstrumentValues[number];

export const InstrumentLabel: Record<Instrument, string> = {
  GUITARRISTA: "Guitarrista",
  TECLADISTA: "Tecladista",
  BATERISTA: "Baterista",
  VOCALISTA: "Vocalista",
  COMPOSITOR: "Compositor",
  BAIXISTA: "Baixista",
  DJ: "DJ",
  OUTRO: "Outro",
};
