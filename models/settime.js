"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate({ Band, Event, Stage }) {
      // band
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });
      // event
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });
      // stage
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage",
      });
    }
  }
  SetTime.init(
    {
      set_time_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      set_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      set_end_time: {
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
      stage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SetTime",
      tableName: "set_time",
      timestamps: false,
    }
  );
  return SetTime;
};
