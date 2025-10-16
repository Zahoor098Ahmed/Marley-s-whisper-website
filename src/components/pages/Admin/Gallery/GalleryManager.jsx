import { useState, useEffect } from 'react';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Textarea } from '../../../ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { Badge } from '../../../ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';
import { getGalleryImages, saveGalleryImage, deleteGalleryImage } from '../../../../lib/adminStore';
import { galleryCategories, galleryText } from './galleryData';

export function GalleryManager() {
  const [images, setImages] = useState([]);
  const [editingImage, setEditingImage] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [imgForm, setImgForm] = useState({
    id: null,
    title: '',
    description: '',
    category: galleryCategories[0],
    published: true,
  });

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setImages(getGalleryImages());
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const id = imgForm.id ?? Date.now().toString();

    const readFileAsDataURL = (f) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = reject;
      reader.readAsDataURL(f);
    });

    let imageSrc = '';
    if (imgFile && imgFile.size > 0) {
      try {
        imageSrc = await readFileAsDataURL(imgFile);
      } catch {
        toast.error('Image file read failed');
        return;
      }
    }

    if (!imgForm.title.trim()) { toast.error('Heading required'); return; }
    if (!imgForm.description.trim()) { toast.error('Subheading required'); return; }
    if (!imageSrc) {
      // Edit mode me agar naya file nahi diya, existing image rakhen
      if (editingImage?.imageUrl) {
        imageSrc = editingImage.imageUrl;
      } else {
        toast.error('Image file required');
        return;
      }
    }

    const image = {
      id,
      title: imgForm.title.trim(),
      description: imgForm.description.trim(),
      imageUrl: imageSrc,
      category: imgForm.category,
      date: editingImage?.date || new Date().toISOString().split('T')[0],
      published: imgForm.published,
    };

    saveGalleryImage(image);
    toast.success(imgForm.id ? 'Image updated successfully' : 'Image added successfully');
    resetImgForm();
    loadImages();
  };

  const handleEdit = (image) => {
    setEditingImage(image);
    setImgForm({
      id: image.id,
      title: image.title || '',
      description: image.description || '',
      imageUrl: image.imageUrl || '',
      category: image.category || galleryCategories[0],
      published: !!image.published,
    });
    setImgFile(null);
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

  const resetImgForm = () => {
    setEditingImage(null);
    setImgForm({ id: null, title: '', description: '', imageUrl: '', category: galleryCategories[0], published: true });
    setImgFile(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-foreground">{galleryText.heading}</h2>
        <p className="text-muted-foreground">{galleryText.subheading}</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <CardTitle>{imgForm.id ? galleryText.editTitle : galleryText.createTitle}</CardTitle>
              <CardDescription>{imgForm.id ? galleryText.editDescription : galleryText.createDescription}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitImage} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Heading</Label>
              <Input value={imgForm.title} onChange={(e) => setImgForm({ ...imgForm, title: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label>Subheading</Label>
              <Textarea rows={2} value={imgForm.description} onChange={(e) => setImgForm({ ...imgForm, description: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Image File</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const f = e.target.files?.[0] || null;
                  setImgFile(f);
                }}
              />
              <p className="text-xs text-muted-foreground">File upload required</p>
            </div>
            <div className="lg:col-span-2">
              <div className="text-sm text-muted-foreground">
                {imgFile
                  ? `Selected file: ${imgFile.name}`
                  : editingImage?.imageUrl
                    ? 'Existing image will be kept unless you select a new file.'
                    : 'No image selected'}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={imgForm.category} onValueChange={(v) => setImgForm({ ...imgForm, category: v })}>
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
            <div className="flex items-center gap-3 lg:col-span-2">
              <Button type="submit" className="gap-2">
                <Plus className="w-4 h-4" />
                {imgForm.id ? 'Save Changes' : 'Add Image'}
              </Button>
              {imgForm.id && (
                <Button type="button" variant="ghost" onClick={resetImgForm}>Cancel</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

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
