const words = [
    { text: "skibidi", color: "#8ff5d9", explanation: "Skibidi is a playful, nonsense word from the 2018 viral song 'Skibidi' by Little Big. It doesn't have a fixed meaning but ties to a quirky dance challenge that blew up on TikTok. Gen Z uses it for fun or excitement, like 'Skibidi, let's go!' It's all about meme culture and absurdity, popping up in late 2010s internet humor. Example: 'He did the skibidi dance at the party.' Its lack of definition is its charm, connecting people through shared online chaos. It's a newer term, still niche but growing." },
    { text: "vibe check", color: "#a1abff", explanation: "Vibe check means checking someone's mood or energy. It can be serious, like 'You okay?' or playful, like 'Vibe check passed!' It started in late 2010s memes on Twitter and TikTok, often with dramatic videos. Example: 'She passed the vibe check with that smile.' Gen Z uses it to blend humor with emotional awareness, a big part of their culture. It's flexible—serious or silly—showing their expressive style. It's about 5 years old and still fresh." },
    { text: "no cap", color: "#ffbe94", explanation: "No cap means 'no lie' or 'honest.' It's used to stress truth, like 'This is fire, no cap!' It comes from hip-hop, where 'cap' means lying, and hit big in the 2010s on social media. Example: 'I aced the test, no cap.' Gen Z loves it for authenticity, a key value. It's tied to African American Vernacular English (AAVE) and spread fast online. It's been around for about a decade and keeps growing." },
    { text: "slay", color: "#c7ff9b", explanation: "Slay means doing something amazingly well or looking great. From ballroom culture and popularized by RuPaul's Drag Race, it went mainstream in the 2010s. Example: 'You slay that dance!' Gen Z uses it to cheer talent or style, like 'She's slaying this look.' It's empowering and fun, reflecting their love for self-expression. It's about 10 years old in wide use and still slaps." },
    { text: "bet", color: "#a6b5ff", explanation: "Bet is a quick 'yes' or 'sure,' short for 'you bet.' Example: 'Wanna chill?' 'Bet.' It's old-school (1990s) but Gen Z revived it in the 2010s via texting and TikTok. It's simple and chill, fitting their fast-paced vibe. Say 'Bet, I'm in' to agree. It's been back for about 5-10 years and feels timeless now." },
    { text: "fam", color: "#ffacc4", explanation: "Fam means close friends or your crew, short for 'family.' Example: 'Hey fam, what's good?' It's been around since the 2000s but Gen Z made it huge on social media. It's about chosen family, a big deal for them. Say 'My fam's got my back' to show loyalty. It's over a decade old and still strong." },
    { text: "goat", color: "#c9ffa0", explanation: "GOAT stands for 'Greatest Of All Time.' It's for the best, like 'She's the GOAT at singing.' From sports, it hit the 2010s mainstream via Twitter. Example: 'This song's GOAT status.' Gen Z uses it to hype faves, showing their love for excellence. It's about 10 years old in slang and a keeper." },
    { text: "salty", color: "#94ffca", explanation: "Salty means being bitter or upset, often over small stuff. Example: 'He's salty he didn't win.' It's from the 1930s but Gen Z brought it back in the 2010s online. It's usually funny, like 'Don't be salty!' It fits their humor and emotional mix. It's old but feels new again, about 10 years in revival." },
    { text: "tea", color: "#b0a5ff", explanation: "Tea is gossip or juicy news. 'Spill the tea!' means share it. From drag culture's 'spilling the tea,' it blew up in the 2010s on reality TV and TikTok. Example: 'What's the tea on that drama?' Gen Z loves its playful storytelling vibe. It's about 10 years old and still hot." },
    { text: "shook", color: "#ffc2ff", explanation: "Shook means shocked or rattled. Example: 'I'm shook by that twist!' It's from 'shaken' and hit slang in the 2010s online. Gen Z uses it big or funny, like 'Totally shook!' It's dramatic and fits their expressive style. It's been around for about a decade and rocks." },
    { text: "ghosting", color: "#ffb494", explanation: "Ghosting is cutting off contact suddenly, usually in dating. Example: 'She ghosted me after one chat.' It came with online dating in the 2010s. Gen Z uses it for any fade-out, like 'He's ghosting our group.' It's about digital life and boundaries, around 10 years old." },
    { text: "flex", color: "#b8ffdc", explanation: "Flex means showing off, like wealth or wins. Example: 'He's flexing his new kicks.' From 1990s hip-hop, it boomed in the 2010s on Instagram. Gen Z uses it to call out flash, like 'Stop flexing!' It's tied to social media and authenticity debates. It's over a decade big now." },
    { text: "stan", color: "#8ff5d9", explanation: "Stan is a mega-fan, from Eminem's 2000 song 'Stan.' Example: 'I stan this show!' It hit slang in the 2010s on stan Twitter. Gen Z uses it straight or ironic, like 'Stan forever!' It's about fandom love and has been big for about 10 years." },
    { text: "yeet", color: "#ffbe94", explanation: "Yeet means throwing hard or hyping up. Example: 'Yeet this trash!' or 'Yeet, we won!' From a 2014 viral video, it's pure Gen Z energy. It's wild and flexible, showing their humor. It's been a dictionary word since 2022, about 10 years old and thriving." },
    { text: "rizz", color: "#d4a5ff", explanation: "Rizz means charisma or charm, especially when flirting. Short for 'charisma,' it blew up on TikTok in 2022 thanks to creators like Kai Cenat. Example: 'He's got so much rizz, she said yes right away!' Gen Z uses it to describe someone's game or vibe in romantic situations. It's super new, only a few years old, but already huge online." },
    { text: "bussin'", color: "#ffd5a0", explanation: "Bussin' means something is really good, often used for food. It comes from African American Vernacular English (AAVE) and got popular on TikTok in the early 2020s. Example: 'This pizza is bussin'!' Gen Z loves it for hyping up anything amazing. It's been around for a few years and is still going strong." },
    { text: "drip", color: "#a5e6ff", explanation: "Drip refers to stylish, cool fashion or swagger. It started in hip-hop culture in the 2010s, meaning flashy jewelry or outfits, and Gen Z made it mainstream on Instagram and TikTok. Example: 'His drip is on point with that jacket!' It's all about confidence and style, and it's been big for about a decade." },
    { text: "ick", color: "#f5a5c2", explanation: "Ick describes a sudden feeling of repulsion or a turn-off, often in dating, triggered by a specific behavior. It blew up on TikTok around 2022-2023 from the phrase 'gives me the ick.' Example: 'He chewed with his mouth open—total ick!' Gen Z uses it to share funny dating pet peeves. It's pretty new but super relatable." },
    { text: "sus", color: "#a5ffd6", explanation: "Sus is short for 'suspicious,' used to describe something or someone that seems off. It exploded in 2020 thanks to the game Among Us, where players call out 'sus' behavior. Example: 'He's acting sus, I think he's lying.' Gen Z loves it for gaming and memes. It's been huge for a few years now." },
];

// Audio object to store current playback
let currentAudio = null;

// Global variables to track window size
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let isMobile = windowWidth < 768;

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    initializeWordList();
    initializeWordCloud();
    setupModalControls();
    setupIntersectionObserver();
    setupResizeHandling();
});

// Create word list on the left
function initializeWordList() {
    const wordList = document.getElementById('word-list-items');
    if (!wordList) {
        console.error("Word list element not found");
        return;
    }
    
    words.forEach((word, index) => {
        const li = document.createElement('li');
        const colorBar = document.createElement('div');
        colorBar.className = 'color-bar';
        colorBar.style.backgroundColor = word.color;
        const span = document.createElement('span');
        span.textContent = word.text.toUpperCase();
        li.appendChild(colorBar);
        li.appendChild(span);
        li.addEventListener('click', () => showModal(word));
        li.setAttribute('data-word', word.text);
        li.style.transitionDelay = `${index * 0.05}s`; // Reduced delay for faster animation
        wordList.appendChild(li);
    });
}

// Create bubbles for the word cloud with responsive layout
function initializeWordCloud() {
    const cloudDiv = document.getElementById('cloud');
    const frame = document.getElementById('cloud-frame');
    
    if (!cloudDiv || !frame) {
        console.error("Cloud or frame elements not found");
        return;
    }
    
    // Clear any existing bubbles
    cloudDiv.innerHTML = '';
    
    const frameWidth = frame.offsetWidth;
    const frameHeight = frame.offsetHeight;
    
    // Calculate responsive bubble sizes
    const baseFontSize = isMobile ? 16 : 20;
    const minBubbleSize = isMobile ? 60 : 80;
    
    // Generate positions for bubbles
    const bubblePositions = [];
    const maxAttempts = 100; // Maximum attempts to find a good position

    // Reduce number of bubbles on mobile
    const displayWords = isMobile ? words.slice(0, 12) : words;

    displayWords.forEach((word, index) => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Use lowercase for all bubble text
        bubble.textContent = word.text.toLowerCase();
        bubble.style.backgroundColor = word.color;
        
        // Calculate bubble size based on text length and screen size
        const wordLength = word.text.length;
        const isMultiWord = word.text.includes(' ');
        
        // Adjust font size based on word length and device
        let fontSize = baseFontSize;
        if (wordLength > 8 || isMultiWord) {
            fontSize = baseFontSize * 0.8;
        }
        bubble.style.fontSize = `${fontSize}px`;
        
        // Calculate bubble size, making multi-word bubbles larger
        let bubbleSize = Math.max(minBubbleSize, fontSize * (isMultiWord ? 3.5 : 3));
        
        // Make sure bubbles aren't too big on small screens
        if (isMobile) {
            bubbleSize = Math.min(bubbleSize, frameWidth / 4);
        }
        
        bubble.style.width = `${bubbleSize}px`;
        bubble.style.height = bubble.style.width;
        
        // Set transition delay for staggered animation
        bubble.style.transitionDelay = `${index * 0.05}s`; // Reduced delay for faster animation
        
        // Use adaptive layout strategy based on screen size
        let posX, posY;
        
        if (isMobile) {
            // For mobile: simplified grid-based layout
            const cols = 3; // Number of columns on mobile
            const col = index % cols;
            const row = Math.floor(index / cols);
            
            const colWidth = frameWidth / cols;
            const rowHeight = colWidth; // Square arrangement
            
            posX = col * colWidth + (colWidth - bubbleSize) / 2;
            posY = row * rowHeight + (rowHeight - bubbleSize) / 2;
            
            // Add some randomness to make it look more natural
            posX += (Math.random() - 0.5) * 10;
            posY += (Math.random() - 0.5) * 10;
        } else {
            // For desktop: more natural, randomly distributed layout
            let attempts = 0;
            let validPosition = false;
            
            while (!validPosition && attempts < maxAttempts) {
                posX = Math.random() * (frameWidth - bubbleSize);
                posY = Math.random() * (frameHeight - bubbleSize);
                
                validPosition = !doesOverlapExisting(posX, posY, bubbleSize, bubblePositions);
                attempts++;
            }
            
            // If we couldn't find a valid position, use a grid-based fallback
            if (!validPosition) {
                const gridSize = Math.ceil(Math.sqrt(words.length));
                const cellWidth = frameWidth / gridSize;
                const cellHeight = frameHeight / gridSize;
                
                const col = index % gridSize;
                const row = Math.floor(index / gridSize);
                
                posX = col * cellWidth + (cellWidth - bubbleSize) / 2;
                posY = row * cellHeight + (cellHeight - bubbleSize) / 2;
            }
        }
        
        // Store the position and size for overlap checking
        bubblePositions.push({
            x: posX,
            y: posY,
            size: bubbleSize
        });
        
        // Make sure bubble stays in bounds
        posX = Math.max(0, Math.min(posX, frameWidth - bubbleSize));
        posY = Math.max(0, Math.min(posY, frameHeight - bubbleSize));
        
        bubble.style.left = `${posX}px`;
        bubble.style.top = `${posY}px`;
        
        // Add data attribute for easier identification
        bubble.setAttribute('data-word', word.text);
        
        // Add click handler
        bubble.addEventListener('click', function() {
            showModal(word);
        });
        
        cloudDiv.appendChild(bubble);
    });
}

// Simplified overlap detection function
function doesOverlapExisting(x, y, size, existingBubbles) {
    const padding = isMobile ? 5 : 20; // Less padding on mobile
    
    for (const bubble of existingBubbles) {
        const distance = Math.sqrt(
            Math.pow(x + size/2 - (bubble.x + bubble.size/2), 2) + 
            Math.pow(y + size/2 - (bubble.y + bubble.size/2), 2)
        );
        
        const minDistance = (size/2 + bubble.size/2) + padding;
        
        if (distance < minDistance) {
            return true;
        }
    }
    
    return false;
}

// Setup modal controls with improved accessibility
function setupModalControls() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const playTtsBtn = document.getElementById('play-tts');
    
    if (!modal || !closeBtn || !playTtsBtn) {
        console.error("Modal elements not found");
        return;
    }
    
    // Add keyboard accessibility
    closeBtn.setAttribute('tabindex', '0');
    closeBtn.setAttribute('role', 'button');
    closeBtn.setAttribute('aria-label', 'Close modal');
    
    playTtsBtn.setAttribute('tabindex', '0');
    playTtsBtn.setAttribute('role', 'button');
    playTtsBtn.setAttribute('aria-label', 'Play text to speech');
    
    // Close button handler
    closeBtn.onclick = function() {
        closeModal();
    };
    
    // Add keyboard support for close button
    closeBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            closeModal();
        }
    });
    
    // Click outside modal to close
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Add keyboard support for ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // TTS button handler with improvements
    playTtsBtn.onclick = async function() {
        handleTTS();
    };
    
    // Add keyboard support for TTS button
    playTtsBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            handleTTS();
        }
    });
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    // Return focus to the element that opened the modal
    if (window.lastFocusedElement) {
        window.lastFocusedElement.focus();
    }
}

// Function to handle TTS
async function handleTTS() {
    const explanationText = document.getElementById('explanation');
    const playTtsBtn = document.getElementById('play-tts');
    
    if (!explanationText || !playTtsBtn) {
        console.error("Required elements not found");
        return;
    }
    
    // Visual feedback for button press
    playTtsBtn.classList.add('active');
    setTimeout(() => {
        playTtsBtn.classList.remove('active');
    }, 300);
    
    const text = explanationText.textContent;
    try {
        // Stop any currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
            return; // If audio was playing, just stop it
        }
        
        // Show loading indicator
        playTtsBtn.classList.add('loading');
        
        const response = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyA2yl2ImFosjZXN5lk-WI89m13BuZfhAkI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: { text: text },
                voice: {
                    languageCode: 'en-US',
                    name: 'en-US-Chirp3-HD-Puck'
                },
                audioConfig: {
                    audioEncoding: 'LINEAR16',
                    effectsProfileId: ['handset-class-device'],
                    pitch: 0,
                    speakingRate: 1
                }
            })
        });

        const data = await response.json();
        
        // Remove loading indicator
        playTtsBtn.classList.remove('loading');
        
        if (data.audioContent) {
            // Create new audio and store it
            currentAudio = new Audio('data:audio/wav;base64,' + data.audioContent);
            
            // Add event listener for when audio ends
            currentAudio.addEventListener('ended', () => {
                currentAudio = null;
                playTtsBtn.classList.remove('playing');
            });
            
            // Add class to show it's playing
            playTtsBtn.classList.add('playing');
            
            currentAudio.play();
        } else {
            console.error('TTS API error:', data);
            alert('Speech synthesis not available right now. Please try again later.');
        }
    } catch (error) {
        console.error('Error playing TTS:', error);
        playTtsBtn.classList.remove('loading');
        alert('Failed to play audio. Please check your internet connection.');
    }
}

// Function to show the modal with explanation
function showModal(word) {
    const modal = document.getElementById('modal');
    const explanationText = document.getElementById('explanation');
    const modalTerm = document.getElementById('modal-term');
    
    if (!modal || !explanationText || !modalTerm) {
        console.error("Modal elements not found");
        return;
    }
    
    // Remember which element opened the modal (for returning focus later)
    window.lastFocusedElement = document.activeElement;
    
    // Set the term and explanation
    modalTerm.textContent = word.text.toUpperCase();
    explanationText.textContent = word.explanation;
    
    // Set the color for the modal header
    document.documentElement.style.setProperty('--term-color', word.color);
    
    // Show the modal
    modal.style.display = 'block';
    
    // Force a reflow to ensure animation works
    void modal.offsetWidth;
    
    // Add the open class to trigger animation
    modal.classList.add('open');
    
    // Set focus to the close button for accessibility
    setTimeout(() => {
        const closeBtn = document.querySelector('.close');
        if (closeBtn) {
            closeBtn.focus();
        }
    }, 100);
}

// Setup Intersection Observer for animations
function setupIntersectionObserver() {
    const wordCloudSection = document.getElementById('word-cloud-section');
    
    if (!wordCloudSection) {
        console.error("Word cloud section not found");
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate word list items
                const items = document.querySelectorAll('#word-list-items li');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 50); // Faster animation for mobile
                });
                
                // Animate bubbles
                const bubbles = document.querySelectorAll('.bubble');
                bubbles.forEach((bubble, index) => {
                    setTimeout(() => {
                        bubble.classList.add('visible');
                    }, index * 50); // Faster animation for mobile
                });
            }
        });
    }, { threshold: 0.1 }); // Lower threshold for faster triggering
    
    observer.observe(wordCloudSection);
}

// Handle window resize and orientation changes
function setupResizeHandling() {
    let resizeTimer;
    
    window.addEventListener('resize', function() {
        // Clear the timer
        clearTimeout(resizeTimer);
        
        // Set a new timer to delay execution
        resizeTimer = setTimeout(function() {
            const newWidth = window.innerWidth;
            
            // Only reinitialize if width changed significantly or mobile/desktop state changed
            if (Math.abs(newWidth - windowWidth) > 50 || (newWidth < 768 && !isMobile) || (newWidth >= 768 && isMobile)) {
                windowWidth = newWidth;
                windowHeight = window.innerHeight;
                isMobile = windowWidth < 768;
                
                // Reinitialize word cloud for the new screen size
                initializeWordCloud();
            }
        }, 250);
    });
    
    // Handle orientation changes specifically on mobile
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
            isMobile = windowWidth < 768;
            
            // Reinitialize word cloud after orientation change
            initializeWordCloud();
        }, 200); // Short delay to ensure dimensions are updated
    });
}
