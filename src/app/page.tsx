// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-yellow-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/hero-bg.jpg"
            alt="hero background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              End-to-end collaboration across the full project lifecycle
            </h2>
            <p className="mt-4 text-base md:text-lg text-indigo-100">
              Registration → Tendering → Award → Execution → Billing → AMC → Help Desk → Analytics
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              
              <Link
                href="/lifecycle"
                className="border border-white px-5 py-3 rounded-md"
              >
                See lifecycle flow
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
              <Image
                src="/assets/hero-card.jpg"
                alt="hero"
                width={600}
                height={300}
                className="w-full h-56 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">Featured Projects</h3>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={`/assets/project${i}.jpg`}
                  alt={`Project ${i}`}
                  width={400}
                  height={160}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">PROJECT CAPTION {i}</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Brief description of the project and role.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick ecosystem */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Vendors", link: "/vendors" },
              { title: "Suppliers", link: "/suppliers" },
              { title: "Consultants", link: "/consultants" },
              { title: "Construction", link: "/construction" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Short description about {item.title}.
                </p>
                <Link
                  href={item.link}
                  className="text-indigo-600 mt-2 inline-block"
                >
                  Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
