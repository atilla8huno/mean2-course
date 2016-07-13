/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NaNotesFormComponent } from './na-notes-form.component';

describe('Component: NaNotesForm', () => {
  it('should create an instance', () => {
    let component = new NaNotesFormComponent();
    expect(component).toBeTruthy();
  });
});
