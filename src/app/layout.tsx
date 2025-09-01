import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { ConfigProvider } from 'antd';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
});

export const metadata: Metadata = {
  title: 'Q-Consent - The Quantum way to Dynamic Compliance',
  description: 'Revolutionary quantum-powered compliance management platform. Coming soon.',
  keywords: 'compliance, quantum, AI, regulatory, technology',
  authors: [{ name: 'Q-Consent Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${orbitron.variable}`}>
      <body className="antialiased">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#00ffff',
              colorBgContainer: 'rgba(0, 20, 40, 0.3)',
              colorText: '#ffffff',
              borderRadius: 12,
              fontFamily: 'Inter, sans-serif',
            },
            components: {
              Button: {
                primaryShadow: '0 4px 15px rgba(0, 255, 255, 0.3)',
              },
              Card: {
                colorBgContainer: 'rgba(0, 20, 40, 0.3)',
                colorBorderSecondary: 'rgba(0, 255, 255, 0.2)',
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}