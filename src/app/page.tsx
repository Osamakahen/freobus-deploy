'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/Logo';
import '@fontsource/inter';

interface NavItem {
  label: string;
  href: string;
}

interface ValueProp {
  title: string;
  description: string;
  stickyMessage: string;
  imageSrc: string;
  alt: string;
}

interface AudienceContent {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Web3 Shopping Mall', href: '/marketplace' },
  { label: 'FreoWallet', href: '/wallet' },
  { label: "What's FreoBus", href: '#freobus' },
  { label: "What's Web3", href: '#web3' },
];

const valueProps: ValueProp[] = [
  {
    title: 'Secure by Design',
    description: 'Built with security at its core, ensuring your assets are protected at all times.',
    stickyMessage: 'Your Security First',
    imageSrc: '/security-shield.png',
    alt: 'Security Shield Icon'
  },
  {
    title: 'Lightning Fast',
    description: 'Experience instant transactions and responsive interface.',
    stickyMessage: 'Speed Matters',
    imageSrc: '/lightning-speed.png',
    alt: 'Lightning Speed Icon'
  },
  {
    title: 'Universal Access',
    description: 'Access your wallet from anywhere, on any device.',
    stickyMessage: 'Always Available',
    imageSrc: '/universal-access.png',
    alt: 'Universal Access Icon'
  },
  {
    title: 'User-Focused',
    description: 'Intuitive design that puts your needs first.',
    stickyMessage: 'Built for You',
    imageSrc: '/user-focused.png',
    alt: 'User Focus Icon'
  },
];

const audienceContent: Record<string, AudienceContent> = {
  users: {
    title: 'Ready to Explore the Free Web?',
    description: 'Start your Web3 journey with FreoWallet - no technical knowledge required.',
    buttonText: 'Explore dApps',
    buttonHref: '/explore',
  },
  investors: {
    title: 'FreoBus: Building the Open Web for the Next 100M',
    description: 'Join us in revolutionizing how people interact with Web3 technology.',
    buttonText: 'Learn About Investing',
    buttonHref: '/investors',
  },
  developers: {
    title: 'Empower the Future: Build on FreoBus',
    description: 'Create powerful dApps with our developer-friendly tools and SDKs.',
    buttonText: 'Developer Portal',
    buttonHref: '/developers',
  },
};

// Animation variants
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.8
    }
  }
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

const pulseAnimation = {
  initial: { scale: 1, boxShadow: '0 0 0 0 rgba(255, 193, 7, 0.4)' },
  animate: {
    scale: [1, 1.02, 1],
    boxShadow: [
      '0 0 0 0 rgba(255, 193, 7, 0.4)',
      '0 0 0 20px rgba(255, 193, 7, 0)',
      '0 0 0 0 rgba(255, 193, 7, 0)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Page() {
  const [activeAudience, setActiveAudience] = useState<keyof typeof audienceContent>('users');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showMockupModal, setShowMockupModal] = useState(false);
  const [showWeb3Modal, setShowWeb3Modal] = useState(false);
  const [showFreoBusModal, setShowFreoBusModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMockupVideoLoaded, setIsMockupVideoLoaded] = useState(false);
  const [isWeb3VideoLoaded, setIsWeb3VideoLoaded] = useState(false);
  const [isFreoBusVideoLoaded, setIsFreoBusVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const demoVideoRef = useRef<HTMLVideoElement>(null);
  const web3VideoRef = useRef<HTMLVideoElement>(null);
  const freoBusVideoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Handle video loading
  const handleVideoLoad = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsVideoLoaded(true);
  };

  // Cleanup video resources when modal closes
  useEffect(() => {
    if (!showVideoModal && modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  }, [showVideoModal]);

  // Handle intersection observer for demo video
  useEffect(() => {
    if (!demoVideoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            demoVideoRef.current?.play();
          } else {
            demoVideoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(demoVideoRef.current);

    return () => {
      if (demoVideoRef.current) {
        observer.unobserve(demoVideoRef.current);
      }
    };
  }, []);

  // Handle FreoBus nav click
  const handleFreoBusClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowFreoBusModal(true);
  };

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Navigation */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed w-full top-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo className="py-2" />
              <div className="hidden md:flex items-center space-x-8 ml-8">
                <button
                  onClick={handleFreoBusClick}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm font-medium"
                >
                  What's FreoBus
                </button>
                <Link
                  href="/marketplace"
                  className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm font-medium"
                >
                  Web3 Shopping Mall
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <Link 
                href="/connect-wallet" 
                className="px-4 py-2 bg-[#FFC107] text-[#1E1E1E] rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
              >
                Connect Your Wallet
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu panel */}
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:hidden absolute top-16 inset-x-0 bg-[#1E1E1E] shadow-lg`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={(e) => {
                  handleFreoBusClick(e);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-[#FFC107] font-bold hover:bg-gray-800 rounded-md"
              >
                What's FreoBus
              </button>
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <Link
                  href="/marketplace"
                  className="block px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-[#FFC107] rounded-md"
                >
                  Web3 Shopping Mall
                </Link>
              </div>
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <Link
                  href="/connect-wallet"
                  className="block px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-[#FFC107] rounded-md"
                >
                  Connect Your Wallet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative h-screen flex items-center justify-center px-4 md:px-8 bg-[#8FBC8F] bg-gradient-to-b from-[#98FB98]/90 to-[#1E1E1E]"
      >
        <div className="text-center max-w-4xl">
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFC107]"
          >
            Unlock the World of Web3 with <span className="text-[#FFC107]">FreoBus</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-12 text-gray-200"
          >
            <span className="font-bold">FreoWallet</span> Magically Empowering <span className="font-bold text-[#FFC107] uppercase tracking-wider">YOU</span> to Decentralization
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link href="/marketplace">
              <motion.button
                {...scaleOnHover}
                className="px-8 py-4 bg-[#FFC107] text-[#1E1E1E] rounded-lg font-bold text-lg hover:bg-[#FFD700] transition-colors"
              >
                Web3 Shopping Mall
              </motion.button>
            </Link>
            <motion.button
              onClick={() => setShowMockupModal(true)}
              className="px-8 py-4 bg-[#FFC107] text-[#1E1E1E] rounded-lg font-bold text-lg hover:bg-[#FFD700] transition-all"
            >
              Get Your FreoWallet
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Value Props Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 bg-[#2A2A2A]"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              variants={fadeInUp}
              className={`p-8 rounded-xl ${
                index % 2 === 0 ? 'bg-[#1E1E1E]' : 'bg-[#222222]'
              } flex flex-col items-start`}
            >
              <p className="text-sm text-[#FFC107] font-semibold mb-4 uppercase tracking-wider">
                {prop.stickyMessage}
              </p>
              <motion.div 
                className={`relative w-32 h-32 mb-6 overflow-hidden rounded-2xl ${
                  index === 1 || index === 3 ? 'rotate-3' : '-rotate-3'
                } transition-transform hover:rotate-0 duration-300`}
                {...scaleOnHover}
              >
                <Image 
                  src={prop.imageSrc} 
                  alt={prop.alt} 
                  fill
                  className="object-cover p-4 bg-gradient-to-br from-[#333333] to-[#1A1A1A]"
                  sizes="(max-width: 768px) 96px, 128px"
                  priority={index < 2}
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-white">{prop.title}</h3>
              <p className="text-gray-300 leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Demo Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 bg-[#1E1E1E]"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFC107]"
            id="demo-section"
          >
            Experience the Magic of FreoWallet
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            See how easy it is to create your wallet and connect to the FreoBus marketplace in this short demo.
          </motion.p>
          <motion.div
            id="demoVideoContainer"
            variants={fadeInUp}
            className="relative aspect-video max-w-4xl mx-auto bg-[#2A2A2A] rounded-xl overflow-hidden shadow-2xl"
          >
            <video
              ref={demoVideoRef}
              muted
              loop
              playsInline
              poster="/demo-poster.png"
              className="absolute inset-0 w-full h-full rounded-xl object-cover"
              preload="metadata"
              aria-label="FreoWallet features demo"
            >
              <source src="/mockup.mp4#t=0.1" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <button
              onClick={() => setShowMockupModal(true)}
              className="px-8 py-4 bg-[#FFC107] text-[#1E1E1E] rounded-lg font-bold text-lg hover:bg-[#FFD700] transition-colors duration-300 shadow-lg"
              aria-label="Get your FreoWallet"
            >
              Get Your FreoWallet Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Audience Tabs Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 bg-[#2A2A2A]"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12 relative">
            <div className="inline-flex bg-[#1E1E1E] rounded-lg p-1 relative">
              {Object.keys(audienceContent).map((audience) => (
                <motion.button
                  key={audience}
                  onClick={() => setActiveAudience(audience as keyof typeof audienceContent)}
                  className={`
                    relative px-8 py-3 rounded-md text-sm font-medium
                    ${activeAudience === audience
                      ? 'text-[#1E1E1E]'
                      : 'text-gray-300 hover:text-[#FFC107]'
                    }
                    transition-all duration-300 ease-in-out
                  `}
                >
                  {activeAudience === audience && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-[#FFC107] rounded-md"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">
                    {audience.charAt(0).toUpperCase() + audience.slice(1)}
                  </span>
                  {activeAudience === audience && (
                    <motion.div
                      layoutId="activeTabLine"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFC107]"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
          <motion.div 
            key={activeAudience}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFC107]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {audienceContent[activeAudience].title}
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {audienceContent[activeAudience].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {activeAudience === 'web3' ? (
                <motion.button
                  {...scaleOnHover}
                  onClick={() => setShowWeb3Modal(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#FFC107] to-[#FFD700] text-[#1E1E1E] rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Watch Video
                  <motion.span 
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              ) : (
                <Link href={audienceContent[activeAudience].buttonHref}>
                  <motion.button
                    {...scaleOnHover}
                    className="px-8 py-4 bg-gradient-to-r from-[#FFC107] to-[#FFD700] text-[#1E1E1E] rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {audienceContent[activeAudience].buttonText}
                    <motion.span 
                      className="inline-block ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 bg-[#2A2A2A]"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-4 gap-8 mb-12"
          >
            {['Users', 'Resources', 'Company', 'Legal'].map((section) => (
              <div key={section}>
                <h3 className="font-bold mb-4">{section}</h3>
            <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-[#FFC107] transition-colors"
                      >
                        {section} Link {item}
                      </Link>
                    </li>
                  ))}
            </ul>
              </div>
            ))}
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="text-center text-gray-400"
          >
            <p>© {new Date().getFullYear()} FreoBus. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>

      {/* FreoBus Demo Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative aspect-video w-full max-w-4xl bg-[#2A2A2A] rounded-xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#2A2A2A]">
                  <div className="w-12 h-12 border-4 border-[#FFC107] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <video
                ref={modalVideoRef}
                controls
                className="absolute inset-0 w-full h-full rounded-xl object-cover"
                preload="metadata"
                onLoadedData={handleVideoLoad}
                aria-label="FreoBus demo video"
                playsInline
              >
                <source src="/demo.mp4#t=0.1" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Close video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FreoWallet Mockup Video Modal */}
      <AnimatePresence>
        {showMockupModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowMockupModal(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mockup-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative aspect-video w-full max-w-4xl bg-[#2A2A2A] rounded-xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <video
                controls
                autoPlay
                className="absolute inset-0 w-full h-full rounded-xl object-cover"
                preload="metadata"
                aria-label="FreoWallet mockup video"
                playsInline
              >
                <source src="/mockup.mp4#t=0.1" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => setShowMockupModal(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Close mockup video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Web3 Video Modal */}
      <AnimatePresence>
        {showWeb3Modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowWeb3Modal(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="web3-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative aspect-video w-full max-w-4xl bg-[#2A2A2A] rounded-xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <video
                ref={web3VideoRef}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full rounded-xl object-cover"
                preload="metadata"
                aria-label="Web3 explanation video"
                playsInline
              >
                <source src="/frebus-concept.mp4#t=0.1" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => setShowWeb3Modal(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Close Web3 video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FreoBus Video Modal */}
      <AnimatePresence>
        {showFreoBusModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowFreoBusModal(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="freobus-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative aspect-video w-full max-w-4xl bg-[#2A2A2A] rounded-xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {!isFreoBusVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#2A2A2A]">
                  <div className="w-12 h-12 border-4 border-[#FFC107] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <video
                ref={freoBusVideoRef}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full rounded-xl object-cover"
                preload="metadata"
                onLoadedData={() => setIsFreoBusVideoLoaded(true)}
                aria-label="FreoBus concept video"
                playsInline
              >
                <source src="/freobus-concept.mp4#t=0.1" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => setShowFreoBusModal(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Close FreoBus video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}