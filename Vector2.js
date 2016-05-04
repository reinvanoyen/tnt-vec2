"use strict";

class Vector2 {

	constructor ( x, y ) {

		this.x = x;
		this.y = y;
	}

	length() {

		return Math.sqrt( Math.abs( this.x * this.x + this.y * this.y ) );
	}

	lerp( v, factor ) {

		return v.sub( this ).mul( factor ).add( this );
	}

	dot( v ) {

		return ( this.x * v.x ) + ( this.y * v.y );
	}

	normalize() {

		let len = this.length();

		if( len > 0 ) {

			len = 1 / Math.sqrt( len );

			return new Vector2( this.x * len, this.y * len );
		}

		return this;
	}

	cross( v ) {

		return ( this.x * v.y ) - ( this.y * v.x );
	}

	rotate( angle ) {

		let rad = angle * Math.PI / 180;
		let cos = Math.cos( rad );
		let sin = Math.sin( rad );

		return new Vector2( this.x * cos - this.y * sin, this.x * sin + this.y * cos );
	}

	add( v ) {

		if( typeof v === 'number' ) {

			return new Vector2( this.x + v, this.y + v );
		}

		return new Vector2( this.x + v.x, this.y + v.y );
	}

	sub( v ) {

		if( typeof v === 'number' ) {

			return new Vector2( this.x - v, this.y - v );
		}

		return new Vector2( this.x - v.x, this.y - v.y );
	}

	mul( v ) {

		if( typeof v === 'number' ) {

			return new Vector2( this.x * v, this.y * v );
		}

		return new Vector2( this.x * v.x, this.y * v.y );
	}

	div( v ) {

		if( typeof v === 'number' ) {

			return new Vector2( this.x / v, this.y / v );
		}

		return new Vector2( this.x / v.x, this.y / v.y );
	}

	abs() {

		return new Vector2( Math.abs( this.x ), Math.abs( this.y ) );
	}

	equals( v ) {

		return ( this.x === v.x && this.y === v.y );
	}
}

module.exports = Vector2;