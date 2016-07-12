/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NaNoteComponent } from './na-note.component';

describe('Component: NaNote', () => {
  it('should create an instance', () => {
    let component = new NaNoteComponent();
    expect(component).toBeTruthy();
  });
});
