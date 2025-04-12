# QuickKart E-commerce Project

QuickKart is a modern, responsive e-commerce web application built with React and Tailwind CSS. This platform allows users to browse products, filter by categories, search for specific items, add products to their cart, and manage their shopping cart.

![QuickKart E-commerce](https://placeholder-image.com)

## Features

- **Responsive Design**: Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices
- **Product Browsing**: View all available products with filtering and search capabilities
- **Shopping Cart**: Add items to cart, update quantities, and remove items
- **Order Summary**: Real-time calculation of subtotal, tax, and total price
- **Dynamic Navigation**: Interactive header with mobile-friendly navigation

## Tech Stack

- **React**: Front-end UI library for building the user interface
- **React Router**: For handling navigation between pages
- **Context API**: For state management across components
- **Tailwind CSS**: For styling and responsive design
- **Vite**: Fast and efficient build tool

## Project Structure

```
src/
├── components/           # Reusable UI components
│   └── Header.jsx        # Application header with navigation
├── context/              # Context API related files
│   ├── CartContext.jsx   # Cart context definition
│   └── CartProvider.jsx  # Cart context provider with state and methods
├── pages/                # Application pages
│   ├── Home.jsx          # Landing page
│   ├── Store.jsx         # Products listing page
│   └── Cart.jsx          # Shopping cart page
├── App.jsx               # Main application component with routing
└── main.jsx              # Application entry point
```

## React Concepts Used

### Hooks

- **useState**: Used for managing component-level state like:
  - Cart items in CartProvider
  - Search query and category filters in Store page
  - Mobile menu toggle in Header
  - Total price calculation in Cart page

- **useEffect**: Used for:
  - Fetching product data from the API
  - Calculating total price when cart items change
  - Handling side effects after component renders

- **useContext**: Used to access the CartContext data throughout the application

### Context API

The application uses React's Context API for global state management:

- **CartContext**: Provides cart-related state and functions across components
- **CartProvider**: Implements the context logic and wraps the application

### Component Patterns

- **Functional Components**: All components are function-based
- **Conditional Rendering**: Used to show/hide elements based on state
  - Empty cart message when cart is empty
  - Mobile menu toggle
  - Loading state during API calls

### Array Methods

- **map**: Used to render lists of items:
  - Products in the Store page
  - Cart items in the Cart page
  - Categories in the filter dropdown

- **filter**: Used for:
  - Filtering products by category and search query
  - Removing items from the cart

- **reduce**: Used to calculate the total price of items in the cart

### Other JavaScript Concepts

- **Destructuring**: Used to extract values from objects and arrays
- **Spread operator**: Used for state updates while maintaining immutability
- **Template literals**: Used for dynamic string creation
- **Arrow functions**: Used for concise function syntax

## Running the Project

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## API Integration

The application fetches product data from the Fake Store API:
```
https://fakestoreapi.in/api/products
```

## Future Enhancements

- User authentication
- Wishlist functionality
- Product details page
- Order processing and payment integration
- User profile management
- Admin dashboard for product management
- Dark mode support