const dealWithData = (data, res) => {
  const reserved = data.slice(0, 5);
  const waiting = data.slice(5);

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
