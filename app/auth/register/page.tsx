'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card';
import { Button } from '../../../components/Button';
import { Navbar } from '../../../components/Navbar';

const SocialButton: React.FC<{ name: string }> = ({ name }) => {
  const icons: Record<string, string> = {
    Facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z',
    Apple: 'M16.365 1.43a4.16 4.16 0 00-2.63 1.43 3.98 3.98 0 00-.98 2.87c.03.22.13.43.29.6a3.64 3.64 0 002.63-1.43 3.93 3.93 0 00.99-2.87 1.11 1.11 0 00-.3-.6zM19.68 8.45a4.75 4.75 0 00-3.92-2.12c-1.84 0-2.63.88-3.92.88-1.31 0-2.3-.86-3.93-.86a4.87 4.87 0 00-4.03 2.43c-1.4 2.44-.35 6.04 1.01 8.02.9 1.31 1.97 2.78 3.37 2.78 1.31 0 1.73-.88 3.64-.88 1.92 0 2.28.88 3.63.88 1.43 0 2.4-1.44 3.31-2.77 1.04-1.5 1.47-2.96 1.47-3.05-.04-.03-.26-.1-.65-.1a2.9 2.9 0 01-1.29-.22 3.38 3.38 0 01-1.24-.9z',
    Google: 'M21.35 11.1h-9.18v2.92h5.34a4.57 4.57 0 01-2 3 5.58 5.58 0 01-3.32.92 5.52 5.52 0 01-3.91-1.55 5.3 5.3 0 01-1.62-3.89c0-1.53.55-2.84 1.65-3.9a5.2 5.2 0 013.91-1.6 5.3 5.3 0 013.16 1.1l2.06-2.05A8.33 8.33 0 0012.3 4c-2.26 0-4.22.74-5.76 2.22A7.54 7.54 0 004.36 12c0 2.08.72 3.88 2.18 5.34a7.47 7.47 0 005.76 2.26 7.6 7.6 0 005.4-2.05 7.5 7.5 0 002.04-5.54c0-.45-.05-.86-.1-1.26z',
  };

  return (
    <button className="flex-1 h-10 rounded-lg border border-gray-300 flex items-center justify-center bg-white hover:border-gray-400 transition-colors shadow-sm">
      <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
        <path d={icons[name]} />
      </svg>
    </button>
  );
};

export default function RegisterPage() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar simplifié */}
      <Navbar />

      {/* Formulaire */}
      <main className="flex justify-center items-start -mt-28 z-20 relative px-4">
        <Card className="w-full max-w-md p-6 md:p-8 rounded-xl shadow-2xl bg-white border border-gray-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-gray-800 mb-6">
              Register with
            </CardTitle>
          </CardHeader>

          <CardContent>
            {/* Boutons sociaux */}
            <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
              <SocialButton name="Facebook" />
              <SocialButton name="Apple" />
              <SocialButton name="Google" />
            </div>

            {/* Ligne "or" */}
            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Formulaire */}
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full h-10 rounded-lg p-3 border border-gray-300 focus:ring-[#2EC4B6] focus:border-[#2EC4B6]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-10 rounded-lg p-3 border border-gray-300 focus:ring-[#2EC4B6] focus:border-[#2EC4B6]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full h-10 rounded-lg p-3 border border-gray-300 focus:ring-[#2EC4B6] focus:border-[#2EC4B6]"
                />
              </div>

              {/* Toggle Remember Me */}
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`relative inline-flex h-5 w-10 rounded-full border transition-colors ${
                    rememberMe ? 'bg-[#2EC4B6]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 bg-white rounded-full transform transition ${
                      rememberMe ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className="text-sm text-gray-600">Remember me</span>
              </div>

              {/* Bouton Sign Up */}
              <Button className="w-full h-11 text-lg font-semibold text-white bg-[#2EC4B6] hover:bg-[#27b1a3] rounded-lg shadow-md mt-4 transition-colors">
                SIGN UP
              </Button>

              {/* Lien Sign In */}
              <div className="text-center mt-6 text-sm">
                <span className="text-gray-600">Already have an account? </span>
                <a
                  href="/login"
                  className="text-[#2EC4B6] font-medium hover:text-[#27b1a3]"
                >
                  Sign In
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
