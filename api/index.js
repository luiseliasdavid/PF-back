//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Sneaker, Color, Size, Model, Brand, Material, Category } = require('./src/db.js');
const data = require('./data.json');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
	//!Llenando base de datos, con el archivo data.json.
	//!Llenando tabla categorías.
	data.forEach(obj => {
		obj.category.forEach(async (objCat) => {
			const [cat, created] = await Category.findOrCreate({
				where: { nameCategory: objCat }
			});
		})
	});

	//!Llenndo tabla brand
	data.forEach(async (obj) => {
		const [brand, created] = await Brand.findOrCreate({
			where: { nameBrand: obj.brand }
		})
	});

	//!Llenndo tabla material
	data.forEach(async (obj) => {
		const [material, created] = await Material.findOrCreate({
			where: { nameMaterial: obj.material }
		})
	});

	//!Llenndo tabla  model
	data.forEach(async (obj) => {
		const brand = await Brand.findOne({
			where: { nameBrand: obj.brand }
		});
		const material = await Material.findOne({
			where: { nameMaterial: obj.material }
		});
		const mat = material.toJSON();
		const bra = brand.toJSON();
		const model = await Model.create({ nameModel: obj.model, description: obj.description, brandId: bra.id, materialId: mat.id });
		obj.category.forEach(async (objCat) => {
			const [cat, created] = await Category.findOrCreate({
				where: { nameCategory: objCat }
			});
			await model.addCategory(cat);
		})
	});

	//!Llenando tabla color
	data.forEach(async (obj) => {
		const [color, created] = await Color.findOrCreate({
			where: { nameColor: obj.color }
		})
	});

	//!Llenndo tabla size
	data.forEach(async (obj) => {
		const [size, created] = await Size.findOrCreate({
			where: { numberSize: obj.size }
		})
	});

	//!Llenndo tabla Sneaker
	data.forEach(async (obj) => {
		const color = await Color.findOne({
			where: { nameColor: obj.color }
		});
		const size = await Size.findOne({
			where: { numberSize: obj.size }
		});
		const model = await Model.findOne({
			where: { nameModel: obj.model }
		});
		const col = color.toJSON();
		const siz = size.toJSON();
		const mod = model.toJSON();
		await Sneaker.create({ stock: obj.stock, price: obj.price, image: obj.image, colorId: col.id, sizeId: siz.id, modelId: mod.id })
	});

	server.listen(3001, () => {
		console.log('%s listening at 3001'); // eslint-disable-line no-console
	});
});
