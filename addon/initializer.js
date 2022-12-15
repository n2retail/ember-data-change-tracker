import { deprecate } from '@ember/debug';

/* global require */
export function initializer() {
  deprecate('Do not initialize ember-data-change-tracker', false, {
    id: 'ember-data-change-tracker.initializer',
    until: '3.28.0',
    for: 'ember-data-change-tracker'
  });
  require('ember-data-change-tracker/model-ext');
}
