
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    setFormStep(prevStep => prevStep + 1);
  };
  
  const prevStep = () => {
    setFormStep(prevStep => prevStep - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast("Your message has been sent", {
        description: "We'll get back to you within 24 hours."
      });
      setIsSubmitting(false);
      setFormStep(3); // Success step
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setFormStep(1);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-widest mb-2 reveal">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 reveal reveal-delay-1">
            Contact Us
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12 reveal reveal-delay-2">
            We'd love to hear about your project. Contact us to schedule a consultation or request more information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 reveal">
            <div className="mb-10">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-accent/20 rounded-full">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Visit Us</h4>
                    <p className="text-white/70">123 Design Street, Creative District<br />Bangalore, Karnataka 560001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-accent/20 rounded-full">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-white/70">info@antarkala.com<br />design@antarkala.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-accent/20 rounded-full">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-white/70">+91 98765 43210<br />+91 98765 43211</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6">Office Hours</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div className="bg-white text-primary rounded-xl p-8 shadow-lg">
              {formStep === 1 && (
                <div>
                  <h3 className="text-2xl font-playfair font-semibold mb-6">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button
                        onClick={nextStep}
                        disabled={!formData.name || !formData.email}
                        className="w-full bg-accent hover:bg-accent-light text-primary font-medium py-3 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step <ArrowRight size={16} className="inline ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {formStep === 2 && (
                <div>
                  <h3 className="text-2xl font-playfair font-semibold mb-6">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="service" className="block mb-2 font-medium">
                        Service Interested In <span className="text-accent">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="Residential Design">Residential Design</option>
                        <option value="Commercial Design">Commercial Design</option>
                        <option value="Custom Furniture">Custom Furniture</option>
                        <option value="Color Consultation">Color Consultation</option>
                        <option value="Space Planning">Space Planning</option>
                        <option value="Project Management">Project Management</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Tell Us About Your Project <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex space-x-4 pt-4">
                      <button
                        onClick={prevStep}
                        className="flex-1 bg-secondary hover:bg-secondary-dark text-primary font-medium py-3 rounded-lg transition-colors duration-300"
                      >
                        <ArrowLeft size={16} className="inline mr-2" /> Back
                      </button>
                      
                      <button
                        onClick={handleSubmit}
                        disabled={!formData.service || !formData.message || isSubmitting}
                        className="flex-1 bg-accent hover:bg-accent-light text-primary font-medium py-3 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit <Send size={16} className="inline ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {formStep === 3 && (
                <div className="text-center py-8">
                  <div className="text-accent mb-4">
                    <CheckCircle size={64} className="mx-auto" />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-8">
                    Your message has been sent successfully. We will get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
