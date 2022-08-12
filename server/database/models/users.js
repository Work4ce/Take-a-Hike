// Import Dependencies
const { DataTypes } = require("sequelize");
const { db } = require("../index.js");

// Create Schema
const Users = db.define("users", {
  googleId: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  fullName: { 
    type: DataTypes.STRING(80), 
    allowNull: false 
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  _id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
});

// Export Schema
module.exports = {
  Users,
};
