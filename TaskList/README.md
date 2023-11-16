<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# TaskList

## Backend

### Installation:

Clon the repository

```
git clone https://github.com/rcarcole/projectShow2k23.git
```

Go into TaskList:

```
cd projectShow2k23/TaskList
```

Install dependences:

```
composer install
```

Run docker containers:

```
./vendor/bin/sail up -d
```

Copy .env.example to .env

```
cp .env.example .env
```

Execute this command to generate `APP_KEY`:

```
php artisan --no-ansi key:generate --show
```

Copy the generated key and paste in the .env file

Adapt `DB_USERNAME DB_PASSWORD`

Execute migrations:

```
php artisan migrate
```

Execute seeders:

```
php artisan db:seed --class=UserSeeder
php artisan db:seed --class=CategorySeeder
php artisan db:seed --class=TaskSeeder

```
