import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { useSlideUpOnView } from "@/hooks/useSlideUpOnView";

const Index = () => {
  const flows = [{
    name: "AutoFlow",
    path: "/autoflow",
    color: "#2563eb",
    icon: "🚗",
    industry: "Auto Repair Shops",
    description: "Prebuilt automation tools tailored specifically for auto repair professionals. Never miss a lead, follow-up, or service reminder again.",
    features: [
      "AutoVoice AI",
      "DriveRate Bot",
      "MileagePing",
      "ShopBurst Campaign",
      "WrenchTrack",
      "& More"
    ]
  }, {
    name: "RoofFlow",
    path: "/roofflow",
    color: "#dc2626",
    icon: "🏠",
    industry: "Roofing Companies",
    description: "Prebuilt automation tools tailored specifically for roofing professionals. Capture storm leads faster and never miss a follow-up.",
    features: [
      "PitchBot AI",
      "ShingleScore",
      "StormSignal",
      "RidgeReport",
      "GutterGuide",
      "& More"
    ]
  }, {
    name: "LawnFlow",
    path: "/lawnflow",
    color: "#16a34a",
    icon: "🌱",
    industry: "Landscaping & Lawn Care",
    description: "Prebuilt automation tools tailored specifically for landscaping and lawn care professionals. Manage seasonal services and keep customers year-round.",
    features: [
      "GrassCall AI",
      "LawnLove Feedback",
      "GreenPush Alerts",
      "MowTrack Docs",
      "SproutFlow",
      "& More"
    ]
  }, {
    name: "PlumFlow",
    path: "/plumbflow",
    color: "#6b7280",
    icon: "🔧",
    industry: "Plumbing Services",
    description: "Prebuilt automation tools tailored specifically for plumbing professionals. Handle emergencies 24/7 and never miss a maintenance opportunity.",
    features: [
      "PipeVoice AI",
      "FlowFeedback",
      "FixFlow",
      "PipeTrack Docs",
      "PromoFlush",
      "& More"
    ]
  }];
  const testimonials = [{
    quote: "AutoFlow increased our booking rate by 45% in the first month. Absolutely game-changing.",
    author: "Mike Rodriguez",
    business: "Rodriguez Auto Repair",
    rating: 5
  }, {
    quote: "Never lose another roofing lead. The storm response automation is incredible.",
    author: "Sarah Johnson",
    business: "Peak Roofing Solutions",
    rating: 5
  }, {
    quote: "My lawn care business practically runs itself now. More time for family, more revenue.",
    author: "Tom Williams",
    business: "GreenScape Lawn Care",
    rating: 5
  }];
  const heroTitleRef = useSlideUpOnView<HTMLHeadingElement>();
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 ref={heroTitleRef} className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-none animate-slide-up-fade-in">
            Automation built for
            <span className="block" style={{ color: '#9032D1' }}>
              the trades.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Industry-specific automation packages designed to save time and increase revenue for service businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-12 py-6 bg-[#9032D1] hover:bg-purple-800 text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a href="https://calendly.com/viridiansystems/30min?month=2025-06" target="_blank" rel="noopener noreferrer">
                Start with a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </a>
            </Button>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 px-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Free Trial Available
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Free Consultation
            </div>
          </div>
        </div>
      </section>

      {/* Flow Cards */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Choose Your Industry-Specific Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pre-built automation packages designed specifically for your business type. Get started in minutes, not months.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {flows.map((flow, index) => (
              <Card 
                key={flow.name} 
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-white to-gray-50 h-full flex flex-col" 
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-80" 
                  style={{
                    backgroundColor: flow.color
                  }} 
                />
                
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="text-center mb-6 flex-shrink-0">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {flow.icon}
                    </div>
                    <h3 
                      className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300" 
                      style={{
                        color: flow.color
                      }}
                    >
                      {flow.name}
                    </h3>
                    <p className="text-gray-600 font-medium mb-4">{flow.industry}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{flow.description}</p>
                  </div>

                  <div className="space-y-3 mb-6 flex-grow">
                    {flow.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle 
                          className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" 
                          style={{
                            color: flow.color
                          }} 
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={flow.path}
                    onClick={() => sessionStorage.setItem('scrollToTopOnNextPage', 'true')}
                    className="w-full rounded-full font-semibold py-3 text-lg hover:scale-105 transition-all duration-300 mt-auto flex-shrink-0 flex items-center justify-center text-white"
                    style={{
                      backgroundColor: flow.color,
                      boxShadow: `0 8px 25px ${flow.color}30`
                    }}
                  >
                    Explore {flow.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>

                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" 
                  style={{
                    backgroundColor: flow.color
                  }} 
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Trusted by service businesses everywhere
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Join thousands of professionals who've automated their way to success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white h-full flex flex-col"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex mb-6 justify-center flex-shrink-0">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex-shrink-0">
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 md:py-24 px-6 relative overflow-hidden"
        style={{
          background: "conic-gradient(at top left, #2563eb, #7c3aed, #dc2626, #16a34a, #6b7280, #2563eb)"
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight px-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg md:text-2xl mb-12 text-white/90 font-light leading-relaxed px-4">
            Join thousands of service businesses already saving time and increasing revenue.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-lg md:text-2xl px-8 md:px-16 py-6 md:py-8 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <a href="https://calendly.com/viridiansystems/30min?month=2025-06" target="_blank" rel="noopener noreferrer">
              Start with a Strategy Call Today
              <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-8 md:w-8" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Viridian Systems</h3>
              <p className="text-gray-400 leading-relaxed mt-0">
                Pioneers of AI solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Products</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/autoflow" className="hover:text-white transition-colors duration-200">AutoFlow</a></li>
                <li><a href="/roofflow" className="hover:text-white transition-colors duration-200">RoofFlow</a></li>
                <li><a href="/lawnflow" className="hover:text-white transition-colors duration-200">LawnFlow</a></li>
                <li><a href="/plumbflow" className="hover:text-white transition-colors duration-200">PlumFlow</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="https://calendly.com/viridiansystems/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Contact</a></li>
                <li><a href="mailto:info@viridiansystems.org" className="hover:text-white transition-colors duration-200">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Viridian Systems, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;