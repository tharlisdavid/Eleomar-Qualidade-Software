export function operation(a: number, operation: string, b: number) {
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else if (operation === "%") {
    return a % b;
  } else {
    return null;
  }
}
