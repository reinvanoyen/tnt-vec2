"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2 = function () {
	function Vector2(x, y) {
		_classCallCheck(this, Vector2);

		this.x = x;
		this.y = y;
	}

	_createClass(Vector2, [{
		key: 'length',
		value: function length() {

			return Math.sqrt(Math.abs(this.x * this.x + this.y * this.y));
		}
	}, {
		key: 'lerp',
		value: function lerp(v, factor) {
			return v.sub(this).mul(factor).add(this);
		}
	}, {
		key: 'dot',
		value: function dot(v) {
			return this.x * v.x + this.y * v.y;
		}
	}, {
		key: 'normalize',
		value: function normalize() {

			var len = this.length();

			if (len > 0) {

				len = 1 / Math.sqrt(len);

				return new Vector2(this.x * len, this.y * len);
			}

			return this;
		}
	}, {
		key: 'cross',
		value: function cross(v) {
			return this.x * v.y - this.y * v.x;
		}
	}, {
		key: 'rotate',
		value: function rotate(angle) {

			var rad = angle * Math.PI / 180;
			var cos = Math.cos(rad);
			var sin = Math.sin(rad);

			return new Vector2(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
		}
	}, {
		key: 'add',
		value: function add(v) {

			if (typeof v === 'number') {

				return new Vector2(this.x + v, this.y + v);
			}

			return new Vector2(this.x + v.x, this.y + v.y);
		}
	}, {
		key: 'sub',
		value: function sub(v) {

			if (typeof v === 'number') {

				return new Vector2(this.x - v, this.y - v);
			}

			return new Vector2(this.x - v.x, this.y - v.y);
		}
	}, {
		key: 'mul',
		value: function mul(v) {

			if (typeof v === 'number') {

				return new Vector2(this.x * v, this.y * v);
			}

			return new Vector2(this.x * v.x, this.y * v.y);
		}
	}, {
		key: 'div',
		value: function div(v) {

			if (typeof v === 'number') {

				return new Vector2(this.x / v, this.y / v);
			}

			return new Vector2(this.x / v.x, this.y / v.y);
		}
	}, {
		key: 'abs',
		value: function abs() {

			return new Vector2(Math.abs(this.x), Math.abs(this.y));
		}
	}, {
		key: 'equals',
		value: function equals(v) {

			return this.x === v.x && this.y === v.y;
		}
	}, {
		key: 'angle',
		value: function angle() {
			return Math.atan2(this.y, this.x);
		}
	}]);

	return Vector2;
}();

exports.default = Vector2;