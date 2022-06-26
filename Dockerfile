FROM ubuntu:focal

ARG CLARINET_VERSION_ARG

RUN echo ${CLARINET_VERSION_ARG}
# Installing Clarinet binary
RUN apt-get update
RUN apt-get install wget make curl git -y --fix-missing  
RUN wget -nv "https://github.com/hirosystems/clarinet/releases/download/v${CLARINET_VERSION_ARG}/clarinet-linux-x64-glibc.tar.gz" -O clarinet-linux-x64.tar.gz
RUN tar -xf clarinet-linux-x64.tar.gz
RUN chmod +x ./clarinet
RUN mv ./clarinet /usr/local/bin

# Install NVM
RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
