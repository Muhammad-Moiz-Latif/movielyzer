"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Upload, Brain, Search, Play, ArrowRight } from "lucide-react"

const stepsData = [
    {
        step: "1",
        icon: Upload,
        title: "Upload Your Video",
        description:
            "Upload any video file to our platform. We support all major video formats including MP4, AVI, MOV, and more.",
        gradient: "from-blue-600 to-blue-800",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
    },
    {
        step: "2",
        icon: Brain,
        title: "AI Processing",
        description:
            "Our advanced AI analyzes your video, transcribes speech with high accuracy, and intelligently indexes all visual content.",
        gradient: "from-slate-700 to-slate-900",
        bgColor: "bg-slate-50",
        borderColor: "border-slate-200",
    },
    {
        step: "3",
        icon: Search,
        title: "Search & Discover",
        description:
            "Search through your video content with natural language queries and get precise, timestamped results instantly.",
        gradient: "from-indigo-600 to-purple-700",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-200",
    },
]

const HowItWorks = () => {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fillOpacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40`}></div>

            {/* Subtle Background Shapes */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
                            <span className="text-blue-700 text-sm font-medium">🚀 Simple Process</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent mb-6">
                            How It Works
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Transform your videos into searchable content with our powerful AI-driven platform in just three simple steps
                        </p>
                    </div>

                    {/* Video and Steps Side by Side */}
                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                        {/* Video Section */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 shadow-2xl h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl"></div>
                                <div className="relative z-10">
                                    <div className="text-center mb-6">
                                        <h2 className="text-2xl font-bold text-white mb-3">See It In Action</h2>
                                        <p className="text-blue-200 text-sm">Watch how our platform transforms video content into searchable insights</p>
                                    </div>

                                    {/* Video Embed */}
                                    <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
                                        <iframe
                                            src="https://www.loom.com/embed/929a0d7076684ee3a145514141e4af9c"
                                            frameBorder="0"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        ></iframe>
                                    </div>

                                    {/* Video Controls */}
                                    <div className="flex items-center justify-center mt-4 gap-4">
                                        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm">
                                            <Play className="h-4 w-4" />
                                            Watch Demo
                                        </button>
                                        <span className="text-blue-200 text-xs">2:30 minutes</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Steps Section */}
                        <div className="w-full lg:w-1/2">
                            <div className="space-y-2 h-full flex flex-col justify-between">
                                {stepsData.map((step, index) => {
                                    const IconComponent = step.icon
                                    return (
                                        <div key={index} className="relative flex-1">
                                            {/* Connection Line */}
                                            {index < stepsData.length - 1 && (
                                                <div className="absolute left-10 top-[calc(100%-10px)] w-0.5 h-4 bg-gradient-to-b from-slate-300 to-slate-200">
                                                    <ArrowRight className="absolute bottom-0 -left-2 h-4 w-4 text-slate-400 rotate-90" />
                                                </div>
                                            )}

                                            <Card className={`group ${step.bgColor} ${step.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden h-full`}>
                                                {/* Step Number Badge */}
                                                <div className={`absolute top-4 right-4 w-7 h-7 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
                                                    {step.step}
                                                </div>

                                                <CardHeader className="flex flex-row items-center space-y-0 pb-3 pt-6">
                                                    <div className={`mr-4 p-3 bg-gradient-to-r ${step.gradient} rounded-xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                                        <IconComponent className="h-8 w-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-xl text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                                                            {step.title}
                                                        </CardTitle>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <CardDescription className="text-slate-600 leading-relaxed text-sm">
                                                        {step.description}
                                                    </CardDescription>
                                                </CardContent>

                                                {/* Bottom Accent Line */}
                                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                            </Card>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
