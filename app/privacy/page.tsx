import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, FileText, ArrowLeft, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy and data security are our top priorities. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <Badge className="bg-green-100 text-green-700">
              <Lock className="w-4 h-4 mr-1" />
              Last Updated: January 2025
            </Badge>
            <Badge className="bg-blue-100 text-blue-700">
              <FileText className="w-4 h-4 mr-1" />
              Version 1.0
            </Badge>
          </div>
        </div>

        {/* Policy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                BuzzAgent ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered social media automation service.
              </p>
              <p className="text-gray-600">
                By using BuzzAgent, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Name and email address when you create an account</li>
                    <li>Social media account credentials (Twitter/X) for automation</li>
                    <li>Profile information and preferences</li>
                    <li>Communication preferences and settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Service usage patterns and preferences</li>
                    <li>Content generation and posting history</li>
                    <li>Performance metrics and engagement data</li>
                    <li>Technical information about your device and browser</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media Data</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Public content from your social media accounts</li>
                    <li>Trending topics and content recommendations</li>
                    <li>Engagement metrics and audience insights</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Provision</h4>
                    <p className="text-gray-600">To provide, maintain, and improve our AI-powered social media automation services</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Content Generation</h4>
                    <p className="text-gray-600">To create personalized content and identify trending topics relevant to your audience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Communication</h4>
                    <p className="text-gray-600">To send service updates, security alerts, and support messages</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Security & Compliance</h4>
                    <p className="text-gray-600">To ensure the security of our service and comply with legal obligations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing & Disclosure */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing & Disclosure</h2>
              
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Providers</h4>
                    <p className="text-gray-600">We may share data with trusted third-party service providers who assist us in operating our service</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Legal Requirements</h4>
                    <p className="text-gray-600">We may disclose information when required by law or to protect our rights and safety</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Transfers</h4>
                    <p className="text-gray-600">In the event of a merger or acquisition, your information may be transferred as part of the business assets</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Security Measures</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Multi-factor authentication for account access</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Data Retention</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Account data: Retained while account is active</li>
                    <li>Usage logs: Deleted after 90 days</li>
                    <li>Social media data: Not stored permanently</li>
                    <li>Immediate deletion upon account closure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights & Choices</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Access & Control</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Access your personal information</li>
                    <li>Update or correct your data</li>
                    <li>Download your data</li>
                    <li>Delete your account and data</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Opt-Out Options</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Unsubscribe from marketing emails</li>
                    <li>Disable automated posting</li>
                    <li>Control data sharing preferences</li>
                    <li>Immediate service termination</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies & Tracking */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies & Tracking</h2>
              
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your experience and analyze service usage:
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Essential Cookies</span>
                  <Badge className="bg-green-100 text-green-700">Required</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Analytics Cookies</span>
                  <Badge className="bg-blue-100 text-blue-700">Optional</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Marketing Cookies</span>
                  <Badge className="bg-yellow-100 text-yellow-700">Optional</Badge>
                </div>
              </div>

              <p className="text-gray-600 mt-4 text-sm">
                You can control cookie preferences through your browser settings. Disabling certain cookies may affect service functionality.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              
              <p className="text-gray-600">
                BuzzAgent is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              
              <p className="text-gray-600 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> For users in the European Union, we comply with GDPR requirements and provide additional rights regarding data processing and international transfers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mb-4">
                <li>Posting the new policy on this page</li>
                <li>Sending an email notification</li>
                <li>Updating the "Last Updated" date</li>
              </ul>

              <p className="text-gray-600">
                Your continued use of BuzzAgent after any changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 shadow-lg bg-indigo-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email - <span className="text-indigo-600">team[at]formpilot[dot]org</span></h3>
                </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 48 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 BuzzAgent. All rights reserved. This privacy policy is effective as of January 2025.
          </p>
        </div>
      </footer>
    </div>
  )
}
