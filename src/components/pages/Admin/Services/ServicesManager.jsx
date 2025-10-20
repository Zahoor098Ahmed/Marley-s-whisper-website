import { useEffect, useState } from 'react';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Textarea } from '../../../ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { Badge } from '../../../ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff, List } from 'lucide-react';
import { toast } from 'sonner';
import { getServices, saveService, deleteService, getOfferings, saveOffering, deleteOffering } from '../../../../lib/adminStore';
import { servicesText } from './ServicesData';

const serviceIcons = ['School', 'Home', 'Users'];
const offeringIcons = ['Calendar', 'BookOpen', 'Sparkles'];

export function ServicesManager() {
  const [services, setServices] = useState([]);
  const [offerings, setOfferings] = useState([]);

  const [svcForm, setSvcForm] = useState({
    id: null,
    title: '',
    subtitle: '',
    imageUrl: '',
    color: '',
    icon: 'School',
    featuresText: '',
    benefitsText: '',
    published: true,
  });

  const [offForm, setOffForm] = useState({
    id: null,
    title: '',
    description: '',
    icon: 'Calendar',
    published: true,
  });

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = () => {
    setServices(getServices());
    setOfferings(getOfferings());
  };

  const resetSvcForm = () => {
    setSvcForm({ id: null, title: '', subtitle: '', imageUrl: '', color: '', icon: 'School', featuresText: '', benefitsText: '', published: true });
  };

  const resetOffForm = () => {
    setOffForm({ id: null, title: '', description: '', icon: 'Calendar', published: true });
  };

  const submitService = (e) => {
    e.preventDefault();
    const id = svcForm.id ?? Date.now().toString();
    const features = svcForm.featuresText.split('\n').map(s => s.trim()).filter(Boolean);
    const benefits = svcForm.benefitsText.split('\n').map(s => s.trim()).filter(Boolean);
    const item = {
      id,
      title: svcForm.title.trim(),
      subtitle: svcForm.subtitle.trim(),
      imageUrl: svcForm.imageUrl.trim(),
      color: svcForm.color.trim(),
      icon: svcForm.icon,
      features,
      benefits,
      published: svcForm.published,
    };
    if (!item.title) { toast.error('Service title required'); return; }
    saveService(item);
    toast.success(svcForm.id ? 'Service updated' : 'Service added');
    resetSvcForm();
    loadAll();
  };

  const editService = (s) => {
    setSvcForm({
      id: s.id,
      title: s.title || '',
      subtitle: s.subtitle || '',
      imageUrl: s.imageUrl || '',
      color: s.color || '',
      icon: s.icon || 'School',
      featuresText: (s.features || []).join('\n'),
      benefitsText: (s.benefits || []).join('\n'),
      published: !!s.published,
    });
  };

  const removeService = (id) => {
    deleteService(id);
    toast.success('Service deleted');
    loadAll();
  };

  const toggleService = (s) => {
    saveService({ ...s, published: !s.published });
    loadAll();
  };

  const submitOffering = (e) => {
    e.preventDefault();
    const id = offForm.id ?? Date.now().toString();
    const off = {
      id,
      title: offForm.title.trim(),
      description: offForm.description.trim(),
      icon: offForm.icon,
      published: offForm.published,
    };
    if (!off.title) { toast.error('Offering title required'); return; }
    saveOffering(off);
    toast.success(offForm.id ? 'Offering updated' : 'Offering added');
    resetOffForm();
    loadAll();
  };

  const editOffering = (o) => {
    setOffForm({ id: o.id, title: o.title || '', description: o.description || '', icon: o.icon || 'Calendar', published: !!o.published });
  };

  const removeOffering = (id) => {
    deleteOffering(id);
    toast.success('Offering deleted');
    loadAll();
  };

  const toggleOffering = (o) => {
    saveOffering({ ...o, published: !o.published });
    loadAll();
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <List className="w-5 h-5" />
            </div>
            <div>
              <CardTitle>{svcForm.id ? servicesText.editServiceTitle : servicesText.createServiceTitle}</CardTitle>
              <CardDescription>{servicesText.servicesDescription}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitService} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={svcForm.title} onChange={(e) => setSvcForm({ ...svcForm, title: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input value={svcForm.subtitle} onChange={(e) => setSvcForm({ ...svcForm, subtitle: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input value={svcForm.imageUrl} onChange={(e) => setSvcForm({ ...svcForm, imageUrl: e.target.value })} placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label>Tailwind Color Classes</Label>
              <Input value={svcForm.color} onChange={(e) => setSvcForm({ ...svcForm, color: e.target.value })} placeholder="e.g. bg-accent/20 text-secondary-foreground" />
            </div>
            <div className="space-y-2">
              <Label>Icon</Label>
              <Select value={svcForm.icon} onValueChange={(v) => setSvcForm({ ...svcForm, icon: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {serviceIcons.map((i) => (<SelectItem key={i} value={i}>{i}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
            <div className="lg:col-span-2 space-y-2">
              <Label>Features (one per line)</Label>
              <Textarea rows={4} value={svcForm.featuresText} onChange={(e) => setSvcForm({ ...svcForm, featuresText: e.target.value })} />
            </div>
            <div className="lg:col-span-2 space-y-2">
              <Label>Benefits (one per line)</Label>
              <Textarea rows={4} value={svcForm.benefitsText} onChange={(e) => setSvcForm({ ...svcForm, benefitsText: e.target.value })} />
            </div>
            <div className="flex items-center gap-3 lg:col-span-2">
              <Button type="submit" className="gap-2">
                <Plus className="w-4 h-4" />
                {svcForm.id ? 'Save Changes' : 'Add Service'}
              </Button>
              {svcForm.id && (
                <Button type="button" variant="ghost" onClick={resetSvcForm}>Cancel</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.id} className="h-full">
            <CardHeader className="space-y-2">
              <CardTitle className="text-base">{s.title}</CardTitle>
              <CardDescription>{s.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {(s.features?.length || 0) > 0 && <p>{s.features.length} features</p>}
                {(s.benefits?.length || 0) > 0 && <p>{s.benefits.length} benefits</p>}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Badge variant={s.published ? 'default' : 'secondary'}>
                {s.published ? 'Published' : 'Hidden'}
              </Badge>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={() => toggleService(s)} className="gap-1">
                  {s.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {s.published ? 'Unpublish' : 'Publish'}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => editService(s)} className="gap-1">
                  <Edit className="w-4 h-4" /> Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => removeService(s.id)} className="gap-1">
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Offerings */}
      <Card>
        <CardHeader>
          <CardTitle>{servicesText.offeringsTitle}</CardTitle>
          <CardDescription>{servicesText.offeringsDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitOffering} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={offForm.title} onChange={(e) => setOffForm({ ...offForm, title: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label>Icon</Label>
              <Select value={offForm.icon} onValueChange={(v) => setOffForm({ ...offForm, icon: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {offeringIcons.map((i) => (<SelectItem key={i} value={i}>{i}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
            <div className="lg:col-span-2 space-y-2">
              <Label>Description</Label>
              <Textarea rows={3} value={offForm.description} onChange={(e) => setOffForm({ ...offForm, description: e.target.value })} />
            </div>
            <div className="flex items-center gap-3 lg:col-span-2">
              <Button type="submit" className="gap-2">
                <Plus className="w-4 h-4" />
                {offForm.id ? 'Save Changes' : 'Add Offering'}
              </Button>
              {offForm.id && (
                <Button type="button" variant="ghost" onClick={resetOffForm}>Cancel</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offerings.map((o) => (
          <Card key={o.id} className="h-full">
            <CardHeader className="space-y-2">
              <CardTitle className="text-base">{o.title}</CardTitle>
              <CardDescription>{o.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-between">
              <Badge variant={o.published ? 'default' : 'secondary'}>
                {o.published ? 'Published' : 'Hidden'}
              </Badge>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={() => toggleOffering(o)} className="gap-1">
                  {o.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {o.published ? 'Unpublish' : 'Publish'}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => editOffering(o)} className="gap-1">
                  <Edit className="w-4 h-4" /> Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => removeOffering(o.id)} className="gap-1">
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