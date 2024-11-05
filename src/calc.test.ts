import { sum, subt, mult, divi, perc } from "./calc";

test("Realizar a soma de 1 mais 2 e o resultado ser igual a 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Realizar a subtração de 2 menos 1 e o resultado ser igual a 1", () => {
  expect(subt(2, 1)).toBe(1);
});

test("Realizar a multiplicação de 2 vezes 2 e o resultado ser igual a 4", () => {
  expect(mult(2, 2)).toBe(4);
});

test("Realizar a divisão de 4 para 2 e o resultado ser igual a 2", () => {
  expect(divi(4, 2)).toBe(2);
});

test("Realizar a porcentagem de 50% de 100 e o resultado ser igual a 1,5", () => {
  expect(perc(50, 100)).toBe(50);
});
