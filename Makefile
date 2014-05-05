
PORT  ?= 3000
SERVE ?= ./node_modules/.bin/serve

test: $(SERVE)
	open http://localhost:$(PORT)/$(@D)/index.jade
	$^ . --port $(PORT)

$(SERVE):
	npm install $(notdir $@)

.PHONY: $(SERVE)
