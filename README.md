# Rashed Abdullah's Portfolio App (React Native Expo Version) 🌍

Welcome to the React Native Expo version of **Rashed Abdullah's Portfolio**! This app showcases my projects, blogs, diary, YouTube videos, and other highlights, designed to provide an optimized and seamless mobile experience.

---

## Features

- **Portfolio Showcase**: Display personal projects, including detailed descriptions and links.
- **Blogs**: Read Bangla blogs written by me, with an engaging and readable UI.
- **Diary**: Explore diary entries in Bangla, filterable by date.
- **YouTube Integration**: View my YouTube channel content directly within the app, categorized for easy navigation.
- **Responsive Design**: Ensures an optimized experience across different screen sizes.
- **Dynamic Content**: Fetch and display data dynamically using server components.

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **Expo CLI**: Install Expo CLI globally by running:
  ```bash
  npm install -g expo-cli
  ```
- **Android Studio** (for Android Emulator) or **Xcode** (for iOS Simulator).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/RashedAbdullah/portfolio-expo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio-expo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Expo server:

   ```bash
   npx expo start
   ```

5. Choose your preferred development option:
   - Open in **Expo Go** (on your physical device).
   - Run on an **Android emulator**.
   - Run on an **iOS simulator**.

---

## Project Structure

```
portfolio-expo-app
├── app
│   ├── index.js      # Main entry point for the app.
│   ├── projects      # Projects showcase components.
│   ├── blogs         # Bangla blogs section.
│   ├── diary         # Diary feature with date filtering.
│   ├── youtube       # YouTube integration and video categories.
│   ├── components    # Reusable components.
│   └── styles        # Style definitions using React Native StyleSheet.
├── assets            # Images and other assets.
├── package.json      # Project configuration and dependencies.
└── README.md         # Documentation.
```

---

## Development Workflow

### Adding New Features

- Create a new directory or component in the **app/** folder.
- Update navigation if required in the **app/index.js** file.

### Styling

- Follow the global style conventions defined in the **styles/** folder.
- Use responsive units to ensure consistent appearance across devices.

### Testing

- Test the app on both Android and iOS simulators to ensure compatibility.
- Use physical devices for real-world performance validation.

---

## Available Scripts

### Reset Project

To start with a fresh directory:

```bash
npm run reset-project
```

### Run Tests

To execute unit tests:

```bash
npm test
```

---

## Future Enhancements

- Add **dark mode** for enhanced user experience.
- Implement **push notifications** for new blogs or YouTube video uploads.
- Introduce **localization** for multiple languages.

---

## Community & Support

- **Portfolio Website**: [rashedabdullah.com](https://rashedabdullah.com)
- **YouTube Channel**: [@RashedAbdullahBD](https://www.youtube.com/@RashedAbdullahBD)
- **Contact**: For any queries or collaboration, email me at [info@rashedabdullah.com](mailto:info@rashedabdullah.com).

---

## Acknowledgments

- This app is powered by [React Native](https://reactnative.dev/) and [Expo](https://expo.dev).
- Inspired by my passion for building accessible and user-friendly platforms.

---

Thank you for exploring my portfolio app! Your feedback and suggestions are always welcome. 😊
