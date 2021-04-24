# iframes-communitcation

It is available several ways to start the project. Pick the on that suits you the best.
## Manual setup

```sh
yarn install
yarn serve-parent # http://localhost:8080
yarn serve # http://localhost:8081
yarn serve # http://localhost:8082
```

Then open http://localhost:8080 to test the communication between iframes.

## docker-compose setup

```sh
# install dependencies and start containers
docker-compose up -d

# stop and remove containers
docker-compose down
```

## Makefile setup
It uses docker-compose under the hood 

```sh
# install dependencies and start containers
make up

# stop and remove containers
make down
```