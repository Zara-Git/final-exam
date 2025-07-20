EWallet App

A simple and modern digital wallet built with React, Tailwind CSS, Redux Toolkit, and React Router. Users can add, view, select, and delete virtual bank cards with beautiful animations and vendor-specific designs.

✅ Add a new bank card with:

Card number

Cardholder name

Expiration date

CVV

Vendor (color + logo)

🎨 Live preview of the card with masked number

✨ Select a card by clicking it (blue border highlight)

🗑️ Delete selected card

🔁 State management with Redux Toolkit

🌙 Dark mode ready (Tailwind CSS support)

🛠️ Built With
Tool Description
React UI library
Tailwind CSS Utility-first CSS framework
Redux Toolkit State management
React Router Routing between views
Vite Lightning fast frontend tooling

📁 Project Structure
src/
├── assets/ # Images and logos
├── components/ # Reusable components (e.g., CardComponent)
├── redux/ # Redux slice (cardSlice.js)
├── App.jsx # Main app
├── main.jsx # Vite entry point
└── pages/
├── AddCard.jsx # Add new card form
└── AddNewCard.jsx # View, select, and delete cards

All cards are stored in the Redux state.

When you add a card, it generates a unique ID and stores it in the card array.

Clicking a card selects it (activeCardId).

A selected card is visually highlighted using conditional Tailwind styles.

The "Delete Card" button removes the selected card from state.

🧩 Future Improvements

Add persistence with localStorage or Firebase

Add animations using Framer Motion

Responsive enhancements for mobile

Dark/light mode toggle

Zara Rangkhoni
Frontend Developer & UI Designer
GitHub • LinkedIn
