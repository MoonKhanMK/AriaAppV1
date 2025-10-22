import {
  IoCalendarOutline,
  IoBookOutline,
  IoPencilOutline,
} from "react-icons/io5";
import Container from "../components/Container";
import Breadcrumbs from "../components/Breadcrumbs";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-8">
        <Breadcrumbs currentPage="Blog" />

        <div className="max-w-4xl mx-auto text-center">
          {/* Coming Soon Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-900 rounded-full mb-6">
              <IoBookOutline className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Blog Coming Soon
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re Working Hard To Bring You Amazing Content About Fragrance, Style Tips, And The Latest Trends. Stay Tuned!
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <IoPencilOutline className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Style Guides
              </h3>
              <p className="text-gray-600">
                Expert Fragrance Advice And Styling Tips To Help You Feel Your Best.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <IoCalendarOutline className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Seasonal Trends
              </h3>
              <p className="text-gray-600">
                Stay Updated With The Latest Fragrance Trends And Seasonal Perfume Collections.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <IoBookOutline className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Brand Stories
              </h3>
              <p className="text-gray-600">
                Discover The Stories Behind Your Favorite Brands And World&apos;s Largest Perfume Category.
              </p>
            </div>
          </div>

          {/* Mockup Blog Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What To Expect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mock Blog Post 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden opacity-75">
                <div className="h-48 bg-gradient-to-r from-pink-400 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <IoCalendarOutline className="w-4 h-4 mr-1" />
                    Coming Soon
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    10 Must-Have Fragrance Pieces For Every Season.
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover The Essential Fragrance Pieces That Will Keep You Stylish Throughout The Year...
                  </p>
                </div>
              </div>

              {/* Mock Blog Post 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden opacity-75">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-teal-600"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <IoCalendarOutline className="w-4 h-4 mr-1" />
                    Coming Soon
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How To Craft Your Own Signature Fragrance On A Budget.
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Learn How To Create A Versatile And Stylish Own Fragrance Without Breaking The Bank...
                  </p>
                </div>
              </div>

              {/* Mock Blog Post 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden opacity-75">
                <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-600"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <IoCalendarOutline className="w-4 h-4 mr-1" />
                    Coming Soon
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Long Lasting Fragrance: Making Eco-Friendly Choices.
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explore How To Make More Long Lasting Fragrance Choices That Are Good For You And The Planet...
                  </p>
                </div>
              </div>

              {/* Mock Blog Post 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden opacity-75">
                <div className="h-48 bg-gradient-to-r from-green-400 to-blue-600"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <IoCalendarOutline className="w-4 h-4 mr-1" />
                    Coming Soon
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Styling Tips From Fragrance Experts.
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get Insider Tips From Professional Stylists On How To Elevate Your Everyday Moods...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Be The First To Know
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe To Our Newsletter To Get Notified When Our Blog Launches And Receive Exclusive Fashion Content.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We Respect Your Privacy. Unsubscribe At Any Time.
            </p>
          </div>

          {/* Back to Shopping */}
          <div className="mt-12">
            <p className="text-gray-600 mb-4">
              While You Wait, Check Out Our Latest Products!
            </p>
            <a href="/shop" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200">
              Shop Now
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;