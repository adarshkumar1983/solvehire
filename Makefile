include .env
.PHONY: prod 

prod: 
	docker-compose --project-name ${SERVICE_NAME} -f docker-compose.yml up -d --build --remove-orphans