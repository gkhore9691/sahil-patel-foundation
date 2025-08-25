import Head from 'next/head';
import { useEffect, useState } from 'react';

import { ThemeToggle } from '../components/ThemeToggle';
import { AppConfig } from '../utils/AppConfig';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>{AppConfig.title}</title>
        <meta name="description" content={AppConfig.description} />
        <meta name="keywords" content={AppConfig.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content={AppConfig.title} />
        <meta property="og:description" content={AppConfig.description} />
        <meta property="og:url" content={AppConfig.url} />
        <meta property="og:image" content={`${AppConfig.url}/og-image.jpg`} />

        {/* Twitter */}
        <meta name="twitter:title" content={AppConfig.title} />
        <meta name="twitter:description" content={AppConfig.description} />
        <meta name="twitter:image" content={`${AppConfig.url}/og-image.jpg`} />
      </Head>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Theme Toggle */}
        <div className="absolute right-6 top-6 z-20">
          <ThemeToggle />
        </div>
        
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10 dark:from-primary-400/20 dark:via-transparent dark:to-secondary-400/20"></div>
          {/* Animated background elements */}
          <div className="absolute left-10 top-20 size-72 animate-bounce rounded-full bg-primary-200/30 mix-blend-multiply blur-xl dark:bg-primary-400/20 dark:mix-blend-screen"></div>
          <div
            className="absolute right-10 top-40 size-72 animate-bounce rounded-full bg-secondary-200/30 mix-blend-multiply blur-xl dark:bg-secondary-400/20 dark:mix-blend-screen"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 size-72 animate-bounce rounded-full bg-primary-300/20 mix-blend-multiply blur-xl dark:bg-primary-300/15 dark:mix-blend-screen"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'translate-y-8 opacity-0'}`}
          >
            <h1 className="mb-6 md:mb-8 font-display text-3xl md:text-5xl font-bold leading-tight lg:text-7xl">
              Every Child Deserves a{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Smile</span> on Their Special Day
            </h1>

            <p className="mx-auto mb-8 md:mb-18 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 lg:text-2xl px-4 md:px-0">
              Sahil Patel Foundations is dedicated to bringing joy to
              underprivileged children through birthday celebrations, nutritious
              meals, and donations that make a real difference.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row px-4 md:px-0">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-200 bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 text-base md:text-lg">
                Donate Now ❤️
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-200 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-500 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 text-base md:text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-gray-400"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-4 md:mb-6 font-display text-3xl md:text-4xl font-bold lg:text-5xl">
                Who We Are
              </h2>
              <p className="mb-4 md:mb-6 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                At Sahil Patel Foundations, we believe every child deserves to
                feel special — no matter their circumstances. Our mission is
                simple: to bring smiles to children's faces through love, care,
                and celebrations.
              </p>
              <p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                From birthdays filled with joy to meals served with dignity,
                we've helped hundreds of children and families across Mumbai.
                Together, we can create moments of happiness that last a
                lifetime.
              </p>

              {/* Milestones */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    Birthday Celebrations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500">
                    10K+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Meals Distributed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500">
                    200+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    Families Supported
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl">
                  <div className="flex h-64 md:h-96 w-full items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100">
                    <div className="p-4 md:p-8 text-center">
                      <span className="mb-2 md:mb-4 block text-4xl md:text-6xl">👶🎈</span>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                        Beautiful moments of children celebrating together
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 flex size-16 md:size-24 items-center justify-center rounded-full bg-primary-500 shadow-lg">
                  <span className="text-xl md:text-3xl">💝</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="mb-4 md:mb-6 font-display text-3xl md:text-4xl font-bold lg:text-5xl">
              What We Do
            </h2>
            <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-300 px-4 md:px-0">
              Our comprehensive approach to child welfare focuses on bringing
              joy, nourishment, education, and support to those who need it
              most.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Birthday Celebrations */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 text-center">
              <div className="mx-auto mb-4 md:mb-6 flex size-12 md:size-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl md:text-3xl">🎂</span>
              </div>
              <h3 className="mb-3 md:mb-4 font-display text-lg md:text-xl font-semibold">
                Birthday Celebrations
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Cakes, gifts, and laughter-filled parties for children.
              </p>
            </div>

            {/* Food Distribution */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 text-center"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="mx-auto mb-4 md:mb-6 flex size-12 md:size-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl md:text-3xl">🍲</span>
              </div>
              <h3 className="mb-3 md:mb-4 font-display text-lg md:text-xl font-semibold">
                Food Distribution
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Nutritious meals for children and families in need.
              </p>
            </div>

            {/* Educational Support */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 text-center"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="mx-auto mb-4 md:mb-6 flex size-12 md:size-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl md:text-3xl">📚</span>
              </div>
              <h3 className="mb-3 md:mb-4 font-display text-lg md:text-xl font-semibold">
                Educational Support
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Books, stationery, and learning kits to inspire growth.
              </p>
            </div>

            {/* Donations & Aid */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 text-center"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="mx-auto mb-4 md:mb-6 flex size-12 md:size-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl md:text-3xl">💝</span>
              </div>
              <h3 className="mb-3 md:mb-4 font-display text-lg md:text-xl font-semibold">
                Material Donations
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Clothes, toys, and daily essentials for better living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="mb-4 md:mb-6 font-display text-3xl md:text-4xl font-bold lg:text-5xl">
              Make a Difference
            </h2>
            <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-300 px-4 md:px-0">
              Your support helps us provide essential care, education, and hope to children in need. Choose how you&apos;d like to contribute to their brighter future.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:gap-8 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8">
              {/* Monetary Donations Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                    <span className="text-2xl">💝</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold">Monetary Donations</h3>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Support our programs with flexible donation amounts
                </p>
                
                {/* Quick Donation Buttons */}
                <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  <button className="px-3 sm:px-4 py-3 rounded-lg font-medium transition-all duration-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 border border-primary-200 dark:border-primary-700 text-sm sm:text-base">
                    ₹500
                  </button>
                  <button className="px-3 sm:px-4 py-3 rounded-lg font-medium transition-all duration-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 border border-primary-200 dark:border-primary-700 text-sm sm:text-base">
                    ₹1,000
                  </button>
                  <button className="px-3 sm:px-4 py-3 rounded-lg font-medium transition-all duration-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 border border-primary-200 dark:border-primary-700 text-sm sm:text-base">
                    ₹2,500
                  </button>
                  <button className="px-3 sm:px-4 py-3 rounded-lg font-medium transition-all duration-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 border border-primary-200 dark:border-primary-700 text-sm sm:text-base">
                    ₹5,000
                  </button>
                </div>
                
                <button className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg font-medium transition-all duration-200 bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg transform hover:-translate-y-0.5 text-base md:text-lg">
                  Donate Now
                </button>
              </div>

              {/* Material Donations Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900/30">
                    <span className="text-2xl">👕</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold">Material Donations</h3>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Donate clothes, books, toys, and other essential items
                </p>
                
                <button className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg font-medium transition-all duration-200 bg-secondary-500 text-white hover:bg-secondary-600 hover:shadow-lg transform hover:-translate-y-0.5 text-base md:text-lg">
                  Donate Items
                </button>
              </div>
            </div>

            {/* Right Column - Sponsor a Child's Birthday */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30">
                  <span className="text-2xl">🎂</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold">Sponsor a Child's Birthday</h3>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                Make a child's special day unforgettable with a birthday celebration
              </p>

              {/* Featured Child */}
              <div className="mb-6 p-4 rounded-lg bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-700">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <span className="text-xl">👧</span>
                  <div>
                    <div className="font-semibold text-base md:text-lg">Priya, Age 8</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Birthday: December 15th</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                  "Dreams of becoming a teacher"
                </p>
              </div>

              {/* Birthday Package */}
              <div className="mb-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <span className="font-semibold text-sm md:text-base">Birthday Package</span>
                  <span className="text-xl md:text-2xl font-bold text-accent-600">₹2,500</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Includes: cake, decorations, gifts, and a special meal
                </p>
              </div>

              <button className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg font-medium transition-all duration-200 bg-accent-500 text-white hover:bg-accent-600 hover:shadow-lg transform hover:-translate-y-0.5 text-base md:text-lg">
                Sponsor Priya's Birthday
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20 p-4 sm:p-6">
              <span className="text-2xl">📞</span>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-primary-700 dark:text-primary-300 text-sm sm:text-base">
                  Not sure how to help?
                </div>
                <div className="text-primary-600 dark:text-primary-400 text-sm">
                  Reach out and we'll guide you
                </div>
              </div>
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-500 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 text-sm sm:text-base">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="mb-4 md:mb-6 font-display text-3xl md:text-4xl font-bold lg:text-5xl">
              Our Impact in Numbers
            </h2>
            <p className="mx-auto max-w-3xl text-lg md:text-xl opacity-90 px-4 md:px-0">
              Every number represents a life touched, a smile created, and hope
              restored.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl md:text-5xl font-bold lg:text-6xl">
                500+
              </div>
              <div className="text-base md:text-xl opacity-90">
                Children Celebrated Birthdays
              </div>
            </div>
            <div
              className="text-center"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="mb-2 text-3xl md:text-5xl font-bold lg:text-6xl">
                10,000+
              </div>
              <div className="text-base md:text-xl opacity-90">Meals Distributed</div>
            </div>
            <div
              className="text-center"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="mb-2 text-3xl md:text-5xl font-bold lg:text-6xl">
                200+
              </div>
              <div className="text-base md:text-xl opacity-90">Families Supported</div>
            </div>
            <div
              className="text-center"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="mb-2 text-3xl md:text-5xl font-bold lg:text-6xl">
                50+
              </div>
              <div className="text-base md:text-xl opacity-90">Community Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="mb-4 md:mb-6 font-display text-3xl md:text-4xl font-bold lg:text-5xl">
              Stories of Hope
            </h2>
            <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-300 px-4 md:px-0">
              Real stories from children, families, and volunteers who have
              experienced the joy of our community.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 md:p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-3 md:mr-4 flex size-10 md:size-12 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-lg md:text-xl">👧</span>
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base">Priya, 8 years old</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    Birthday Celebration
                  </div>
                </div>
              </div>
              <p className="italic text-sm md:text-base text-gray-600 dark:text-gray-300">
                &quot;It was the first time I had a cake just for me. I felt so
                happy!&quot;
              </p>
            </div>

            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-100 transform translate-y-0 transition-all duration-300 ease-out p-8"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-xl">👩</span>
                </div>
                <div>
                  <div className="font-semibold">Sunita Devi</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Mother</div>
                </div>
              </div>
              <p className="italic text-gray-600 dark:text-gray-300">
                "They gave my children food and joy when we had nothing. I am
                forever grateful."
              </p>
            </div>

            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-100 transform translate-y-0 transition-all duration-300 ease-out p-8"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-xl">👨</span>
                </div>
                <div>
                  <div className="font-semibold">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Volunteer</div>
                </div>
              </div>
              <p className="italic text-gray-600 dark:text-gray-300">
                "Volunteering here changed my life. Seeing children smile is the
                biggest reward."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Reviews Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">
              What Our Donors Say
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              The generosity and trust of our donors fuel our mission. Here's
              what they say about their experience with Sahil Patel Foundations.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Donor Review 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-100 transform translate-y-0 transition-all duration-300 ease-out p-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xl">👨‍💼</span>
                  </div>
                  <div>
                    <div className="font-semibold">Amit Sharma</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Donor</div>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                "Contributing ₹25,000 to sponsor birthdays was the best
                decision. 8 children celebrated because of it."
              </p>
              <div className="text-sm font-medium text-primary-600">
                Donated: ₹25,000 | Sponsored: 8 birthdays
              </div>
            </div>

            {/* Donor Review 2 */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-100 transform translate-y-0 transition-all duration-300 ease-out p-8"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xl">👩‍💻</span>
                  </div>
                  <div>
                    <div className="font-semibold">Priya Mehta</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Sponsor</div>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                "As a corporate sponsor, our ₹1.5L donation helped 50+ kids. The
                transparency is excellent."
              </p>
              <div className="text-sm font-medium text-primary-600">
                Corporate Donation: ₹1,50,000 | 50+ children impacted
              </div>
            </div>

            {/* Donor Review 3 */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-100 transform translate-y-0 transition-all duration-300 ease-out p-8"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xl">👵</span>
                  </div>
                  <div>
                    <div className="font-semibold">Rekha Agarwal</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Monthly Donor</div>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                "I've been contributing ₹2,000 every month for 18 months. I can
                see the real impact."
              </p>
              <div className="text-sm font-medium text-primary-600">
                Monthly Donor: ₹2,000 | 18 months active
              </div>
            </div>

            {/* Donor Review 4 */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-100 transform translate-y-0 transition-all duration-300 ease-out p-8"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xl">👨‍🎓</span>
                  </div>
                  <div>
                    <div className="font-semibold">Dr. Vikash Kumar</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Donor</div>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                "My ₹15,000 donation supported 10 kids' birthdays. Pure joy!"
              </p>
              <div className="text-sm font-medium text-primary-600">
                Birthday Donation: ₹15,000 | 10 children celebrated
              </div>
            </div>

            {/* Donor Review 5 */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-100 transform translate-y-0 transition-all duration-300 ease-out p-8"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xl">👫</span>
                  </div>
                  <div>
                    <div className="font-semibold">Rohit & Anjali</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Donors</div>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                "We started with ₹500 and now give ₹3,000/month. Helping grow
                with the foundation feels amazing."
              </p>
              <div className="text-sm font-medium text-primary-600">
                Progressive Donors: ₹500 → ₹3,000/month
              </div>
            </div>

            {/* Donor Review 6 */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-100 transform translate-y-0 transition-all duration-300 ease-out p-8"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xl">👩‍🏫</span>
                  </div>
                  <div>
                    <div className="font-semibold">Meera Joshi</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Teacher & Volunteer
                    </div>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                "As a teacher and volunteer, I've seen how genuine this NGO is.
                Over 25 events have changed lives."
              </p>
              <div className="text-sm font-medium text-primary-600">
                Volunteer + Donor | 25+ events participated
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="rounded-2xl bg-gray-50 dark:bg-gray-700 p-8">
            <div className="grid gap-8 text-center md:grid-cols-4">
              <div>
                <div className="mb-2 text-3xl font-bold text-primary-500">
                  4.9/5
                </div>
                <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
                <div className="mt-2 flex justify-center text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-primary-500">
                  250+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Happy Donors</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-primary-500">
                  95%
                </div>
                <div className="text-gray-600 dark:text-gray-300">Funds to Programs</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-primary-500">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300">Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Impact Statistics */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">
              Our Impact in Detail
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Transparency is our commitment. Here's exactly how your donations
              create lasting impact in children's lives.
            </p>
          </div>

          {/* Main Statistics Grid */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="opacity-100 transform translate-y-0 transition-all duration-300 ease-out rounded-xl bg-white dark:bg-gray-800 p-8 text-center shadow-lg">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl">🎂</span>
              </div>
              <div className="mb-2 text-4xl font-bold text-primary-500">
                523
              </div>
              <div className="mb-2 font-medium text-gray-600 dark:text-gray-300">
                Birthday Celebrations
              </div>
              <div className="text-sm text-gray-500">
                This year: 156 celebrations
              </div>
            </div>

            <div
              className="opacity-100 transform translate-y-0 transition-all duration-300 ease-out rounded-xl bg-white dark:bg-gray-800 p-8 text-center shadow-lg"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl">🍽️</span>
              </div>
              <div className="mb-2 text-4xl font-bold text-primary-500">
                12,840
              </div>
              <div className="mb-2 font-medium text-gray-600 dark:text-gray-300">
                Meals Provided
              </div>
              <div className="text-sm text-gray-500">
                This month: 1,200 meals
              </div>
            </div>

            <div
              className="opacity-100 transform translate-y-0 transition-all duration-300 ease-out rounded-xl bg-white dark:bg-gray-800 p-8 text-center shadow-lg"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <div className="mb-2 text-4xl font-bold text-primary-500">
                267
              </div>
              <div className="mb-2 font-medium text-gray-600 dark:text-gray-300">
                Families Supported
              </div>
              <div className="text-sm text-gray-500">Active families: 89</div>
            </div>

            <div
              className="opacity-100 transform translate-y-0 transition-all duration-300 ease-out rounded-xl bg-white dark:bg-gray-800 p-8 text-center shadow-lg"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
                <span className="text-2xl">💰</span>
              </div>
              <div className="mb-2 text-4xl font-bold text-primary-500">
                ₹8.2L
              </div>
              <div className="mb-2 font-medium text-gray-600 dark:text-gray-300">
                Total Donations
              </div>
              <div className="text-sm text-gray-500">This year: ₹3.1L</div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="mb-16 grid gap-12 lg:grid-cols-2">
            {/* Financial Breakdown */}
            <div className="opacity-100 transform translate-y-0 transition-all duration-300 ease-out rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg">
              <h3 className="mb-6 text-center font-display text-2xl font-bold">
                Fund Allocation Breakdown
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">Birthday Celebrations</span>
                    <span className="font-bold text-primary-500">45%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-200">
                    <div
                      className="h-3 rounded-full bg-primary-500"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    ₹3.69L - Cakes, gifts, decorations
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">Food Distribution</span>
                    <span className="font-bold text-secondary-500">35%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-200">
                    <div
                      className="h-3 rounded-full bg-secondary-500"
                      style={{ width: '35%' }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    ₹2.87L - Nutritious meals, groceries
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">Educational Support</span>
                    <span className="font-bold text-accent-600">15%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-200">
                    <div
                      className="h-3 rounded-full bg-accent-600"
                      style={{ width: '15%' }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    ₹1.23L - Books, stationery, uniforms
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">Administrative Costs</span>
                    <span className="font-bold text-gray-500">5%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-200">
                    <div
                      className="h-3 rounded-full bg-gray-500"
                      style={{ width: '5%' }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    ₹41K - Operations, transport
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Progress */}
            <div className="opacity-100 transform translate-y-0 transition-all duration-300 ease-out rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg">
              <h3 className="mb-6 text-center font-display text-2xl font-bold">
                This Month's Progress
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-lg bg-primary-50 dark:bg-primary-900/20 p-4">
                  <div>
                    <div className="font-semibold">Birthday Celebrations</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Target: 15 | Completed: 12
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-500">
                      80%
                    </div>
                    <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-gray-600">
                      <div
                        className="h-2 rounded-full bg-primary-500"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-secondary-50 dark:bg-secondary-900/20 p-4">
                  <div>
                    <div className="font-semibold">Food Distribution</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Target: 1,500 meals | Served: 1,200
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-secondary-500">80%</div>
                    <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-gray-600">
                      <div
                        className="h-2 rounded-full bg-secondary-500"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-accent-50 dark:bg-accent-900/20 p-4">
                  <div>
                    <div className="font-semibold">Educational Support</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Target: 25 kits | Distributed: 30
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent-600">120%</div>
                    <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-gray-600">
                      <div
                        className="h-2 rounded-full bg-accent-600"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-50 dark:bg-gray-700 p-4">
                  <div>
                    <div className="font-semibold">Donation Goal</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Target: ₹30,000 | Raised: ₹27,500
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-500">
                      92%
                    </div>
                    <div className="h-2 w-16 rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-primary-500"
                        style={{ width: '92%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Geographic Impact */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg">
            <h3 className="mb-8 text-center font-display text-2xl font-bold">
              Geographic Impact Across Mumbai
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-2xl">🏙️</span>
                </div>
                <h4 className="mb-2 font-semibold">Dharavi Area</h4>
                <div className="mb-1 text-2xl font-bold text-primary-500">
                  180
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Children Served</div>
                <div className="text-xs text-gray-500">
                  65 families supported
                </div>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-secondary-100">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h4 className="mb-2 font-semibold">Kurla Region</h4>
                <div className="mb-1 text-2xl font-bold text-secondary-500">
                  142
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Children Served</div>
                <div className="text-xs text-gray-500">
                  48 families supported
                </div>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-accent-100">
                  <span className="text-2xl">🌆</span>
                </div>
                <h4 className="mb-2 font-semibold">Bandra Slums</h4>
                <div className="mb-1 text-2xl font-bold text-accent-600">95</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Children Served</div>
                <div className="text-xs text-gray-500">
                  32 families supported
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-secondary-500 to-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-display text-4xl font-bold lg:text-6xl">
              Together, We Can Bring Smiles to Children's Lives
            </h2>
            <p className="mb-8 text-xl opacity-90 lg:text-2xl">
              Your support can transform a child's day into a memory of
              happiness. Be part of this change.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-600 px-10 py-5 text-xl">
              Donate Now and Make a Difference ❤️
            </button>
          </div>
        </div>
      </section>

      {/* Contact & Newsletter */}
      <section className="py-12 md:py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h3 className="mb-4 md:mb-6 font-display text-2xl md:text-3xl font-bold">
                Get in Touch
              </h3>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 dark:text-gray-300">
                Have questions or want to get involved? We&apos;d love to hear from
                you.
              </p>

              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="How can we help you or how would you like to help us?"
                  ></textarea>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-200 bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 text-sm md:text-base">
                  Send Message
                </button>
              </form>
            </div>

            {/* Newsletter & Info */}
            <div>
              <h3 className="mb-4 md:mb-6 font-display text-2xl md:text-3xl font-bold">
                Stay Connected
              </h3>
              <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-600 dark:text-gray-300">
                Subscribe to hear stories, updates, and impact reports.
              </p>

              <div className="mb-6 md:mb-8 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-gray-700 p-4 md:p-8">
                <div className="mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
                  <span className="text-xl md:text-2xl">📧</span>
                  <h4 className="text-lg md:text-xl font-semibold">Newsletter Signup</h4>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <input
                    type="email"
                    className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:border-transparent focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your email"
                  />
                  <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-200 bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 text-sm md:text-base">Subscribe</button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold">Follow Us</h4>
                <div className="flex gap-3 md:gap-4">
                  <a
                    href={AppConfig.social.facebook}
                    className="flex size-10 md:size-12 items-center justify-center rounded-full bg-secondary-500 text-white transition-colors hover:bg-secondary-600"
                  >
                    <span className="text-base md:text-lg">📘</span>
                  </a>
                  <a
                    href={AppConfig.social.twitter}
                    className="flex size-10 md:size-12 items-center justify-center rounded-full bg-secondary-400 text-white transition-colors hover:bg-secondary-500"
                  >
                    <span className="text-base md:text-lg">🐦</span>
                  </a>
                  <a
                    href={AppConfig.social.instagram}
                    className="flex size-10 md:size-12 items-center justify-center rounded-full bg-primary-500 text-white transition-colors hover:bg-primary-600"
                  >
                    <span className="text-base md:text-lg">📷</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary-500">
                  <span className="text-lg">🎂</span>
                </div>
                <span className="font-display text-xl font-bold">
                  {AppConfig.site_name}
                </span>
              </div>
              <p className="mb-4 text-gray-400">
                Bringing joy, one child at a time.
              </p>
            </div>

            <div>
              <h5 className="mb-4 font-semibold">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="transition-colors hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#mission"
                    className="transition-colors hover:text-white"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#donate"
                    className="transition-colors hover:text-white"
                  >
                    Donate
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition-colors hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-4 font-semibold">How to Help</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Donate Money
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Sponsor Birthday
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Donate Items
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Volunteer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-4 font-semibold">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <div>📧 sahilpatelfoundations@email.com</div>
                <div>📞 +91-9876543210</div>
                <div>📍 Mumbai, India</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {AppConfig.site_name}. All Rights Reserved.</p>
            <p className="mt-2 text-sm">
              Donations are 100% transparent and tax certificates available.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
