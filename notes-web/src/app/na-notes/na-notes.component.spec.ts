/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NaNotesComponent } from './na-notes.component';

describe('Component: NaNotes', () => {
  it('should create an instance', () => {
    let component = new NaNotesComponent();
    expect(component).toBeTruthy();
  });
});
