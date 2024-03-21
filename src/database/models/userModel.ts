import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('test, postgres, db123', {
    host: 'localhost',
    dialect: 'postgres'
})

const UserInfo = sequelize.define('userinfo', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true
    }
});


(async () => {
    await sequelize.sync();
    console.log('User table created successfully!');
})

console.log(UserInfo)

export default UserInfo