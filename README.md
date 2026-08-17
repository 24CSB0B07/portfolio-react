# Personal Portfolio Website

## Overview
This project is a responsive personal portfolio website built using React, React Router, HTML5, and CSS3. The website showcases my profile, technical skills, projects, and contact information. It uses semantic HTML elements to improve accessibility, React components to build a modular layout, and CSS variables for a dark/light theme mechanism.

## Design Rationale
The website follows a clean and modern dark-themed design with blue accent colors to provide a professional and sleek appearance, with a light theme alternative. The homepage introduces my profile, followed by dedicated routes and sections for About, Projects, and Contact. Consistent spacing, typography (Inter & Outfit via Google Fonts), and CSS variables create a visually balanced, highly interactive interface with hover animations and transitions.

## Layout Technique
The website uses both CSS Flexbox and CSS Grid to create a responsive and well-structured layout. Flexbox is used for one-dimensional layouts such as the navigation bar items, aligning elements inside containers, and social/source link groups, making it easy to distribute space and maintain consistent alignment. CSS Grid is used for two-dimensional layouts, particularly for arranging project cards (responsive grid columns) and the project detail view grid where rows and columns are aligned. CSS custom properties (`:root` variables) are used to maintain a consistent color theme and simplify theme transitions.

The website includes two responsive breakpoints:
- **Tablet**: 768px and below
- **Mobile**: 480px and below

These breakpoints ensure that the content adapts smoothly across desktop, tablet, and mobile devices.

## Features
- Modular React component-based structure
- Client-side routing with `react-router-dom`
- Theme toggle with local storage persistence (Dark & Light theme)
- Responsive design using CSS Flexbox and CSS Grid
- Interactive hover transitions and smooth fade-in animations
- Accessible Contact form with client-side validation

## Setup & Run Instructions

To run the project locally, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Component Tree & State-Lifting Decisions

### Component Tree Overview
- `App.jsx` (Root Component)
  - `Navbar.jsx` (Global navigation and theme controller)
  - `main` (React Router Switch)
    - `Home.jsx` (Page)
    - `About.jsx` (Page)
      - `Skills.jsx` (Component)
    - `Projects.jsx` (Page)
      - `ProjectsGrid.jsx` (Component)
        - `ProjectCard.jsx` (Component)
    - `ProjectDetail.jsx` (Page)
    - `Contact.jsx` (Page)
      - `ContactForm.jsx` (Component)
    - `NotFound.jsx` (Page)
  - `Footer.jsx` (Global footer)

### State-Lifting Decisions
- **Theme State (`theme` / `setTheme`)**: Lifted to `App.jsx`. The theme affects the entire application (background colors, text colors) and is set on the `body` element. Since the toggle control is in `Navbar.jsx` and the actual styling applies globally to `App.jsx` and the document body, the state was lifted to `App.jsx` and passed down as props to `Navbar.jsx`.
- **Responsive Menu State (`isOpen`)**: Stored locally in `Navbar.jsx` because the navigation toggle menu is self-contained within the header component and does not affect the rest of the page layouts.
- **Project Card Expand State (`isExpanded`)**: Stored locally inside each individual `ProjectCard.jsx`. Since each project card has its own "View Details / Show Less" toggle button to show the full description, lifting this state is unnecessary and keeping it local ensures other project cards are not affected when one card is expanded.
- **Form Values & Errors**: Stored locally in `ContactForm.jsx`. The input fields, touched fields, and client-side error states are only relevant to the contact form itself, and storing it locally prevents unnecessary re-rendering of parent page components.

## Implementations of `useEffect` Hooks

The following `useEffect` hooks were implemented in the codebase:

1. **Theme Switcher and Local Storage Persistence (`App.jsx`)**
   - **Trigger**: Runs whenever the `theme` state updates.
   - **Why it is necessary**: Synchronizes the updated theme with `localStorage` so the user's choice is remembered on subsequent visits. It also directly applies or removes the CSS class `light-theme` on the HTML `body` element, changing the layout style.

2. **Responsive Menu Collapse on Window Resize (`Navbar.jsx`)**
   - **Trigger**: Runs once when the component mounts (empty dependency array).
   - **Why it is necessary**: Adds a `resize` event listener to the `window`. If a user rotates a mobile screen or resizes the browser window past the `768px` tablet threshold while the drawer is open, the menu is automatically closed to ensure standard desktop navigation is shown correctly. The cleanup function removes the listener to prevent memory leaks when the component unmounts.

3. **Form Client-side Validation (`ContactForm.jsx`)**
   - **Trigger**: Runs whenever `formData` (name, email, message) is modified.
   - **Why it is necessary**: Re-evaluates form field inputs, performs format checking (e.g. email regex validity and min-length message checks), updates error messages dynamically, and enables/disables the form submit button. Doing this inside an effect guarantees validations run instantly as the user types.
