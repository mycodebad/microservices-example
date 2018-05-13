var shell = require('shelljs');

shell.mkdir('dist/public/');
shell.cp('-R', 'src/public/js/lib', 'dist/public/js/');
shell.cp('-R', 'src/public/fonts', 'dist/public/');
shell.cp('-R', 'src/public/images', 'dist/public/');
shell.cp('-R', 'src/public/index.html', 'dist/public/index.html');
shell.cp('-R', 'src/public/css', 'dist/public/css');
