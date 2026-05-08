import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-[#F7F8FC] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl text-[#151249] mb-2 font-bold">Login</h1>
            <p className="text-[#B8B9C9]">Welcome back! Enter your credentials to access your dashboard.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[#151249] mb-2 font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B9C9]" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#E3E4EE] focus:border-[#151249] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-[#151249] mb-2 font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B9C9]" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#E3E4EE] focus:border-[#151249] focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-[#151249] hover:underline text-sm">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#151249] text-white rounded-lg hover:bg-[#2A257A] transition-all font-semibold shadow-lg"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-[#B8B9C9]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#151249] hover:underline font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
