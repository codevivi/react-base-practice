export function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rand7digits() {
  return randBetween(1000000, 9999999);
}
export function randColor() {
  return (
    "#" +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")
  );
}
