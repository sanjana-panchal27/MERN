const home = async (req, res) => {
  try {
    res.status(200).send('Controller Home Page');
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    res.status(400).json({ message: req.body });
  } catch (error) {
    res.status(500).json('internal server error');
  }
};
module.exports = { home, login };
