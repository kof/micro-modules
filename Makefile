
build:
	./node_modules/.bin/uglifyjs < ./index.js > ./micro-modules.min.js --comments license
	./node_modules/.bin/xpkg .


.PHONY: build
