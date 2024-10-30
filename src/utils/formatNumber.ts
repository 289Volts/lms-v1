export const formatNumber = (number: number) => {
  const isThousand = number >= 1000;
  const isMillion = number >= 1000000;
  const isBillion = number >= 1000000000;
  return isThousand
    ? `${Math.floor(number / 1000)}k`
    : isMillion
      ? `${Math.floor(number / 1000000)}m`
      : isBillion
        ? `${Math.floor(number / 1000000000)}b`
        : number;
};
