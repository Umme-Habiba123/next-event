const SubscribeSection = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl font-bold">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-3 text-blue-100">
          Get the latest updates, events, and offers directly in your inbox.
        </p>

        {/* Form */}
        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-md text-gray-800 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-100 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-blue-100">
          We respect your privacy. Unsubscribe at any time.
        </p>

      </div>
    </section>
  );
};

export default SubscribeSection;
