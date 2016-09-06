import {
it,
inject,
injectAsync,
describe,
beforeEachProviders,
TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

// Load the implementations that should be tested
import {First} from './first';

describe('First', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    First,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  it('should have a http', inject([First], (first) => {
    expect(!!first.http).toEqual(true);
}));

it('should log ngOnInit', inject([First], (first) => {
  spyOn(console, 'log');
expect(console.log).not.toHaveBeenCalled();

first.ngOnInit();
expect(console.log).toHaveBeenCalled();
  }));

});
