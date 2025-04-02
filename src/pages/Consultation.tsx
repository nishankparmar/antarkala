
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Consultation request submitted:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-playfair font-bold mb-6 text-primary text-center">
            Schedule Your Consultation
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              placeholder="Your Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <Input 
              type="tel" 
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <Textarea 
              placeholder="Tell us about your project..." 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
            <Button type="submit" className="w-full">
              Request Consultation
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Consultation;
