import React from 'react';
import { Link } from 'react-router-dom';
import { CircleOff } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-12">
      <CircleOff className="h-16 w-16 text-gray-400 mb-4" />
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/"
          className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
        >
          Go back home
        </Link>
        <Link to="/auth/login" className="text-sm font-semibold text-gray-900">
          Login <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;