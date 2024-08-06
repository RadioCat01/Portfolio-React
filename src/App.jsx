
import './App.css';
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider, Navigate} from 'react-router-dom';
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage/HomePage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
    )
  )

  return<RouterProvider router={router}/>;
}

export default App
