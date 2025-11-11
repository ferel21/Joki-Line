import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AskJokiPage from './pages/AskJokiPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Gunakan environment variable untuk password, dengan fallback untuk development
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

/**
 * Komponen utama aplikasi Joki Line.
 * Bertanggung jawab untuk menyusun tata letak halaman utama
 * dan merender halaman yang sesuai berdasarkan routing.
 */
const App: React.FC = () => {
  // Menggunakan window.location.hash untuk routing sisi klien sederhana
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(
    () => !!sessionStorage.getItem('isAdminAuthenticated')
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0); // Selalu scroll ke atas saat halaman berganti
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleLogin = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      setIsAdminAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    setIsAdminAuthenticated(false);
    // Arahkan kembali ke halaman utama setelah logout
    window.location.hash = '#/';
  };

  // Fungsi untuk merender komponen halaman yang sesuai
  const renderPage = () => {
    switch (route) {
      case '#/paket':
        return <PackagesPage />;
      case '#/cara-kerja':
        return <HowItWorksPage />;
      case '#/tanya-joki':
        return <AskJokiPage />;
      case '#/testimoni':
        return <TestimonialsPage />;
      case '#/admin':
        return isAdminAuthenticated ? (
          <AdminDashboardPage onLogout={handleLogout} />
        ) : (
          <AdminLoginPage onLogin={handleLogin} />
        );
      case '#/':
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="bg-brand-dark min-h-screen font-sans text-gray-300 flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;