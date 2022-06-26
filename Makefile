setup:
	@docker build -f ./Dockerfile --output dockeroutput --build-arg 'CLARINET_VERSION_ARG=0.32.0' -t stacks-quickstart .

setup-frontend: 
	bash -c -i "cd frontend && nvm install && nvm use && npm install -g yarn && yarn install"

quickstart: setup # run

clean:
	@echo "cleaning"

run: start-backend start-frontend

check-backend:
	@clarinet check

test-backend:
	@clarinet test

test-backend-watch:
	@clarinet test --watch

start-backend:
	yarn run x

build-frontend:
	bash -c -i "cd frontend && nvm install && nvm use && npm install -g yarn && yarn run build" 

start-frontend:
	bash -c -i "cd frontend && nvm install && nvm use && npm install -g yarn && yarn run start"
