import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const config = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3306,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  };

  if (!process.env.MYSQL_CREDENTIALS) {
    return { ...config };
  }

  try {
    // const credentials = JSON.parse(process.env.MYSQL_CREDENTIALS);
    
    //something validate
    return {
      ...config,
      // username: credentials.username || config.username,
      // password: credentials.password || config.password,

      //something validate
    };
  } catch (error) {
    return { ...config };
  }
});
