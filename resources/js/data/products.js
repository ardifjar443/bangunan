export function formatProductPrice(price) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 0,
  }).format(Number(price));

  return `Rp ${formattedPrice}`;
}
