const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test1', 'root', null, {
  host: 'localhost',
  dialect:'mysql',
  logging:false
});

const testConnect = async() => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối thành công');
        }
    catch (error) {
        console.error('Thất bại', error);
      }
}

module.exports = testConnect;