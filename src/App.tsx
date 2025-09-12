import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TalentDiscovery from "./pages/TalentDiscovery";
import DashboardAthlete from "./pages/DashboardAthlete";
import DashboardCoach from "./pages/DashboardCoach";
import PerformanceTracking from "./pages/PerformanceTracking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/talent-discovery" element={<TalentDiscovery />} />
          <Route path="/dashboard-athlete" element={<DashboardAthlete />} />
          <Route path="/dashboard-coach" element={<DashboardCoach />} />
          <Route path="/performance" element={<PerformanceTracking />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
