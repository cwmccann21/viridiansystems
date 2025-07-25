import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Car, Wrench, MessageSquare, Calendar, Bell, ArrowRight, Zap, Clock, Shield, Sparkles, Info, ThumbsUp, ClipboardList, Send, Users as UsersIcon, CloudRain, FileText, Home, Phone, AlertCircle, Gift, CheckCircle as CheckCircleIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import { useSlideUpOnView } from "@/hooks/useSlideUpOnView";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const AutoFlow = () => {
  const automations = [
    {
      icon: <MessageSquare className="h-8 w-8" />, // AI Reception
      title: "AutoVoice AI",
      price: "$79",
      description: "24/7 automated receptionist for auto shops."
    },
    {
      icon: <Car className="h-8 w-8" />, // Review Request
      title: "DriveRate Bot",
      price: "$39",
      description: "Automated review requests and feedback collection."
    },
    {
      icon: <Bell className="h-8 w-8" />, // Service Remind
      title: "MileagePing",
      price: "$39",
      description: "Automated mileage and service reminders."
    },
    {
      icon: <Calendar className="h-8 w-8" />, // Promotional
      title: "ShopBurst Campaign",
      price: "$49",
      description: "Promotional campaign automation for special offers."
    },
    {
      icon: <Wrench className="h-8 w-8" />, // Invoice/Service
      title: "WrenchTrack",
      price: "$35",
      description: "Automated invoice and service tracking."
    },
    {
      icon: <Sparkles className="h-8 w-8" />, 
      title: "CRM Integration",
      price: "Varies",
      description: "Integrate with your preferred CRM or use our in-house solution. We support in-house or BYO options. Pricing varies as we work with partners."
    }
  ];
  const benefits = [{
    icon: <Zap className="h-6 w-6" />,
    text: "Capture 90% more leads from missed calls"
  }, {
    icon: <Clock className="h-6 w-6" />,
    text: "Reduce no-shows by 60% with automated reminders"
  }, {
    icon: <Car className="h-6 w-6" />,
    text: "Increase customer lifetime value by 35%"
  }, {
    icon: <Shield className="h-6 w-6" />,
    text: "Save 15+ hours per week on admin tasks"
  }, {
    icon: <Star className="h-6 w-6" />,
    text: "Boost online reviews by 300%"
  }];
  const plans = [{
    name: "Core",
    price: "$97",
    popular: false,
    features: ["AI Receptionist", "Missed Call Text-Back", "Basic Service Reminders", "Review Requests", "Email Support"]
  }, {
    name: "Growth",
    price: "$197",
    popular: true,
    features: ["Everything in Core", "Digital Inspections", "Advanced Scheduling", "Customer Segmentation", "Phone Support", "Analytics Dashboard"]
  }, {
    name: "Pro",
    price: "$297",
    popular: false,
    features: ["Everything in Growth", "Multi-location Support", "Custom Automations", "API Integrations", "Dedicated Account Manager", "White-label Options"]
  }];

  const heroTitleRef = useSlideUpOnView<HTMLHeadingElement>();

  const automationSteps = {
    "AutoVoice AI": [
      { icon: <Phone className="h-5 w-5 text-blue-500" />, text: "Customer Reaches Out (Call or Web Form)" },
      { icon: <MessageSquare className="h-5 w-5 text-blue-500" />, text: "AI Receptionist Engages (Collects name, vehicle, issue, etc.) & Answers FAQ" },
      { icon: <Calendar className="h-5 w-5 text-blue-500" />, text: "Smart Scheduling & CRM Entry" },
      { icon: <Bell className="h-5 w-5 text-blue-500" />, text: "Automated Follow-Ups (Reminders, reviews, updates)" },
      { icon: <Star className="h-5 w-5 text-blue-500" />, text: "Ongoing Engagement & Reporting" },
    ],
    "DriveRate Bot": [
      { icon: <Wrench className="h-5 w-5 text-blue-500" />, text: "Service Completed" },
      { icon: <Send className="h-5 w-5 text-blue-500" />, text: "Automated Review Request Sent" },
      { icon: <ThumbsUp className="h-5 w-5 text-blue-500" />, text: "Customer Submits Feedback" },
      { icon: <Star className="h-5 w-5 text-blue-500" />, text: "Positive Reviews Boosted" },
      { icon: <ClipboardList className="h-5 w-5 text-blue-500" />, text: "Reputation Dashboard Updated" },
    ],
    "MileagePing": [
      { icon: <Car className="h-5 w-5 text-blue-500" />, text: "Mileage Data Collected" },
      { icon: <Calendar className="h-5 w-5 text-blue-500" />, text: "Automated Reminder Scheduled" },
      { icon: <Bell className="h-5 w-5 text-blue-500" />, text: "Customer Receives Reminder" },
      { icon: <ArrowRight className="h-5 w-5 text-blue-500" />, text: "Easy Booking Link Provided" },
      { icon: <Bell className="h-5 w-5 text-blue-500" />, text: "Follow-Up if No Response" },
    ],
    "ShopBurst Campaign": [
      { icon: <Gift className="h-5 w-5 text-blue-500" />, text: "Campaign Created" },
      { icon: <Send className="h-5 w-5 text-blue-500" />, text: "Automated Message Sent" },
      { icon: <ArrowRight className="h-5 w-5 text-blue-500" />, text: "Customer Clicks Offer" },
      { icon: <ClipboardList className="h-5 w-5 text-blue-500" />, text: "Bookings & Redemptions Tracked" },
      { icon: <Star className="h-5 w-5 text-blue-500" />, text: "Performance Report Generated" },
    ],
    "WrenchTrack": [
      { icon: <Wrench className="h-5 w-5 text-blue-500" />, text: "Service/Invoice Created" },
      { icon: <Bell className="h-5 w-5 text-blue-500" />, text: "Automated Status Updates" },
      { icon: <FileText className="h-5 w-5 text-blue-500" />, text: "Digital Invoice Sent" },
      { icon: <Bell className="h-5 w-5 text-blue-500" />, text: "Follow-Up Reminders" },
      { icon: <ClipboardList className="h-5 w-5 text-blue-500" />, text: "Records Synced to CRM" },
    ],
    "CRM Integration": [
      { icon: <UsersIcon className="h-5 w-5 text-blue-500" />, text: "Connect Your CRM" },
      { icon: <CloudRain className="h-5 w-5 text-blue-500" />, text: "Data Sync Initiated" },
      { icon: <Zap className="h-5 w-5 text-blue-500" />, text: "Automations Activated" },
      { icon: <ClipboardList className="h-5 w-5 text-blue-500" />, text: "Custom Workflows Configured" },
      { icon: <Info className="h-5 w-5 text-blue-500" />, text: "Ongoing Support & Updates" },
    ],
  };

  useEffect(() => {
    if (sessionStorage.getItem('scrollToTopOnNextPage')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      sessionStorage.removeItem('scrollToTopOnNextPage');
    }
  }, []);

  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section with Car Animation */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated Car Path - REMOVED EMOJIS AND LINE */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30 transform -translate-y-1/2"></div>
        </div> */}

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 ref={heroTitleRef} className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight animate-slide-up-fade-in">
            Automate Your 
            <span className="block text-blue-600"> Auto Shop Business</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Prebuilt automation tools tailored specifically for auto repair professionals. Never miss a lead, follow-up, or service reminder again.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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
              Complete Automation Package for Autoshops
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to automate your auto shop, designed specifically for automotive professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {automations.map((automation, index) => (
              <Dialog key={index}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 h-full flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4 flex-shrink-0 relative">
                    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {automation.icon}
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {automation.title}
                    </CardTitle>
                    <span className="absolute top-3 right-4 text-blue-600 font-bold text-lg">{automation.price}<span className="text-sm align-top">/mo</span></span>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {automation.description}
                    </CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full rounded-full font-semibold py-2 text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700 shadow-sm">
                        Learn More
                      </Button>
                    </DialogTrigger>
                  </div>
                </Card>
                <DialogContent className="max-w-lg w-full rounded-2xl shadow-2xl p-0 overflow-hidden">
                  <DialogHeader className="bg-blue-50 px-6 pt-6 pb-2">
                    <DialogTitle className="text-2xl font-bold text-blue-700">{automation.title}</DialogTitle>
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
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-8 py-6 shadow text-2xl font-bold text-blue-700">
              Total Flow Package Price: <span className="text-3xl text-blue-900 ml-2">$199<span className="text-sm align-top">/mo</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Why AutoFlow */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose AutoFlow?
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-600 mr-3 flex-shrink-0">{benefit.icon}</span>
                    <span className="text-base text-gray-700">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-base italic">
                  "AutoFlow transformed our shop. We went from missing 30% of our calls to capturing every single lead. Our revenue increased by $15,000 in the first month alone."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                  <p className="text-gray-500">Owner, Rodriguez Auto Repair</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-4xl md:text-6xl opacity-10">🚗</div>
          <div className="absolute bottom-10 right-10 text-4xl md:text-6xl opacity-10">⚙️</div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight px-4">
            Ready to Automate Your Auto Shop?
          </h2>
          <p className="text-lg md:text-2xl mb-12 text-blue-100 font-light leading-relaxed px-4">
            Join hundreds of auto repair shops already saving time and increasing revenue with AutoFlow.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-lg md:text-xl px-8 md:px-12 py-6 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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
                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
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
export default AutoFlow;