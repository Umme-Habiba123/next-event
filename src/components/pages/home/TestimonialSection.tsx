import Image from "next/image";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Event Organizer",
    message:
      "This platform made our event management super easy and smooth. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Nusrat Jahan",
    role: "Customer",
    message:
      "Booking events is now so simple and fast. The user experience is amazing!",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Tanvir Hasan",
    role: "Business Owner",
    message:
      "Secure payment and professional service. I’m really satisfied with the support.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Real feedback from people who trusted our services.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <p className="text-gray-600 text-sm mb-6">
                “{item.message}”
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
