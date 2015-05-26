# Ember-cli-seeds-scaffold

[![Join the chat at https://gitter.im/terminalvelocity/seeds.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/terminalvelocity/seeds.js) [![Build Status](https://travis-ci.org/terminalvelocity/ember-cli-seeds-scaffold.svg?branch=master)](https://travis-ci.org/terminalvelocity/ember-cli-seeds-scaffold)

>  Scaffolds adapters, models, routes and templates a la rails with a touch of Semantic-UI. Designed to work with [Seeds.js](https://github.com/terminalvelocity/seeds.js) and adapted from [Ember-cli-scaffold](https://github.com/marcioj/ember-cli-scaffold).

## Installation

Generating a [Seeds](https://github.com/terminalvelocity/seeds.js) app automatically installs this for you and is the preferred way to use this addon.

You could also do `ember install ember-cli-scaffold` in your ember-cli app.

## Usage

```sh
seeds generate scaffold user first_name:string last_name:string age:number
open http://localhost:4200/users
```

This command generate the following files:

- app/mixins/save-model-mixin.js
- app/adapters/user.js
- app/models/user.js
- app/routes/users.js
- app/routes/users/edit.js
- app/routes/users/index.js
- app/routes/users/new.js
- app/templates/users.hbs
- app/templates/users/-form.hbs
- app/templates/users/edit.hbs
- app/templates/users/index.hbs
- app/templates/users/new.hbs
- app/templates/users/show.hbs
- tests/acceptance/users-test.js

## Running Tests

`npm test`

## Contributing

1. Fork it
1. Create your feature branch (`git checkout -b my-new-feature`)
1. Commit your changes (`git commit -am 'Add some feature'`)
1. Push to the branch (`git push origin my-new-feature`)
1. Create new Pull Request