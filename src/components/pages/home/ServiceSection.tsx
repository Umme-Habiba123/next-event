const services = [
  {
    title: "Event Management",
    description: "We plan and manage events professionally with full support.",
    icon: "🎉",
  },
  {
    title: "Online Booking",
    description: "Book events easily with a fast and secure booking system.",
    icon: "📅",
  },
  {
    title: "Secure Payments",
    description: "Safe and reliable payment system for your convenience.",
    icon: "💳",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            We provide the best services to make your experience smooth and enjoyable.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
