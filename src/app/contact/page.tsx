// FILE: src/app/contact/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Contact — Your Company",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              YC
            </div>
          </Link>
          <nav className="space-x-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ecosystem">Ecosystem</Link>
            <Link
              href="/lifecycle"
              className="text-white bg-indigo-600 px-4 py-2 rounded-md"
            >
              Lifecycle
            </Link>
            <Link href="/contact" className="underline font-semibold">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          Fill this basic contact form and we&apos;ll reach out to you.
        </p>

        {/* Contact Form */}
        <form className="mt-6 bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm p-2"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm p-2"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm p-2"
              rows={4}
              placeholder="Tell us about your project"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact us Details */}
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-semibold">Contact Details</h4>
          <p className="text-sm text-gray-600 mt-2">
            Phone: +91 90000 00000 <br />
            Email: info@yourcompany.com <br />
            Address: Your office address here
          </p>
        </div>
      </main>
    </div>
  );
}
