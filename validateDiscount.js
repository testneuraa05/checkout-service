async function validateDiscount(code) {
  // switched to async db lookup
  const discount = await db.getDiscountCode(code);

  // removed sync fallback
  return discount;
}
