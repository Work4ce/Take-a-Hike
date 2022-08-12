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
    primaryKey: true,
    autoIncrement: true,
  },
});
const Trips = db.define("trips", {
  _id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tripName: { type: DataTypes.STRING, allowNull: false, unique: true },
  tripDescription: { type: DataTypes.STRING, allowNull: false },
  tripLocation: { type: DataTypes.STRING, allowNull: false },
  tripAddress: { type: DataTypes.STRING, allowNull: false },
  tripDate: {type: DataTypes.DATE, allowNull: false},
  user_id: { type: DataTypes.INTEGER, allowNull: true, foreignKey: true, references: { model: 'users', key: '_id' }},
});

// Export Schema
module.exports = {
  Trips,
  Users
};
