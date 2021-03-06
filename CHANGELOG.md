# Changelog

## v2.1.3 | 2019-01-27
* updates addon to use new style imports

## v2.1.2 | 2019-01-22


## v2.1.1 | 2019-01-22
* update save-model-mixin in test and comment out mirage test
* remove mirageconfig from index scaffold
* Adds save model mixin, removes mirage and testing stuff

## v2.1.0 | 2016-10-28
* adds template.hbs to expected output
* Adds DS to model
* adds mirage-model invocation
* updates mirage location
* Changes how model is scaffolded, just import DS and use DS.attr for now.
* adds top level route with a container segment wrapped around outlet
* remove line numbers.
* Fixes bug with model generator

## v2.0.7 | 2016-04-28
* remove jshint comment

## v2.0.6 | 2016-04-27
* test broken because of ember version mismatch
* Modifies model generator to be inline with new version of ember

## v2.0.5 | 2016-03-11
* remove mixin from generators, tests, and fixtures

## v2.0.4 | 2016-03-09
* up the timeout limit
* move createdAt and updatedAt to bottom of attrs list
* Adds model blueprint. Always top level regardless of pod structure

## v2.0.3 | 2016-03-04
* update to es6 functions

## v2.0.2 | 2016-03-04
* Add urlPrefix and fixes spaces on ember mirage config

## v2.0.1 | 2016-03-04
* rename ember-cli-scaffold blueprint

## v2.0.0 | 2016-03-01
* debump version
* remove jshint
* v2
* 2.4.0
* Adds pod support, adds generation of ember-cli-mirage routes and resources.

## v1.0.15 | 2015-10-26


## v1.0.14 | 2015-10-26
* revert const and let to var to maintain backwards compatibility with node v0.12 until next version

## v1.0.13 | 2015-09-25
* updates test to be inline with reverted adapter
* config not defined error, need to look into this. Probably just an issue with the templatingo

## v1.0.12 | 2015-09-23
* Adds import config to adapter blueprint and fixture

## v1.0.11 | 2015-09-23
* Update fixture-adapter test
* Change adapter to use the config.apiURL from seeds-frontend generator

## v1.0.10 | 2015-09-20
* Add emberobserver score badge to package

## v1.0.9 | 2015-09-14
* Updates index route/index-route fixture to use findAll and updates resource template to use semantic 2.0 styling

## v1.0.8 | 2015-09-13
* Updates index to use 'as |block|' params, adds createdAt to index and show

## v1.0.7 | 2015-09-12
* Update travis.yml
* Updates router generator to use this.route instead of this.resource, updates index route file to show model before actions, adds createdAt/updatedAt to model by default and mokes it a const instead of var
* Update README.md
* Updated ReadMe

## v1.0.6 | 2015-06-18
* removes eslint from pre-push hook

## v1.0.5 | 2015-06-18
* fixes release script
* table of contents update
* update npmignore
* adds basic project management tools, .editorconfig, .npmignore, .npmrc, scripts, changelog, contributing guide, etc
* update npmignore
* adds hooks/scripts/devdeps
* removes mixin from scaffold command. Made it generic and included by default via seeds

### 0.0.0
Init












