import { Logo } from "@/features/shared";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear().toString();

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />

            <p className="text-gray-400 leading-relaxed mt-5">
              Build professional resumes that get you hired. Trusted by
              thousands of job seekers worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Career Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Resumify. All rights reserved. Built with ❤️
            for job seekers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
