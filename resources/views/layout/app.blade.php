<!DOCTYPE html>
<html lang="eng">
    <head>
        <meta charset="UTF-8">
        @stack('stylesheets')
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Home</title>
    </head>
    <body>
        @yield('content')
        @stack('scripts')
    </body>
</html>