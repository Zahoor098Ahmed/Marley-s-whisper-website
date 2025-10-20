import { useEffect, useState } from 'react';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Textarea } from '../../../ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { Badge } from '../../../ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { getTestimonials, saveTestimonial, deleteTestimonial } from '../../../../lib/adminStore';
import { testimonialText } from './TestimonialData';

export function TestimonialManager() {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({
    name: '',
    role: '',
    location: '',
    rating: '5',
    quote: '',
    published: true,
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = () => {
    setTestimonials(getTestimonials());
  };

  const resetForm = () => {
    setForm({ name: '', role: '', location: '', rating: '5', quote: '', published: true });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = editingId ?? Date.now().toString();
    const payload = {
      id,
      name: form.name.trim(),
      quote: form.quote.trim(),
      published: form.published,
      role: form.role.trim(),
      location: form.location.trim(),
      rating: Number(form.rating),
    };
    if (!payload.name || !payload.quote) {
      toast.error('Name and quote are required');
      return;
    }
    saveTestimonial(payload);
    toast.success(editingId ? 'Testimonial updated' : 'Testimonial added');
    resetForm();
    loadTestimonials();
  };

  const handleEdit = (t) => {
    setEditingId(t.id);
    setForm({
      name: t.name || '',
      role: t.role || '',
      location: t.location || '',
      rating: String(t.rating ?? 5),
      quote: t.quote || '',
      published: !!t.published,
    });
  };

  const handleDelete = (id) => {
    deleteTestimonial(id);
    toast.success('Testimonial deleted');
    loadTestimonials();
  };

  const togglePublish = (t) => {
    saveTestimonial({ ...t, published: !t.published });
    loadTestimonials();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <CardTitle>{editingId ? testimonialText.editTitle : testimonialText.createTitle}</CardTitle>
<CardDescription>{editingId ? testimonialText.editDescription : testimonialText.createDescription}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Michelle" />
            </div>

            <div className="space-y-2">
              <Label>Role</Label>
              <Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="e.g. Parent / Teacher" />
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Hampshire" />
            </div>

            <div className="space-y-2">
              <Label>Rating</Label>
              <Select value={form.rating} onValueChange={(v) => setForm({ ...form, rating: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5].map((r) => (
                    <SelectItem key={r} value={String(r)}>{r} stars</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="lg:col-span-2 space-y-2">
              <Label>Feedback</Label>
              <Textarea rows={4} value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} placeholder="Write their feedback here..." />
            </div>

            <div className="flex items-center gap-3 lg:col-span-2">
              <Button type="submit" className="gap-2">
                <Plus className="w-4 h-4" />
                {editingId ? 'Save Changes' : 'Add Testimonial'}
              </Button>
              {editingId && (
                <Button type="button" variant="ghost" onClick={resetForm}>Cancel</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <Card key={t.id} className="h-full">
            <CardHeader className="space-y-2">
              <CardTitle className="text-base">{t.name || 'Anonymous'}</CardTitle>
              <CardDescription>
                {[t.role, t.location].filter(Boolean).join(' • ')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground italic">"{t.quote}"</p>
              {(t.rating ?? 0) > 0 && (
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-secondary">★</span>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Badge variant={t.published ? 'default' : 'secondary'}>
                  {t.published ? 'Published' : 'Hidden'}
                </Badge>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap sm:justify-end">
                <Button size="sm" variant="ghost" onClick={() => togglePublish(t)} className="gap-1 min-w-[140px] justify-center">
                  {t.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {t.published ? 'Unpublish' : 'Publish'}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleEdit(t)} className="gap-1 min-w-[140px] justify-center">
                  <Edit className="w-4 h-4" /> Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(t.id)} className="gap-1 min-w-[140px] justify-center">
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}