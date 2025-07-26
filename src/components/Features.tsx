"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Search, Clock, Upload } from "lucide-react"

const featuresData = [
    {
        icon: Search,
        title: "Intelligent Search",
        description: "Advanced search algorithms that understand context and deliver precise results every time",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Clock,
        title: "Time Saving",
        description: "Automate repetitive tasks and streamline your workflow to focus on what matters most",
        gradient: "from-purple-500 to-blue-500",
    },
    {
        icon: Upload,
        title: "Easy Upload",
        description: "Drag and drop functionality with support for multiple file formats and batch processing",
        gradient: "from-emerald-500 to-blue-500",
    },
]

const Features = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div
                    className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40`}
                ></div>

                {/* Gradient Orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 p-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                                <span className="text-blue-300 text-sm font-medium">✨ Powerful Features</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent pb-5">
                                Everything You Need
                            </h1>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Discover the powerful capabilities that make our platform the perfect solution for your business needs
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuresData.map((feature, index) => {
                                const IconComponent = feature.icon
                                return (
                                    <Card
                                        key={index}
                                        className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 relative overflow-hidden"
                                    >
                                        {/* Card Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                                            style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>

                                        <CardHeader className="text-center pb-4 relative z-10">
                                            <div className={`mx-auto mb-6 p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                                <IconComponent className="h-10 w-10 text-white" />
                                            </div>
                                            <CardTitle className="text-2xl text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                                                {feature.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="relative z-10">
                                            <CardDescription className="text-slate-300 text-center leading-relaxed text-base">
                                                {feature.description}
                                            </CardDescription>
                                        </CardContent>

                                        {/* Bottom Accent Line */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

            export default Features
