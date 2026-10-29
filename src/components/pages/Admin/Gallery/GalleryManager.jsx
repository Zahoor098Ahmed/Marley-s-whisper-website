import { useState, useEffect } from 'react';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Textarea } from '../../../ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { Badge } from '../../../ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import { getGalleryImages, saveGalleryImage, deleteGalleryImage } from '../../../../lib/adminStore';
import { galleryCategories, galleryText } from './galleryData';

export function GalleryManager() {
  const [images, setImages] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingImage, setEditingImage] = useState(null);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setImages(getGalleryImages());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const image = {
      id: editingImage?.id || Date.now().toString(),
      title: String(formData.get('title') || ''),
      description: String(formData.get('description') || ''),
      imageUrl: String(formData.get('imageUrl') || ''),
      category: String(formData.get('category') || ''),
      date: editingImage?.date || new Date().toISOString().split('T')[0],
      published: editingImage?.published || false,
    };

    saveGalleryImage(image);
    loadImages();
    setIsDialogOpen(false);
    setEditingImage(null);
    toast.success(editingImage ? 'Image updated successfully' : 'Image added successfully');
  };

  const handleEdit = (image) => {
    setEditingImage(image);
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this image?')) {
      deleteGalleryImage(id);
      loadImages();
      toast.success('Image deleted successfully');
    }
  };

  const togglePublished = (image) => {
    saveGalleryImage({ ...image, published: !image.published });
    loadImages();
    toast.success(image.published ? 'Image unpublished' : 'Image published');
  };

  const resetDialog = () => {
    setEditingImage(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-foreground">{galleryText.heading}</h2>
          <p className="text-muted-foreground">{galleryText.subheading}</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetDialog();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              {galleryText.newButton}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingImage ? galleryText.editTitle : galleryText.createTitle}</DialogTitle>
              <DialogDescription>
                {editingImage ? galleryText.editDescription : galleryText.createDescription}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    defaultValue={editingImage?.title}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={2}
                    defaultValue={editingImage?.description}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    placeholder="https://..."
                    defaultValue={editingImage?.imageUrl}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Use Unsplash or other image service URLs
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" defaultValue={editingImage?.category || galleryCategories[0]}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {galleryCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={resetDialog}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingImage ? 'Update' : 'Add'} Image
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.length === 0 ? (
          <Card className="md:col-span-2 lg:col-span-3">
            <CardContent className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">No gallery images yet. Add your first image!</p>
            </CardContent>
          </Card>
        ) : (
          images.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              <div className="aspect-video relative bg-muted">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <Badge 
                  variant={image.published ? 'default' : 'secondary'}
                  className="absolute top-2 right-2"
                >
                  {image.published ? 'Published' : 'Draft'}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{image.title}</CardTitle>
                <CardDescription>{image.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>{image.category}</span>
                  <span>•</span>
                  <span>{new Date(image.date).toLocaleDateString()}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => togglePublished(image)}
                >
                  {image.published ? (
                    <>
                      <EyeOff className="w-4 h-4 mr-2" />
                      Unpublish
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 mr-2" />
                      Publish
                    </>
                  )}
                </Button>
                <div className="flex gap-2 w-full">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEdit(image)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" className="flex-1" onClick={() => handleDelete(image.id)}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
