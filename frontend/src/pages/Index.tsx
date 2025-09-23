// import { useState } from 'react';
// import { ChevronRight, Star, Check, Menu, X, ArrowRight, Zap, Shield, Rocket } from 'lucide-react';
// // import heroImage from '../assets/';

// const Index = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Navigation Component
//   const Navigation = () => (
//     <nav className="relative z-50 px-6 py-4">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex items-center justify-between">
//           <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
//             InnovateLab
//           </div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
//             <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
//             <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
//             <button className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg hover:shadow-elegant transition-all duration-300 font-medium">
//               Get Started
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 border-t border-border">
//             <div className="flex flex-col space-y-4 pt-4">
//               <a href="#features" className="text-foreground hover:text-primary">Features</a>
//               <a href="#pricing" className="text-foreground hover:text-primary">Pricing</a>
//               <a href="#contact" className="text-foreground hover:text-primary">Contact</a>
//               <button className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg font-medium w-fit">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );

//   // Hero Section Component
//   const HeroSection = () => (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         // style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
//       </div>
      
//       <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//         <div className="inline-flex items-center bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
//           <Star className="w-4 h-4 text-primary mr-2" />
//           <span className="text-sm font-medium">Trusted by 10,000+ companies</span>
//         </div>
        
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//           Build the Future with{' '}
//           <span className="bg-gradient-primary bg-clip-text text-transparent">
//             Innovation
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
//           Transform your ideas into reality with our cutting-edge platform. 
//           Experience seamless development, powerful features, and unmatched performance.
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//           <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center group">
//             Start Building Today
//             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button className="border border-border bg-background/50 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/50 transition-colors">
//             Watch Demo
//           </button>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//           {[
//             { number: '99.9%', label: 'Uptime' },
//             { number: '10M+', label: 'API Calls' },
//             { number: '150+', label: 'Countries' },
//             { number: '24/7', label: 'Support' }
//           ].map((stat) => (
//             <div key={stat.label} className="text-center">
//               <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
//               <div className="text-sm text-muted-foreground">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   // Features Section Component
//   const FeaturesSection = () => (
//     <section id="features" className="py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Powerful Features for Modern Development
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Everything you need to build, deploy, and scale your applications with confidence.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <Zap className="w-8 h-8" />,
//               title: 'Lightning Fast',
//               description: 'Blazing fast performance with optimized code and advanced caching strategies.'
//             },
//             {
//               icon: <Shield className="w-8 h-8" />,
//               title: 'Enterprise Security',
//               description: 'Bank-grade security with end-to-end encryption and compliance standards.'
//             },
//             {
//               icon: <Rocket className="w-8 h-8" />,
//               title: 'Easy Deployment',
//               description: 'Deploy with a single click to global CDN with automatic scaling.'
//             }
//           ].map((feature, index) => (
//             <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-elegant transition-all duration-300 group">
//               <div className="bg-gradient-primary w-16 h-16 rounded-xl flex items-center justify-center text-primary-foreground mb-6 group-hover:shadow-glow transition-all duration-300">
//                 {feature.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
//               <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   // Pricing Section Component
//   const PricingSection = () => (
//     <section id="pricing" className="py-20 px-6 bg-gradient-secondary">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Simple, Transparent Pricing
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Choose the perfect plan for your needs. No hidden fees.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               name: 'Starter',
//               price: '$9',
//               period: 'per month',
//               features: ['Up to 5 projects', 'Basic analytics', 'Email support', '1GB storage'],
//               popular: false
//             },
//             {
//               name: 'Professional',
//               price: '$29',
//               period: 'per month',
//               features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '10GB storage', 'Custom domains'],
//               popular: true
//             },
//             {
//               name: 'Enterprise',
//               price: '$99',
//               period: 'per month',
//               features: ['Everything in Pro', 'Dedicated support', 'SLA guarantee', '100GB storage', 'Advanced security'],
//               popular: false
//             }
//           ].map((plan, index) => (
//             <div key={index} className={`bg-card border rounded-2xl p-8 relative ${plan.popular ? 'border-primary shadow-elegant' : 'border-border'}`}>
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
//                     Most Popular
//                   </span>
//                 </div>
//               )}
              
//               <div className="text-center mb-8">
//                 <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
//                 <div className="flex items-baseline justify-center">
//                   <span className="text-4xl font-bold">{plan.price}</span>
//                   <span className="text-muted-foreground ml-2">{plan.period}</span>
//                 </div>
//               </div>

//               <ul className="space-y-4 mb-8">
//                 {plan.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-center">
//                     <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
//                 plan.popular 
//                   ? 'bg-gradient-primary text-primary-foreground hover:shadow-glow' 
//                   : 'border border-border hover:bg-secondary'
//               }`}>
//                 Get Started
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   // CTA Section Component
//   const CTASection = () => (
//     <section className="py-20 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Ready to Transform Your Ideas?
//         </h2>
//         <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//           Join thousands of developers and companies who trust our platform to build the future.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center group">
//             Start Your Free Trial
//             <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors">
//             Contact Sales
//           </button>
//         </div>
//       </div>
//     </section>
//   );

//   // Footer Component
//   const Footer = () => (
//     <footer id="contact" className="bg-muted py-16 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
//               InnovateLab
//             </div>
//             <p className="text-muted-foreground">
//               Building the future of development, one innovation at a time.
//             </p>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4">Product</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
//               <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
//               <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
//               <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4">Company</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
//               <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
//               <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
//               <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4">Support</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
//               <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
//               <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
//               <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-muted-foreground">© 2024 InnovateLab. All rights reserved.</p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
//             <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
//             <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <HeroSection />
//       <FeaturesSection />
//       <PricingSection />
//       <CTASection />
//       <Footer />
//     </div>
//   );
// };

// export default Index;











// import { useState } from 'react';
// import { ChevronRight, Star, Check, Menu, X, ArrowRight, Zap, Shield, Rocket } from 'lucide-react';

// const Index = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const Navigation = () => (
//     <nav className="relative z-50 px-6 py-4 bg-background">
//       <div className="mx-auto max-w-7xl flex items-center justify-between">
//         <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
//           InnovateLab
//         </div>
        
//         <div className="hidden md:flex items-center space-x-8">
//           <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
//           <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
//           <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
//           <button className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg hover:shadow-elegant transition-all duration-300 font-medium">
//             Get Started
//           </button>
//         </div>

//         <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {isMenuOpen && (
//         <div className="md:hidden mt-4 pb-4 border-t border-border">
//           <div className="flex flex-col space-y-4 pt-4">
//             <a href="#features" className="text-foreground hover:text-primary">Features</a>
//             <a href="#pricing" className="text-foreground hover:text-primary">Pricing</a>
//             <a href="#contact" className="text-foreground hover:text-primary">Contact</a>
//             <button className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg font-medium w-fit">
//               Get Started
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );

//   const HeroSection = () => (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-secondary">
//       <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//         <div className="inline-flex items-center bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
//           <Star className="w-4 h-4 text-primary mr-2" />
//           <span className="text-sm font-medium">Trusted by 10,000+ companies</span>
//         </div>
        
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//           Build the Future with{' '}
//           <span className="bg-gradient-primary bg-clip-text text-transparent">
//             Innovation
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
//           Transform your ideas into reality with our cutting-edge platform. 
//           Experience seamless development, powerful features, and unmatched performance.
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//           <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center group">
//             Start Building Today
//             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button className="border border-border bg-background/50 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/50 transition-colors">
//             Watch Demo
//           </button>
//         </div>
//       </div>
//     </section>
//   );

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <HeroSection />
//       {/* You can add FeaturesSection, PricingSection, CTASection, Footer here similarly */}
//     </div>
//   );
// };

// export default Index;
