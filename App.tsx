import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AskJokiPage from './pages/AskJokiPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Kata sandi admin yang di-hardcode untuk kesederhanaan
const ADMIN_PASSWORD = 'password123';

/**
 * Komponen utama aplikasi Joki Line.
 * Bertanggung jawab untuk routing sisi klien berbasis hash
 * dan merender halaman yang sesuai.
 */
const App: React.FC = () => {
  const [route, setRoute] = useState<string>(window.location.hash || '#/');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  // Efek untuk mendengarkan perubahan hash di URL
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0); // Gulir ke atas saat halaman berubah
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Panggil sekali saat mount untuk mengatur rute awal
    handleHashChange();

    // Cleanup listener saat komponen unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  /**
   * Menangani upaya login admin.
   * @param {string} password - Kata sandi yang dimasukkan.
   * @returns {boolean} - True jika login berhasil, false jika gagal.
   */
  const handleLogin = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  /**
   * Menangani logout admin.
   */
  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    // Arahkan kembali ke halaman utama setelah logout
    window.location.hash = '#/';
  };

  /**
   * Merender komponen halaman yang benar berdasarkan rute saat ini dan status login.
   * @returns {React.ReactElement} - Komponen halaman yang akan dirender.
   */
  const renderPage = () => {
    if (route.startsWith('#/admin')) {
      return isAdminLoggedIn 
        ? <AdminDashboardPage onLogout={handleLogout} />
        : <AdminLoginPage onLogin={handleLogin} />;
    }

    switch (route) {
      case '#/paket':
        return <PackagesPage />;
      case '#/cara-kerja':
        return <HowItWorksPage />;
      case '#/tanya-joki':
        return <AskJokiPage />;
      case '#/testimoni':
        return <TestimonialsPage />;
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
