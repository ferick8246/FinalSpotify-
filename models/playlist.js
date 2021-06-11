module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define("Playlist", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      imageURL: {
        type: DataTypes.STRING,
        validate: {
          len: [1],
        },
      }
    });
    return Playlist;
  };
  
  // selectAll(cb) {
  //     sequelize.selectAll('song', res => cb(res));
  //   },
  //   insertOne(value, cb) {
  //     sequelize.insertOne('song', 'name', 'score', res => cb(res), value);
  //   },
  //   updateOne(id, value, cb) {
  //     sequelize.updateOne('song', 'name', 'score', value, 'id', id, res => cb(res));
  //   },