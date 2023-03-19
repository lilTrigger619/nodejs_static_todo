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
      .json(ALLTODOS.slice(pageQuery - (pageQuery - MaxPageLength), pageQuery));
  }

  return res.status(200).json(ALLTODOS);
}

// post request
function addItem(req, res) {
  const { value } = req.body;
  if(value == undefined) return res.status(400).json({message:" Please provide a value! "});
  ALLTODOS.push(value);
  res.status(200).json({message:"success"});
};

//get one Item
function getItem(req, res) {
  const { itemId } = req.params;
  return res.status(200).json(ALLTODOS[itemId]);
}

// update and item
function updateItem(req, res) {
  const { itemId } = req.params;
  const ID = parseInt(itemId);

  //if the itemid provided dosent exist
  if (ID != 0 && !ID)
    return res.status(400).json({ message: "Please provide a parameter" });
  else if (ID > ALLTODOS.length - 1)
    return res
      .status(400)
      .json({ message: "The parameter provided is out of range!" });

  const { value } = req.body;
  ALLTODOS[ID] = value;
  return res.status(200).json(ALLTODOS[itemId]);
}

module.exports = { getAll, addItem, getItem, updateItem };
