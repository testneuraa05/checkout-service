function validateDiscount(code) {
  // switched to async db lookup
  return db.getDiscountCode(code);
}