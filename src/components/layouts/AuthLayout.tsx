import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Link to="/" className="inline-flex items-center">
              <Logo />
            </Link>
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-text">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <Outlet />
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link
              to="/auth/register"
              className="font-semibold leading-6 text-text hover:text-text/90"
            >
              Start your 14-day free trial
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;