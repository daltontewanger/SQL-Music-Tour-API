"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ MeetGreet }) {
      // meet and greets 
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greet"
      })
  }
  
  }
  Band.init(
    {
      band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      band_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      band_end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Band",
      tableName: "band",
      timestamps: false,
    }
  );

  return Band;
};
