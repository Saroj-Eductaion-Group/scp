import React from "react";
import { GraduationCap, Users, Award, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import HeroSecionImage from "../assets/images/b-pharma-student.jpeg";
import Logo from "../assets/images/logo.png";

// Button component for Vite (since we don't have shadcn/ui)
const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function PharmacyHero() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-4 py-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            {/* College Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto lg:mx-0">
              <GraduationCap className="w-4 h-4" />
              Established Excellence in Pharmacy Education
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-gray-900">Saroj College</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  of Pharmacy
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Shaping the future of healthcare through innovative
                pharmaceutical education, cutting-edge research, and
                compassionate patient care.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Faculty</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">25+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="https://seglko.in8.nopaperforms.com/"
                size="lg"
                className="bg-gradient-to-r flex from-blue-600 hover:cursor-pointer to-blue-400 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="inline-flex items-center">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* <Button
                variant="outline"
                size="lg"
                className="border-2 hover:cursor-pointer border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300 hover:bg-blue-50"
              >
              <a href="/courses" className="p-10" >
                Explore Programs
                </a>
              </Button> */}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">AICTE Approved</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm">Industry Partnerships</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <GraduationCap className="w-5 h-5 text-green-500" />
                <span className="text-sm">100% Placement</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8">
                <img
                  src={HeroSecionImage}
                  alt="Saroj College of Pharmacy - Modern pharmaceutical education facility"
                  className="w-full h-auto rounded-2xl object-cover"
                  style={{ aspectRatio: "5/6" }}
                />

                {/* Overlay Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">B.Pharm</div>
                      <div className="text-sm text-gray-600">
                        4 Year Program
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Research
                      </div>
                      <div className="text-sm text-gray-600">Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 -z-10" />
          </div>
        </div>
      </div>

     
    </section>
  );
}
