function normalizeId(str) {
  return str.toLowerCase().replace(/\s|-/g, "");
}

export default normalizeId;
