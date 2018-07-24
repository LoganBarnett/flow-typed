declare module 'chromedriver' {
  declare module.exports: {
    start: (?Array<string>) => void,
    stop: () => void,
  }
}
