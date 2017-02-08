'use strict';

(function(){ 
// ========================================================
// App 
// ========================================================
var App = function() {
	new Routes();
}

// ========================================================
// Routes 
// ========================================================
var Routes = function() {
	new View();

	window.onhashchange = function() {
		new View();
	}
}

// ========================================================
// View 
// ========================================================
var View = function() {
	this.toggle();
}

View.prototype.toggle = function() {
	this.hideClass = 'js-hide';
	this.activeViewEl = document.querySelector(window.location.hash);
	this.viewEl = document.getElementsByClassName('view');

	for (var i = 0; i < this.viewEl.length; i++) {
		if(this.activeViewEl.id == this.viewEl[i].id) {
			this.viewEl[i].classList.remove(this.hideClass);
		} else {
			this.viewEl[i].classList.add(this.hideClass);
		}
	}
}

new App();

}()); 