# Digital Clock with Timer and Stopwatch ⏰🕒

Welcome to the **Digital Clock with Timer and Stopwatch** project! This project combines a **digital clock**, a **stopwatch**, and a **timer** all in one place. It's designed to be a sleek and easy-to-use utility for anyone who needs to manage time, track laps, or check the current time. It also adapts beautifully to different screen sizes for a responsive experience.

---

## Features 🚀

- **Digital Clock**: Displays current time in a 12-hour format with AM/PM.

- **Stopwatch**: Allows you to start, stop, reset, and track lap times.

- **Timer**: Lets you input a specific time to count down from, with options to start, stop, and reset.

---

## Technologies Used 🧑‍💻

- **HTML** for structure and layout.

- **CSS** for styling and responsive design.

- **JavaScript** for functionality:
  
  - Timer logic
  
  - Stopwatch logic
  
  - Real-time clock functionality

---

## Demo 🎬

You can view a live demo of the project here: [Demo Link](https://digital-clock-stopwatch.netlify.app/)

---

## How to Use 🛠️

1. **Clock**: The current time is displayed at the top. It updates every second and toggles between AM and PM.

2. **Stopwatch**:
   
   - Press **Start** to begin tracking time.
   
   - Press **Lap** to record a lap.
   
   - Press **Reset** to stop and reset the stopwatch.

3. **Timer**:
   
   - Press **Start Timer** and input your desired countdown time (in minutes).
   
   - Press **Stop Timer** to pause the countdown.
   
   - Press **Reset Timer** to reset the timer back to the starting time.

---

## Features Breakdown ✨

### 1. **Digital Clock** 🕓

The clock is designed to display the current time in **12-hour** format with **AM/PM** indicators.

- The **addTrailingZero()** function is used to ensure that single-digit hours, minutes, and seconds are displayed with a leading zero for consistency.

- The clock updates every second using **setInterval** and shows the time in the format `HH:MM:SS AM/PM`.

### 2. **Stopwatch** ⏱️

- **Start/Stop Functionality**: Clicking the **Start** button begins the stopwatch, and the **Lap** button records a lap time.

- **Lap Recording**: Each lap is recorded with a timestamp showing hours, minutes, seconds, and milliseconds.

- **Reset**: Resets the stopwatch and clears all lap records.

The stopwatch uses a series of checks to ensure that time progresses correctly:

- **Milliseconds** are incremented until 100, at which point **seconds** are updated.

- When **seconds** reach 60, **minutes** are incremented, and similarly for **minutes** and **hours**.

### 3. **Timer** ⏲️

- **Set Time**: The user is prompted to enter the time in minutes, which is then converted into seconds.

- **Countdown**: The timer counts down in milliseconds, seconds, minutes, and hours.

- **Alert on Time Up**: When the timer reaches zero, an alert is shown, and the timer resets.

---

## Installation Guide 🧑‍💻

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/Digital-Clock-with-Timer-and-Stopwatch.git
```

2. **Navigate to the project directory:**

```bash
cd Digital-Clock-with-Timer-and-Stopwatch
```

3. **Open index.html in your browser to view the application.**

---

## File Structure 📁

```bash 
Digital-Clock-with-Timer-and-Stopwatch/
│
├── index.html         # Main HTML file with layout structure
├── style.css          # Styling for the clock, timer, and stopwatch
├── main.js            # JavaScript file for functionality
└── README.md          # Project documentation
```

---

## Contributing 🤝

We welcome contributions to improve this project! Feel free to fork the repository and create pull requests.

1. **Steps to contribute**:

2. **Fork the repository**.

3. **Create a new branch** (`git checkout -b feature/your-feature-name`).

4. **Make your changes**.

5. **Commit your changes** (`git commit -am 'Add new feature'`).

6. **Push to the branch** (`git push origin feature/your-feature-name`).

7. **Create a new pull request**.

---

## Contact 📧

If you have any questions, suggestions, or feedback, feel free to reach out to me:

- **Email**: sudhanshujha164@gmail.com

2. **GitHub**: sudhanshu-j
