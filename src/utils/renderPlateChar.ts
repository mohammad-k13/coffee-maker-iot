// import { platesOptions } from "~/store/constants";

export const persianMapping = {
  a: "ا",
  b: "ب",
  c: "چ",
  d: "د",
  e: "",
  f: "ف",
  g: "گ",
  h: "ه",
  i: "",
  j: "ج",
  k: "ک",
  l: "ل",
  m: "م",
  n: "ن",
  o: "و",
  p: "پ",
  q: "ق",
  r: "ر",
  s: "س",
  t: "ت",
  u: "",
  v: "ص",
  w: "ص",
  x: "خ",
  y: "ی",
  z: "ز",
};
// export default (inputString: string) => {
//   const strRegex = /[a-zA-Z]/g;
//   const numRegex = /\d+/g;

//   const chars = inputString.match(strRegex)?.join("");
//   const num = inputString.match(numRegex)?.join("");

//   const result = {
//     firstTwo: num?.substr(0, 2),
//     middleChar: platesOptions.find(({ value }) => value === chars)?.label,
//     threeNum: num?.substr(2, 3),
//     lastTwo: num?.substr(5),
//   };
//   // No conversion needed, return the original string

//   return result;
// };

// export const getPlateChar = (plate: string) => {
//   const strRegex = /[a-zA-Z]/g;
//   const chars = plate.match(strRegex)?.join("");
//   return platesOptions.find(({ value }) => value === chars);
// };
