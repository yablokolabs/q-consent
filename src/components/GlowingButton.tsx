'use client';

import { Button } from 'antd';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function GlowingButton({ children, onClick, className = '' }: GlowingButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Button
        type="primary"
        size="large"
        icon={<Bell className="w-5 h-5" />}
        onClick={onClick}
        className="quantum-button h-14 px-8 text-lg font-semibold border-0 rounded-xl relative overflow-hidden group"
        style={{
          background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
          color: '#000',
          fontFamily: 'Orbitron, monospace'
        }}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </Button>
    </motion.div>
  );
}