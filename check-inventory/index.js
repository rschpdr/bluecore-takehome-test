module.exports = function (I, R) {
  let currentIds = [];
  Object.keys(I).map((attribute) => {
    if (R[attribute]) {
      const category = R[attribute].trim();
      if (currentIds.length > 0) {
        currentIds = currentIds.filter((id) =>
          I[attribute][category].includes(id)
        );
        return;
      }

      currentIds = I[attribute][category] || [];
    }
  });

  return currentIds;
};
