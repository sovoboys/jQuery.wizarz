/*
 *  jQuery.wizarz.js
 *
 *  Copyright 2018, Phongphatt Cheewahkidakarn - https://www.sovoboys.net/about/ihut
 *  Released under the WTFPL license
 *  http://www.wtfpl.net/
 *
 *  Github: https://github.com/sovoboys/jQuery.wizarz
 *  Version: 0.0.0
 */

(function($){
$.fn.wizarz = function(options, param2){

  // handle given params
  if (typeof options == typeof function(){}) {
    options = {render: options};
  } else if (typeof options != typeof {}) {
    options = {};
  }
  if (typeof param2 == typeof function(){}) {
    options.fail = param2;
  }

  // merge params with default settings
  let settings = $.extend({
    testo: null,
  }, options);

  //************ private *******************************************************

  let
    testo = null
  ;

  //****************************************************************************

  this.each(function() {
    let
      $self = $(this)
    ;
  });
  return this
};
}(jQuery));
