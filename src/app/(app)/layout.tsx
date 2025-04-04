import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundPattern />

      <div className="flex flex-col gap-y-10 max-w-[1050px] min-h-screen mx-auto px-4">
        <AppHeader />
        {children}
      </div>
    </>
  );
}
