
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// Pages
import Index from "./pages/Index";
import VideoPage from "./pages/VideoPage";
import CategoryPage from "./pages/CategoryPage";
import TagPage from "./pages/TagPage";
import CategoriesPage from "./pages/CategoriesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1A1F2C" />
        <meta name="rating" content="adult" />
        <meta name="adult" content="true" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/tag/:slug" element={<TagPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
