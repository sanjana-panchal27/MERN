const home = async (req, res) => {
  try {
    res.status(200).send('Controller Home Page');
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    res.status(400).send('login page using controllers');
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, login };
