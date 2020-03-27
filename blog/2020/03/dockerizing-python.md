---
title: How I Upgraded My Portfolio
author: Wilson Jiang
created_at: 2020-02-24 17:47:10
year: 2020
wip: true
---
# Dockerizing a Python app
![relevant xkcd](https://imgs.xkcd.com/comics/python_environment_2x.png)

Python's one of the more popular programming languages with a wide variety of applications, from building backends to creating a neural network. However, keeping your Python environment consistent between projects can be a pain as seen from the above.

This is where Docker comes in. Docker allows for containerization of applications, which means you can run isolated instances of your services and applications. In addition, Docker gives you the ability to connect your apps and services together with Docker Compose, which makes Python apps very convenient to build.

Note that all the code referenced in this article comes from this [Github repo](https://github.com/wilsonj806/nyc-tree-data-fetcher/tree/0-special.release). This is a live app, and while the code in that particular release is **not** production ready, it still can run everything through Docker.

## What's Docker?
What is Docker anyways? I went over it briefly above, and as mentioned, it's software that lets you containerize apps and services. The benefit of it is that instead of installing and using multiple versions of Python and managing multiple virtual environments, you can have Docker build each app separately with their own isolated environments.

This means we don't need to run `python -m venv venv` every time we build a new project, so as long as we setup a `DockerFile` and a `docker-compose.yml` file.

### Images, Containers and Composing
Cool so with that out of the way, we need to overview some quick vocab.

First is Docker images. An image in Docker, is basically an immutable "snapshot" of an app. It includes instructions to start the app in a new container, and can be built using other images. The immutability is important as it allows us to have multiple versions of the same app, without having the version of the image collide.

Second is Docker containers. A Docker container is the instance of the app that we run based off of our image. It's analogous to a reproduction of the aforementioned "snapshot" and cannot be shared. We can however, spin up as many Docker containers of a particular image as we want, which is super handy for databases and similar services!

## Installing Docker
If you don't have it already, you'll need to install [Docker Desktop](https://www.docker.com/products/docker-desktop). If you already have it and know how to go through it, then you can skip to the [next section]().

I'll also briefly go over some of the commands you can run with the Docker CLI.
```
  docker image ls
```
`docker image ls` lists all of the images currently available on your computer.

```
  docker container ls
```
`docker container ls` lists all currently started/ active containers.

```
  docker container ls -a
```
`docker container ls -a` lists all containers whether they've been started or if they're active. The `-a` flag is short for `--all`

```
  docker container rm <first 3 symbols of the container ID or container name> [...other containers you want to remove]
```
`docker container rm` removes the listed containers. Note that you need either the first 3 symbols of the contaienr ID/ the container name AND the container can't be running before you remove a container.

```
  docker [COMMAND] --help
```
The help flag is super helpful and can be used with any command. It'll give you a list of options and also general instructions on how to use the commands.

## Setting Up the Docker Env
