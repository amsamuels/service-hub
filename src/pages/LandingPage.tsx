import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { Calendar, Users, CreditCard, ChevronDown, Menu, X, Check, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const features = [
    {
      title: 'Smart Booking',
      description: 'Streamline your appointment scheduling with our intelligent booking system.',
      icon: Calendar,
    },
    {
      title: 'Client Management',
      description: 'Keep track of your clients and their preferences effortlessly.',
      icon: Users,
    },
    {
      title: 'Online Payments',
      description: 'Accept payments and manage subscriptions seamlessly.',
      icon: CreditCard,
    },
  ];

  const testimonials = [
    {
      content: "SalonHub has transformed how I run my salon. The booking system is incredibly intuitive.",
      author: "Sarah Johnson",
      role: "Salon Owner",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      content: "My clients love how easy it is to book appointments. It's a game-changer!",
      author: "Michael Chen",
      role: "Barber Shop Owner",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
  ];

  const faqs = [
    {
      question: "How does the booking system work?",
      answer: "Our booking system allows clients to schedule appointments 24/7. They can choose their preferred service, time slot, and even their favorite staff member.",
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major credit cards, digital wallets, and can even handle recurring payments for membership programs.",
    },
    {
      question: "Can I customize my booking page?",
      answer: "Yes! You can fully customize your booking page with your brand colors, logo, and service descriptions.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold text-text">SalonHub</span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-text hover:text-text/80"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <Link
              to="/auth/login"
              className="text-sm font-semibold leading-6 text-text"
            >
              Log in
            </Link>
            <Link
              to="/auth/register"
              className="rounded-md bg-secondary px-3.5 py-2 text-sm font-semibold text-text shadow-sm hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Start Free Trial
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                  <Calendar className="h-8 w-8 text-secondary" />
                  <span className="text-xl font-bold text-text">SalonHub</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      to="/auth/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-text hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link
                      to="/auth/register"
                      className="mt-4 block rounded-md bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-text shadow-sm hover:bg-secondary/90"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate pt-14">
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-4xl text-center"
              >
                <h1 className="text-4xl font-bold tracking-tight text-text sm:text-hero">
                  Software for salons and beauty pros
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  The beauty of booking with ease - Scheduling, reminders, payments and more.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/auth/register"
                    className="rounded-md bg-secondary px-5 py-3 text-base font-semibold text-text shadow-sm hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  >
                    Start Free Trial
                  </Link>
                  <a
                    href="#features"
                    className="text-base font-semibold leading-6 text-text flex items-center"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div id="features" className="bg-beige py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Everything you need to run your salon
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Powerful features designed specifically for beauty professionals.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-pink rounded-2xl p-8"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-secondary">
                    <feature.icon className="h-6 w-6 text-text" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-7 text-text">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div id="testimonials" className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Loved by beauty professionals
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Hear what our customers have to say about SalonHub.
              </p>
            </div>
            <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:max-w-4xl">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl bg-pink p-8"
                  >
                    <p className="text-lg leading-8 text-gray-600">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-6 flex items-center gap-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-text">{testimonial.author}</div>
                        <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="bg-beige py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Find answers to common questions about our platform.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <Accordion.Root type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <Accordion.Item
                    key={index}
                    value={item-${index}}
                    className="rounded-lg bg-white px-6 py-4"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between text-left">
                        <span className="text-lg font-semibold text-text">{faq.question}</span>
                        <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="pt-4 pb-2">
                      <p className="text-gray-600">{faq.answer}</p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-secondary">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Ready to transform your salon business?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-800">
                Join thousands of beauty professionals who are growing their business with our platform.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/auth/register"
                  className="rounded-md bg-text px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-text/90"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/auth/login"
                  className="text-base font-semibold leading-6 text-text"
                >
                  Sign in <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link to="/" className="flex items-center space-x-2">
                <Calendar className="h-8 w-8 text-secondary" />
                <span className="text-xl font-bold text-text">SalonHub</span>
              </Link>
              <p className="text-sm leading-6 text-gray-600">
                Making salon management beautiful and effortless.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-text">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        Booking
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        Analytics
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-text">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        API Status
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-text">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-text">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600 hover:text-text">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2025 SalonHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;"