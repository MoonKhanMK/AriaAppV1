import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { FaUsers, FaGlobe, FaAward, FaHeart } from "react-icons/fa";
import { MdSecurity, MdLocalShipping, MdSupport } from "react-icons/md";
import { logo } from "../assets/images";

const stats = [
  { number: "50K+", label: "Happy Local Customers", icon: <FaUsers /> },
  { number: "60+", label: "Districts In Country Served", icon: <FaGlobe /> },
  { number: "1969", label: "Our History Began", icon: <FaAward /> },
  { number: "99%", label: "Customer Satisfaction", icon: <FaHeart /> },
];

const values = [
  {
    icon: <MdSecurity />,
    title: "Trust & Security",
    description:
      "Your security is our priority. We use industry-leading encryption and security measures to protect your data and transactions.",
  },
  {
    icon: <MdLocalShipping />,
    title: "Fast & Reliable",
    description:
      "Quick delivery and reliable service. We partner with trusted shipping providers to ensure your orders arrive on time.",
  },
  {
    icon: <MdSupport />,
    title: "Customer First",
    description:
      "24/7 customer support and hassle-free returns. Our dedicated team is always here to help you with any questions or concerns.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AL-ARIA Perfume Gallery
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We&apos;re Passionate About Bringing You The Best Perfume Experience With World&apos;s Premium Quality Products, Exceptional Service, And Unbeatable Prices. Discover Why Thousands Trust Us For Their Fragrance Brand In Lifestyle Needs.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Our history from 1969, AL-ARIA Perfume Gallery began with a simple mission: to make quality products accessible to everyone, everywhere. Our first step from 400 hundred years old capital&apos;s central business hub Mitford, Dhaka. With five decades of industry experience now our online store has grown into a trusted marketplace serving customers across the country.</p>

                <p>We believe that shopping should be more than just a transaction – it should be an experience that delights and inspires. That&apos;s why we carefully curate our product selection, partner with reliable suppliers, and invest in cutting-edge technology to ensure every interaction with our platform is seamless.</p>

                <p>Today, we&apos;re proud to serve over 50,000 happy customers countrywide, offering wide range perfume collection which collaboration with “Givaudan” from Swiss & world&apos;s largest perfume - fragrance brand. We are the proudly sole distributor of “Givaudan” for this region.</p>
                
                <p>Always we marching with global latest trends to innovative fragrance. Motivates by our commitment to quality, affordability, and exceptional customer service.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center shadow-[inset_0px_0px_10px_rgba(0,0,0,0.3)]">
                <div className="text-center">
                  <div className="w-88 h-64 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[inset_-5px_-5px_10px_rgba(0,0,0,0.3)]">
                    {/* <span className="text-4xl text-white">🛍️ </span> */}
                    <span><img src={logo} alt="Logo" className="h-48 w-auto object-contain" /></span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our History From 1969
                  </h3>
                  <p className="text-gray-500 mt-2 text-lg [word-spacing:15px]">
                    Quality ❑ Affordability ❑ Service
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These Core Principles Guide Everything We Do And Shape The Experience We Create For Our Customers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready To Start Shopping?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of satisfied customers and discover why AL-ARIA Perfume Gallery is the preferred choice for custom perfume online shopping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Shop Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default About;