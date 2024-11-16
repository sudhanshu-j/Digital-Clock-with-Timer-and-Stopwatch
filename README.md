# Digital Clock with Timer and Stopwatch

This project is a fully functional **Digital Clock** that includes additional features such as a **Timer** and **Stopwatch**.  
The webpage is created using **HTML**, **CSS**, and **JavaScript**, with **jQuery** included to enhance the JavaScript functionalities.  
It provides a clean and intuitive interface where users can track time, set timers, and use a stopwatch for various activities.

---

## Live Demo

[Digital Clock with Timer and Stopwatch]()


## Table of Contents

1. [Features](#features)

2. [Technologies Used](#technologies-used)

3. [jQuery Integration](#jquery-integration)

4. [Project Structure](#project-structure)

5. [Installation](#installation)

6. [Usage](#usage)

---

## Features

- **Digital Clock**: Displays the current time in a 12-hour format.

- **Timer**:  

    - Allows users to set a custom countdown timer with start, stop, and reset functionalities.  

    - Alerts when the timer runs out.

- **Stopwatch**:  

    - Offers start, lap, and reset options, tracking time with millisecond precision.

- **Responsive Design**:  

    - Suitable for both desktop and mobile devices.

- **Smooth User Interactions**:  

    - Animations ensure a seamless user experience.

---

## Technologies Used

- **HTML5**: Provides the structure and layout of the webpage.

- **CSS3**: Styles the user interface with a focus on responsiveness and user experience.

- **JavaScript (ES6)**: Implements the core functionality for the digital clock, timer, and stopwatch.

- **jQuery 3.6.3**: Utilized for DOM manipulation, event handling, and simplifying JavaScript code.

---

## jQuery Integration

The project includes **jQuery** from the Google CDN to enhance JavaScript capabilities and simplify operations like DOM manipulation and event handling.  
The following CDN link is used:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
```

### Benefits of Using jQuery

- Cross-browser Compatibility: Ensures the application runs smoothly across all modern browsers.

- Simplified Syntax: Reduces the complexity of event listeners and animations.

- Smooth Transitions: Provides seamless effects for buttons and timer/stopwatch functionality.

## Project Structure
```bash
digital-clock-timer-stopwatch/
│
├── index.html         # The main HTML file
├── style.css          # CSS file for styling the webpage
├── main.js            # JavaScript file containing logic for the clock, timer, and stopwatch
└── README.md          # Project documentation
```

## Installation

- To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/digital-clock-timer-stopwatch.git
   ```

2. Navigate to the project directory:
   ```bash
   cd digital-clock-timer-stopwatch
   ```

3. Open index.html in your browser:
   ```bash
   • Simply open the file in any modern browser, no need for server setup.
   ```

## Usage

Once you have the project open in your browser, the following functionality is available:

### 1. Digital Clock

- The current time is displayed in the center of the page and updates every second.

### 2. Timer

- Press the **Start** button to begin the countdown.

- Enter the amount of time you want to set in minutes.

- You can **Pause** the countdown and resume it at any time.

- Use the **Reset** button to reset the timer to zero.

- When the timer reaches zero, an **alert** or **sound notification** will be triggered.

### 3. Stopwatch

- Press the **Start** button to begin the stopwatch.

- Use the **Reset** button to reset the stopwatch to zero.

- The stopwatch runs continuously until reset, tracking elapsed time in **hours, minutes, seconds, and milliseconds**.

