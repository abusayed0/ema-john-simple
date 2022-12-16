import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Shop from './components/shop/Shop'
import About from './components/about/About';
import Orders from './components/orders/Orders';
import Inventory from './components/inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoaders';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          loader:productsAndCartLoader,
          element:<Shop></Shop>
        },
        {
          path:"/orders",
          loader:productsAndCartLoader,
          element:<Orders></Orders>
        },
        {
          path:"/inventory",
          element:<Inventory></Inventory>
        },
        {
          path:"/about",
          element:<About></About>
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
