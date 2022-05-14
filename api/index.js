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
const { conn, Sneaker, Color, Size, Model, Brand, Material, Category, Modelsize } = require('./src/db.js');
const data = require('./data.json');
const { Op } = require('sequelize');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
	//!Llenando base de datos, con el archivo data.json.

	// //!Llenndo tabla size
	data.forEach(async (obj) => {
		for await (let objSiz of obj.sizes) {
			const [siz, created] = await Size.findOrCreate({
				where: { numberSize: objSiz.size }
			})
		}
	});
	// data.forEach(obj => {
	// 	obj.sizes.forEach(async (objSiz) => {
	// 		const [siz, created] = await Size.findOrCreate({
	// 			where: { numberSize: objSiz.size }
	// 		})
	// 	})
	// });

	//!Llenando tabla categorías.
	data.forEach(async (obj) => {
		for await (let objCat of obj.category) {
			const [cat, created] = await Category.findOrCreate({
				where: { nameCategory: objCat }
			});
		}
	});
	// data.forEach(obj => {
	// 	obj.category.forEach(async (objCat) => {
	// 		const [cat, created] = await Category.findOrCreate({
	// 			where: { nameCategory: objCat }
	// 		});
	// 	})
	// });

	//!Llenndo tabla brand
	for await (let obj of data) {
		const [brand, created] = await Brand.findOrCreate({
			where: { nameBrand: obj.brand }
		})
	}
	// data.forEach(async (obj) => {
	// 	const [brand, created] = await Brand.findOrCreate({
	// 		where: { nameBrand: obj.brand }
	// 	})
	// });

	//!Llenndo tabla material
	for await (let obj of data) {
		const [material, created] = await Material.findOrCreate({
			where: { nameMaterial: obj.material }
		})
	}
	// data.forEach(async (obj) => {
	// 	const [material, created] = await Material.findOrCreate({
	// 		where: { nameMaterial: obj.material }
	// 	})
	// });

	//!Llenndo tabla  model
	for await (let obj of data) {
		const brand = await Brand.findOne({
			where: { nameBrand: obj.brand }
		});
		const material = await Material.findOne({
			where: { nameMaterial: obj.material }
		});
		const mat = material.toJSON();
		const bra = brand.toJSON();
		const model = await Model.create({ nameModel: obj.model, description: obj.description, brandId: bra.id, materialId: mat.id });
		for await (let objCat of obj.category) {
			const [cat, created] = await Category.findOrCreate({
				where: { nameCategory: objCat }
			});
			await model.addCategory(cat);
		}
	}
	// data.forEach(obj => {
	// 	const brand = await Brand.findOne({
	// 		where: { nameBrand: obj.brand }
	// 	});
	// 	const material = await Material.findOne({
	// 		where: { nameMaterial: obj.material }
	// 	});
	// 	const mat = material.toJSON();
	// 	const bra = brand.toJSON();
	// 	const model = await Model.create({ nameModel: obj.model, description: obj.description, brandId: bra.id, materialId: mat.id });
	// 	obj.category.forEach(async (objCat) => {
	// 		const [cat, created] = await Category.findOrCreate({
	// 			where: { nameCategory: objCat }
	// 		});
	// 		await model.addCategory(cat);
	// 	})
	// });
	// !llenado de tabla ModelSize
	data.forEach(async (obj) => {
		for await (let objSiz of obj.sizes) {
			const model = await Model.findOne({
				where: { nameModel: obj.model }
			});
			const size = await Size.findOne({
				where: { numberSize: objSiz.size }
			});
			// console.log(model);
			const [mod, created] = await Modelsize.findOrCreate({
				where: { [Op.and]: [{ modelId: model.toJSON().id }, { sizeId: size.toJSON().id }] },
				defaults: { modelId: model.toJSON().id, sizeId: size.toJSON().id, stock: objSiz.stock }
			});
			if (!created) {
				await mod.update({ stock: mod.toJSON().stock + objSiz.stock });
			}
		}
	});
	// data.forEach(async (obj) => {
	// 	const modelo = await Model.findByPk(2);
	// 	console.log(obj.color)

	// 	obj.sizes.forEach(async (objSiz) => {
	// 		const modelito = await Model.findOne({
	// 			where: { nameModel: obj.model }
	// 		});
	// 		const size = await Size.findOne({
	// 			where: { numberSize: objSiz.size }
	// 		});
	// 		console.log(modelito);
	// 		await Modelsize.create({ modelId: , sizeId: , stock: , });
	// 	})
	// });

	//!Llenando tabla color
	for await (let obj of data) {
		const [color, created] = await Color.findOrCreate({
			where: { nameColor: obj.color }
		})
	}
	// data.forEach(async (obj) => {
	// 	const [color, created] = await Color.findOrCreate({
	// 		where: { nameColor: obj.color }
	// 	})
	// });

	//!Llenndo tabla Sneaker
	for await (obj of data) {
		const color = await Color.findOne({
			where: { nameColor: obj.color }
		});

		const model = await Model.findOne({
			where: { nameModel: obj.model }
		});
		await Sneaker.create({ price: obj.price, image: obj.image, colorId: color.toJSON().id, modelId: model.toJSON().id });
	}

	// data.forEach(async (obj) => {
	// 	const color = await Color.findOne({
	// 		where: { nameColor: obj.color }
	// 	});

	// 	const model = await Model.findOne({
	// 		where: { nameModel: obj.model }
	// 	});
	// 	const col = color.toJSON();
	// 	const mod = model.toJSON();
	// 	await Sneaker.create({ price: obj.price, image: obj.image, colorId: col.id, modelId: mod.id })
	// });
	// Model.findOne({ where: { nameModel: "Mercurial" } }).then(obj => {
	// 	// console.log(obj.toJSON())
	// })
	server.listen(3001, () => {
		console.log('%s listening at 3001'); // eslint-disable-line no-console
	});
});
