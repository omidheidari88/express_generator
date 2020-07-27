const {insert, getItems} = require('./model');
exports.getIndex = async (req, res) => {
	const items = await getItems();
	res.status(201).send({items});
};
exports.postIndex = async (req, res) => {
	const items = req.body;
	const saveItems = await insert(items);
	res.status(201).send({message: 'items saved to DB', item: {...items, id: saveItems}});
};
