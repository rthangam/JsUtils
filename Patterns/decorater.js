var defaultAmount = 100;

var Bill = function() {
    return {
        getPrice: function() {
            return defaultAmount;
        }
    }
};

var Vat = function(obj) {
    return {
        getPrice: function() {
            return obj.getPrice() + 0.15 * obj.getPrice();
        }
    }
};

var ServiceTax = function(obj) {
    return {
        getPrice: function() {
            return obj.getPrice() + 0.05 * obj.getPrice();
        }
    }
};

var bill = new Bill();

bill = new Vat(bill);

bill = new ServiceTax(bill);

console.log(bill.getPrice());