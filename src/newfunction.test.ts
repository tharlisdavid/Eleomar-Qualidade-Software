import { operation } from "./newfunction";

test("Todas as operações testadas", () => {
  expect(operation(20, "-", 5)).toBe(15);
});
