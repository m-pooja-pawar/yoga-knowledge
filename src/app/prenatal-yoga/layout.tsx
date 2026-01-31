import PrenatalSidebar from '@/components/PrenatalSidebar';

export default function PrenatalYogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <PrenatalSidebar />
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
