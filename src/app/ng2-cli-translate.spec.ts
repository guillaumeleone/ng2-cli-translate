import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2CliTranslateApp} from '../app/ng2-cli-translate';

beforeEachProviders(() => [Ng2CliTranslateApp]);

describe('App: Ng2CliTranslate', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2CliTranslateApp], (app: Ng2CliTranslateApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2CliTranslateApp], (app: Ng2CliTranslateApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

