const bcrypt = require("bcryptjs");

const passwordEncryption = async (data) => {
  var password = data.password;
  return await bcrypt.genSalt(10).then(async (salt) => {
    return await bcrypt.hash(password, salt).then((hash) => {
      data["password"] = hash;
      data["saltSecret"] = salt;
      console.log("-----data------", data);
      return data;
    });
  });
};

module.exports = { passwordEncryption };
