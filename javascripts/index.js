/**
 * Initilize modal module.
 */

var angular = window.angular || require('angular');
var modal = angular.module('shoelace-modal', []);
var escape = require('on-escape');

/**
 * Tell other modules where to find the module
 */

modal.name = 'shoelace-modal';

/**
 * Append a unique element to `body`
 * as `modalGroup`. This lets IE7+
 * handle its contents properly.
 */

var body = angular.element(document.body);
var modalGroup = document.createElement('div');
modalGroup.id = 'sl-modal';
document.body.appendChild(modalGroup);

/**
 * Expose modal.
 */

exports = module.exports = modal;

/**
 * Define sl-modal directive.
 */

exports.directive('slModal', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var active = 'sl-modal-container'

      var content = element.next();
      content.remove();
      content = content[0];
      content.className += ' sl-modal';

      var container = document.createElement('div');
      container.className = active;
      container.appendChild(content);

      var bg = document.createElement('div');
      bg.className = 'bg';
      bg.onclick = close;
      container.appendChild(bg);

      var link = element;
      link.attr('href', 'javascript:;');
      link.bind('click', open);

      var delayShowHide = attr.delayShowHide;

      modalGroup.appendChild(container);

      scope.open = open;
      function open() {
        if (delayShowHide) {
          container.className = active + ' active';  
          setTimeout(function () {
            scope.slModalShowing = true;
            scope.$digest();
          }, delayShowHide);
          return
        }

        container.className = active + ' active';  
        scope.slModalShowing = true;
        try {
          scope.$digest();
        } catch (e){}
      }

      scope.close = close;
      function close() {
        if (delayShowHide) {
          scope.slModalShowing = false;
          setTimeout(function () {
            container.className = active;
            scope.$digest();
          }, 250);
          return
        }
        container.className = active;
        scope.slModalShowing = false;
        try {
          scope.$digest();
        } catch (e){}
      }

      escape(close);

      scope.$on('$destroy', function() {
        modalGroup.removeChild(container);
      });

    }
  };
});
