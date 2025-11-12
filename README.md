# Tacho Digital Clock

A digital clock styled to look like a Felix Oval Track Pro tachometer LCD display. This project transforms the classic tachometer appearance into a functional digital timepiece while maintaining the original aesthetic.

## Features

- **Authentic Design**: Matches the Felix Oval Track Pro tachometer appearance
- **LCD-Style Display**: Green glowing digits with realistic LCD background
- **Multiple Time Formats**: Switch between 12-hour and 24-hour formats
- **Seconds Toggle**: Show or hide seconds display
- **Blinking Animation**: Optional blinking colon separators
- **Interactive Controls**: Click, double-click, and right-click functionality
- **Keyboard Shortcuts**: Quick access to all features
- **Responsive Design**: Works on desktop and mobile devices

## Usage

### Online Version
You can use this clock directly by opening `index.html` in your browser, or host it on GitHub Pages.

### Local Usage
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. The clock will start automatically

## Controls

### Mouse Controls
- **Single Click LCD**: Toggle between 12-hour and 24-hour format
- **Double Click LCD**: Toggle seconds display on/off
- **Right Click LCD**: Toggle blinking colon animation

### Keyboard Shortcuts
- **F**: Toggle time format (12/24 hour)
- **S**: Toggle seconds display
- **B**: Toggle blinking colons
- **H**: Show help dialog

## Customization

### Changing Colors
Edit `style.css` to modify the appearance:
- LCD background: `.lcd-display` background property
- Text color: `.time-text` color property
- Glow effect: `.time-text` text-shadow property

### Changing Fonts
The clock uses the 'Orbitron' font for the LCD display. You can change this in the CSS:
```css
.time-text {
    font-family: 'Your-Font-Here', monospace;
}
```

### Adding Features
The JavaScript is modular and easy to extend. Add new functions to the `TachoDigitalClock` class in `script.js`.

## Technical Details

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with gradients, shadows, and animations
- **JavaScript ES6**: Object-oriented clock functionality
- **Responsive**: Mobile-friendly design
- **No Dependencies**: Pure vanilla JavaScript

## File Structure
```
tacho-digital-clock/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Clock functionality and interactions
└── README.md           # This file
```

## Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License
This project is open source and available under the MIT License.

## Contributing
Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## Inspiration
Based on the Felix Oval Track Pro RPM/100 Teltac tachometer design. This project is a tribute to classic automotive instrumentation.