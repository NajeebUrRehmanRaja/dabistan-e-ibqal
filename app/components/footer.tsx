"use client";

import Image from "next/image";
import logo from "../../public/Dabistan-e-Iqbal-logo.svg";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Twitter
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://www.facebook.com/DabistaneIqbal/",
      color: "hover:bg-blue-600"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://www.instagram.com/dabistan_e_iqbal/?hl=en",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/dabistan-e-iqbal-22969696/",
      color: "hover:bg-blue-700"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://www.youtube.com/channel/UCZiLaEnYkZklJn1XLgvr9lA",
      color: "hover:bg-red-600"
    },
    { 
      name: "X (Twitter)", 
      icon: Twitter, 
      url: "https://x.com/dabistaneiqbal1",
      color: "hover:bg-black"
    }
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Lectures", href: "#lectures" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
    { label: "Register", href: "#register" }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0A0626] via-[#2E1A72] to-[#1a0f3d] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/10">
          
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Dabistan-e-Iqbal Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Dabistan-e-Iqbal</h3>
                <p className="text-sm text-white/70">دبستان اقبال</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Dedicated to promoting the philosophy, poetry, and vision of Allama Muhammad Iqbal through education and cultural programs.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-pink-500/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-pink-300 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500/50 group-hover:bg-pink-400 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-pink-500/30 pb-2 inline-block">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/80 group">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a 
                  href="https://www.google.com/maps/place/Dabistan+e+Iqbal/@31.5251112,74.3483409,17z/data=!3m1!4b1!4m6!3m5!1s0x391904fbd8ee05e1:0x828b95f4d4be3349!8m2!3d31.5251112!4d74.3509158!16s%2Fg%2F12hm2xrxp?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  House # 2- Bajwa St, Block S Gulberg 2, Lahore, Punjab 54000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80 group">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+923008404661" className="hover:text-pink-300 transition-colors">
                  +92 300 8404661
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80 group">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:dabistaneiqbal@live.com" className="hover:text-pink-300 transition-colors">
                  dabistaneiqbal@live.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-pink-500/30 pb-2 inline-block">
              Office Hours
            </h4>
            <div className="space-y-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-pink-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-pink-400" />
                  <span className="text-sm font-semibold text-white">Office Time</span>
                </div>
                <p className="text-sm text-white/80 pl-7">12:00 PM - 5:00 PM</p>
                <p className="text-xs text-white/60 pl-7 mt-1">Monday - Saturday</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
                <p className="text-xs text-white/90 text-center italic">
                  "Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud pooche bata teri raza kya hai"
                </p>
                <p className="text-xs text-white/60 text-center mt-2">- Allama Iqbal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p className="text-center md:text-left">
            &copy; {currentYear} <span className="text-white/90 font-medium">Dabistan-e-Iqbal</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#privacy" className="hover:text-pink-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-pink-300 transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-pink-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
