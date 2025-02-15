import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaFacebook, FaYoutube, FaGlobe } from 'react-icons/fa';

const services = [
  { title: 'Instant Reel Maker', icon: '🎥', description: 'Create engaging reels for social media' },
  { title: 'Digital Marketing', icon: '📈', description: 'Boost your online presence with effective strategies' },
  { title: 'Meta Ads', icon: '📊', description: 'Targeted ads on Facebook & Instagram' },
  { title: 'PR', icon: '🤳', description: 'Public relations to build your brand reputation' },
  { title: 'SM Handling', icon: '📱', description: 'Manage your social media platforms' },
  { title: 'SEO', icon: '🔍', description: 'Improve your website ranking on search engines' },
  { title: 'Website Creation', icon: '🌐', description: 'Custom website design & development' },
  { title: 'Content Creation', icon: '🎨', description: 'Create compelling visuals & copy' },
  { title: 'Collabs', icon: '🤝', description: 'Collaborations with influencers & brands' },
  { title: 'Promotions', icon: '📣', description: 'Promote your brand to a wider audience' },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Showcasing our range of digital services</p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg p-6 bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;