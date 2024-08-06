
import './App.css';
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider, Navigate} from 'react-router-dom';
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import BlogPage1 from "./Pages/BlogPage/BlogPage1/BlogPage1";
import BlogPage2 from "./Pages/BlogPage/BlogPage2/BlogPage2";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path='/SpringBoot-infinite-recursion-loop' element={<BlogPage1/>}/>
        <Route path='/SpringBoot-dependency-injection' element={<BlogPage2/>}/>
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
    )
  )

  return<RouterProvider router={router}/>;
}

export default App
