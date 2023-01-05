const timestampNow = () => {
  return new Date().toLocaleDateString("nb-NO", { dateStyle: "medium" });
};

module.exports = { timestampNow };
