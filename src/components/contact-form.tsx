import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  ArrowRight, 
  Contact, 
  Facebook, 
  Hash, 
  Instagram, 
  Map, 
  Phone, 
  Twitter,
  Loader2 
} from 'lucide-react';
import { useState } from 'react';

// Validation schema using Zod
const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .regex(/^$|^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  subject: z.enum(['general', 'order', 'catering', 'feedback', 'other', ''], {
    required_error: 'Please select a subject'
  }),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-8 font-heading dark:text-white">
              Contact Information
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-6">
                  <Map className="text-primary-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2 font-heading dark:text-white">
                    Visit Our Bakery
                  </h3>
                  <p className="text-primary-600 dark:text-gray-300">
                    123 Cookie Lane<br />
                    Bakery Town, BT 12345
                  </p>
                  <a 
                    href="#map" 
                    className="mt-3 text-secondary hover:text-primary-800 font-medium flex items-center dark:text-gray-300"
                  >
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-6">
                  <Phone className="text-primary-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2 font-heading dark:text-white">
                    Call Us
                  </h3>
                  <p className="text-primary-600 dark:text-gray-300">(123) 456-7890</p>
                  <p className="text-sm text-primary-500 mt-1 dark:text-gray-300">
                    Monday-Friday: 8am - 6pm
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-6">
                  <Contact className="text-primary-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2 font-heading dark:text-white">
                    Email Us
                  </h3>
                  <p className="text-primary-600 dark:text-gray-300">info@cookiedelights.com</p>
                  <p className="text-sm text-primary-500 mt-1 dark:text-gray-300">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-6">
                  <Hash className="text-primary-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2 font-heading dark:text-white">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4 mt-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 hover:bg-secondary hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 hover:bg-secondary hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 hover:bg-secondary hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-card bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-6 font-heading dark:text-white">
              Send Us a Message
            </h2>
            <p className="text-primary-600 mb-8 dark:text-gray-300">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-primary-700 mb-2 dark:text-white">
                    First Name *
                  </label>
                  <input
                    {...register('firstName')}
                    type="text"
                    id="firstName"
                    className={`form-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                      errors.firstName ? 'border-red-500' : 'border-primary-200'
                    }`}
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-primary-700 mb-2 dark:text-white">
                    Last Name *
                  </label>
                  <input
                    {...register('lastName')}
                    type="text"
                    id="lastName"
                    className={`form-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                      errors.lastName ? 'border-red-500' : 'border-primary-200'
                    }`}
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-primary-700 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`form-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                    errors.email ? 'border-red-500' : 'border-primary-200'
                  }`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-primary-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className={`form-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                    errors.phone ? 'border-red-500' : 'border-primary-200'
                  }`}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-primary-700 mb-2">
                  Subject *
                </label>
                <select
                  {...register('subject')}
                  id="subject"
                  className={`form-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                    errors.subject ? 'border-red-500' : 'border-primary-200'
                  }`}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Question</option>
                  <option value="catering">Catering Request</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-primary-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className={`form-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                    errors.message ? 'border-red-500' : 'border-primary-200'
                  }`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-primary-800 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;