var Car = function(options) {
	this.color = options.color || 'green';
	this.doors = options.door || 4;
};

var Truck = function(options) {
	this.color = options.color || 'yellow';
	this.brand = options.brand || 'old';
	this.wheels = options.wheels || 8;
};

var CarFactory = function() {};

CarFactory.prototype.vehicleClass = Car;

/**
 * @param  {[type]}
 * @return {[type]}
 */
CarFactory.createVehicle = function(type, options) {
	// body... 

	switch (type) {
		case 'car':
			this.vehicleClass = Car;
			break;
		case 'truck':
			this.vehicleClass = Truck;
			break;
		default:

			break;
	}

	return new this.vehicleClass(options);
};

var truck = CarFactory.createVehicle('truck', {
	color: 'Silver',
	brand: 'Brand new',
	wheels: '12'
});

console.log(truck);