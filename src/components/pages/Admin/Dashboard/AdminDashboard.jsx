// Admin Dashboard (JSX version)
// Converted from TSX: removed TypeScript types
import { Button } from '../../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../ui/card';
import { LogOut, Image, MessageSquare, List, Info } from 'lucide-react';
import { GalleryManager } from '../Gallery/GalleryManager';
import { DashboardStats } from './DashboardStats';
import { TestimonialManager } from '../Testimonials/TestimonialManager';
// import { ServicesManager } from '../Services/ServicesManager';
// import { AboutManager } from '../About/AboutManager';
import { dashboardText } from './DashboardStatsData';

export function AdminDashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-6">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-foreground">{dashboardText.title}</h1>
              <p className="text-muted-foreground">{dashboardText.subtitle}</p>
            </div>
            <Button variant="outline" onClick={onLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <DashboardStats />

        <Tabs defaultValue="gallery" className="space-y-6">
          <TabsList className="grid w-fit mx-auto grid-cols-2 gap-2">
            <TabsTrigger value="gallery" className="gap-2 justify-center">
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">Gallery</span>
              <span className="sm:hidden">Images</span>
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="gap-2 justify-center">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Testimonials</span>
              <span className="sm:hidden">Quotes</span>
            </TabsTrigger>
            {/* <TabsTrigger value="services" className="gap-2">
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Services</span>
              <span className="sm:hidden">Services</span>
            </TabsTrigger> */}
            {/* <TabsTrigger value="about" className="gap-2">
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
              <span className="sm:hidden">About</span>
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="gallery">
            <GalleryManager />
          </TabsContent>

          <TabsContent value="testimonials">
            <TestimonialManager />
          </TabsContent>

          {/* <TabsContent value="services">
            <ServicesManager />
          </TabsContent> */}

          {/* <TabsContent value="about">
            <AboutManager />
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  );
}
