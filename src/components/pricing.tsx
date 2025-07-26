"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Check, Star, Mail, Phone, MapPin, Clock } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: "$0.00",
    period: "",
    description: "Try our basic features for free",
    recommended: false,
    features: [
      "60 minutes of video upload",
      "Limited token usage (1,000 tokens)",
      "Basic video search",
      "7-day access",
      "Email support",
      "Standard processing speed",
    ],
    gradient: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    buttonText: "Get Started Free",
    buttonStyle: "bg-slate-600 hover:bg-slate-700",
  },
  {
    name: "Plus",
    price: "$490.00",
    period: "/month",
    description: "Full access to all premium features",
    recommended: true,
    features: [
      "600 minutes of video upload",
      "10,000 tokens per month",
      "Advanced video search",
      "Priority support",
      "Advanced analytics",
      "API access",
      "Custom integrations",
      "Bulk processing",
    ],
    gradient: "from-blue-600 to-indigo-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    buttonText: "Start Plus Plan",
    buttonStyle: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
  },
  {
    name: "Enterprise",
    price: "$1,290.00",
    period: "/month",
    description: "Advanced features for large organizations",
    recommended: false,
    features: [
      "Unlimited video uploads",
      "Unlimited tokens",
      "AI-powered insights",
      "24/7 dedicated support",
      "Advanced security features",
      "Custom AI models",
      "White-label solution",
      "SLA guarantee",
      "On-premise deployment",
    ],
    gradient: "from-purple-600 to-indigo-800",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    buttonText: "Contact Sales",
    buttonStyle: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700",
  },
]

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fillOpacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40`}></div>
      
      {/* Subtle Background Shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
              <span className="text-blue-700 text-sm font-medium">💎 Choose Your Plan</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your needs. Upgrade or downgrade at any time with no hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`group ${plan.bgColor} ${plan.borderColor} ${plan.recommended ? 'border-4 scale-105' : 'border-2'} hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 text-sm font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      RECOMMENDED
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4 pt-8">
                  <div className={`mx-auto mb-4 p-3 bg-gradient-to-r ${plan.gradient} rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{plan.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-2xl text-slate-800 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 ${plan.buttonStyle} text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}>
                    {plan.buttonText}
                  </button>
                </CardContent>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </Card>
            ))}
          </div>

          {/* Custom Plans Section */}
          <div className="text-center mb-20">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-12 border border-slate-200">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Have Specific Requirements?</h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Contact us for custom plans tailored to your needs. We'll work with you to create the perfect solution for your organization.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-800 text-white font-semibold rounded-xl hover:from-slate-700 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Contact Sales Team
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Need Support?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our dedicated support team is here to help you get the most out of our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-blue-50 border-blue-200 border-2 hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full w-12 h-12 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Email Support</h3>
                  <a href="mailto:ibad@sirfastech.com" className="text-blue-600 hover:text-blue-800 text-sm break-all">
                    ibad@sirfastech.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-slate-50 border-slate-200 border-2 hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Response Time</h3>
                  <p className="text-slate-600 text-sm">Within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200 border-2 hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full w-12 h-12 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Priority Support</h3>
                  <p className="text-slate-600 text-sm">Available for Plus & Enterprise</p>
                </CardContent>
              </Card>

              <Card className="bg-indigo-50 border-indigo-200 border-2 hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-full w-12 h-12 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Global Support</h3>
                  <p className="text-slate-600 text-sm">Available worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">SirFasTech</h3>
              <p className="text-blue-200 mb-6 max-w-md">
                Transform your videos into searchable content with our powerful AI-driven platform. 
                Making video content accessible and discoverable.
              </p>
              <div className="flex items-center gap-2 text-blue-200">
                <Mail className="h-4 w-4" />
                <a href="mailto:ibad@sirfastech.com" className="hover:text-white transition-colors">
                  ibad@sirfastech.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center">
            <p className="text-blue-200">
              © 2024 SirFasTech. All rights reserved. Built with ❤️ for better video accessibility.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Pricing
