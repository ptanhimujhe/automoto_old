import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BlogHomePage from './pages/BlogHomePage';
import BlogPostPage from './pages/BlogPostPage';
import BlogCategoryPage from './pages/BlogCategoryPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogHomePage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;