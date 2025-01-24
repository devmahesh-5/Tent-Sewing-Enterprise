import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/Store'
import { Provider } from 'react-redux'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Products from './pages/Products.jsx'
import updateProduct from './pages/EditProduct.jsx'
import addProduct from './pages/AddProduct.jsx'
import Achivements from './pages/Achivements.jsx'
import AddAchivement from './pages/AddAchivement.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
const router = createBrowserRouter(  [
   {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path :'/users/login',
        element : <Login />
      },
      {
        path :'/users/signup',
        element : <SignUp />
      },
      {
        path :'/products',
        element : <Products />
      },
      {
        path :'/products/:id',
        element : <Product />
      },
      {
        path : '/products/update-product/:id',
        element : <updateProduct />
      },
      {
        path : '/products/add-product',
        element : <addProduct />
      },
      {
        path : '/achivements',
        element : <Achivements />
      },
      {
        path : '/achivements/add-achivement',
        element : <AddAchivement />
      }
    ]
   }
  ])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router ={router} />
  </Provider>
)
