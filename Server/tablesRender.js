
  const dealWithData = (data, res) => {

    const reserved = data.slice(0, 5);
    const waiting = data.slice(5);

    res.render("tables", {
      reserved : reserved, 
      waiting : waiting
    })
  }

    module.exports = dealWithData; 