setup:
	@docker build -f ./Dockerfile --output dockeroutput --build-arg 'CLARINET_VERSION_ARG=0.32.0' -t stacks-quickstart .

quickstart: setup # run

clean:
	@echo "cleaning"

run: start-backend start-fronend

start-backend:
	yarn run x

start-frontend:
	yarn run x