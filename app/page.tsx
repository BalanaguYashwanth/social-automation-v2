"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Zap, Users, TrendingUp, LogOut, Lock, Star } from "lucide-react"
import { API, GOOGLE_FORM } from "@/constants"
import { api } from "@/lib/api"

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post(API.RESQUEST_TOKEN);
      const { authUrl } = response.data;
      window.location.href = authUrl;
    } catch (err) {
      console.error(err);
      setError("Failed to connect with Twitter. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">BuzzAgent</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Features
              </a>
              <a href="#security" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Security
              </a>
              <Button variant="outline" size="sm" onClick={handleLogin}>
                Try out
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
              <Zap className="w-4 h-4 mr-1" />
              AI-Powered Social Media Agent
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your Social Media growth with <span className="text-indigo-600">Agent</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Effortlessly auto-post trending content that resonates with your audience. Our AI agent monitors trends
              24/7 and creates engaging posts on your behalf, while you maintain complete control and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg" onClick={handleLogin}>
                Try Now - It's Free
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                No Lock-in Period
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-1" />
                Bank-Level Security
              </div>
              <div className="flex items-center">
                <LogOut className="w-4 h-4 text-green-500 mr-1" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wide font-medium">
              Trusted by content creators worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">10K+</div>
              <div className="text-sm text-gray-500">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">1M+</div>
              <div className="text-sm text-gray-500">Posts Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">4.9★</div>
              <div className="text-sm text-gray-500">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How BuzzAgent Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI agent handles everything while you maintain complete control
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Trend Detection</h3>
                <p className="text-gray-600">
                  Our AI monitors thousands of sources daily to identify trending topics relevant to your niche
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Content</h3>
                <p className="text-gray-600">
                  Creates engaging posts tailored to your voice, audience, and brand guidelines
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Auto-Posting</h3>
                <p className="text-gray-600">
                  Automatically posts to your Twitter at optimal times for maximum engagement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700">
                <Shield className="w-4 h-4 mr-1" />
                Security First
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Safety is Our Priority</h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand the importance of trust when it comes to your social media presence. That's why we've
                built BuzzAgent with enterprise-grade security from the ground up.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">End-to-End Encryption</h4>
                    <p className="text-gray-600">All your data is encrypted in transit and at rest</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Data Retention</h4>
                    <p className="text-gray-600">We don't store your personal information longer than necessary</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Opt-Out</h4>
                    <p className="text-gray-600">Cancel anytime with one click - no questions asked</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Content Approval</h4>
                    <p className="text-gray-600">Review and approve posts before they go live (optional)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Security Dashboard</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Account Security</span>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Data Encryption</span>
                    <Badge className="bg-green-100 text-green-700">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Content Filtering</span>
                    <Badge className="bg-green-100 text-green-700">On</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-700">Auto-Posting</span>
                    <Badge className="bg-blue-100 text-blue-700">Scheduled</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of content creators who trust BuzzAgent</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "BuzzAgent has completely transformed my social media strategy. The AI creates content that actually
                  resonates with my audience."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-indigo-600 font-semibold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Content Creator</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The security features give me peace of mind. I can opt out anytime, and the content approval system
                  is perfect."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-indigo-600 font-semibold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mike Chen</div>
                    <div className="text-sm text-gray-500">Digital Marketer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "My engagement has increased by 300% since using BuzzAgent. The AI really understands what my audience
                  wants to see."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-indigo-600 font-semibold">ER</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                    <div className="text-sm text-gray-500">Entrepreneur</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of creators who are already using AI to grow their audience. Start your free trial today - no
            credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg" onClick={handleLogin}>
              Start Free Trial
            </Button>
          </div>
          <p className="text-sm text-indigo-200 mt-6">Free 14-day trial • No lock-in period • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-2 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-gray-400">
            <p>
              &copy; 2025 <span className="font-semibold text-indigo-400">BuzzAgent</span>. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
            <a
              href={GOOGLE_FORM.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-400 hover:text-white transition"
            >
              Support
            </a>
            <a
              href={GOOGLE_FORM.URL}
              target="_blank"
              className="hover:underline text-gray-400 hover:text-white transition"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:underline text-gray-400 hover:text-white transition"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}