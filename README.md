# Camara Design System

![alt text](./static/img/logo.png)

This is the [Camara Design System website](https://camara.space). This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

The Camara homepage provides expanded guidance and documentation on the design language, component library and style/pattern guide. We want our users to have as much information as possible while exploring Camara.

## 🤝 Contributing

Thank you so much for wanting to contribute to the website! We could really use a hand at making it the best it can be, see [the issues](https://github.com/Camaradotspace/Camara-website/issues) for some ideas on where to start.

If you've never worked with the technologies used in this repo, here are some links that may help:

- [Docusaurus documentation](http://docusaurus-2.netlify.com/docs/installation)
- [Classnames](https://github.com/JedWatson/classnames)

To develop the website locally, you'll want to run the development server:

```sh
# Download the repo
git clone https://github.com/Camaradotspace/Camara-website.git

# Enter the repo
cd Camara-website

# Install the dependencies
yarn install

# Start local development
yarn run start
```

> Note: This requires Node.js and npm to be set up locally, see [nodejs.org](https://nodejs.org) for more information.

## 📂 Folder structure

```
Camara-website
├── blog
├── docs
    ├── camara
    ├── components
    ├── guidelines
    ├── oss
    ├── releases
    ├── resources
    ├── start
├── src
    ├── css
    ├── pages
├── static
```

## 👨🏽‍💻 Resources

- 🤝[Contribution guidelines](.github/CONTRIBUTING.md)
- `yarn install` – install dependencies
- `yarn run start` – start the development server
- `yarn dev:clean` – use this if you have cache issues
- `lint:js` – lint your JavaScript files
- `format` - run Prettier

## 🚀 Build

Running the build command generates all the files and places them in the `public` folder.

```
npm run build
```

## 🚁 Got stuck?

If you get stuck somewhere while trying to make this website better, feel free to reach out on [Twitter](https://m.twitter.com/preshonyee) let's resolve it together!

Camara is [MIT-licensed](./LICENSE.md).
