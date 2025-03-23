# 🔥 Gen Z Slang and Vibes ⚡

An interactive web application that visualizes and explains popular Gen Z slang terms through an engaging, colorful interface.

## Features

- **Interactive Word Cloud**: Colorful, floating bubbles containing popular Gen Z slang terms
- **Comprehensive Word List**: Organized sidebar listing all slang terms for easy navigation
- **Detailed Explanations**: Modal windows with comprehensive explanations for each term
- **Text-to-Speech**: Audio pronunciation and explanation for each slang term
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Animated gradient background, smooth animations, and a playful design that matches Gen Z aesthetic

## Technology Stack

- **HTML5**: Semantic structure
- **CSS3**: Advanced animations, flexbox layout, and responsive design
- **JavaScript**: Interactive elements, modal functionality, and dynamic word cloud generation
- **Google Text-to-Speech API**: For audio explanations
- **Intersection Observer API**: For scroll-based animations

## How It Works

1. The main page displays a vibrant gradient background with the title and decorative elements
2. As you scroll down, you'll see an article explaining Gen Z slang culture
3. Below that is the interactive section with:
   - A sidebar listing all slang terms alphabetically
   - A word cloud with randomly positioned bubbles representing each term
4. Click on any term (either in the list or in the cloud) to open a detailed explanation
5. Use the speaker icon to hear the explanation read aloud

## Setup and Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/gen-z-slang.git
   ```

2. Navigate to the project directory:
   ```
   cd gen-z-slang
   ```

3. Open `index.html` in your browser, or use a local server:
   ```
   python -m http.server
   ```

4. To enable Text-to-Speech functionality, you'll need to:
   - Create a Google Cloud account
   - Enable the Text-to-Speech API
   - Generate an API key
   - Replace the placeholder API key in `script.js` with your key

## Project Structure

```
gen-z-slang/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── images/
    └── speaker.svg     # Text-to-speech icon
```

## Customization

### Adding New Slang Terms

To add new slang terms, edit the `words` array in `script.js`:

```javascript
const words = [
    { 
        text: "your-term", 
        color: "#hex-color", 
        explanation: "Your detailed explanation of the term..." 
    },
    // Add more terms...
];
```

### Changing Colors

- The background gradient colors can be modified in the `body` CSS rule
- Individual bubble colors are defined in the `words` array in `script.js`

## Future Enhancements

- Categories for different types of slang
- Language filter to show slang from different regions
- Timeline view showing when each term became popular
- User-submitted slang terms with voting system
- Interactive quiz to test knowledge of Gen Z slang

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Font families: [Outfit](https://fonts.google.com/specimen/Outfit) and [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- Inspired by various Gen Z cultural analysis articles and social media trends
