var tractor = init();

/**
 * Define module elements.
 */

var section = tractor.findElement(protractor.By.css('[data-sl-modal]'))
var container = tractor.findElement(protractor.By.css('.sl-modal-container'));
var bg = tractor.findElement(protractor.By.css('.sl-modal-container .bg'));
var openHandle = tractor.findElement(protractor.By.css('[data-ng-click="open()"]'));

/**
 * Run tests.
 */

describe('shoelace-modal', function() {
  afterEach(function() {
    screenshot();
  });

  it('should not be displayed on load', function() {
    expect(container.getCssValue('display')).toEqual('none');
  });

  it('should be displayed on click', function() {
    section.click();
    expect(container.getCssValue('display')).toEqual('block');
  });

  it('should hide when clicking on the background', function() {
    bg.click();
    expect(container.getCssValue('display')).toEqual('none');
  });

  it('should open when calling `open()`', function() {
    openHandle.click();
    /* expect(container.getCssValue('display')).toEqual('block'); */
  });
});
