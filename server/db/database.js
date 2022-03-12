const Sequelize = require("sequelize");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/realtor",
  config
);

module.exports = db;
