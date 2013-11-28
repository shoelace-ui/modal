/**
 * Initilize modal module.
 */

var angular = window.angular || require('angular');
var modal = angular.module('shoelace-modal', []);

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
      link.on('click', open);

      modalGroup.appendChild(container);

      scope.open = open;
      function open() {
        container.className = active + ' active';
      }

      scope.close = close;
      function close() {
        container.className = active;
      }

      scope.$on('$destroy', function() {
        document.body.removeChild(container);
      });

    }
  };
});
