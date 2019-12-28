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