// Admin Dashboard (JSX version)
// Converted from TSX: removed TypeScript types
import { Button } from '../../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../ui/card';
import { LogOut, FileText, Image, Mail } from 'lucide-react';
import { BlogManager } from '../Blog/BlogManager';
import { GalleryManager } from '../Gallery/GalleryManager';
import { ContactSubmissions } from '../Contact/ContactSubmissions';
import { DashboardStats } from './DashboardStats';

export function AdminDashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C4F4A]/5 via-background to-[#5EC4CD]/5">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-foreground">Marley's Whisper Admin</h1>
              <p className="text-muted-foreground">Content Management Dashboard</p>
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
        
        <Tabs defaultValue="blog" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
            <TabsTrigger value="blog" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Blog Posts</span>
              <span className="sm:hidden">Blog</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="gap-2">
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">Gallery</span>
              <span className="sm:hidden">Images</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="gap-2">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
              <span className="sm:hidden">Messages</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <BlogManager />
          </TabsContent>

          <TabsContent value="gallery">
            <GalleryManager />
          </TabsContent>

          <TabsContent value="contact">
            <ContactSubmissions />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
