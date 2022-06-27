# Stacks-Hello-World-Tutorial

LAST KNOWN GOOD BUILD: xx/xx/2022

CURRENTLY WORK-IN-PROGRESS

A simple Hello World app for the Stacks community. Probably the only one that actually works.

The goal of this repository is to act as a resource to give green developers an instant 
start in development of Stacks apps.

## Quickstart w/ Docker

### Requirements

- Make
- Docker

```
make quickstart
```

## Goals

- basic hello world app that can explain itself
- NEVER regresses, should work every. single. time.
- ✅ BDD automated testing with Cypress, Cucumber and Cucumber-preprocessor
- ✅ live reload development with webpack
- ✅ TypeScript, but vanilla, breaking out of React
- ✅ dockerized development environment (vscode devcontainer) w/ clarinet installed (v0.32.0)
- ✅ make build system
- Unit tests with Jest
- basic jenkins build steps


## VS Code Devcontainer

If you're using VS Code it will detect and ask to open the repo inside a devcontainer, ./Dockerfile

Once the terminal is available, for a live-reload dev environment type;

```
make start-frontend
```

... and now visit http://localhost:8080 in your browser.


## Thanks

Special thank you to unclemantis.btc who kindly took the time to take me through the ecosystem on the Discord server.
Many others that didn't run and stepped up; friedger.btc, Hero Gamer, diwaker, kennny, BowTiedDeveloper, will.btc, a.haun

Code sampled from the Todo, extended Todo, Billboard examples

## References

- https://www.youtube.com/watch?v=zERDftjl6k8 (billboard-message demo)
- https://dev.to/krgrs/built-on-bitcoin-an-introduction-to-full-stack-web3-development-with-stacks-me9