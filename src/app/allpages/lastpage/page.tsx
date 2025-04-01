"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "../../../../node_modules/next/link";
import Image from "../../../../node_modules/next/image";

export function Footer() {
  return (
    <footer className="bg-[#1B2A35] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Real Out</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mobile-apps" className="hover:text-gray-300">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="hover:text-gray-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/price-trends" className="hover:text-gray-300">
                  Price Trends
                </Link>
              </li>
              <li>
                <Link href="/post-property" className="hover:text-gray-300">
                  Post your Property
                </Link>
              </li>
              <li>
                <Link href="/builders-in-india" className="hover:text-gray-300">
                  Builders in India
                </Link>
              </li>
              <li>
                <Link href="/area-converter" className="hover:text-gray-300">
                  Area Converter
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-gray-300">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/customer-service" className="hover:text-gray-300">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-gray-300">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-300">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-300">
                  Careers with us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/request-info" className="hover:text-gray-300">
                  Request Info
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-gray-300">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/report-problem" className="hover:text-gray-300">
                  Report a problem
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gray-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/summons-notices" className="hover:text-gray-300">
                  Summons/Notices
                </Link>
              </li>
              <li>
                <Link href="/grievances" className="hover:text-gray-300">
                  Grievances
                </Link>
              </li>
              <li>
                <Link href="/safety-guide" className="hover:text-gray-300">
                  Safety Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Partners Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Partners</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.naukri.com"
                  className="hover:text-gray-300"
                >
                  Naukri.com - Jobs in India
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.naukrigulf.com"
                  className="hover:text-gray-300"
                >
                  Naukrigulf.com - Jobs in middle east
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.jeevansathi.com"
                  className="hover:text-gray-300"
                >
                  Jeevansathi.com - Matrimonials
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.brij.com"
                  className="hover:text-gray-300"
                >
                  Brij.com - Professional Networking
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.shiksha.com"
                  className="hover:text-gray-300"
                >
                  Shiksha.com - Education Career Info
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.policybazaar.com"
                  className="hover:text-gray-300"
                >
                  Policybazaar.com - Insurance India
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.meritnation.com"
                  className="hover:text-gray-300"
                >
                  Meritnation.com - Online Educational Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.paisabazaar.com"
                  className="hover:text-gray-300"
                >
                  PaisaBazaar.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.ambitionbox.com"
                  className="hover:text-gray-300"
                >
                  AmbitionBox.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.firstnaukri.com"
                  className="hover:text-gray-300"
                >
                  FirstNaukri.com - A jobsite for campus hiring
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.jobhai.com"
                  className="hover:text-gray-300"
                >
                  Jobhai.com – Find Jobs Near You
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm">Toll Free - 1800 41 99099</p>
                <p className="text-xs text-gray-400">
                  Monday - Saturday (9:00AM to 7:00PM IST)
                </p>
              </div>

              <div>
                <p className="text-sm">Email - feedback@99acres.com</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Connect with us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-gray-300">
                    <Facebook size={20} />
                  </Link>
                  <Link href="#" className="hover:text-gray-300">
                    <Youtube size={20} />
                  </Link>
                  <Link href="#" className="hover:text-gray-300">
                    <Twitter size={20} />
                  </Link>
                  <Link href="#" className="hover:text-gray-300">
                    <Instagram size={20} />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Download the App</h4>
                <div className="flex space-x-2">
                  <Link href="">
                    <Image
                      src="/images/google.png"
                      alt="Get it on Google Play"
                      width={135}
                      height={40}
                      className="hover:opacity-90 border-1 border-white-200 rounded p-1 bg-black"
                    />
                  </Link>
                  <Link href="">
                    <Image
                      src="/images/appstore.png"
                      alt="Download on App Store"
                      width={135}
                      height={40}
                      className="hover:opacity-90 border-1 border-white-200 rounded p-1 bg-black"
                    />
                  </Link>
                </div>
              </div>

              <div className="text-xs text-gray-400">
                <p>All rights reserved - Info Edge (India) Ltd.</p>
                <p>
                  A{" "}
                  <Link
                    href="https://www.naukri.com"
                    className="text-blue-400 hover:underline"
                  >
                    naukri.com
                  </Link>{" "}
                  group venture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
