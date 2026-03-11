import React from 'react';
import Layout from '../components/Layout';
import { 
  Info, 
  ListChecks, 
  Percent, 
  Medal, 
  Rocket, 
  Globe, 
  Handshake,
  Award,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ScholarshipPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header Section */}
        <header className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <Award className="h-12 w-12 text-blue-600 mr-3" />
                <h1 className="text-4xl font-bold text-gray-900">Scholarship Program</h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering students through recognition, encouragement, and accessible opportunities
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction Section */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Info className="h-16 w-16 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">About the Program</h2>
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Saroj College of Pharmacy (SCP) offers generous scholarship opportunities to recognize and reward 
                  academic excellence among its students. Our scholarship program reflects a commitment to recognizing 
                  talent, fostering excellence, and making quality education accessible to deserving students.
                </p>
              </div>
            </div>
          </section>

          {/* Scholarship Criteria Section */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <ListChecks className="h-16 w-16 text-green-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Scholarship Criteria</h2>
              </div>
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  The program is merit-based and awarded based on academic performance in previous qualifying examinations.
                </p>
              </div>
              
              {/* Percentage-Based Scholarships */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <Percent className="h-12 w-12 text-blue-600 mr-3" />
                  <h3 className="text-3xl font-bold text-gray-900">Percentage-Based Scholarships</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                    <p className="text-lg text-gray-700 font-semibold">Tuition Fee Scholarship</p>
                    <p className="text-gray-600 mt-2">Above 90% marks</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
                    <p className="text-lg text-gray-700 font-semibold">Tuition Fee Scholarship</p>
                    <p className="text-gray-600 mt-2">80%–90% marks</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
                    <p className="text-lg text-gray-700 font-semibold">Tuition Fee Scholarship</p>
                    <p className="text-gray-600 mt-2">75%–80% marks</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-12">
                <Medal className="h-16 w-16 text-red-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Program Benefits</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Recognition */}
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <Medal className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Recognition of Achievement</h3>
                  <p className="text-gray-700">
                    Scholarships honor the dedication of students who excel academically while easing financial burdens.
                  </p>
                </div>

                {/* Encouragement */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <Rocket className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Encouragement for Excellence</h3>
                  <p className="text-gray-700">
                    These incentives are designed to motivate students to reach their academic potential.
                  </p>
                </div>

                {/* Accessibility */}
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Accessible Opportunities</h3>
                  <p className="text-gray-700">
                    SCP ensures students from all financial backgrounds can access quality education.
                  </p>
                </div>

                {/* Support */}
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <Handshake className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Continued Support</h3>
                  <p className="text-gray-700">
                    SCP remains committed to supporting its students throughout their academic journey.
                  </p>
                </div>

                {/* Merit-Based */}
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                  <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Merit-Based Selection</h3>
                  <p className="text-gray-700">
                    Fair and transparent selection process based purely on academic performance and merit.
                  </p>
                </div>

                {/* Career Growth */}
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl">
                  <GraduationCap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Career Advancement</h3>
                  <p className="text-gray-700">
                    Scholarships open doors to better career opportunities and professional growth in pharmacy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Important Information</h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Eligibility Requirements</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Must have passed qualifying examination with required percentage
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Valid score in entrance examination (if applicable)
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Good academic record without any backlogs
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Application Process</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Submit scholarship application form along with documents
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Provide marksheets of qualifying examinations
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Selection based on merit and document verification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Apply for Scholarship</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Don't let financial constraints come in the way of your dreams. Apply for our scholarship program 
                and take the first step towards a successful career in pharmacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Option 1: Direct external link like placement page */}
                <a 
                  href="https://seglko.in8.nopaperforms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Apply Now
                </a>
                
                {/* Option 2: Internal route (if you have a scholarship application page) */}
                {/* <Link 
                  to="/scholarship-application"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Apply Now
                </Link> */}
                
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  Contact for Queries
                </Link>
              </div>
              
             
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 Saroj College of Pharmacy. All rights reserved. | Committed to Excellence in Pharmaceutical Education
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default ScholarshipPage;