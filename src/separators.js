'use strict';

function thousands_separators(num) {
  	var re = /\d{1,3}(?=(\d{3})+$)/g;
  	num = num.toString();
	return num.replace(/^(\d+)((\.\d+)?)$/,function(str,a,b){return a.replace(re,"$&,")+b;});
}

module.exports = thousands_separators;
