/**
 * @fileOverview Sample application
 * @author <a href="mailto:leonardseymore@gmail.com">Leonard Seymore</a>
 */

"use strict";

/**
 * @class Main class
 * @constructor
 */
function ProjectjsApp() {

  /**
   * Self reference
   */
  var self = this;

  /**
   * Application name
   * @type {string} The application name
   */
  this.appName = "@app.name@";

  /**
   * Application version
   * @type {string} The application version
   */
  this.appVersion = "@app.version@";

  /**
   * App cache reference, undefined if not supported
   */
  var appCache = undefined;

  var initAppCache = function () {
    if (window.applicationCache) {
      appCache = window.applicationCache;
      appCache.addEventListener("updateready", function () {
        if (appCache.status == appCache.UPDATEREADY) {
          appCache.swapCache();
          if (confirm("New application version is available, reload page now?")){
            window.location.reload();
          }
        }
      }, false);
      appCache.addEventListener("error", function (e) {
        //TODO: use this event
        console.log("Application cache error: %o", e);
      });
    }
  };

  var initAjaxErrorHandler = function () {
    $(document).ajaxError(function (e, jqxhr) {
      if (jqxhr.status == 408 || jqxhr.status == 504) { // network timeout exception
        // TODO: use this event
      }
    });
  };

  $(window).load(function () {
    initAppCache();
    initAjaxErrorHandler();
  });
}
var projectjsApp = new ProjectjsApp();
