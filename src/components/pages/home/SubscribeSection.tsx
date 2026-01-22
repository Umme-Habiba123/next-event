const SubscribeSection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-3 text-gray-300">
          Get the latest updates, events, and offers directly in your inbox.
        </p>

        {/* Form */}
        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-400">
          We respect your privacy. Unsubscribe at any time.
        </p>

      </div>
    </section>
  );
};

export default SubscribeSection;
