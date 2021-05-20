# Git import
```
git clone https://github.com/Les-Croustillons/DataPlay---Les-Croustillons.git 

```
# Git branch
```
git checkout [brNathalie]
git branch
git merge main
git status

```
# Git push
```
git add .
git commit -m "first commit"
git branch -M main
git push -u origin main
git push origin main
git push origin [brNathalie]
```
# Gulp starter

All packages are configured in the package.json.  
Run `npm install` or manually install the following modules.

## Install basic packages
```
npm init
npm install --save-dev gulp
npm install --save-dev gulp-sass
```

## Install packages for SASS and CSS
```
npm install --save-dev gulp-sourcemaps
npm install --save-dev gulp-postcss
npm install --save-dev autoprefixer
npm install --save-dev cssnano
```

## Install Javascript
```
npm install --save-dev gulp-babel
npm install --save-dev gulp-concat
npm install --save-dev gulp-uglify
```

## Install browsersync
```
npm install --save-dev browser-sync
```

## Install imagemin
```
npm install --save-dev gulp-imagemin
```

## Install eslinter
```
npm install --save-dev gulp-eslint
./node_modules/.bin/eslint --init
```
