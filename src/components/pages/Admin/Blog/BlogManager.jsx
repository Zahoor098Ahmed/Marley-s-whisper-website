import { useState, useEffect } from 'react';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Textarea } from '../../../ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { Switch } from '../../../ui/switch';
import { Badge } from '../../../ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import { getBlogPosts, saveBlogPost, deleteBlogPost } from '../../../../lib/adminStore';
import { blogCategories, blogText } from './blogData';

export function BlogManager() {
  const [posts, setPosts] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    setPosts(getBlogPosts());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const post = {
      id: editingPost?.id || Date.now().toString(),
      title: String(formData.get('title') || ''),
      excerpt: String(formData.get('excerpt') || ''),
      content: String(formData.get('content') || ''),
      category: String(formData.get('category') || ''),
      author: String(formData.get('author') || ''),
      imageUrl: String(formData.get('imageUrl') || ''),
      date: editingPost?.date || new Date().toISOString().split('T')[0],
      published: editingPost?.published || false,
    };

    saveBlogPost(post);
    loadPosts();
    setIsDialogOpen(false);
    setEditingPost(null);
    toast.success(editingPost ? 'Post updated successfully' : 'Post created successfully');
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this post?')) {
      deleteBlogPost(id);
      loadPosts();
      toast.success('Post deleted successfully');
    }
  };

  const togglePublished = (post) => {
    saveBlogPost({ ...post, published: !post.published });
    loadPosts();
    toast.success(post.published ? 'Post unpublished' : 'Post published');
  };

  const resetDialog = () => {
    setEditingPost(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-foreground">{blogText.heading}</h2>
          <p className="text-muted-foreground">{blogText.subheading}</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetDialog();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              {blogText.newButton}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingPost ? blogText.editTitle : blogText.createTitle}</DialogTitle>
              <DialogDescription>
                {editingPost ? blogText.editDescription : blogText.createDescription}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    defaultValue={editingPost?.title}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    rows={2}
                    defaultValue={editingPost?.excerpt}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    name="content"
                    rows={6}
                    defaultValue={editingPost?.content}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select name="category" defaultValue={editingPost?.category || blogCategories[0]}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {blogCategories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      name="author"
                      defaultValue={editingPost?.author}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    placeholder="https://..."
                    defaultValue={editingPost?.imageUrl}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Use Unsplash or other image service URLs
                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={resetDialog}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingPost ? 'Update' : 'Create'} Post
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {posts.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Create your first post!</p>
            </CardContent>
          </Card>
        ) : (
          posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle>{post.title}</CardTitle>
                      <Badge variant={post.published ? 'default' : 'secondary'}>
                        {post.published ? 'Published' : 'Draft'}
                      </Badge>
                    </div>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => togglePublished(post)}
                >
                  {post.published ? (
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
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)}>
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
