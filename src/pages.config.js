import Blog from './pages/Blog';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Blog": Blog,
    "Home": Home,
    "BlogPost": BlogPost,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};