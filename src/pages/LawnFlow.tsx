import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Leaf, Calendar, MessageSquare, Bell, Users, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const LawnFlow = () => {
  const automations = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Seasonal Service Scheduler",
      description: "Automated scheduling for spring cleanups, summer maintenance, and fall services"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Recurring Service Reminders",
      description: "Smart notifications for weekly cuts, fertilization, and pest treatments"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Weather-Based Communications",
      description: "Automated updates about service delays due to weather conditions"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Landscape Project Follow-ups",
      description: "Automated sequences for landscaping estimates and project updates"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Retention System",
      description: "End-of-season surveys and next-year booking incentives"
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-none">
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
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-12 py-6 border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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
              Complete Automation Package for Lawn Care
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to automate your lawn care business, designed specifically for landscaping professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {automations.map((automation, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-green-50 h-full flex flex-col"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {automation.icon}
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-green-600 transition-colors duration-300">
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

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-green-500 shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-4xl md:text-6xl opacity-20">🌿</div>
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
                Pioneers of AI solutions for the trades.
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
    </div>
  );
};

export default LawnFlow;
