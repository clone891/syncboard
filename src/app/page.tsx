'use client';

import { Menu, X, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-sm font-bold">
              S
            </div>
            <span className="text-lg font-semibold">SyncBoard</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-300 hover:text-slate-50 transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-300 hover:text-slate-50 transition"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-slate-300 hover:text-slate-50 transition"
            >
              Pricing
            </button>
          </div>

          {/* Sign In Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 border border-slate-700 rounded-lg text-slate-300 hover:text-slate-50 hover:border-slate-600 transition text-sm">
              Sign in
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900/50 backdrop-blur px-4 py-4">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-2 text-slate-300 hover:text-slate-50"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left py-2 text-slate-300 hover:text-slate-50"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-2 text-slate-300 hover:text-slate-50"
            >
              Pricing
            </button>
            <button className="block w-full text-left py-2 mt-2 text-slate-300 hover:text-slate-50">
              Sign in
            </button>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-3 py-1 bg-indigo-900/30 border border-indigo-700/50 rounded-full text-xs font-medium text-indigo-300">
                  Project hub for fast-moving teams
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Stay on top of every project.
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed">
                SyncBoard brings tasks, deadlines, and team updates into one simple
                workspace so your team never misses what matters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
                  Start free trial
                </button>
                <button className="px-6 py-3 border border-slate-700 hover:border-slate-600 rounded-lg font-medium transition">
                  Book a demo
                </button>
              </div>

              <p className="text-xs text-slate-500 pt-2">
                No credit card required · Get started in under 2 minutes
              </p>
            </div>

            {/* Right Content - Dashboard Mock */}
            <div className="hidden md:block">
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Active sprints</h3>
                  <span className="px-2 py-1 bg-sky-900/40 border border-sky-700/60 rounded-full text-xs text-sky-300">
                    This week · 3 teams
                  </span>
                </div>

                {/* Project Cards */}
                <div className="space-y-3">
                  {/* Card 1 */}
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-sm">Website redesign</p>
                        <p className="text-xs text-slate-400">18 tasks · 5 in progress</p>
                      </div>
                      <span className="px-2 py-1 bg-purple-900/40 border border-purple-700/60 rounded text-xs text-purple-300">
                        Sprint 12
                      </span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-sm">Mobile app launch</p>
                        <p className="text-xs text-slate-400">Launch in 6 days · 2 blockers</p>
                      </div>
                      <span className="px-2 py-1 bg-red-900/40 border border-red-700/60 rounded text-xs text-red-300">
                        At risk
                      </span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-sm">Marketing campaigns</p>
                        <p className="text-xs text-slate-400">Q2 roadmap · 24 tasks</p>
                      </div>
                      <span className="px-2 py-1 bg-emerald-900/40 border border-emerald-700/60 rounded text-xs text-emerald-300">
                        On track
                      </span>
                    </div>
                  </div>
                </div>

                {/* Team Workload */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium">Team workload</p>
                    <p className="text-xs text-slate-400">74% capacity</p>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[74%] bg-gradient-to-r from-indigo-500 to-sky-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for modern teams.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              From startups to agencies, SyncBoard keeps everyone aligned without
              complicated setups or long onboarding.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                Kanban boards
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2">Boards that make sense</h3>
              <p className="text-slate-400 text-sm mb-4">
                Organize work into clear stages so everyone knows what's in progress,
                blocked, or done.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Drag-and-drop task lanes</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Custom workflows</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Saved board templates</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                Real-time updates
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2">Stay in sync instantly</h3>
              <p className="text-slate-400 text-sm mb-4">
                Status changes, mentions, and comments sync in real time so nobody is
                ever out of the loop.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Live task updates</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">@ mention teammates</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Activity history</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                Deadlines
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2">Deadlines without chaos</h3>
              <p className="text-slate-400 text-sm mb-4">
                See upcoming work in one shared timeline and stop juggling spreadsheets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Shared project timelines</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Smart reminders</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Weekly summary emails</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Teams love working in SyncBoard.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From product teams to operations, SyncBoard keeps everyone aligned on
              what's shipping next.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8">
              <p className="text-slate-300 mb-6 italic">
                "We replaced three different tools with SyncBoard. Our standups are
                now 10 minutes shorter."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full"></div>
                <div>
                  <p className="font-semibold">Mira Kapoor</p>
                  <p className="text-sm text-slate-400">Product Manager, Nova Labs</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8">
              <p className="text-slate-300 mb-6 italic">
                "The real-time updates mean I never have to chase people for status
                again."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-600 rounded-full"></div>
                <div>
                  <p className="font-semibold">Rohit Verma</p>
                  <p className="text-sm text-slate-400">Project Lead, PixelForge</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8">
              <p className="text-slate-300 mb-6 italic">
                "Our onboarding for new team members is much faster because everything
                lives in one place."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full"></div>
                <div>
                  <p className="font-semibold">Sara Ali</p>
                  <p className="text-sm text-slate-400">Operations Manager, BrightPath</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple pricing that scales with you.
            </h2>
            <p className="text-slate-400 text-lg">
              Start free, upgrade only when your team is ready.
            </p>
          </div>

          {/* Pricing Layout */}
          <div className="grid md:grid-cols-5 gap-12">
            {/* Left Side - All Plans Include */}
            <div className="md:col-span-2">
              <p className="font-semibold mb-4">All plans include:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <Check size={18} className="text-emerald-500" />
                  <span>Unlimited tasks</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Check size={18} className="text-emerald-500" />
                  <span>Email notifications</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Check size={18} className="text-emerald-500" />
                  <span>Access from any device</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Check size={18} className="text-emerald-500" />
                  <span>Built-in dark mode</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Change or cancel your plan at any time. No contracts, no hidden fees.
              </p>
            </div>

            {/* Right Side - Pricing Cards */}
            <div className="md:col-span-3 flex flex-col md:flex-row gap-8">
              {/* Starter Card */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Free
                </span>
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-sm text-slate-400 mb-6">
                  For small teams just getting started with structured project tracking.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹0</span>
                  <span className="text-slate-400"> / month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-emerald-500" />
                    <span className="text-slate-300">Up to 3 projects</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-emerald-500" />
                    <span className="text-slate-300">Up to 5 team members</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-emerald-500" />
                    <span className="text-slate-300">Basic board & timeline view</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 border border-slate-700 hover:border-slate-600 rounded-lg font-medium transition">
                  Get started
                </button>
              </div>

              {/* Growth Card - Most Popular */}
              <div className="bg-slate-900/80 border-2 border-indigo-600 rounded-2xl p-8 flex flex-col relative">
                <div className="absolute -top-4 right-8">
                  <span className="px-3 py-1 bg-indigo-600 text-indigo-50 text-xs font-semibold rounded-full">
                    Most popular
                  </span>
                </div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-4">
                  Growth
                </span>
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-sm text-slate-400 mb-6">
                  For teams that need serious collaboration and visibility.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹499</span>
                  <span className="text-slate-400"> / month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-emerald-500" />
                    <span className="text-slate-300">Unlimited projects & members</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-emerald-500" />
                    <span className="text-slate-300">Advanced timeline & reporting</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-emerald-500" />
                    <span className="text-slate-300">Priority support</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-emerald-500" />
                    <span className="text-slate-300">Admin roles & permissions</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
                  Start 14-day free trial
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 mt-16 md:mt-24">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Left */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-sm font-bold flex-shrink-0">
                S
              </div>
              <div>
                <p className="font-semibold">SyncBoard</p>
                <p className="text-xs text-slate-500">
                  Project management without the noise.
                </p>
              </div>
            </div>

            {/* Center */}
            <div className="flex items-center gap-6 justify-start md:justify-center">
              <button className="text-slate-400 hover:text-slate-50 text-sm transition">
                Features
              </button>
              <button className="text-slate-400 hover:text-slate-50 text-sm transition">
                Pricing
              </button>
            </div>

            {/* Right */}
            <div className="flex items-center justify-start md:justify-end gap-4">
              <button className="px-4 py-2 text-slate-400 hover:text-slate-50 text-sm transition">
                Contact sales
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-800 pt-8">
            <p className="text-xs text-slate-500">
              © 2025 SyncBoard Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}