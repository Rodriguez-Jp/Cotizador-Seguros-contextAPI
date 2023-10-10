export const MARCAS = [
  { id: 1, nombre: "Europeo" },
  { id: 2, nombre: "Americano" },
  { id: 3, nombre: "Asiatico" },
];

export const YEARS = Array.from(
  { length: 20 },
  (_, i) => new Date().getFullYear() - i
);

export const PLANES = [
  { id: 1, nombre: "Basico" },
  { id: 2, nombre: "Completo" },
];
