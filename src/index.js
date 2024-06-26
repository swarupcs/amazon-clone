import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import Login from './components/Login';
import Payment from './components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
const promise = loadStripe(stripeKey);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/checkout",
        element: <Checkout/>
      },
      {
        path: "/payment",
        element: [
        <Elements stripe={promise}>
          <Payment/>
        </Elements>

      ]
      },
      {
        path: "/orders",
        element: <Home/>
      },

    ],
    
  },
  {
    path: "/login",
    element: <Login/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
    <RouterProvider router={router} />

  </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

