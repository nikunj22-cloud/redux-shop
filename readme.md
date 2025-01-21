# Redux Shop App

This project demonstrates state management in a React shopping application using Redux.

## Installation

Ensure you have Node.js installed, then run the following commands:

```sh
# Clone the repository
git clone <repository_url>
cd <project_directory>

# Install dependencies
npm install
```

## Setting Up Redux

1. Install `redux` and `react-redux`:
   ```sh
   npm install redux react-redux
   ```

2. Create a `store.js` file to configure Redux store:
   ```jsx
   import { createStore } from 'redux';
   import rootReducer from './reducers';

   const store = createStore(rootReducer);

   export default store;
   ```

3. Define a reducer in `reducers/shopReducer.js`:
   ```jsx
   const initialState = {
       products: [],
       cart: []
   };

   function shopReducer(state = initialState, action) {
       switch (action.type) {
           case 'ADD_TO_CART':
               return { ...state, cart: [...state.cart, action.payload] };
           case 'REMOVE_FROM_CART':
               return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
           default:
               return state;
       }
   }

   export default shopReducer;
   ```

4. Combine reducers in `reducers/index.js`:
   ```jsx
   import { combineReducers } from 'redux';
   import shopReducer from './shopReducer';

   const rootReducer = combineReducers({
       shop: shopReducer
   });

   export default rootReducer;
   ```

5. Provide Redux store in `index.js`:
   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import store from './store';
   import App from './App';

   ReactDOM.render(
       <Provider store={store}>
           <App />
       </Provider>,
       document.getElementById('root')
   );
   ```

## Actions

Define actions in `actions/shopActions.js`:
```jsx
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId
});
```

## Components

- **ProductList**: Displays available products.
- **Cart**: Shows added items.

Example `ProductList.js`:
```jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/shopActions';

function ProductList({ products }) {
    const dispatch = useDispatch();
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
```

## Running the Project

Start the development server with:
```sh
npm start
```

The application will be available at `http://localhost:3000/`.

## License
This project is licensed under the MIT License.


