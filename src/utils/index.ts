export function formatPrice(price: number): string {
  const formattedPrice = price.toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });

  if (Number.isInteger(price)) {
    return formattedPrice.replace(/\.000$/, "");
  }

  return formattedPrice;
}
