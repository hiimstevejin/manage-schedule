import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </svg>
);

export default async function HomePage() {
  const { userId } = await auth();
  if (userId != null) redirect("/events");

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 text-center md:px-6">
        
        <div className="flex flex-col items-center gap-4">
          {/* Calendar Icon Visual */}
          <div className="rounded-full border border-zinc-800 bg-zinc-900 p-4">
            <CalendarIcon className="h-12 w-12 text-zinc-400" />
          </div>

          {/* Headline & Tagline */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Organize Your World
            </h1>
            <p className="mx-auto max-w-[600px] text-zinc-400 md:text-xl/relaxed">
              From chaotic schedules to seamless plans. Your events, simplified. Sign up to get started.
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex gap-4">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="bg-zinc-800 text-white hover:bg-zinc-700"
          >
            <SignInButton />
          </Button>
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-white text-black hover:bg-zinc-200"
          >
            <SignUpButton/>
          </Button>
        </div>

      </div>
    </main>
  );
}