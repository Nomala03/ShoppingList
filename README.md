# ShoppingList

React Native Shopping List App

A modern, mobile-first shopping list application built with Expo, TypeScript, Redux Toolkit, and AsyncStorage. The app allows users to add, edit, delete, and manage shopping items with persistent local storage and a clean UI design.

## Features

• Add new shopping items
• Edit item name and quantity
• Delete items from the list
• Mark items as purchased
• Persistent storage using AsyncStorage
• Real-time UI updates using Redux
• Clean, modern UI design
• Centralized state management
• Accessibility-ready structure

## Tech Stack

• Expo
• React Native
• TypeScript
• Redux Toolkit
• React Redux
• AsyncStorage

## Project Structure

- `src/app` – Redux store setup
- `src/features` – Feature-based Redux logic
- `src/components` – Reusable UI components
- `src/screens` – Application screens
- `src/utils` – Helper utilities
- `src/theme` – Styling constants
- App.tsx

## Setup Instructions (Developer Guide)

1. Clone the repository
  git clone <your-repo-url>
  cd shopping-list-app

2. Install dependencies
  npm install

3. Start the app
  npx expo start

Scan the QR code using Expo Go on your mobile device or run the app on an emulator.

## Redux Architecture

- State Management

The global state is managed using Redux Toolkit.

- Actions

• addItem
• editItem
• deleteItem
• togglePurchased
• setItems

- Reducers

Reducers update the shopping list state based on dispatched actions.

## Persistence

The application uses AsyncStorage to:

• Save shopping list data locally
• Load data when the app restarts
• Maintain state across sessions

## Testing Strategy

• Reducer unit tests
• Action dispatch tests
• Integration tests for AsyncStorage
• UI interaction tests

## User Guide

1. Add Item
   Enter item name
   Enter quantity (optional)
   Tap Add Item

2. Edit Item
   Update name or quantity (if edit feature is enabled)

3. Mark as Purchased
   Toggle the switch next to an item

4. Delete Item
   Tap Delete on the item card

## Accessibility

• Touch-friendly buttons
• High-contrast colors
• Readable font sizes
• Screen-reader compatible structure

## Future Enhancements

• Dark mode
• Cloud sync
• User authentication
• Category grouping
• Item reminders
• Push notifications

## Author

Developed by Mbali Madonsela 

This project demonstrates professional mobile application architecture, state management, persistence, and UI design patterns suitable for real-world React Native applications.