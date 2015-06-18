Ember CLI - Seeds Scaffold
=====

[![Join the chat at https://gitter.im/terminalvelocity/seeds.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/terminalvelocity/seeds.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Stories in Ready](https://badge.waffle.io/terminalvelocity/seeds.js.png?label=ready&title=Ready)](https://waffle.io/terminalvelocity/seeds.js) ![Downloads on NPM](http://img.shields.io/npm/dm/ember-cli-seeds-scaffold.svg?style=flat-square)

Seeds is an acronym that stands for **S**ails **E**mber **E**mber-**D**ata **S**emantic-UI. It is designed for Rapid Application Prototyping.

```
                                                         .
                                              .         ;
                 .              .              ;%     ;;
                   ,           ,                :;%  %;
                    :         ;                   :;%;'     .,
           ,.        %;     %;            ;        %;'    ,;
             ;       ;%;  %%;        ,     %;    ;%;    ,%'
              %;       %;%;      ,  ;       %;  ;%;   ,%;'
               ;%;      %;        ;%;        % ;%;  ,%;'
                `%;.     ;%;     %;'         `;%%;.%;'
                 `:;%.    ;%%. %@;        %; ;@%;%'
                    `:%;.  :;bd%;          %;@%;'
                      `@%:.  :;%.         ;@@%;'
                        `@%.  `;@%.      ;@@%;
                          `@%%. `@%%    ;@@%;
                            ;@%. :@%%  %@@%;
                              %@bd%%%bd%%:;
                                #@%%%%%:;;
                                %@@%%%::;
                                %@@@%(o);  . '
                                %@@@o%;:(.,'
                            `.. %@@@o%::;
                               `)@@@o%::;
                                %@@(o)::;
                               .%@@@@%::;
                               ;%@@@@%::;.
                              ;%@@@@%%:;;;.
                          ...;%@@@@@%%:;;;;,..
                    Plant some seeds, watch em grow
                        You reap what you sow
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Ember-CLI Seeds Scaffold**

- [Ember-cli-seeds-scaffold](#ember-cli-seeds-scaffold)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Running Tests](#running-tests)
  - [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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