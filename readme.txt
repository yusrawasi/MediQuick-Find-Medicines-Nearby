DB: laravel_mediquick
php artisan migrate
composer dump-autoload

php artisan db:seed --class=StatusTableSeeder
php artisan db:seed --class=UserRoleTableSeeder