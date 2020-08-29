# 🎨 Color Cooper

> **Get colors from your favorite pictures**

Color cooper allows you to easily extract the dominant colors from your own images. The app was built with privacy in mind - all of the magic happens in your browser, no background servers are involved. 

It also offers some other, smaller features, such as

- Explicitly define how many colors you want to extract
- Changing the colors you've found afterwards
- Copying to clipboard & randomization
- Add colors to a temporary collection 
- Make colors brighter and darker 
- Save your collection in csv format

## Demo

https://color-cooper.herokuapp.com/

## Project setup ( Development )

To run Color Cooper, you need to have [Node.js](https://nodejs.org/en/) installed on your mashine. 

```
$ git clone https://github.com/EarthenLynx/color-cooper
$ npm i
$ npm run serve
```

## Deployment

If you run it on your own environment, you need to have the [Vue CLI](https://cli.vuejs.org/) installed globally.

```
$ npm i -g @vue/cli
```

The built app is served by a static [Express](https://expressjs.com/) server by default.

```
$ npm run build
```

If you deploy to Heroku, postinstall takes care of handling the building process automatically.

If you deploy on your own setup, you can also just deploy the built dist folder into your htdocs / static folder