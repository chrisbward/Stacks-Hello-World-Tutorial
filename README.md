# Stacks-Hello-World-Tutorial

LAST KNOWN GOOD BUILD: xx/xx/2022

CURRENTLY WORK-IN-PROGRESS

A simple Hello World app for the Stacks community. Probably the only one that actually works.

The goal of this repository is to act as a resource to give green developers an instant 
start in development of Stacks apps.

## Goals

- basic hello world app that can explain itself
- NEVER regresses, should work every. single. time.
- BDD automated testing with Cypress, Cucumber and Cucumber-preprocessor
- Unit tests with Jest
- live reload development with webpack
- typescript
- dockerized development environment (vscode devcontainer) w/ clarinet installed
- make build system
- basic jenkins build steps

## Quickstart w/ Docker

### Requirements

- Make
- Docker

```
make quickstart
```


## VS Code Devcontainer

VS Code should automatically open the repo inside a devcontainer, ./Dockerfile

Once the terminal is available, for a live-reload dev environment type;

```
make start-frontend
```

... and now visit http://localhost:8080 in your browser.



## Thanks

Special thank you to unclemantis.btc who kindly took the time to take me through the ecosystem on the Discord server.


## References

- https://www.youtube.com/watch?v=zERDftjl6k8 (billboard-message demo)
- https://dev.to/krgrs/built-on-bitcoin-an-introduction-to-full-stack-web3-development-with-stacks-me9