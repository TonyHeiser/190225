const states = {
  quality: false,
  fast: false,
  cheap: false,
}

function switchOption(someOption: string) {
  return !someOption
}

console.log(switchOption(`${states.quality}`));
