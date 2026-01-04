import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Blog": Blog,
    "BlogPost": BlogPost,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};