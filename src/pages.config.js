import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import Blog from './pages/Blog';
import __Layout from './Layout.jsx';


export const PAGES = {
    "BlogPost": BlogPost,
    "Home": Home,
    "Blog": Blog,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};