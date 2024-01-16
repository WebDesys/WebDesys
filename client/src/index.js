import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import authReducer, { loadUser } from './features/authSlice';
import ClientLogoReducer, { getClientLogo } from './features/ClientLogoSlice';
import projectsReducer, { getProjects } from './features/OurProjectSlice'
import blogsSlice, { getBlogs } from './features/blogsSlice'
import testimonialSlice, { getAllTestimonial } from './features/testimonialSlice';
import careerSlice, { getAllCareer } from './features/careerSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    clientLogo: ClientLogoReducer,
    ourProjects: projectsReducer,
    blogs: blogsSlice,
    testimonials: testimonialSlice,
    careers: careerSlice
  }
});
store.dispatch(loadUser(null));
store.dispatch(getClientLogo());
store.dispatch(getProjects());
store.dispatch(getBlogs());
store.dispatch(getAllTestimonial());
store.dispatch(getAllCareer());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
