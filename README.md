#shoelace-modal

Elegant modals for angular

[![Selenium Test Status](https://saucelabs.com/browser-matrix/shoelace-modal.svg)](https://saucelabs.com/u/shoelace-modal)

<img src='http://i.imgur.com/pnfcnGe.png' height='100' style='float: left;'/>
<img src='http://i.imgur.com/KfcDv1r.png' height='100' style='float: left;'/>

## Markup

From `test.jade`:

```jade
mixin label(group, name)
  label #{name}:
    input(data-ng-model="#{group}.#{name}")

section(data-ng-init="info1 = {header: 'info 1', content: 'content 2'}",
        data-sl-modal)
  em.
    Click anywhere to open.
  +label('info1', 'header')
  +label('info1', 'content')
div
  +label('info1', 'header')
  +label('info1', 'content')

section(data-ng-init="info2 = {header: 'info 2', content: 'content 2'}")
  em.
    Click button to open.
  +label('info2', 'header')
  +label('info2', 'content')
  button(data-ng-click="open()") OPEN 1
  button(data-sl-modal) OPEN 2
  div.test
    +label('info2', 'header')
    +label('info2', 'content')
    button(data-ng-click="close()") CLOSE
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
