import { DataTypes } from 'sequelize';
import { sequelize} from '../database/database.js';



export const User = sequelize.define('users',{
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userstatus: {
        type: DataTypes.INTEGER,
        allowNull: false
      } ,
},{
  timestamps: false
});