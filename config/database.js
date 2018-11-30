module.exports = {
  hrPool: {
    user: 'system',
    password: '123456',
    connectString: process.env.HR_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};
