import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Home, Cloud, FileText, Calendar, MessageSquare, ArrowRight, Sparkles, Info, ThumbsUp, ClipboardList, Send, Users as UsersIcon, CloudRain, Phone, AlertCircle, Gift, CheckCircle as CheckCircleIcon, Bell, Wrench, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import { useSlideUpOnView } from "@/hooks/useSlideUpOnView";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const RoofFlow = () => {
  const automations = [
    {
      icon: <FileText className="h-8 w-8" />, // AI Reception
      title: "PitchBot AI",
      price: "$79",
      description: "AI-powered lead reception for roofers."
    },
    {
      icon: <Cloud className="h-8 w-8" />, // Review Request
      title: "ShingleScore",
      price: "$39",
      description: "Automated review requests and feedback collection."
    },
    {
      icon: <Calendar className="h-8 w-8" />, // Seasonal/Weather
      title: "StormSignal",
      price: "$39",
      description: "Automated storm and seasonal alerts."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />, // Invoice/Service
      title: "RidgeReport",
      price: "$49",
      description: "Automated inspection and service reporting."
    },
    {
      icon: <Star className="h-8 w-8" />, // Lead Nurture
      title: "GutterGuide",
      price: "$45",
      description: "Automated lead nurture and follow-up."
    },
    {
      icon: <Sparkles className="h-8 w-8" />, 
      title: "CRM Integration",
      price: "Varies",
      description: "Integrate with your preferred CRM or use our in-house solution. We support in-house or BYO options. Pricing varies as we work with partners."
    }
  ];
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

  const automationSteps = {
    "PitchBot AI": [
      { icon: <Phone className="h-5 w-5 text-red-600" />, text: "Customer Calls or Fills Lead Form" },
      { icon: <Home className="h-5 w-5 text-red-600" />, text: "AI Receptionist Collects Project Details" },
      { icon: <Calendar className="h-5 w-5 text-red-600" />, text: "Schedules Inspection/Estimate" },
      { icon: <Bell className="h-5 w-5 text-red-600" />, text: "Sends Confirmation & Reminders" },
      { icon: <ThumbsUp className="h-5 w-5 text-red-600" />, text: "Follows Up for Feedback" },
    ],
    "ShingleScore": [
      { icon: <Wrench className="h-5 w-5 text-red-600" />, text: "Job Completed" },
      { icon: <Send className="h-5 w-5 text-red-600" />, text: "Automated Review Request Sent" },
      { icon: <ThumbsUp className="h-5 w-5 text-red-600" />, text: "Customer Leaves Feedback" },
      { icon: <Star className="h-5 w-5 text-red-600" />, text: "Positive Reviews Promoted" },
      { icon: <ClipboardList className="h-5 w-5 text-red-600" />, text: "Track Results in Dashboard" },
    ],
    "StormSignal": [
      { icon: <CloudRain className="h-5 w-5 text-red-600" />, text: "Weather/Storm Data Monitored" },
      { icon: <Send className="h-5 w-5 text-red-600" />, text: "Automated Alert Sent to Customers" },
      { icon: <ArrowRight className="h-5 w-5 text-red-600" />, text: "Customer Responds for Inspection" },
      { icon: <Calendar className="h-5 w-5 text-red-600" />, text: "Schedule & Confirm Appointment" },
      { icon: <ClipboardList className="h-5 w-5 text-red-600" />, text: "Track Conversions" },
    ],
    "RidgeReport": [
      { icon: <FileText className="h-5 w-5 text-red-600" />, text: "Inspection/Service Performed" },
      { icon: <FileText className="h-5 w-5 text-red-600" />, text: "Digital Report Created" },
      { icon: <Send className="h-5 w-5 text-red-600" />, text: "Report Sent to Customer" },
      { icon: <Bell className="h-5 w-5 text-red-600" />, text: "Follow-Up for Next Steps" },
      { icon: <ClipboardList className="h-5 w-5 text-red-600" />, text: "Records Synced to CRM" },
    ],
    "GutterGuide": [
      { icon: <UsersIcon className="h-5 w-5 text-red-600" />, text: "New Lead Captured" },
      { icon: <Send className="h-5 w-5 text-red-600" />, text: "Automated Welcome/Nurture" },
      { icon: <Gift className="h-5 w-5 text-red-600" />, text: "Follow-Up Reminders" },
      { icon: <Gift className="h-5 w-5 text-red-600" />, text: "Upsell/Cross-Sell Offers" },
      { icon: <ClipboardList className="h-5 w-5 text-red-600" />, text: "Track Engagement" },
    ],
    "CRM Integration": [
      { icon: <UsersIcon className="h-5 w-5 text-red-600" />, text: "Connect Your CRM" },
      { icon: <CloudRain className="h-5 w-5 text-red-600" />, text: "Data Sync Initiated" },
      { icon: <Zap className="h-5 w-5 text-red-600" />, text: "Automations Activated" },
      { icon: <ClipboardList className="h-5 w-5 text-red-600" />, text: "Custom Workflows Configured" },
      { icon: <Info className="h-5 w-5 text-red-600" />, text: "Ongoing Support & Updates" },
    ],
  };

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
                Start with a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </a>
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
              <Dialog key={index}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-red-50 h-full flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4 flex-shrink-0 relative">
                    <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {automation.icon}
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {automation.title}
                    </CardTitle>
                    <span className="absolute top-3 right-4 text-red-600 font-bold text-lg">{automation.price}<span className="text-sm align-top">/mo</span></span>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {automation.description}
                    </CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full rounded-full font-semibold py-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 shadow-sm">
                        Learn More
                      </Button>
                    </DialogTrigger>
                  </div>
                </Card>
                <DialogContent className="max-w-lg w-full rounded-2xl shadow-2xl p-0 overflow-hidden">
                  <DialogHeader className="bg-red-50 px-6 pt-6 pb-2">
                    <DialogTitle className="text-2xl font-bold text-red-700">{automation.title}</DialogTitle>
                  </DialogHeader>
                  <div className="px-6 pb-6 pt-2 max-h-[70vh] overflow-y-auto">
                    <ol className="space-y-4">
                      {(automationSteps[automation.title] || []).map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span>{step.icon}</span>
                          <span className="text-base text-gray-700 font-medium">Step {i + 1}: {step.text}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <div className="bg-red-50 border border-red-200 rounded-xl px-8 py-6 shadow text-2xl font-bold text-red-700">
              Total Flow Package Price: <span className="text-3xl text-red-900 ml-2">$199<span className="text-sm align-top">/mo</span></span>
            </div>
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
      {/* ... existing code ... */}

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
              Start with a Strategy Call Today
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
export default RoofFlow;