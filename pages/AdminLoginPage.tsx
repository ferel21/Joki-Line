import React, { useState } from 'react';

interface AdminLoginPageProps {
  onLogin: (password: string) => boolean;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(password);
    if (!success) {
      setError('Kata sandi salah. Silakan coba lagi.');
      setPassword('');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center animate-fade-in-up" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="max-w-md w-full bg-brand-gray/80 backdrop-blur-sm border border-brand-light-gray/50 rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-2 font-brand tracking-wider">
          Admin Login
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Masukkan kata sandi untuk mengakses dasbor.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-brand-dark border border-brand-light-gray rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-shadow"
              placeholder="Password"
            />
          </div>

          {error && <p className="text-red-400 text-center text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full bg-brand-cyan text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLoginPage;