import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import appStore from './redux/appStore.js'

import { useRouteError } from 'react-router-dom'
import { lazy,Suspense } from 'react'
const Search=lazy(()=>import('./Components/Search.jsx'))
const Cart = lazy(() => import('./Components/Cart.jsx'));
const ProductDetail = lazy(() => import('./Components/ProductDetail.jsx'));
const Product = lazy(() => import('./Components/Product.jsx'));
const CheckOut = lazy(() => import('./Components/CheckOut.jsx'));
const NotFoundPage = lazy(() => import('./Components/NotFoundPage.jsx'));
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />,
    children: [
      {
        path: "/search",
        element: (
          <Suspense fallback={<div>Loading Search...</div>}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading Product...</div>}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "/product-detail/:id",
        element: (
          <Suspense fallback={<div>Loading Product Details...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/product-detail",
        element: (
          <Suspense fallback={<div>Loading Product Details...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<div>Loading Checkout...</div>}>
            <CheckOut />
          </Suspense>
        ),
      },
      {
        path: '*', // Catch-all route for 404 pages
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
   
       <RouterProvider router={approuter}/>
      
    </Provider>
   
  </StrictMode>,
)
