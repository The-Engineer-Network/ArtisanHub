import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  CheckCircle,
  MapPin,
  Wrench,
  Scissors,
  Zap,
  Home,
  Users,
  TrendingUp,
} from "lucide-react";

import { Link as RouterLink } from "react-router-dom";

const HomePage = () => {
  // STATE.
  const [searchService, setSearchService] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const languages = ["English", "French", "Hausa", "Igbo", "Yoruba"];


  // DATA: Lists of information we'll display
  const categories = [
    {
      name: "Fashion & Tailoring",
      icon: Scissors,
      color: "bg-purple-100 text-purple-600",
    },
    { name: "Plumbing", icon: Wrench, color: "bg-blue-100 text-blue-600" },
    { name: "Electrical", icon: Zap, color: "bg-yellow-100 text-yellow-600" },
    { name: "Home Repair", icon: Home, color: "bg-green-100 text-green-600" },
    { name: "Carpentry", icon: Wrench, color: "bg-amber-100 text-amber-600" },
    {
      name: "Hair & Beauty",
      icon: Scissors,
      color: "bg-pink-100 text-pink-600",
    },
    { name: "Painting", icon: Home, color: "bg-indigo-100 text-indigo-600" },
    { name: "Mechanic", icon: Wrench, color: "bg-red-100 text-red-600" },
  ];

  const featuredArtisans = [
    {
      name: "Kanu Precious",
      service: "Baker and Pastry Chef",
      rating: 5.0,
      reviews: 227,
      location: "Lugbe, Abuja",
      verified: true,
      image: "🍜",
    },
    {
      name: "Musa Ibrahim",
      service: "Master Plumber",
      rating: 4.8,
      reviews: 98,
      location: "Wuse, Abuja",
      verified: true,
      image: "🔧",
    },
    {
      name: "Ngozi Eze",
      service: "Hair Stylist",
      rating: 5.0,
      reviews: 156,
      location: "Enugu",
      verified: true,
      image: "💇",
    },
    {
      name: "Adebayo Williams",
      service: "Electrician",
      rating: 4.7,
      reviews: 89,
      location: "Victoria Island, Lagos",
      verified: true,
      image: "⚡",
    },
    {
      name: "Fatima Abdullahi",
      service: "Professional Makeup Artist",
      rating: 4.9,
      reviews: 134,
      location: "Kaduna",
      verified: true,
      image: "💄",
    },
    {
      name: "Emeka Nwosu",
      service: "Carpenter & Furniture Maker",
      rating: 4.8,
      reviews: 112,
      location: "Onitsha, Anambra",
      verified: true,
      image: "🪚",
    },
    {
      name: "Blessing Okoro",
      service: "Event Caterer",
      rating: 5.0,
      reviews: 178,
      location: "Port Harcourt",
      verified: true,
      image: "🍲",
    },
    {
      name: "Kabir Hassan",
      service: "Auto Mechanic",
      rating: 4.6,
      reviews: 95,
      location: "Kano",
      verified: true,
      image: "🔩",
    },
    {
      name: "Amaka Obi",
      service: "Interior Decorator",
      rating: 4.9,
      reviews: 142,
      location: "Lekki, Lagos",
      verified: true,
      image: "🏠",
    },
  ];

  const testimonials = [
    {
      name: "Aisha Mohammed",
      text: "Found a reliable electrician in minutes. Best platform for artisans!",
      service: "Electrical Work",
    },
    {
      name: "Tunde Adeyemi",
      text: "As an artisan, this platform changed my business. More customers every week.",
      service: "Carpentry",
    },
    {
      name: "Chinonso Ike",
      text: "I hired a tailor for my wedding outfit. The quality was exceptional and the process was so easy!",
      service: "Fashion & Tailoring",
    },
  ];

  const homeFaqs = [
    {
      question: "How do I know artisans are verified?",
      answer: "All artisans go through our verification process including ID checks and skill validation. Look for the blue checkmark badge."
    },
    {
      question: "Is ArtisanHub free to use?",
      answer: "Yes, Browsing and contacting artisans is completely free for customers. Artisans can register for free with premium features available."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We have a dispute resolution system. Contact our support team and we'll help mediate and find a solution."
    },
    {
      question: "How do I become an artisan on the platform?",
      answer: `Click "Join as Artisan", complete the registration form with your details and portfolio, and our team will verify your profile within 24-48 hours.`
    }
  ];

  const handleSearch = () => {
    alert(`Searching for ${searchService} in ${searchLocation}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-4">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Find Trusted{" "}
            <span className="text-orange-700 text-5xl drop-shadow-lg">
              Artisans{" "}
            </span>{" "}
            Near You{" "}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl text-black-600 font-aladin max-w-2xl mx-auto"
          >
            Connect with verified skilled professionals across Nigeria. From
            fashion designers to electricians, find the perfect artisan for your
            needs.
          </motion.p>
        </div>

        {/* TRUST & SECURITY SECTION */}
        <div className="pb-4">
          <section className="py-8 bg-gray-50 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-balck-900">ID Verified</p>
                    <p className="text-sm text-balck-600">
                      All artisans verified
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-balck-900">
                      Location Verified
                    </p>
                    <p className="text-sm text-balck-600">
                      GPS confirmed locations
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-semibold text-black-900">
                      Rated & Reviewed
                    </p>
                    <p className="text-sm text-black-600">
                      Real customer feedback
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-600" />
                  <div>
                    <p className="font-semibold text-black-900">
                      Dispute Resolution
                    </p>
                    <p className="text-sm text-black-600">
                      24/7 support available
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
        {/* SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block text-x font-bold text-black-700 mb-2">
                What service do you need?
              </label>
              <input
                type="text"
                value={searchService}
                onChange={(e) => setSearchService(e.target.value)}
                placeholder="e.g., Baker, Tailor..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-x font-bold text-black-700 mb-2">
                Where?
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Enter location..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="md:col-span-1 flex items-end">
              <button
                onClick={handleSearch}
                className="w-full px-6 py-3 bg-orange-700 text-white rounded-lg hover:bg-orange-700 transition flex items-center justify-center gap-2 font-semibold"
              >
                <Search className="w-5 h-5" />
                Search Artisans
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-5 text-center">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-gray-700 font-medium">
              Verified Professionals
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 font-medium">10,000+ Artisans</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <span className="text-gray-700 font-medium">
              50,000+ Jobs Completed
            </span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-aladin text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Find and hire trusted artisans in 3 simple steps
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Step 1 */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-orange-600" />
              </div>
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-2">Search</h3>
              <p className="text-black-600 font-semibold text-xl">
                Tell us what service you need and your location
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-2">Compare</h3>
              <p className="text-black-600 font-semibold text-xl">
                Browse verified artisan profiles, reviews, and ratings
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-2">Hire</h3>
              <p className="text-black-600 font-semibold text-xl">
                Contact directly via WhatsApp and get the job done
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white py-1">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center font-aladin text-black-900 mb-12">
            Our Services
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  variants={itemVariants}
                  key={category.name}
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition cursor-pointer group"
                >
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-center font-semibold text-gray-800">
                    {category.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* BUSINESS FEATURES */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal font-aladin text-black-900 mb-4">
              Grow Your Business with Professional Tools
            </h2>
            <p className="text-black-600 font-bold max-w-2xl mx-auto">
              Everything you need to manage and scale your artisan business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-3xl font-normal font-aladin mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-black-600 font-semibold mb-4">
                Track profile views, inquiries, and booking conversion rates in
                real-time
              </p>
              <ul className="space-y-2 text-sm text-black-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Profile performance metrics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Customer engagement insights
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Revenue tracking
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-3xl font-normal font-aladin mb-2">
                Customer Management
              </h3>
              <p className="text-black-600 font-semibold mb-4">
                Professional tools to manage bookings and client relationships
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Booking calendar system
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Automated reminders
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Client history tracking
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-normal font-aladin mb-2">
                Premium Features
              </h3>
              <p className="text-black-600 font-semibold mb-4">
                Stand out with featured listings and priority placement
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Featured profile badge
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Top search placement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Priority customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTISANS */}
      <section className="py-5 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-aladin text-center text-gray-900 mb-10">
            Top Rated Artisans
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredArtisans.map((artisan) => (
              <motion.div
                variants={itemVariants}
                key={artisan.name}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
              >
                <div className="text-6xl text-center mb-4">{artisan.image}</div>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {artisan.name}
                  </h3>
                  {artisan.verified && (
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  )}
                </div>

                <p className="text-center text-gray-600 mb-3">
                  {artisan.service}
                </p>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{artisan.rating}</span>
                  <span className="text-gray-500">
                    ({artisan.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{artisan.location}</span>
                </div>

                <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
                  Contact on WhatsApp
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-aladin text-center text-black-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-orange-50 rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION COVERAGE */}
      <section className="py-2 bg-white mb-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-aladin text-black-900 mb-4">
              Serving Major Cities Across Nigeria
            </h2>
            <p className="text-black-600 font-aladin text-xl">
              {" "}
              Connect with skilled artisans in your area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Lagos",
              "Abuja",
              "Port Harcourt",
              "Kano",
              "Ibadan",
              "Kaduna",
              "Enugu",
              "Onitsha",
              "Benin City",
              "Calabar",
              "Maiduguri",
              "Jos",
            ].map((city) => (
              <div
                key={city}
                className="bg-gray-50 p-4 rounded-lg hover:bg-orange-50 hover:border-orange-200 border border-gray-200 transition cursor-pointer text-center"
              >
                <MapPin className="w-5 h-5 text-orange-600 mx-auto mb-2" />
                <p className="font-bold text-black-800">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-8 bg-gradient-to-r from-orange-700 to-orange-800">
        <div className="max-w-4xl mx-auto px-10 text-center text-white">
          <h2 className="text-3xl font-aladin mb-4">
            Are You a Skilled Artisan?
          </h2>
          <p className="text-xl mb-8 opacity-100 font-bold">
            Join thousands of professionals growing their business on ArtisanHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition font-bold text-lg">
              Register Now - It's Free!
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition font-bold text-lg">
              Become one today!
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3">
          <h2 className="text-4xl font-aladin text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {homeFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium focus:outline-none"
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  <span className="text-orange-600 text-2xl transition-all duration-500">
                    {activeFaqIndex === index ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaqIndex === index
                    ? "max-h-40 opacity-100 py-3"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
