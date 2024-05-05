"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, StageEvent, MeetGreet, SetTime }) {
      // stages
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stage",
        through: StageEvent,
      });
      // meet and greets
      Event.hasMany(MeetGreet, {
        foreignKey: "event_id",
        as: "meet_greet",
      });
      // set times
      Event.hasMany(SetTime, {
        foreignKey: "event_id",
        as: "set_time",
      });
    }
  }

  Event.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Event",
      tableName: "event",
      timestamps: false,
    }
  );
  return Event;
};
