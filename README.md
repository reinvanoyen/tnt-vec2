# tnt-vec2
## A simple ES6 vector2 class

This Vector2 class is probably not the fastest around, but is very easy in use. For example for quick prototyping of games.
For a high performance alternative that can do many calculations in for example a render loop, I'd like to redirect you to the awesome [gl-matrix](https://github.com/toji/gl-matrix) by toji.

### tnt-vec2 methods

* length()
* lerp( vec2, factor )
* dot( vec2 )
* normalize()
* cross( vec2 )
* rotate( deg )
* add( vec2|number )
* sub( vec2|number )
* mul( vec2|number )
* div( vec2|number )
* abs()
* equals( vec2 )