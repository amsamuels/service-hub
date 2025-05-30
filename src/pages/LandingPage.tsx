// src/pages/LandingPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const LandingPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const features = [
    { name: 'Smart Booking', description: 'Schedule appointments with ease.', icon: Calendar },
    { name: 'Client Management', description: 'Track clients and preferences.', icon: Calendar },
    { name: 'Online Payments', description: 'Get paid without friction.', icon: Calendar },
  ];

  const faqs = [
    { question: 'How does booking work?', answer: 'Clients schedule anytime with your link.' },
    { question: 'Do I get reminders?', answer: 'Yes, automated SMS and emails are included.' },
    { question: 'Can I customize?', answer: 'You can fully personalize your storefront.' },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link to="/" className="flex items-center space-x-2 text-lg font-bold">
            <Calendar className="text-indigo-600" />
            <span>SalonHub</span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-indigo-600">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-4">
            <Link to="/auth/login" className="text-sm">Log in</Link>
            <Link to="/auth/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-500">
              Start Free Trial
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <Link to="/" className="flex items-center space-x-2 text-lg font-bold">
                <Calendar className="text-indigo-600" />
                <span>SalonHub</span>
              </Link>
              <button onClick={() => setMobileOpen(false)}>
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="block text-base" onClick={() => setMobileOpen(false)}>
                  {item.name}
                </a>
              ))}
              <Link to="/auth/login" className="block mt-4">Log in</Link>
              <Link to="/auth/register" className="mt-2 block bg-indigo-600 text-white px-4 py-2 rounded-md">
                Start Free Trial
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-40 pb-24 text-center max-w-3xl mx-auto px-4">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6">
          Empower your beauty business with smarter tools
        </motion.h1>
        <p className="text-lg text-gray-600 mb-8">Booking, payments, and growth—all in one simple platform.</p>
        <div className="flex justify-center gap-4">
          <Link to="/auth/register" className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500">
            Start Free Trial
          </Link>
          <a href="#features" className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything your salon needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <f.icon className="h-10 w-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.name}</h3>
                <p className="text-gray-600 text-sm">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">FAQs</h2>
          <Accordion.Root type="single" collapsible className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} value={`faq-${index}`} className="border p-4 rounded-lg">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full font-semibold text-gray-800">
                    {faq.question}
                    <ChevronDown className="h-5 w-5" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="mt-2 text-gray-600">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold">Grow your salon with confidence</h2>
        <p className="mt-4 text-lg">Join hundreds of businesses using SalonHub</p>
        <div className="mt-6">
          <Link to="/auth/register" className="bg-white text-indigo-600 px-6 py-3 font-semibold rounded-md hover:bg-gray-100">
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-sm text-gray-600 py-10 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} SalonHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
