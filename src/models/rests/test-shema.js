const testShema = (sequelize, DataTypes) => {
    const TestShema = sequelize.define("test-shema", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    return TestShema;
};

module.exports = testShema;
