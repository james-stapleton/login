const { Users } = require('../models');

const UserData = [
    {
        name: "James Stapleton",
        email: "jstapleton536@gmail.com",
        password: "password"
    },
    {
        name: "Chris",
        email: "Chris@test.com",
        password: "password"
    },
    {
        name: "Fatih",
        email: "Fatih@test.com",
        password: "password"
    },
    {
        name: "Test",
        email: "test@test.com",
        password: "password"
    }
]

const seedUsers = () => Users.bulkCreate(UserData, {individualHooks: true});

module.exports = seedUsers;