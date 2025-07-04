import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Leaf, Calendar, MessageSquare, Bell, Users, ArrowRight, Sparkles, Info, ThumbsUp, ClipboardList, Send, Wrench, Zap, Phone, CloudRain, FileText, Gift } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import { useSlideUpOnView } from "@/hooks/useSlideUpOnView";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const LawnFlow = () => {
  const automations = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "GrassCall AI",
      price: "$79",
      description: "AI-powered reception for lawn care businesses."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "LawnLove Feedback",
      price: "$39",
      description: "Automated review requests and feedback collection."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "GreenPush Alerts",
      price: "$39",
      description: "Automated seasonal and weather-based alerts."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "MowTrack Docs",
      price: "$49",
      description: "Automated invoice and service documentation."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "SproutFlow",
      price: "$45",
      description: "Automated lead nurture and retention."
    },
    {
      icon: <Sparkles className="h-8 w-8" />, 
      title: "CRM Integration",
      price: "Varies",
      description: "Integrate with your preferred CRM or use our in-house solution. We support in-house or BYO options. Pricing varies as we work with partners."
    }
  ];

  const benefits = [
    "Increase customer retention rate by 65%",
    "Reduce seasonal booking gaps by 80%", 
    "Automate 90% of routine communications",
    "Boost add-on service sales by 40%",
    "Save 12+ hours per week on scheduling"
  ];

  const plans = [
    {
      name: "Core",
      price: "$87",
      features: [
        "Seasonal Scheduling",
        "Basic Service Reminders",
        "Weather Notifications",
        "Customer Communication",
        "Email Support"
      ]
    },
    {
      name: "Growth",
      price: "$167",
      popular: true,
      features: [
        "Everything in Core",
        "Project Follow-ups",
        "Advanced Scheduling",
        "Customer Segmentation",
        "Priority Support",
        "Analytics Dashboard"
      ]
    },
    {
      name: "Pro",
      price: "$247",
      features: [
        "Everything in Growth",
        "Multi-crew Management",
        "Route Optimization",
        "Custom Automations",
        "API Integrations",
        "Dedicated Account Manager"
      ]
    }
  ];

  const heroTitleRef = useSlideUpOnView<HTMLHeadingElement>();

  const automationSteps = {
    "GrassCall AI": [
      { icon: <Phone className="h-5 w-5 text-green-600" />, text: "Customer Calls or Inquires" },
      { icon: <MessageSquare className="h-5 w-5 text-green-600" />, text: "AI Receptionist Collects Details (name, address, service)" },
      { icon: <Calendar className="h-5 w-5 text-green-600" />, text: "Schedules Estimate or Service" },
      { icon: <Bell className="h-5 w-5 text-green-600" />, text: "Sends Confirmation & Reminders" },
      { icon: <ThumbsUp className="h-5 w-5 text-green-600" />, text: "Follows Up for Feedback" },
    ],
    "LawnLove Feedback": [
      { icon: <Wrench className="h-5 w-5 text-green-600" />, text: "Service Completed" },
      { icon: <Send className="h-5 w-5 text-green-600" />, text: "Automated Review Request Sent" },
      { icon: <ThumbsUp className="h-5 w-5 text-green-600" />, text: "Customer Leaves Feedback" },
      { icon: <Star className="h-5 w-5 text-green-600" />, text: "Positive Reviews Promoted" },
      { icon: <ClipboardList className="h-5 w-5 text-green-600" />, text: "Track Results in Dashboard" },
    ],
    "GreenPush Alerts": [
      { icon: <CloudRain className="h-5 w-5 text-green-600" />, text: "Weather/Seasonal Data Monitored" },
      { icon: <Calendar className="h-5 w-5 text-green-600" />, text: "Automated Alert Scheduled" },
      { icon: <Bell className="h-5 w-5 text-green-600" />, text: "Customer Receives Alert (text/email)" },
      { icon: <ArrowRight className="h-5 w-5 text-green-600" />, text: "Easy Booking Link Provided" },
      { icon: <Bell className="h-5 w-5 text-green-600" />, text: "Follow-Up if No Response" },
    ],
    "MowTrack Docs": [
      { icon: <FileText className="h-5 w-5 text-green-600" />, text: "Service/Invoice Created" },
      { icon: <Bell className="h-5 w-5 text-green-600" />, text: "Status Updates Sent" },
      { icon: <FileText className="h-5 w-5 text-green-600" />, text: "Digital Invoice Delivered" },
      { icon: <Bell className="h-5 w-5 text-green-600" />, text: "Follow-Up Reminders" },
      { icon: <ClipboardList className="h-5 w-5 text-green-600" />, text: "Records Synced to CRM" },
    ],
    "SproutFlow": [
      { icon: <Users className="h-5 w-5 text-green-600" />, text: "New Lead Captured" },
      { icon: <Send className="h-5 w-5 text-green-600" />, text: "Automated Welcome Message" },
      { icon: <Leaf className="h-5 w-5 text-green-600" />, text: "Nurture Sequence (tips, offers)" },
      { icon: <Gift className="h-5 w-5 text-green-600" />, text: "Upsell/Retention Reminders" },
      { icon: <ClipboardList className="h-5 w-5 text-green-600" />, text: "Track Engagement" },
    ],
    "CRM Integration": [
      { icon: <Users className="h-5 w-5 text-green-600" />, text: "Connect Your CRM" },
      { icon: <CloudRain className="h-5 w-5 text-green-600" />, text: "Data Sync Initiated" },
      { icon: <Zap className="h-5 w-5 text-green-600" />, text: "Automations Activated" },
      { icon: <ClipboardList className="h-5 w-5 text-green-600" />, text: "Custom Workflows Configured" },
      { icon: <Info className="h-5 w-5 text-green-600" />, text: "Ongoing Support & Updates" },
    ],
  };

  useEffect(() => {
    if (sessionStorage.getItem('scrollToTopOnNextPage')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      sessionStorage.removeItem('scrollToTopOnNextPage');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 ref={heroTitleRef} className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-none animate-slide-up-fade-in">
            Automate Your 
            <span className="block text-green-600"> Lawn Care Business</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Prebuilt automation tools tailored specifically for landscaping and lawn care professionals. Manage seasonal services and keep customers year-round.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-12 py-6 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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
              Complete Automation Package for Lawn Care
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to automate your lawn care business, designed specifically for landscaping professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {automations.map((automation, index) => (
              <Dialog key={index}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-green-50 h-full flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4 flex-shrink-0 relative">
                    <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {automation.icon}
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {automation.title}
                    </CardTitle>
                    <span className="absolute top-3 right-4 text-green-600 font-bold text-lg">{automation.price}<span className="text-sm align-top">/mo</span></span>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {automation.description}
                    </CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full rounded-full font-semibold py-2 text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700 shadow-sm">
                        Learn More
                      </Button>
                    </DialogTrigger>
                  </div>
                </Card>
                <DialogContent className="max-w-lg w-full rounded-2xl shadow-2xl p-0 overflow-hidden">
                  <DialogHeader className="bg-green-50 px-6 pt-6 pb-2">
                    <DialogTitle className="text-2xl font-bold text-green-700">{automation.title}</DialogTitle>
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
            <div className="bg-green-50 border border-green-200 rounded-xl px-8 py-6 shadow text-2xl font-bold text-green-700">
              Total Flow Package Price: <span className="text-3xl text-green-900 ml-2">$199<span className="text-sm align-top">/mo</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Why LawnFlow */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose LawnFlow?
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
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
                <p className="text-gray-600 mb-4">
                  "LawnFlow transformed how we manage our 200+ customers. The seasonal automations keep everyone scheduled and happy. Our retention rate went from 70% to 95%."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Tom Williams</p>
                  <p className="text-gray-500">Owner, GreenScape Lawn Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-4xl md:text-6xl opacity-20">🌿</div>
          <div className="absolute bottom-10 right-10 text-4xl md:text-6xl opacity-20">🌱</div>
        </div>
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight px-4">
            Ready to Grow Your Lawn Care Business?
          </h2>
          <p className="text-lg md:text-2xl mb-12 text-green-100 font-light leading-relaxed px-4">
            Join hundreds of lawn care professionals already automating their operations and increasing customer satisfaction.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary" 
            className="text-lg md:text-xl px-8 md:px-12 py-6 bg-white text-green-600 hover:bg-gray-100 rounded-full font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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
    </div>
  );
};

export default LawnFlow;
