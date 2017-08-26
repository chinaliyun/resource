define(function(require) {
    var API = require('API');
    var $ = require('jquery');


    return {
        getImageList: function(){
            return $.get(API.imageList)
        }
    }
});
