import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('postgres','postgres','postgres', {
    host: "database-1.cfhd6c6qmbpi.us-east-2.rds.amazonaws.com",
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    port: 5432,
});