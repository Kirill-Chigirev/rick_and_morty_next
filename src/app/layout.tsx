import { EpisodesGate } from '@/app/EpisodesGate';
import { MainProvider } from '@/app/MainProvider';
import { Container } from '@/components/ui';
import Header from '@/components/ui/Header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans, EB_Garamond } from 'next/font/google';
import '@/app/globals.css';
import { cn } from '@/lib/utils';

const ebGaramondHeading = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-heading'
});

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Rick and Morty App',
  description: 'Education project'
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn('h-full overflow-y-scroll', 'antialiased', geistSans.variable, geistMono.variable, 'font-sans', notoSans.variable, ebGaramondHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <MainProvider>
          <Header />
          <main>
            <Container>
              {children}
            </Container>
          </main>
        </MainProvider>
      </body>
    </html>
  );
}
