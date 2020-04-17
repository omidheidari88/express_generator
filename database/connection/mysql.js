const mysql = require('mysql2/promise');
const connection = async () => {
	const handler = await mysql.createConnection({
		host: process.env.DATABASE_HOST,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		port: process.env.DATABASE_PORT,
		database: process.env.DATABASE_NAME,
	});
	return handler;
};
module.exports = connection;
