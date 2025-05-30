import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, Check, Star, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import Logo from '../components/ui/Logo';

const StorefrontPage: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Mock data for the demo
  const salonData = {
    id: storeId,
    name: 'Elite Hair Studio',
    description: 'Premium hair salon services with a focus on quality and style.',
    coverImage: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    logo: 'https://images.pexels.com/photos/3993133/pexels-photo-3993133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    reviews: 124,
    location: '123 Style Avenue, Fashion District',
    hours: 'Mon-Sat: 9am - 7pm',
    phone: '(555) 123-4567',
    subscriptionPlans: [
      {
        id: 'basic',
        name: 'Basic',
        price: 49,
        interval: 'month',
        description: 'Perfect for basic maintenance',
        features: ['1 haircut per month', 'Basic styling', '10% off products', 'Free consultations'],
        popular: false,
      },
      {
        id: 'premium',
        name: 'Premium',
        price: 89,
        interval: 'month',
        description: 'Our most popular package',
        features: ['2 services per month', 'Advanced styling', '15% off products', 'Priority booking', 'Free touch-ups'],
        popular: true,
      },
      {
        id: 'vip',
        name: 'VIP',
        price: 149,
        interval: 'month',
        description: 'The ultimate experience',
        features: ['Unlimited haircuts', 'All styling services', '25% off products', 'VIP booking', 'Free touch-ups', 'Complimentary beverages'],
        popular: false,
      },
    ],
    gallery: [
      'https://images.pexels.com/photos/3993435/pexels-photo-3993435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3993466/pexels-photo-3993466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    testimonials: [
      {
        id: 1,
        name: 'Jessica Miller',
        role: 'Regular Customer',
        content: 'I love their subscription model! I never have to worry about scheduling or payment anymore. It\'s completely hassle-free and the service is always top-notch.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        name: 'Michael Johnson',
        role: 'Premium Member',
        content: 'The premium plan is absolutely worth it. I get priority booking which saves me so much time, and the additional services included make it a great value.',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
  };

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Plans', href: '#plans' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 bg-gradient-to-b from-black/80 to-transparent"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="flex items-center space-x-2">
              <img 
                src={salonData.logo} 
                alt={salonData.name} 
                className="h-12 w-12 rounded-full object-cover border-2 border-white" 
              />
              <span className="text-xl font-bold text-white">{salonData.name}</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
                className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/auth/login"
              className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Book now
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={cn(mobileMenuOpen ? 'block' : 'hidden', 'lg:hidden')}>
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center space-x-2">
                <img 
                  src={salonData.logo} 
                  alt={salonData.name} 
                  className="h-8 w-8 rounded-full object-cover" 
                />
                <span className="text-lg font-bold text-gray-900">{salonData.name}</span>
              </a>
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/auth/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <div id="home" className="relative">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={salonData.coverImage}
              alt={salonData.name}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8 lg:py-56">
            <div className="max-w-2xl text-center sm:mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-5 w-5',
                            i < Math.floor(salonData.rating) ? 'fill-yellow-400' : 'fill-none'
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-white font-medium">
                      {salonData.rating} ({salonData.reviews} reviews)
                    </span>
                  </div>
                </div>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  {salonData.name}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {salonData.description}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="#plans"
                    className="rounded-md bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    View subscription plans
                  </a>
                  <a
                    href="#gallery"
                    className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                  >
                    Explore our work
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-8 w-8 text-primary-600 mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                <p className="mt-2 text-gray-600">{salonData.hours}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary-600 mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="mt-2 text-gray-600">{salonData.location}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary-600 mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
                <p className="mt-2 text-gray-600">{salonData.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription plans */}
        <div id="plans" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Subscription Plans</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Choose the perfect plan for you
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our subscription plans offer the best value and convenience for regular services.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
              {salonData.subscriptionPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    plan.popular
                      ? 'z-10 rounded-xl bg-white shadow-xl ring-1 ring-gray-900/10 sm:mt-0 sm:-mx-4 sm:p-10'
                      : 'rounded-xl bg-white shadow-md ring-1 ring-gray-900/10 sm:p-8',
                    'relative flex flex-col p-8'
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-32 rounded-full bg-primary-600 px-3 py-1 text-center text-xs font-medium text-white">
                      Most popular
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                    <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /{plan.interval}
                      </span>
                    </p>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 text-left">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <Check className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className={cn(
                        'mt-8 block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                        plan.popular
                          ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-500 focus-visible:outline-primary-600'
                          : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                      )}
                    >
                      Subscribe now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div id="gallery" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Gallery</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our work
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                See the quality of our services through our gallery of work.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {salonData.gallery.slice(0, 2).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {salonData.gallery.slice(2).map((image, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  className="overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 3}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div id="reviews" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Testimonials</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What our subscribers say
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Hear from our happy subscribers about their experience.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-2">
              {salonData.testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-between bg-white p-8 shadow-sm ring-1 ring-gray-200 rounded-xl"
                >
                  <div>
                    <div className="flex items-center gap-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-base font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">{testimonial.content}</p>
                  </div>
                  <div className="mt-8 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div id="contact" className="bg-primary-600 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
                Subscribe to one of our plans today and experience the convenience of our service.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#plans"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Contact us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <a href="#" className="flex items-center space-x-2">
                <img 
                  src={salonData.logo} 
                  alt={salonData.name} 
                  className="h-10 w-10 rounded-full object-cover" 
                />
                <span className="text-lg font-bold text-gray-900">{salonData.name}</span>
              </a>
              <p className="text-sm leading-6 text-gray-600">
                Providing premium subscription-based salon services to keep you looking your best.
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
                  <span className="sr-only">X</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Haircuts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Styling
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Coloring
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Treatments
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#home" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#plans" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Plans
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#reviews" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2025 {salonData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StorefrontPage;