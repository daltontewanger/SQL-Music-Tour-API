"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band, Event }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });
      // event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });
    }
  }

  MeetGreet.init(
    {
      meet_greet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "MeetGreet",
      tableName: "meet_greet",
      timestamps: false,
    }
  );
  return MeetGreet;
};
