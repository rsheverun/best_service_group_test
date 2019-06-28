## Deploy for development
```bash
cp .env.example .env
```
change .env to your settings

install dependencies
```bash
composer install
composer dump-autoload
```

add tables to db
```bash
 php artisan migrate
 php artisan db:seed
```

create the encryption keys needed to generate secure access tokens
```bash
php artisan passport:install
```

install javascript dependencies
```bash
npm install
npm run production
```

run dev server
```bash
php artisan serve
```

##Demo user
email: test@test.test
username: test
password: 123qwe