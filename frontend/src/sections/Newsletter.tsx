import { motion } from "framer-motion";
import { useState } from "react";
import { validateEmail, validateRequired } from "@/utils/validation";
import { useToast } from "@/components/ui/Toast";

interface NewsletterFormData {
  email: string;
  name: string;
}

export function Newsletter() {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: "",
    name: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast, ToastComponent } = useToast();

  const validateForm = (): boolean => {
    const newErrors = {
      name: validateRequired(formData.name, "Name"),
      email: validateEmail(formData.email)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      showToast("Successfully subscribed to our newsletter!", "success");
      setFormData({ email: "", name: "" });
    } catch (error) {
      showToast("Failed to subscribe. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2c5282]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Stay Updated with Trade Insights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/90 mb-8"
          >
            Subscribe to our newsletter for the latest trade news, market updates, and exclusive insights.
          </motion.p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className={`w-full px-6 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border-2 focus:outline-none focus:border-white transition-colors ${
                  errors.name ? 'border-red-400' : 'border-transparent'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-200 text-left">{errors.name}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address *"
                className={`w-full px-6 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border-2 focus:outline-none focus:border-white transition-colors ${
                  errors.email ? 'border-red-400' : 'border-transparent'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-200 text-left">{errors.email}</p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`w-full md:w-auto px-8 py-3 bg-white text-[#1a365d] rounded-lg font-semibold hover:bg-opacity-90 transition-all ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </motion.button>
          </form>
        </motion.div>
      </div>
      {ToastComponent}
    </section>
  );
} 