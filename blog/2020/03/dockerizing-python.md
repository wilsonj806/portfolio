---
title: Dockerizing A Python App
author: Wilson Jiang
created_at: 2020-03-30 17:47:10
estimated_read_time: '8 min'
year: 2020
---
import BlogBanner from '../../../src/components/BlogBanner.vue'

# {{ $frontmatter.title }}

<BlogBanner imgSrc='https://imgs.xkcd.com/comics/python_environment_2x.png'/>

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
`
  docker image ls
`
`docker image ls` lists all of the images currently available on your computer.

`
  docker container ls
`
`docker container ls` lists all currently started/ active containers.

```
  docker container ls -a
```
`docker container ls -a` lists all containers whether they've been started or if they're active. The `-a` flag is short for `--all`

```
  docker container rm <CONTAINER-IDS-OR-CONTAINER-NAMES>
```
`docker container rm` removes the listed containers. Note that you need either the first 3 symbols of the contaienr ID/ the container name AND the container can't be running before you remove a container.

```
  docker [COMMAND] --help
```
The help flag is super helpful and can be used with any command. It'll give you a list of options and also general instructions on how to use the commands.

## Setting Up the Docker Env
With that said, to set up a Docker env, we need a couple of things.
1. we need to make an image of our app for Docker to use
2. we need to somehow coordinate all of the databases that our app uses


For the first point, that's what a `Dockerfile` is for. A `Dockerfile` is a file that defines the command line arguments required to set up and run the app. In English, it's a file that specifies the bare minimum required to set up and run the app.

Below is an example of a `Dockerfile`:
```dockerfile
FROM python:3.8

WORKDIR /src

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["flask", "run", "--host", "0.0.0.0"]
```
### What's in the Dockerfile
So a quick overview of what everything is:

The first line specifies that we're basing our app's image from the Python 3.8 image
  - since we can build our image off of other images, we're taking full advantage of that
  - additional images can be found in [DockerHub](https://cloud.docker.com/repository/list)
  - we specify what tag/ version we want with a colon followed with the tag, so here `python:3.8` specifies **Python** at the **3.8** tag

The second line sets up the working directory for the container. This is important as that'll be where our app's files will live.

The third line copies the `requirements.txt` file into our working directory. We could copy everything all at once but there's actually an important reason we don't that'll be explained next.

The fourth line runs whatever command we listed. So here it's installing our Python packages from the `requirements.txt` file.
  - we do this separately as Docker caches any external packages that we might need, depending on changes in `requirements.txt`(or `package.json` for NPM)
  - if we didn't do that, then Docker would just end up dumping the cached packages everytime, wasting a lot of time that could have been saved

The fifth line copies the rest of the files from our app's directory into the working directory. If we wanted to, we could also add it to a different sub-directory and it'd look like so:
```dockerfile
COPY . ./my-subdirectory
```

The sixth line exposes a port for us to access the container. So it'd be port 5000 here.

The last line states the default command to execute on container start. Note that every part of the command is in an array.
- Note that this array of strings is the preferred way to do it, and that we **must** wrap each command fragment needs to be wrapped in double quotes(") as it's parsed as a JSON array

### Docker Compose
Cool, so what about databases. Sure we can run the database locally, but since Docker also has database images, we can actually run as many containers with our database on it as we want.

There's a big problem though, we don't want to manually create and start every single service that our app depends on. Sure it's fine if we have one database, but what we have two different databases and another app/ service that needs it's own database?

This is where `docker-compose` comes in(and Kubernetes as you scale up, but this is a different topic). Rather than having to manually start and create containers of the services your app depends on, you can use a `docker-compose.yml` file to automate large portions of that.

Check out the following link to an example [`docker-compose.yml` file](https://github.com/wilsonj806/nyc-tree-data-fetcher/blob/1b545fac7bde26135a3cc61681c46aaa3f912087/docker-compose.yml).

Sadly this won't be a full guide on making a Docker Compose file, but I'll overview the parts.

So in the file we have the below(plus or minus some comments):
```yml
version: '3.5' # Docker compose version
services:
  app:
    build:
      context: .
    # Binding the current working directory to the new container
    volumes:
      - .:/
    # The working directory in the app Dockerfile
    working_dir: ''
    command: ''
    links:
      - app-redis
    # ENV configuration
    env_file: .env
    # Additional app secrets
    environment:
      APP_TOKEN: /run/secrets/app_token
    secrets:
      - app_token
    ports:
      - '5000:5000'
  app-redis:
    image: redis:5
    ports:
      - '6379:6379'
# App secret registration
secrets:
  app_token:
    file: app_token.txt
```
Broadly speaking there are three major parts to the compose file:
- the version of Docker Compose we want
  - specifying the version of Docker Compose is important as certain properties aren't available in other versions, check the [Docker Compose v3 docs](https://docs.docker.com/compose/compose-file/) for more
- registering services
- registering container secrets


Within the section for registering our services, we have the below:
- configuring our Python app container
  - **linking** our container to another service(Redis)
  - binding our working directory so that we can live update the container
  - adding an .env file
  - adding our app secret
  - exposing ports and start command
- configuring out Redis container
  - adding the image to build the container from
  - exposing ports

Note that the `links` property is there to explicitly say that the `app-redis` service is a dependency for our Python app. It means that we access our database differently in our Flask app than normal but we'll get to that.

## Required Updates to Our Python App
Now that we have out `docker-compose.yml` file up, we can't access our Redis instance the same way we might think. So rather than using `localhost` to have our Python app access our Redis instance, we need to update it so that it uses the service name instead like so:
```py
# Fetch.py
# Std lib imports
import os
import json
from pathlib import Path

## Lib Imports
import redis
import requests
from dotenv import load_dotenv

# Global Module Var
isDocker = os.getenv('IS_DOCKER')

cacheHost = 'app-redis'
# ...Extra code
red_cache = redis.Redis(host = cacheHost, port = 6379)
# ...Rest of the module's implementation
```

Pretty quick and easy, and with that we can run `docker-compose up` inside our app directory and start the Flask app.

## Conclusion
So we summarized how to quickly Dockerize a Python app. This involved the below:
1. creating a Dockerfile with:
  - the image we're basing the app off of
  - the contents we're copying
  - any terminal commands we want to run
  - a startup command
  - a port to expose
2. creating a `docker-compose.yml` file which had:
  - the version of Docker Compose
  - a list of the services that will be created and run
    - said services will need to specify if they're linked to one another
    - in addition, the service with our Python app had additional .env and secret setup
  - any secrets we wanted in our app

The end result is an app whose dependencies are fulfilled by Docker *rather than* the local machine. This results in a development environemnt that performs and is set up *consistently* every single time.