const connection = require('../../database/connection/mysql');

exports.getItems = async () => {
	const db = await connection();
	const [records] = await db.query(`SELECT * FROM orders`);
	return records;
};
exports.insert = async (params) => {
	const db = await connection();
	const [result] = await db.query(`INSERT INTO orders SET ?`, [params]);
	return result.insertId;
};
exports.createSelect = async (params) => {
	const db = await connection();
	const [result] = await db.query(`INSERT INTO orders SET ?`, [params]);
	const [records] = await db.query(`SELECT * FROM orders WHERE id=? LIMIT 1`, [result.insertId]);
	return records[0];
};
exports.findBy = async (slug) => {
	const db = await connection();
	const [records, fileds] = await db.query('SELECT * FROM products WHERE slug=? LIMIT 1 ', [slug]);
	return records[0];
};
exports.update = async (id, params) => {
	const db = await connection();
	const [result, fileds] = await db.query(`UPDATE payments SET ? WHERE id=?`, [params, id]);
	return result.affectedRows > 0;
};
