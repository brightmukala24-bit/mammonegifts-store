export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">
          Mammone<span className="text-purple-300">Gifts</span>.Store
        </h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-purple-300">Home</a>
          <a href="#" className="hover:text-purple-300">Products</a>
          <a href="#" className="hover:text-purple-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-8 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Buy Gift Cards & Digital Vouchers Instantly
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Fast, secure and reliable delivery of PlayStation, Xbox,
          Netflix, Amazon, Steam and more.
        </p>

        <button className="rounded-xl bg-purple-500 px-8 py-4 font-semibold hover:bg-purple-600">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-8 py-10">
        <h3 className="mb-8 text-3xl font-bold">Popular Categories</h3>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white/10 p-6">
            <h4 className="text-xl font-semibold">Amazon</h4>
            <p className="text-gray-300">Gift Cards</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            <h4 className="text-xl font-semibold">Netflix</h4>
            <p className="text-gray-300">Subscriptions</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            <h4 className="text-xl font-semibold">PlayStation</h4>
            <p className="text-gray-300">PSN Cards</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            <h4 className="text-xl font-semibold">Xbox</h4>
            <p className="text-gray-300">Gaming Cards</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-6xl px-8 py-16">
        <h3 className="mb-8 text-3xl font-bold">Featured Products</h3>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-black">
            <h4 className="text-xl font-bold">$25 Amazon Gift Card</h4>
            <p className="mt-2 text-gray-600">Instant delivery</p>
            <button className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white">
              Buy Now
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 text-black">
            <h4 className="text-xl font-bold">$50 Netflix Gift Card</h4>
            <p className="mt-2 text-gray-600">Instant delivery</p>
            <button className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white">
              Buy Now
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 text-black">
            <h4 className="text-xl font-bold">$100 PlayStation Card</h4>
            <p className="mt-2 text-gray-600">Instant delivery</p>
            <button className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}