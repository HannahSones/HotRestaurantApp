const dealWithData = (data, res) => {
  const availableTables = 5
  const reserved = data.slice(0, availableTables);
  const waiting = data.slice(availableTables);

  res.render("tables", {
    reserved: reserved,
    waiting: waiting,
  });
};

/* const deleteData = (data, inputID) => {
  let filteredData = data.filter(({ id }) => id !== inputID);
  console.log("SLICED ---", data.splice(data.indexOf(filteredData), 1));
};
 */
module.exports = { dealWithData };
