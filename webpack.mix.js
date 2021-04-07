const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['resources/js/components/carousel/carousel.js', 
'resources/js/components/bars/imagebar/imagebar.js',
'resources/js/components/bars/navbar/navbar.js',
'resources/js/components/bars/searchbar/searchbar.js',
'resources/js/components/bars/sidebar/sidebar.js',
'resources/js/components/bars/toolbar/toolbar.js',
'resources/js/components/buttons/anchorButton.js',
'resources/js/components/buttons/closeButton.js',
'resources/js/components/buttons/menuButton.js',
'resources/js/components/buttons/navButton.js',
'resources/js/components/buttons/nextButton.js',
'resources/js/components/buttons/previousButton.js',
'resources/js/components/logo/logo.js',
'resources/js/components/paragraph/p1.js',
'resources/js/components/storyBoard/story.js',
'resources/js/components/storyBoard/storyBackface.js',
'resources/js/components/storyBoard/storyImage.js',
'resources/js/components/typography/bodyfont/label.js',
'resources/js/components/typography/businessCard/businessCard.js',
'resources/js/components/typography/h1/h1.js',
'resources/js/components/typography/h2/h2.js',
'resources/js/components/typography/scrollPad/scrollPad.js',
'resources/js/components/typography/textBoard/textBoard.js'],
'public/js')
    .sass('resources/scss/style.scss', 'public/css', [
    ])
    .sass('resources/scss/fonts.scss', 'public/css', [
    ]);
