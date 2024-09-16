# Digital-Clock-with-Timer-and-Stopwatch

    This project is a fully functional Digital Clock that includes additional features such as a Timer and Stopwatch. 
    The webpage is created using HTML, CSS, and JavaScript, with jQuery included to enhance the JavaScript 
    functionalities. It provides a clean and intuitive interface where users can track time, set timers, and use a 
    stopwatch for various activities.

# Table of Contents

       1. Features

       2. Technologies Used

       3. JQuery Integration

       4. Project Structure

       5. Installation

       6. Usage

1. Features

       • Digital Clock: Displays the current time in a 12-hour.

       • Timer: Allows users to set a custom countdown timer with start, stop, and reset functionalities. Alerts when 
         time runs out.

       • Stopwatch: Offers start, lap and reset options. Tracks time with millisecond precision.

       • Responsive design, suitable for both desktop and mobile devices.

       • Smooth user interactions and animations for seamless user experience.

2. Technologies Used

       • HTML5: Provides the structure and layout of the webpage.

       • CSS3: Used for designing and styling the user interface with a focus on responsiveness and user experience.

       • JavaScript (ES6): Implements core functionality for the digital clock, timer, and stopwatch.

       • jQuery 3.6.3: Utilized for DOM manipulation, event handling, and simplifying JavaScript code.

3. JQuery Integration

       The project includes jQuery from the Google CDN to enhance the JavaScript capabilities and simplify operations

       like DOM manipulation and event handling. The following CDN link is used:

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

       3.1 This lightweight JavaScript library helps in achieving:

             • Cross-browser compatibility.

             • Simplified syntax for event listeners and animations.

             • Smooth transitions and effects for buttons and timer/stopwatch functionality.

5. Project Structure

       digital-clock-timer-stopwatch/
       │
       ├── index.html            # The main HTML file
       ├── style.css             # CSS file for styling the webpage
       ├── script.js             # JavaScript file containing logic for the clock, timer, and stopwatch
       └── README.md             # Project documentation

6. Installation
To run the project locally, follow these steps:

       5.1 Clone the repository:

          git clone https://github.com/yourusername/digital-clock-timer-stopwatch.git

       5.2 Navigate to the project directory:

          cd digital-clock-timer-stopwatch

       5.3 Open index.html in your browser:

          • Simply open the file in any modern browser, no need for server setup.

7. Usage

       Once you have the project open in your browser, the following functionality is available:

       6.1 Digital Clock

          • The current time is displayed in the center of the page and updates every second.

       6.2 Timer

          • Press the Start button to begin the countdown.

          • Enter the amount of time you want to set in minutes.

          • You can Pause the countdown and resume it at any time.

          • Use the Reset button to reset the timer to zero.

          • When the timer reaches zero, an alert or sound notification will be triggered.

       6.3 Stopwatch

          • Press the Start button to begin the stopwatch.

          • The Reset button resets the stopwatch to zero.

          • The stopwatch runs continuously until reset, tracking elapsed time in hours, minutes, seconds, and                     milliseconds.
