import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Home, Cloud, FileText, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import { useSlideUpOnView } from "@/hooks/useSlideUpOnView";

const RoofFlow = () => {
  const automations = [{
    icon: <FileText className="h-8 w-8" />,
    title: "Instant Lead Forms",
    description: "Smart forms with roof type selectors and damage assessment tools"
  }, {
    icon: <Cloud className="h-8 w-8" />,
    title: "Storm Response Automation",
    description: "Automated SMS campaigns triggered by weather alerts in your area"
  }, {
    icon: <Calendar className="h-8 w-8" />,
    title: "Inspection Scheduler",
    description: "Automated appointment booking with photo upload capabilities"
  }, {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Proposal Follow-ups",
    description: "Automated reminder sequences for pending estimates and proposals"
  }, {
    icon: <Star className="h-8 w-8" />,
    title: "Review & Referral System",
    description: "Post-completion review requests and referral incentive automation"
  }];
  const benefits = ["Respond to storm leads 10x faster than competitors", "Increase proposal acceptance rate by 45%", "Capture 85% more leads during storm season", "Reduce follow-up time by 20 hours per week", "Generate 200% more online reviews"];
  const plans = [{
    name: "Core",
    price: "$127",
    features: ["Instant Lead Forms", "Basic Storm Alerts", "Inspection Scheduling", "Email Follow-ups", "Customer Support"]
  }, {
    name: "Growth",
    price: "$227",
    popular: true,
    features: ["Everything in Core", "Advanced Storm Response", "Proposal Automation", "Photo Documentation", "Priority Support", "Analytics Dashboard"]
  }, {
    name: "Pro",
    price: "$327",
    features: ["Everything in Growth", "Multi-crew Management", "Insurance Integration", "Custom Workflows", "API Access", "Dedicated Account Manager"]
  }];

  const heroTitleRef = useSlideUpOnView<HTMLHeadingElement>();

  useEffect(() => {
    if (sessionStorage.getItem('scrollToTopOnNextPage')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      sessionStorage.removeItem('scrollToTopOnNextPage');
    }
  }, []);

  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 ref={heroTitleRef} className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-none animate-slide-up-fade-in">
            Automate Your 
            <span className="block text-red-600">Roofing Business</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Prebuilt automation tools tailored specifically for roofing professionals. Capture storm leads faster and never miss a follow-up.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-12 py-6 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a href="https://calendly.com/viridiansystems/30min?month=2025-06" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-12 py-6 border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-full font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Automation Package Breakdown */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Complete Automation Package for Roofers
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to automate your roofing business, designed specifically for roofing professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {automations.map((automation, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-red-50 h-full flex flex-col"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {automation.icon}
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {automation.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {automation.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why RoofFlow */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose RoofFlow?
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>)}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "RoofFlow's storm response system is incredible. We booked 40 new roofs in one week after a hailstorm. The automated follow-ups convert leads we would have lost."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-500">Owner, Peak Roofing Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Choose the plan that fits your roofing business needs. Upgrade or downgrade anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col ${plan.popular ? 'ring-2 ring-red-500 shadow-red-500/20 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4 flex-shrink-0">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-6">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-lg">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full rounded-full font-semibold py-3 transition-all duration-300 hover:scale-105 flex-shrink-0 ${plan.popular ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg' : 'border-2 border-red-600 text-red-600 hover:bg-red-50'}`} 
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <a href="https://calendly.com/viridiansystems/30min?month=2025-06" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-4xl md:text-6xl opacity-10">🏠</div>
          <div className="absolute bottom-10 right-10 text-4xl md:text-6xl opacity-10">☔</div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight px-4">
            Ready to Dominate Storm Season?
          </h2>
          <p className="text-lg md:text-2xl mb-12 text-red-100 font-light leading-relaxed px-4">
            Join hundreds of roofing companies already capturing more leads and closing more deals with RoofFlow.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary" 
            className="text-lg md:text-xl px-8 md:px-12 py-6 bg-white text-red-600 hover:bg-gray-100 rounded-full font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <a href="https://calendly.com/viridiansystems/30min?month=2025-06" target="_blank" rel="noopener noreferrer">
              Start Your Free Trial Today
              <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Viridian Systems</h3>
              <p className="text-gray-400 leading-relaxed">
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
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Viridian Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default RoofFlow;