<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

//clonar repositorio
git clone https://github.com/JavieSanchezB/CRUD-VUEJS.git
//entra en la caperta de proyecto
cd CRUD-VUEJS
//Instalar laravel
composer install
//crear archivo de conifuracion de la BD local
cp .env.example .env
//Generar la key
php artisan key:generate
//instalar laravel ui
composer require laravel/ui
php artisan ui vue
//instalar vue-router y vue-axios
npm install vue-router vue-axios
//instalar paquetes
npm install