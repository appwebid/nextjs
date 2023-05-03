import '@/styles/app.css';

export const metadata = {
  title: `Kesato x NextJS starter template`,
  description: `Generated by Next.js`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}