Setting up:
clone
cd into the directory
install composer.exe

composer install
npm install
cp .env.example .env
php artisan key:generate

For migartions:
cd backend
set DB: laravel_mediquick
php artisan migrate
composer dump-autoload

php artisan db:seed --class=StatusTableSeeder
php artisan db:seed --class=UserRoleTableSeeder

docker run --name my-own-phpmyadmin -d --link mysql_database:db -p 8081:80 --net mediquick-find-medicines-nearby_default phpmyadmin/phpmyadmin