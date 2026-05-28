import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import { AuroraBackground } from "@/components/glass/AuroraBackground";
import { GlassNav } from "@/components/glass/GlassNav";
import { Footer } from "@/components/glass/Footer";
import { SmoothScroll } from "@/components/glass/SmoothScroll";
import { ScrollProgress } from "@/components/glass/ScrollProgress";
import { CustomCursor } from "@/components/glass/CustomCursor";
import { PageLoader } from "@/components/glass/PageLoader";
import { BackToTop } from "@/components/glass/BackToTop";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="glass-elevated rounded-3xl p-10 max-w-md text-center">
        <div className="text-display text-7xl text-gradient">404</div>
        <h2 className="mt-4 text-xl font-medium">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex glass-subtle rounded-full px-5 py-2.5 text-sm hover:bg-white/60 transition-colors">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="glass-elevated rounded-3xl p-10 max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="glass-subtle rounded-full px-5 py-2.5 text-sm hover:bg-white/60 transition-colors">Try again</button>
          <a href="/" className="glass-subtle rounded-full px-5 py-2.5 text-sm hover:bg-white/60 transition-colors">Go home</a>
        </div>
      </div>
    </div>
  );
}

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function AnimatedOutlet() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

function Chrome() {
  const { t } = useLang();
  return <BackToTop label={t.footer.back} />;
}

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <PageLoader />
        <SmoothScroll />
        <ScrollProgress />
        <CustomCursor />
        <AuroraBackground />
        <GlassNav />
        <div className="relative">
          <AnimatedOutlet />
          <Footer />
        </div>
        <Chrome />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
