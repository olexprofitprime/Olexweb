import { lazy } from "react";

// Lazy load all pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Work = lazy(() => import('./pages/Work'));
const Insights = lazy(() => import('./pages/Insights'));

export const PAGES = {
    "About": About,
    "Contact": Contact,
    "Home": Home,
    "Services": Services,
    "Work": Work,
    "Insights": Insights,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};