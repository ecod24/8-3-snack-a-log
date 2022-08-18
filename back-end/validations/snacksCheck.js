const checkName = (request, response, next) => {
	const { name } = request.body;
	if (name) {
		//lots of name formatting needed here
		next();
	} else {
		response.status(400).json({ success: false, payload: `error: No name specified!` });
	}
};
// const nameFormatter = (name) => {
// 	if (name) {

// 	}
// };
const checkFiber = (request, response, next) => {
	if (!!request.body.fiber) {
		next();
	} else {
		response
			.status(400)
			.json({ success: false, payload: `error: No fiber content specified!` });
	}
};
const checkProtein = (request, response, next) => {
	if (!!request.body.protein) {
		next();
	} else {
		response
			.status(400)
			.json({ success: false, payload: `error: No protein content specified!` });
	}
};
const checkAddedSugar = (request, response, next) => {
	if (!!request.body.added_sugar) {
		next();
	} else {
		response
			.status(400)
			.json({ success: false, payload: `error: No added_sugar content specified!` });
	}
};
const checkImage = (request, response, next) => {
	if (request.body.image) {
		next();
	} else {
		//default image actually, dont 404 here
		request.body.image = `https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image`;
		next();
	}
};
// const checkHealth = ({fiber, added_sugar, protein}) => {
// 	//check they exist
// 	if (!(fiber && added_sugar && protein)) {
// 		//an error?
// 		return null;
// 	}
// 	if (fiber > 5 && added_sugar < 5) {
// 		//set is_healthy to true somehow
// 		return true;
// 	} else if (protein > 5 && added_sugar < 5) {
// 		//set is_healthy to true
// 		return true;
// 	} else if ((fiber > 5 || protein > 5) && added_sugar < 5) {
// 		//is_healthy becomes true
// 		return true;
// 	} else {
// 		//set is_healthy to false
// 		return false;
// 	}
// };

const checkForNoAdditionalParams = (req, res, next) => {
	const { name, fiber, protein, added_sugar, is_healthy, image, ...otherStuff } = req.body;
	if (
		otherStuff &&
		Object.keys(otherStuff).length === 0 &&
		Object.getPrototypeOf(otherStuff) === Object.prototype
	) {
		next();
	} else {
		res.status(400).send({ error: "keep it short and sweet: no extra paramaters!" });
	}
};

module.exports = {
	checkAddedSugar,
	checkFiber,
	checkImage,
	checkName,
	checkProtein,
	checkForNoAdditionalParams,
};
