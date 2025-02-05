 !!prérequis !!
Java 17
Node.js
Maven
Angular CLI (npm install -g @angular/cli)


pour le backend :
cmd -> cd ngsign-backend -> mvn clean spring-boot:run
ou bien l'ouvrir avec un IDE -> maven -> clean -> run

API endpoint : http://localhost:8081/users
H2 console : http://localhost:8081/h2-console
JDBC URL: jdbc:h2:mem:testdb
Username: sa
Password: (vide)

pour le frontend : 
cmd -> cd frontend -> npm install (optional) -> ng serve --open

s'ouvre http://localhost:4200
