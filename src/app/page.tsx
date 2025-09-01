'use client';

import { Card, Typography, Modal, Input, message } from 'antd';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import QuantumGrid from '../components/QuantumGrid';
import QuantumWaves from '../components/QuantumWaves';
import TypewriterText from '../components/TypewriterText';
import GlowingButton from '../components/GlowingButton';

const { Title, Text } = Typography;

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleNotifyMe = () => {
    setIsModalVisible(true);
  };

  const handleInputChange = (field: 'name' | 'email', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      message.error('Please enter your name');
      return;
    }
    
    if (!formData.email || !formData.email.includes('@')) {
      message.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mwpnqrow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: 'Requesting notification for Q-Consent launch'
        }),
      });

      if (response.ok) {
        message.success(`Thank you ${formData.name}! You'll be notified when Q-Consent launches.`);
        setIsModalVisible(false);
        setFormData({ name: '', email: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      message.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Effects */}
      <ParticleBackground />
      <QuantumGrid />
      <QuantumWaves />
      
      {/* Ambient Glow Effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }} />

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <Card
            className="glassmorphism quantum-border p-8 md:p-12 rounded-3xl shadow-2xl"
            style={{ 
              background: 'rgba(0, 20, 40, 0.3)',
              border: '1px solid rgba(0, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <Title
                level={1}
                className="quantum-glow mb-0"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontFamily: 'Orbitron, monospace',
                  fontWeight: 900,
                  color: '#00ffff',
                  textAlign: 'center',
                  lineHeight: 1.1,
                  animation: 'quantum-glow 2s ease-in-out infinite alternate'
                }}
              >
                Q-Consent
              </Title>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-8"
            >
              <Text
                className="text-xl md:text-2xl text-gray-300 font-light tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                The Quantum way to Dynamic Compliance
              </Text>
            </motion.div>

            {/* Coming Soon Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mb-12"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-4">
                <TypewriterText 
                  text="Coming Soon"
                  delay={1500}
                  speed={150}
                  className="font-orbitron"
                />
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 2.5, duration: 1 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto max-w-xs"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mb-10"
            >
              <Text className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Experience the future of compliance management with quantum-powered 
                intelligence. Revolutionary technology meets regulatory excellence.
              </Text>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <GlowingButton onClick={handleNotifyMe}>
                Notify Me
              </GlowingButton>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="mt-12 pt-8 border-t border-cyan-500/20"
            >
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
                  <span>Quantum Annealing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-700" />
                  <span>Real-time Compliance</span>
                </div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60 blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="fixed bottom-20 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 blur-sm"
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="fixed top-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full opacity-50 blur-sm"
      />

      {/* Footer */}
      <footer className="relative z-30 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-center"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6" />
            <p className="text-gray-400 text-sm font-light tracking-wide">
              © 2025 <a 
                href="https://yablokolabs.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:glow"
              >
                Yabloko Labs
              </a>. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Email Notification Modal */}
      <Modal
        title={
          <span style={{ 
            color: '#00ffff', 
            fontFamily: 'Orbitron, monospace',
            fontSize: '1.3rem',
            fontWeight: 'bold'
          }}>
            🚀 Get Notified - Q-Consent Launch
          </span>
        }
        open={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
        okText="Notify Me"
        cancelText="Cancel"
        confirmLoading={isLoading}
        width={480}
        okButtonProps={{
          style: {
            background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
            border: 'none',
            color: '#000',
            fontWeight: 'bold',
            height: '40px',
            fontSize: '16px'
          }
        }}
        cancelButtonProps={{
          style: {
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            color: '#00ffff',
            height: '40px'
          }
        }}
        style={{
          fontFamily: 'Inter, sans-serif'
        }}
        bodyStyle={{
          background: 'rgba(0, 20, 40, 0.95)',
          color: '#fff',
          padding: '32px 24px'
        }}
      >
        <div style={{ marginTop: '16px' }}>
          <p style={{ 
            color: '#a0a0a0', 
            marginBottom: '24px',
            fontSize: '15px',
            lineHeight: '1.5'
          }}>
            Be the first to experience quantum-powered compliance management. 
            We'll notify you as soon as Q-Consent launches!
          </p>
          
          {/* Name Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              color: '#00ffff', 
              fontSize: '14px', 
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Full Name *
            </label>
            <Input
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                color: '#fff',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '15px',
                height: '48px'
              }}
              className="quantum-input"
            />
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: '8px' }}>
            <label style={{ 
              display: 'block', 
              color: '#00ffff', 
              fontSize: '14px', 
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Email Address *
            </label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onPressEnter={handleSubmit}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                color: '#fff',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '15px',
                height: '48px'
              }}
              className="quantum-input"
            />
          </div>
          
          <p style={{ 
            color: '#666', 
            fontSize: '12px',
            fontStyle: 'italic',
            marginTop: '8px'
          }}>
            We respect your privacy. No spam, just launch notifications.
          </p>
        </div>
      </Modal>
    </main>
  );
}