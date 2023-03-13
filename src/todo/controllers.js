const ALLTODOS = [];
const MaxPagelength = 20;

// get all todos with params
function getAll(req, res) {
  const { limit, page } = req.query;

  // limit query
  if (limit != undefined)
    return res.status(200).json(ALLTODOS.slice(0, parseInt(limit)));

  // page query
  if (page) {
    const pageQuery = parseInt(page) * MaxPagelength;
    return res
      .status(200)
      .json(
        ALLTODOS.slice(
          pageQuery - (pageQuery - MaxPageLength),
          pageQuery
        )
      );
  }

  return res.status(200).json(ALLTODOS);
}

// post request
function addItem(req, res) {
  const { body } = req;
  console.log({ body });
  res.status(200).json({ body });
}

module.exports = { getAll, addItem };
