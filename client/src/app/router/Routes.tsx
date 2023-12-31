import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductDetail from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";

import ContactUs from "../../features/contact/ContactPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'catalog', element: <Catalog />},
            {path: 'catalog/:id', element: <ProductDetail />},
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactUs />}
            
        ]
    }
])