/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NaNotesListComponent } from './na-notes-list.component';

describe('Component: NaNotesList', () => {
  it('should create an instance', () => {
    let component = new NaNotesListComponent();
    expect(component).toBeTruthy();
  });
});
