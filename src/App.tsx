
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DestinationDetail from "./pages/DestinationDetail";
import DestinationsGrid from "./pages/DestinationsGrid";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import MultiDestinationPlanning from "./pages/MultiDestinationPlanning";
import DestinationPlanner from "./pages/DestinationPlanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsGrid />} />
          <Route path="/destination/:destinationId" element={<DestinationDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/plan-trip" element={<MultiDestinationPlanning />} />
          <Route path="/destination-planner" element={<DestinationPlanner />} />
          {/* Legacy route compatibility */}
          <Route path="/country/:countryId" element={<DestinationDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
