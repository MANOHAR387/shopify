# ShoppyGlobe E-commerce Application  

ShoppyGlobe is a basic e-commerce application built with React, showcasing features like product listing, detailed product view, shopping cart management, and a responsive UI. It uses Redux for state management and React Router for routing.  

---

## 🚀 Features  

### Component Structure  
- **App**: The main component orchestrating the application.  
- **Header**: Displays navigation menu and shopping cart icon.  
- **ProductList**: Lists all products fetched from an API.  
- **ProductItem**: Represents a single product with an "Add to Cart" button.  
- **ProductDetail**: Displays detailed information about a selected product.  
- **Cart**: Shows added items with options to update quantities or remove items.  
- **CartItem**: Represents a single cart item.  
- **NotFound**: 404 page for unknown routes.  

### Key Features  
1. **Props**: Data passed between components ensures reusability and flexibility.  
2. **Data Fetching**:  
   - Fetches product list using a custom hook and `useEffect` from the API: `https://dummyjson.com/products`.  
   - Handles API errors gracefully.  
3. **Redux State Management**:  
   - Manages cart state, including adding, removing, and updating items.  
   - Implements a search feature for filtering products in `ProductList`.  
4. **React Routing**:  
   - Home, Product Detail, Cart, and Checkout routes implemented using `React Router`.  
   - Product details are fetched dynamically using route parameters.  
5. **Event Handling**:  
   - Add/remove products to/from the cart with proper event handling.  
6. **Performance Optimization**:  
   - Implements lazy loading and code splitting with `React.lazy` and `Suspense`.  
7. **Responsive Design**:  
   - Ensures usability across different screen sizes with responsive styles.  

---

## 🛠️ Installation  

### Prerequisites  
- Node.js (>= 14.x)  
- npm or yarn  

### Steps to Run  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/shoppyglobe.git  
   cd shoppyglobe  
npm install  
npm start  
