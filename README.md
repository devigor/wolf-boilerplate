<p align="center">
  <img src="http://nicolehanusekart.com/wp-content/uploads/2013/06/wolf-sm-600x578.png" width="300">
</p>

# Wolf Boilerplate
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](./LICENSE)

Project Technologies
  - Pug
  - Stylus
  - Gulp
  - browerSync
  
## Getting Started
#### Installation
``` sh
  # Clone this repo
  $ git clone https://github.com/devigor/wolf-boilerplate/ 
  $ cd wolf-boilerplate
  $ tm -rf .git // Delete .git // Para quem usa windows exclua direto da pasta clonada

  # Install Gulp Globally
  $ [sudo] npm install -g gulp
  
  # Install dependencies
  $ npm install
  
  # Commands
  $ yarn start or npm start // Preparing setup
  $ yarn dev or npm run dev // Development Mode
  $ yarn build or npm run build // Production Mode
  $ yarn lint or npm run lint // ESLint and Stylelint
  $ yarn lint:js or npm run lint:js // ESlint
  $ yarn lint:css or npm run lint:css // Stylelint

## Paths
```
├── src
│   ├── index.pug
│   ├── js
│   │   └── main.js
│   └── styl
│       ├── components
│       │   └── button.styl
│       ├── _core
│       │   ├── reset.styl
│       │   └── variables.styl
│       ├── helpers
│       │   └── functions.styl
│       ├── main.styl
│       └── pages
│           └── index.styl
├── package.json
├── package-lock.json
├── README.md
└── yarn.lock
```
