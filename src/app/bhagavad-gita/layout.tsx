import BhagavadGitaSidebar from '@/components/BhagavadGitaSidebar';

export default function BhagavadGitaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <BhagavadGitaSidebar />
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
