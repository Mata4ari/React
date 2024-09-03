var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Product = /** @class */ (function () {
    function Product(id, size, color, cost) {
        this.color = color;
        this.cost = cost;
        this.id = id;
        this.size = size;
        this.discount = 0;
    }
    Object.defineProperty(Product.prototype, "finalCost", {
        get: function () {
            this._finalCost = this.cost - this.discount * this.cost;
            return this._finalCost;
        },
        set: function (cost) {
            if (cost <= this.cost)
                this.discount = (this.cost - cost) / this.cost;
            if (cost > 0)
                this._finalCost = cost;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var Products = /** @class */ (function () {
    function Products(shoes) {
        this.shoes = shoes;
    }
    Products.prototype.addShoes = function (shoesType, id, size, color, cost) {
        if (shoesType !== 'boots' && shoesType !== 'sandali' && shoesType !== 'krossovki')
            console.log('Неправильная категория товара');
        var product = new Product(id, size, color, cost);
        this.shoes[shoesType].push(product);
    };
    Products.prototype.selectByCost = function (min, max) {
        console.log('Товары по заданной цене:');
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.cost >= min && item.cost <= max)
                console.log(item.id);
        }
    };
    Products.prototype.selectByColor = function (color) {
        console.log('Товары по заданному цвету:');
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.color.toUpperCase() === color.toUpperCase())
                console.log(item.id);
        }
    };
    Products.prototype.selectBySize = function (size) {
        console.log('Товары по заданному размеру:');
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.size === size)
                console.log(item.id);
        }
    };
    Products.prototype[Symbol.iterator] = function () {
        var index = 0;
        var arr = __spreadArray(__spreadArray(__spreadArray([], this.shoes.boots, true), this.shoes.krossovki, true), this.shoes.sandali, true);
        return {
            next: function () {
                return index < arr.length
                    ? { value: arr[index++], done: false }
                    : { done: true, value: undefined };
            }
        };
    };
    return Products;
}());
var products = new Products({ boots: [], sandali: [], krossovki: [] });
products.addShoes('boots', 1, 42, 'black', 2500);
products.addShoes('boots', 4, 43, 'blue', 2750);
products.addShoes('sandali', 2, 39, 'white', 1500);
products.addShoes('sandali', 3, 38, 'pink', 1700);
products.addShoes('krossovki', 8, 40, 'green', 3000);
products.addShoes('krossovki', 10, 41, 'black', 2950);
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var i = products_1[_i];
    console.log(i);
}
products.selectByCost(1000, 2000);
products.selectByColor('black');
products.selectBySize(40);
products.shoes.boots[0].finalCost = 1500;
console.log('\n' + products.shoes.boots[0].discount);
