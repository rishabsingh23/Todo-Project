After cloning this repository.

RUN composer install
RUN cp .env.example .env
Please first create the database and put the credentials of the database in the .env file. like: Database name, Username and Passowrd.
RUN php artisan migrate
RUN npm install
These below two commands are necessary to run the project.
RUN php artisan serve
RUN npm run dev
