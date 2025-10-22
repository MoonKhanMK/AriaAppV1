import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Container from "../components/Container";
import Breadcrumbs from "../components/Breadcrumbs";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How Long Does Shipping Take?",
          answer:
            "Standard shipping typically takes 3-5 business days within the Bangladesh. Express shipping (1-2 business days) and overnight shipping are also available for an additional fee. International shipping times vary by location, typically 7-14 business days.",
        },
        {
          question: "Can I Track My Order?",
          answer:
            "Yes! Once your order ships, you'll receive a tracking number via email. You can also track your orders by logging into your account and visiting the 'My Orders' section.",
        },
        {
          question: "What Is Your Return Policy?",
          answer:
            "We offer a 30-day return policy for unused items in original packaging. Items must be returned within 30 days of delivery. Refunds will be processed within 5-7 business days after we receive your return.",
        },
        {
          question: "Do You Ship Internationally?",
          answer:
            "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by destination. Customers are responsible for any customs duties or taxes.",
        },
      ],
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          question: "How Do I Know What Bottle Size To Order?",
          answer:
            "Each product page includes detailed Bottle size charts and measurements. You can also check our general Bottle sizing guide in the footer. If you're between Bottle sizes, we recommend Bottle sizing up. Our customer service team is happy to help with Bottle sizing questions.",
        },
        {
          question: "Are Your Products Authentic?",
          answer:
            "Absolutely! We source all products directly from authorized distributors and brand partners. Every item comes with authenticity guarantees and original packaging.",
        },
        {
          question: "Do You Offer Product Warranties?",
          answer:
            "Yes, all products come with manufacturer warranties. Warranty terms vary by brand and product type. Extended warranty options may be available at checkout for certain items.",
        },
        {
          question: "How Often Do You Restock Items?",
          answer:
            "We restock popular items regularly, typically every 2-4 weeks. You can sign up for restock notifications on any out-of-stock product page. Follow us on social media for the latest updates on new arrivals.",
        },
      ],
    },
    {
      category: "Account & Payment",
      questions: [
        {
          question: "Do I Need An Account To Make A Purchase?",
          answer:
            "While you can checkout as a guest, creating an account allows you to track orders, save items to your wishlist, store shipping addresses, and access exclusive member benefits.",
        },
        {
          question: "What Payment Methods Do You Accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely using industry-standard encryption.",
        },
        {
          question: "Is My Payment Information Secure?",
          answer:
            "Yes! We use SSL encryption and comply with PCI DSS standards to protect your payment information. We never store your credit card details on our servers.",
        },
        {
          question: "Can I Save Multiple Shipping Addresses?",
          answer:
            "Yes, registered users can save multiple shipping addresses in their account for faster checkout. You can add, edit, or delete addresses anytime in your account settings.",
        },
      ],
    },
    {
      category: "Customer Service",
      questions: [
        {
          question: "How Can I Contact Customer Service?",
          answer:
            "You can reach our customer service team via email at support@alariabd.com, phone at +88 01859 549480. We're available Saturday-Thursday 10AM-8PM EST.",
        },
        {
          question: "What If I Receive A Damaged Item?",
          answer:
            "We're sorry if you received a damaged item! Please contact us within 48 hours of delivery with photos of the damage. We'll arrange for a replacement or full refund immediately.",
        },
        {
          question: "Can I Cancel Or Modify My Order?",
          answer:
            "Orders can be cancelled or modified within 1 hour of placement. After that, orders enter our fulfillment process and cannot be changed. Please contact customer service as soon as possible if you need to make changes.",
        },
        {
          question: "Do You Offer Price Matching?",
          answer:
            "Yes! We offer price matching on identical items from authorized retailers. The item must be in stock and the competitor's price must be verifiable. Contact customer service with the details for price match requests.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-8">
        <Breadcrumbs currentPage="FAQ" />

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about shopping with AL-ARIA Perfume Gallery. Can&apos;t find what you&apos;re looking for? Contact our customer service team.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-gray-900 text-white px-6 py-4">
                  <h2 className="text-xl font-semibold">{category.category}</h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {category.questions.map((item, questionIndex) => {
                    const itemKey = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItems[itemKey];

                    return (
                      <div
                        key={questionIndex}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <button
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                          onClick={() => toggleItem(itemKey)}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900 pr-4">
                              {item.question}
                            </h3>
                            {isOpen ? (
                              <IoChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <IoChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our Customer Service Team Is Here To Help You With Any Questions Or Concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="mailto:support@alariabd.com"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;