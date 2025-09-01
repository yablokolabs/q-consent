'use client';

import { Card, Typography } from 'antd';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import QuantumGrid from '@/components/QuantumGrid';
import QuantumWaves from '@/components/QuantumWaves';
import TypewriterText from '@/components/TypewriterText';
import GlowingButton from '@/components/GlowingButton';

const { Title, Text } = Typography;

export default function Home() {
  const handleNotifyMe = () => {
    // Placeholder action - could open a modal or redirect to signup
    console.log('Notify me clicked!');
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
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
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
                  lineHeight: 1.1
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
                  <span>Quantum Security</span>
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
    </main>
  );
}