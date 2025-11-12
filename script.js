class TachoDigitalClock {
    constructor() {
        this.timeDisplay = document.getElementById('timeText');
        this.is24HourFormat = true;
        this.showSeconds = true;
        this.isBlinking = false;
        
        // Initialize clock
        this.updateTime();
        this.startClock();
        
        // Add keyboard shortcuts
        this.setupKeyboardShortcuts();
        
        // Add click functionality to toggle features
        this.setupClickHandlers();
    }
    
    updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = '';
        
        // Handle 12/24 hour format
        if (!this.is24HourFormat) {
            ampm = hours >= 12 ? ' PM' : ' AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // 0 should be 12
        }
        
        // Format with leading zeros
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        // Build time string
        let timeString = `${formattedHours}:${formattedMinutes}`;
        
        if (this.showSeconds) {
            timeString += `:${formattedSeconds}`;
        }
        
        timeString += ampm;
        
        // Update display
        this.timeDisplay.textContent = timeString;
        
        // Add blinking colon effect
        if (this.isBlinking && seconds % 2 === 0) {
            timeString = timeString.replace(/:/g, ' ');
            this.timeDisplay.textContent = timeString;
        }
    }
    
    startClock() {
        // Update every second
        setInterval(() => {
            this.updateTime();
        }, 1000);
        
        // Add smooth transition effect
        this.timeDisplay.style.transition = 'all 0.3s ease';
    }
    
    toggleTimeFormat() {
        this.is24HourFormat = !this.is24HourFormat;
        this.updateTime();
        this.showNotification(this.is24HourFormat ? '24 Hour Format' : '12 Hour Format');
    }
    
    toggleSeconds() {
        this.showSeconds = !this.showSeconds;
        this.updateTime();
        this.showNotification(this.showSeconds ? 'Seconds ON' : 'Seconds OFF');
    }
    
    toggleBlinking() {
        this.isBlinking = !this.isBlinking;
        this.showNotification(this.isBlinking ? 'Blink ON' : 'Blink OFF');
    }
    
    showNotification(message) {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 255, 65, 0.9);
            color: black;
            padding: 10px 15px;
            border-radius: 5px;
            font-family: 'Orbitron', monospace;
            font-weight: bold;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 2 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            switch(event.key.toLowerCase()) {
                case 'f':
                    this.toggleTimeFormat();
                    break;
                case 's':
                    this.toggleSeconds();
                    break;
                case 'b':
                    this.toggleBlinking();
                    break;
                case 'h':
                    this.showHelp();
                    break;
            }
        });
    }
    
    setupClickHandlers() {
        // Click on LCD to toggle format
        const lcdDisplay = document.querySelector('.lcd-display');
        lcdDisplay.addEventListener('click', () => {
            this.toggleTimeFormat();
        });
        
        // Double click to toggle seconds
        lcdDisplay.addEventListener('dblclick', () => {
            this.toggleSeconds();
        });
        
        // Right click to toggle blinking
        lcdDisplay.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            this.toggleBlinking();
        });
    }
    
    showHelp() {
        const helpText = `
Tacho Digital Clock - Controls:
• Click LCD: Toggle 12/24 hour format
• Double-click LCD: Toggle seconds display
• Right-click LCD: Toggle blinking colons
• Press 'F': Toggle time format
• Press 'S': Toggle seconds
• Press 'B': Toggle blinking
• Press 'H': Show this help
        `;
        
        alert(helpText);
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize the clock when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TachoDigitalClock();
    
    // Show initial help after a delay
    setTimeout(() => {
        const helpDiv = document.createElement('div');
        helpDiv.innerHTML = `
            <div style="
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: rgba(0, 0, 0, 0.8);
                color: #00ff41;
                padding: 10px;
                border-radius: 5px;
                font-family: 'Orbitron', monospace;
                font-size: 12px;
                z-index: 1000;
                max-width: 200px;
            ">
                <strong>Tacho Clock</strong><br>
                Click for 12/24hr<br>
                Double-click for seconds<br>
                Right-click for blink<br>
                Press 'H' for help
            </div>
        `;
        document.body.appendChild(helpDiv);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            helpDiv.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => {
                if (document.body.contains(helpDiv)) {
                    document.body.removeChild(helpDiv);
                }
            }, 500);
        }, 5000);
    }, 1000);
});