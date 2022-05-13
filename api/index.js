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
const { conn, Sneaker, Color, Size, ModelShoe, Brand, Material, Category } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
	// Create a new user
	// await Color.create({ nameColor: "red" });
	// await Color.create({ nameColor: "black" });
	// await Size.create({ numberSize: 43.5 });
	// await Size.create({ numberSize: 45.5 });
	// await Brand.create({ nameBrand: "Nike" });
	// await Brand.create({ nameBrand: "Jordan" });
	// await Material.create({ nameMaterial: "sintetic" });
	// await Material.create({ nameMaterial: "cloth" });
	// await Category.create({ nameCategory: "running" });
	// const categoria = await Category.create({ nameCategory: "soccer" });

	// await ModelShoe.create({ nameModel: "Mercurial", description: "Shoes to play soccer", brandId: 1, materialId: 1 });
	// const modelo = await ModelShoe.create({ nameModel: "Air Jordan", description: "Shoes to play bascketball", brandId: 2, materialId: 2 });
	// await modelo.addCategory(categoria);

	await Sneaker.create({ stock: 15, price: 250, image: "adsdsad", colorId: 1, sizeId: 1, modelShoeId: 2 })
	server.listen(3001, () => {
		console.log('%s listening at 3001'); // eslint-disable-line no-console
	});
});
