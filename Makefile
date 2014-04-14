
PORT ?= 3000

build: components
	@component build

components:
	@component install

example: node_modules/.bin/serve build
	./node_modules/.bin/serve . --port $(PORT) &
	open http://localhost:$(PORT)/test/index.jade

node_modules/.bin/serve:
	npm install serve

tests: build
	@./node_modules/.bin/saucer test --local

.PHONY: example build
