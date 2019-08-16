# GamerRecruiter

myApp in Angular
restApi in SpringBoot

to build and deploy, 

ng build --prod on myApp

mvn clean install on restApi, it will copy dist from myApp to static folder

java -jar xxxx.jar to start server


Docker:
	
	build docker image for angular app:
	
	docker image build -t gamer-rec-app .
	
	build docker image for spring boot rest-api
	
	docker image build . -t gamer-rec-restapi
	
	run container: 
	
	docker container run -d -p 8080:8080 gamer-rec-restapi
	
	docker container run -p 3000:80 -d gamer-rec-app
	
	go to localhost:3000
	
