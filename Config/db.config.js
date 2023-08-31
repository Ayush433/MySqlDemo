module.exports = {
  HOST: "localhost",
  user: "root",
  password: "123456789@a",
  database: "sequelize",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
