const { Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../util/database");

class Product extends Model {}

Product.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DOUBLE, allowNull: false },
  },
  { sequelize, modelName: "products" }
);

module.exports = Product;
