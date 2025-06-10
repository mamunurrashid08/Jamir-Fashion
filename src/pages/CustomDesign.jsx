import React, { useState } from 'react';
import { Upload, Palette, Ruler, Send, CheckCircle, MessageCircle, Mail, Sparkles, Heart, Star, Info } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const CustomDesign = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designType: '',
    color: '',
    size: '',
    measurements: {
      bust: '',
      waist: '',
      hips: '',
      length: '',
      sleeves: ''
    },
    specialRequests: '',
    budget: '',
    timeline: '',
    occasion: '',
    fabric: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('measurements.')) {
      const measurementKey = name.split('.')[1];
      setFormData({
        ...formData,
        measurements: {
          ...formData.measurements,
          [measurementKey]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const generateCustomOrderDetails = () => {
    const orderDetails = `
Custom Abaya Design Request

Customer Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Design Specifications:
Design Type: ${formData.designType}
Color: ${formData.color}
Size: ${formData.size}
Fabric: ${formData.fabric}
Occasion: ${formData.occasion}

Measurements:
Bust: ${formData.measurements.bust}"
Waist: ${formData.measurements.waist}"
Hips: ${formData.measurements.hips}"
Length: ${formData.measurements.length}"
Sleeve Length: ${formData.measurements.sleeves}"

Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Special Requests:
${formData.specialRequests}

${uploadedFiles.length > 0 ? `Reference Files: ${uploadedFiles.map(f => f.name).join(', ')}` : 'No reference files uploaded'}
    `.trim();

    return orderDetails;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.designType) {
      alert('Please fill in all required fields');
      return;
    }

    const orderDetails = generateCustomOrderDetails();
    const whatsappMessage = `Hello! I would like to request a custom abaya design:\n\n${orderDetails}`;
    const whatsappUrl = `https://wa.me/971581729990?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    // Reset form
    setFormData({
      name: '', email: '', phone: '', designType: '', color: '', size: '',
      measurements: { bust: '', waist: '', hips: '', length: '', sleeves: '' },
      specialRequests: '', budget: '', timeline: '', occasion: '', fabric: ''
    });
    setUploadedFiles([]);
    setCurrentStep(1);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.designType) {
      alert('Please fill in all required fields');
      return;
    }

    const orderDetails = generateCustomOrderDetails();
    const subject = 'Custom Abaya Design Request - Jamir Fashion';
    const body = `Dear Jamir Fashion Team,\n\nI would like to request a custom abaya design with the following specifications:\n\n${orderDetails}\n\nPlease contact me to discuss the design details and pricing.\n\nThank you!`;
    
    const mailtoUrl = `mailto:mamun1k999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    // Reset form
    setFormData({
      name: '', email: '', phone: '', designType: '', color: '', size: '',
      measurements: { bust: '', waist: '', hips: '', length: '', sleeves: '' },
      specialRequests: '', budget: '', timeline: '', occasion: '', fabric: ''
    });
    setUploadedFiles([]);
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-purple-900 via-pink-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full">
                <Sparkles className="w-12 h-12 text-pink-200" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              Custom Abaya Design
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Transform your vision into reality with our bespoke abaya design service. 
              From traditional elegance to contemporary sophistication, we craft each piece 
              with meticulous attention to detail and unparalleled artistry.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <div className="flex items-center text-pink-200">
                <Heart className="w-5 h-5 mr-2" />
                <span>Handcrafted with Love</span>
              </div>
              <div className="flex items-center text-purple-200">
                <Star className="w-5 h-5 mr-2" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Artisan Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Palette, title: "Design Consultation", desc: "Share your vision with our expert designers", color: "bg-pink-100 text-pink-600" },
              { icon: Ruler, title: "Precise Measurements", desc: "Detailed measurements for perfect fit", color: "bg-purple-100 text-purple-600" },
              { icon: Sparkles, title: "Artisan Creation", desc: "Skilled craftspeople bring your design to life", color: "bg-indigo-100 text-indigo-600" },
              { icon: CheckCircle, title: "Quality Delivery", desc: "Receive your masterpiece in 2-3 weeks", color: "bg-green-100 text-green-600" }
            ].map((step, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Step Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-purple-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {currentStep === 1 && "Personal Information"}
                {currentStep === 2 && "Design Preferences"}
                {currentStep === 3 && "Measurements & Details"}
                {currentStep === 4 && "Final Details & Submit"}
              </h3>
            </div>
          </div>

          <form className="space-y-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Design Preferences */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Design Type *
                    </label>
                    <select
                      name="designType"
                      value={formData.designType}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="">Choose your style</option>
                      <option value="traditional">Traditional Abaya</option>
                      <option value="modern">Modern Abaya</option>
                      <option value="embroidered">Embroidered Abaya</option>
                      <option value="kimono">Kimono Style</option>
                      <option value="butterfly">Butterfly Abaya</option>
                      <option value="kaftan">Kaftan Style</option>
                      <option value="custom">Completely Custom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Color *
                    </label>
                    <select
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="">Select color</option>
                      <option value="black">Classic Black</option>
                      <option value="navy">Navy Blue</option>
                      <option value="brown">Rich Brown</option>
                      <option value="grey">Elegant Grey</option>
                      <option value="beige">Soft Beige</option>
                      <option value="burgundy">Deep Burgundy</option>
                      <option value="emerald">Emerald Green</option>
                      <option value="dusty-rose">Dusty Rose</option>
                      <option value="custom">Custom Color</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Fabric Preference
                    </label>
                    <select
                      name="fabric"
                      value={formData.fabric}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="">Select fabric</option>
                      <option value="crepe">Premium Crepe</option>
                      <option value="chiffon">Flowing Chiffon</option>
                      <option value="silk">Luxurious Silk</option>
                      <option value="cotton">Breathable Cotton</option>
                      <option value="linen">Natural Linen</option>
                      <option value="jersey">Comfortable Jersey</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Occasion
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="">Select occasion</option>
                      <option value="daily">Daily Wear</option>
                      <option value="formal">Formal Events</option>
                      <option value="wedding">Wedding/Celebration</option>
                      <option value="religious">Religious Occasions</option>
                      <option value="work">Professional/Work</option>
                      <option value="special">Special Events</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Measurements */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Size Category *
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  >
                    <option value="">Select size</option>
                    <option value="XS">XS (Extra Small)</option>
                    <option value="S">S (Small)</option>
                    <option value="M">M (Medium)</option>
                    <option value="L">L (Large)</option>
                    <option value="XL">XL (Extra Large)</option>
                    <option value="XXL">XXL (Double Extra Large)</option>
                    <option value="custom">Custom Measurements</option>
                  </select>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Custom Measurements (inches)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { key: 'bust', label: 'Bust', placeholder: 'e.g., 36' },
                      { key: 'waist', label: 'Waist', placeholder: 'e.g., 28' },
                      { key: 'hips', label: 'Hips', placeholder: 'e.g., 38' },
                      { key: 'length', label: 'Total Length', placeholder: 'e.g., 58' },
                      { key: 'sleeves', label: 'Sleeve Length', placeholder: 'e.g., 24' }
                    ].map((measurement) => (
                      <div key={measurement.key}>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          {measurement.label}
                        </label>
                        <input
                          type="text"
                          name={`measurements.${measurement.key}`}
                          value={formData.measurements[measurement.key]}
                          onChange={handleInputChange}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                          placeholder={measurement.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Final Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                {/* File Upload */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Design References</h4>
                  <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
                    <Upload className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-700 mb-2 font-medium">Upload inspiration images or design sketches</p>
                    <p className="text-sm text-gray-500 mb-6">PNG, JPG, PDF up to 10MB each</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button type="button" variant="outline" className="cursor-pointer border-purple-300 text-purple-600 hover:bg-purple-100">
                        Choose Files
                      </Button>
                    </label>
                    {uploadedFiles.length > 0 && (
                      <div className="mt-6 p-4 bg-white rounded-lg">
                        <p className="text-sm font-medium text-gray-700 mb-2">Uploaded files:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {uploadedFiles.map((file, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {file.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="150-250">$150 - $250</option>
                      <option value="250-400">$250 - $400</option>
                      <option value="400-600">$400 - $600</option>
                      <option value="600-800">$600 - $800</option>
                      <option value="800+">$800+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="2-3 weeks">2-3 weeks (Standard)</option>
                      <option value="3-4 weeks">3-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Special Requests & Design Notes
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    placeholder="Describe any specific design elements, embellishments, or special requirements you have in mind..."
                  />
                </div>

                {/* Payment Note */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <Info className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Payment & Process Information</h4>
                      <p className="text-blue-800 leading-relaxed">
                        Payment completion instructions will be provided via your selected contact method (WhatsApp or Email). 
                        Our design team will reach out within 24 hours to discuss your requirements, provide a detailed quote, 
                        and guide you through our secure payment process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8">
              <Button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="px-8 py-3"
              >
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700"
                >
                  Next Step
                </Button>
              ) : (
                <div className="space-x-4">
                  <Button 
                    onClick={handleWhatsAppSubmit}
                    className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Submit via WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={handleEmailSubmit}
                    variant="outline"
                    className="px-8 py-3 border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Submit via Email
                  </Button>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Handcrafted Excellence",
              description: "Each abaya is meticulously crafted by skilled artisans with years of experience in traditional and modern techniques."
            },
            {
              icon: Sparkles,
              title: "Premium Materials",
              description: "We source only the finest fabrics and materials to ensure your custom abaya feels as luxurious as it looks."
            },
            {
              icon: Star,
              title: "Perfect Fit Guarantee",
              description: "Our detailed measurement process and expert tailoring ensure a perfect fit that flatters your unique silhouette."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;

