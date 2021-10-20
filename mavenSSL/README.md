###CryptoMaven App
#####Author: Thomas Maestas
#####Design: Application to compare trading pairs ETH-BTC-HEX-USDT
#####Technology
* Java Spring/Maven backend app
* PostgreSQL Data Layer, on AWS RDS
* UI: ThymeLeaf
* AWS EC2 Server hosting app

#####Envs: qa, dev, test, prod determine application.properties 
```shell
#spring.profile.active=qa
#spring.profile.active=dev
spring.profile.active=test
#spring.profile.active=prod
```

#####Env Instructions:
* dev: H2-console; Uncomment App Runner & DevOps classes.
* test: local PostgreSQL instance; localhost:5432/postgres
* prod: AWS; jdbc:postgresql://commuterlink.cmcadlepsyx9.us-east-1.rds.amazonaws.com:5432/rideforce #u: admin1 #pw: ${POSTGRES_PW}
* Comment DevOps & App Runner
