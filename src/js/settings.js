export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map([['music', 'house']]);
  }

  get settings() {
    const obj = Object.fromEntries(this.defaultSettings.entries());
    this.userSettings.forEach((value, key) => { obj[key] = value; });

    return new Map(Object.entries(obj));
  }
}
