import Settings from '../settings';

test('1', () => {
  const settings = new Settings();

  expect(settings).toBeDefined();
  expect(settings.defaultSettings).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy']
  ]) );
  expect(settings.userSettings).toEqual(new Map([    
    ['music', 'house']    
  ]) );

  expect(settings.settings).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'house'],
    ['difficulty', 'easy']
  ]));
});