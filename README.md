#shoelace-modal

Elegant modals for angular

[![Selenium Test Status](https://saucelabs.com/browser-matrix/shoelace-modal.svg)](https://saucelabs.com/u/shoelace-modal)

<img src='http://i.imgur.com/pnfcnGe.png' height='90' style='float: left; padding: 10px; margin: 10px; border: 1px solid #ccc;'/>
<img src='http://i.imgur.com/KfcDv1r.png' height='90' style='float: left; padding: 10px; margin: 10px; border: 1px solid #ccc;'/>
<img src='http://i.imgur.com/oSxki9A.png' height='90' style='float: left; padding: 10px; margin: 10px; border: 1px solid #ccc;'/>
<img src='http://i.imgur.com/qlHnqhr.png' height='90' style='float: left; padding: 10px; margin: 10px; border: 1px solid #ccc;'/>

## Markup

From `test.jade`:

```html
<section data-ng-init="info1 = {header: 'info 1', content: 'content 2'}" data-sl-modal="data-sl-modal"><em>Click anywhere to open.</em>
  <label>header:
    <input data-ng-model="info1.header"/>
  </label>
  <label>content:
    <input data-ng-model="info1.content"/>
  </label>
</section>
<div>
  <label>header:
    <input data-ng-model="info1.header"/>
  </label>
  <label>content:
    <input data-ng-model="info1.content"/>
  </label>
</div>

<section data-ng-init="info2 = {header: 'info 2', content: 'content 2'}"><em>Click button to open.</em>
  <label>header:
    <input data-ng-model="info2.header"/>
  </label>
  <label>content:
    <input data-ng-model="info2.content"/>
  </label>
  <button data-ng-click="open()">OPEN 1</button>
  <button data-sl-modal="data-sl-modal">OPEN 2</button>
  <div class="test">
    <label>header:
      <input data-ng-model="info2.header"/>
    </label>
    <label>content:
      <input data-ng-model="info2.content"/>
    </label>
    <button data-ng-click="close()">CLOSE</button>
  </div>
</section>
```

## Development

### Build

To build, use [shoelace(1)](https://github.com/shoelace-ui/modal).

### Tests

To test, use [saucer(1)](https://github.com/mvanasse/saucer).

If you would like to test with sauce labs you will need to export:

```sh
export SAUCE_USERNAME=my-sauce-username
export SAUCE_ACCESS_KEY=my-sauce-access-key
```

Now you can run:

```sh
npm install saucer-js -g
saucer test
```

To test locally run:

```sh
saucer test --local
```
