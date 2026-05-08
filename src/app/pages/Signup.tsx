import { User, Mail, Phone, Lock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Signup() {
  const [accountType, setAccountType] = useState<'customer' | 'interpreter'>('customer');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted:', { ...formData, accountType });
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
            <h1 className="text-3xl text-[#151249] mb-2 font-bold">Create Your Account</h1>
            <p className="text-[#B8B9C9]">Choose account type:</p>
          </div>

          {/* Account Type Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              onClick={() => setAccountType('customer')}
              className={`p-4 rounded-lg border-2 transition-all ${
                accountType === 'customer'
                  ? 'border-[#151249] bg-[#151249] text-white'
                  : 'border-[#E3E4EE] hover:border-[#151249]'
              }`}
            >
              <User className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium">Customer</p>
            </button>
            <button
              type="button"
              onClick={() => setAccountType('interpreter')}
              className={`p-4 rounded-lg border-2 transition-all ${
                accountType === 'interpreter'
                  ? 'border-[#151249] bg-[#151249] text-white'
                  : 'border-[#E3E4EE] hover:border-[#151249]'
              }`}
            >
              <User className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium">Interpreter</p>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-[#151249] mb-2 font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B9C9]" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#E3E4EE] focus:border-[#151249] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
            </div>

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
              <label htmlFor="phone" className="block text-[#151249] mb-2 font-medium">Phone</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B9C9]" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#E3E4EE] focus:border-[#151249] focus:outline-none transition-colors"
                  placeholder="+32 4XX XX XX XX"
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

            <div>
              <label htmlFor="confirmPassword" className="block text-[#151249] mb-2 font-medium">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B9C9]" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#E3E4EE] focus:border-[#151249] focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#151249] text-white rounded-lg hover:bg-[#2A257A] transition-all font-semibold shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-[#B8B9C9]">
              Already have an account?{' '}
              <Link to="/login" className="text-[#151249] hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
