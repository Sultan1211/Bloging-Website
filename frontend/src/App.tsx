import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Publish from './pages/Publish';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Use ProtectedRoute to wrap the protected routes */}
        <Route element={<ProtectedRoute />}>
        <Route 
          path="/blog/:id" 
          element={<Blog />} 
        />
        <Route 
          path="/blogs" 
          element={<Blogs />} 
        />
        <Route 
          path="/publish" 
          element={<Publish />} 
        />
        </Route>

        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
