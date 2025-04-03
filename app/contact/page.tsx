"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ToastContainer, toast } from 'react-toastify';

function Contact() {

  const handleSendMail = () => {
    // toast.success('Mail sent successfully!', {
    //   position: "top-right",
    //   autoClose: 3000, // Closes toast after 3 seconds
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   theme: "light",
    // });
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
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
              required
            />
            <Textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
              rows={4}
              required
            />
            <Button type="button" className="w-full cursor-pointer" onClick={handleSendMail}>
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* ToastContainer should be outside the form */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
