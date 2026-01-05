import Blog from './pages/Blog';
import Home from './pages/Home';
import blogPost from './pages/blog-post';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Blog": Blog,
    "Home": Home,
    "blog-post": blogPost,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};