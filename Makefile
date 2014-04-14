
PORT ?= 3000

example:
	./node_modules/.bin/serve . --port $(PORT) &
	open http://localhost:$(PORT)/test/index.jade

.PHONY: example
