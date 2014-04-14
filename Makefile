
PORT ?= 3000

example: node_modules/.bin/serve
	./node_modules/.bin/serve . --port $(PORT) &
	open http://localhost:$(PORT)/test/index.jade

node_modules/.bin/serve:
	npm install serve

.PHONY: example
