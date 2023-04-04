export function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randColor() {
  return (
    "#" +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0");
  );
}
