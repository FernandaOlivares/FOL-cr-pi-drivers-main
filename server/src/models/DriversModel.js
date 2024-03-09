const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    forename: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 30],
        isForename(value) {
          if (!/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(value.trim())) {
            throw new Error('Forename must contain only letters, spaces, and hyphens');
          }}
      },
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlpha: true,
        len: [2, 30],
        isSurname(value) {
          if (!/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(value.trim())) {
            throw new Error('Surname must contain only letters, spaces, and hyphens');
          }}
      },
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlpha: true,
        len: [1, 30],
        isNationality(value) {
          if (!/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(value.trim())) {
            throw new Error('Surname must contain only letters, spaces, and hyphens');
          }}
      },
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true,
        isAfter: '1900-01-01',
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [50, 3000],
      },
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    }
  }, { timestamps: false });
};
