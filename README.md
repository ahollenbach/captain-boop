# Captain Boop
An audio soundboard to play alongside the hit board game, Captain Sonar!

Captain Boop is meant to provide companion audio to help set the mood for your games of Captain Sonar. It provides ambient noise, as well as noises associated with events by listening for key words while you're playing - for example, saying "Direct Hit" will trigger an explosion sound.

This is the product of a handful of hours of work and is far from complete.

## Getting Started
The easiest way is simply to navigate to https://ahollenbach.github.io/captain-boop/! This hosts a built version of the soundboard. If you're interested in making modifications (adding your own sounds, etc.), see below for installation information.

## Installation
```bash
git clone https://github.com/ahollenbach/captain-boop.git
cd captain-boop
npm install
grunt
```

Open `dist/index.html` in your web browser!

## Upcoming Tasks
### v1
- [ ] Find and add audio for all ambient and listen word sounds
- [ ] Properly react on all audio cues
- [ ] Add damage alarms

### v2
- [ ] Make listen words configurable (including language?) in config file
- [ ] Ability to set audio source files from config file
- [ ] Use `data-repeat` attribute to set audio repeat times? (i.e. dive horn)

### Further
- [ ] Audio volume sliders
- [ ] More ambient audio layers
- [ ] GUI to complement speaking interface
- [ ] *Open to other ideas*


## License
Undecided as of yet. Use at your own risk - I provide no guarantees.
