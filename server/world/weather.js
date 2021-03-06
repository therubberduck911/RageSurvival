"use strict";

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
//vector.insidePolygon(polygon)
var WeatherManager = new class {
	constructor() {
		let self = this;
		this.currentWeather = {
			wind: {
				speed: 0,
				dir: 0
			},
			rain: 0,
			name: "CLEAR"
		};
		setTimeout(function() {
			self.setRandomWeather();
		},60*1000*60);
		this._weathers = [{
			area_name: "Desert",
			name: "HALLOWEEN",
			wind: {
				speed: 0,
				dir: 0
			},
			rain: 0,
			polygon: [{
				x: 1830.005615234375,
				y: 2304.627685546875,
				z: 59.465003967285156
			}, {
				x: 2495.33349609375,
				y: 2780.03173828125,
				z: 58.52008819580078
			}, {
				x: 2972.216552734375,
				y: 4728.8759765625,
				z: 138.31849670410156
			}, {
				x: 2409.1240234375,
				y: 5163.08154296875,
				z: 112.46800231933594
			}, {
				x: 2074.1650390625,
				y: 5225.42578125,
				z: 126.00337982177734
			}, {
				x: 1693.992431640625,
				y: 5004.43017578125,
				z: 158.6930389404297
			}, {
				x: 1243.2454833984375,
				y: 4682.306640625,
				z: 186.73049926757812
			}, {
				x: 564.419189453125,
				y: 4505.4248046875,
				z: 202.14212036132812
			}, {
				x: -287.1321716308594,
				y: 4513.5,
				z: 196.2624969482422
			}, {
				x: -82.02429962158203,
				y: 3179.771240234375,
				z: 230.50894165039062
			}, {
				x: 1049.180419921875,
				y: 2059.069091796875,
				z: 97.63768005371094
			}, {
				x: 1429.7305908203125,
				y: 2212.03271484375,
				z: 116.07293701171875
			}, {
				x: 1569.124755859375,
				y: 2307.7666015625,
				z: 99.6394271850586
			}]
		}, {
			area_name: "Fallout",
			name: "SMOG",
			wind: {
				speed: 5,
				dir: 1
			},
			rain: 1,
			polygon: [{
				x: -295.8131103515625,
				y: 47.24351501464844,
				z: 75.93907165527344
			}, {
				x: 133.0416259765625,
				y: -0.3581496775150299,
				z: 67.76151275634766
			}, {
				x: 308.7716369628906,
				y: -310.71533203125,
				z: 69.46339416503906
			}, {
				x: 427.2154541015625,
				y: -922.2352905273438,
				z: 45.68708419799805
			}, {
				x: 333.55511474609375,
				y: -1412.2646484375,
				z: 76.17682647705078
			}, {
				x: -490.9083557128906,
				y: -1255.270263671875,
				z: 29.448463439941406
			}, {
				x: -909.7223510742188,
				y: -536.724853515625,
				z: 38.14537048339844
			}, {
				x: -1082.4903564453125,
				y: 265.44012451171875,
				z: 67.5526123046875
			}]
		}];
	}
	sendCurWeather(player) {
		player.call("Weather:SetWeather", [JSON.stringify(this.currentWeather)]);
	}
	setRandomWeather() {
		let weathers = ["EXTRASUNNY", "CLEAR", "CLOUDS", "SMOG", "FOGGY", "OVERCAST", "RAIN", "THUNDER", "CLEARING", "NEUTRAL"]
		this.currentWeather = {
			wind: {
				speed: getRandomInt(0, 10),
				dir: getRandomInt(0, 5)
			},
			rain: getRandomInt(0, 5),
			name: weathers[getRandomInt(0, weathers.length)]
		};
		player.call("Weather:SetWeather", [JSON.stringify(this.currentWeather)]);
	}
	call(player) {
		this.sendCurWeather(player);
		player.call("Weather:LoadAreas", [JSON.stringify(this._weathers)]);
	}
}
module.exports = WeatherManager;