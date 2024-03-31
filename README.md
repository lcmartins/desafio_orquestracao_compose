# This project is about having an app (node) that inserts and retrieves all records from people table in mysql and in from of that app we have another container (nginx) that proxies the call to / to node application

## RUN: docker-compose up -d --build
### checking image result
for that after issue command: `docker ps` you should see an image like the bellwo

![image](https://github.com/lcmartins/desafio_orquestracao_compose/assets/13166685/4826940b-9aec-4f4d-9055-4e304881b48d)

after seen the above image you can go to localhost on your browser and should seen an image like that:

![image](https://github.com/lcmartins/desafio_orquestracao_compose/assets/13166685/48d9bb92-65d1-4668-b16a-55004d37cd6e)


so every time you refresh the page, nginx that is listening on port 80 proxies the call to node app (port 3000) and a new name is inserted and all records are retrieved from db
