"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMail = async () => {
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success('Mail sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error('Failed to send mail. Please try again.');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred while sending the mail.');
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-10">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">

        {/* Left Side: Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            title="Google Map"
            className="w-full h-full min-h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.1578675884449!2d74.83118895274464!3d12.89069043447487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a6113b4f783%3A0xc99aa71cc0581b6f!2s1-19-1353%2F1%2C%20Panchalingeshwara%20Temple%20Rd%2C%20Ladyhill%2C%20Mangaluru%2C%20Karnataka%20575003!5e1!3m2!1sen!2sin!4v1743413761263!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">Contact Us</h2>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button className="w-full" onClick={handleSendMail}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
