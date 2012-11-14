/**
 * @fileOverview Utilities
 * @author <a href="mailto:leonardseymore@gmail.com">Leonard Seymore</a>
 */

"use strict";

/**
 * @class Utilties
 * @constructor
 */
function Util() {

  /**
   * Change the page header via JavaScript
   * @param text The value to use for the page header
   */
  this.setPageHeader = function(text) {
    $("#pageHeader").html(text);
  }
}
var util = new Util();

