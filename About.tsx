import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Us</h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                We are committed to providing innovative and effective digital solutions that help businesses grow. 
                Our mission is to help brands reach their full potential by enhancing their online presence and 
                delivering results that matter. From digital marketing to web development, we offer tailored 
                strategies and services to ensure your success in the ever-changing digital landscape.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                We envision a world where every business, big or small, can harness the power of the internet 
                to thrive. Our goal is to be the trusted partner that businesses turn to when they want to build 
                a strong online presence, connect with their audience, and achieve sustainable growth. We believe 
                in innovation, collaboration, and the power of creative digital solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;