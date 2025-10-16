import { useEffect, useState } from 'react';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Textarea } from '../../../ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { Badge } from '../../../ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff, Info } from 'lucide-react';
import { toast } from 'sonner';
import { getAboutValues, saveAboutValue, deleteAboutValue, getTeamMembers, saveTeamMember, deleteTeamMember } from '../../../../lib/adminStore';

const valueIcons = ['Heart', 'Target', 'Award', 'Users'];

export function AboutManager() {
  const [values, setValues] = useState([]);
  const [team, setTeam] = useState([]);

  const [valForm, setValForm] = useState({ id: null, title: '', description: '', icon: 'Heart', published: true });
  const [teamForm, setTeamForm] = useState({ id: null, name: '', role: '', bio: '', imageUrl: '', published: true });

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = () => {
    setValues(getAboutValues());
    setTeam(getTeamMembers());
  };

  const resetValForm = () => setValForm({ id: null, title: '', description: '', icon: 'Heart', published: true });
  const resetTeamForm = () => setTeamForm({ id: null, name: '', role: '', bio: '', imageUrl: '', published: true });

  const submitValue = (e) => {
    e.preventDefault();
    const id = valForm.id ?? Date.now().toString();
    const val = { id, title: valForm.title.trim(), description: valForm.description.trim(), icon: valForm.icon, published: valForm.published };
    if (!val.title) { toast.error('Value title required'); return; }
    saveAboutValue(val);
    toast.success(valForm.id ? 'Value updated' : 'Value added');
    resetValForm();
    loadAll();
  };

  const editValue = (v) => setValForm({ id: v.id, title: v.title || '', description: v.description || '', icon: v.icon || 'Heart', published: !!v.published });
  const removeValue = (id) => { deleteAboutValue(id); toast.success('Value deleted'); loadAll(); };
  const toggleValue = (v) => { saveAboutValue({ ...v, published: !v.published }); loadAll(); };

  const submitMember = (e) => {
    e.preventDefault();
    const id = teamForm.id ?? Date.now().toString();
    const mem = { id, name: teamForm.name.trim(), role: teamForm.role.trim(), bio: teamForm.bio.trim(), imageUrl: teamForm.imageUrl.trim(), published: teamForm.published };
    if (!mem.name) { toast.error('Member name required'); return; }
    saveTeamMember(mem);
    toast.success(teamForm.id ? 'Member updated' : 'Member added');
    resetTeamForm();
    loadAll();
  };

  const editMember = (m) => setTeamForm({ id: m.id, name: m.name || '', role: m.role || '', bio: m.bio || '', imageUrl: m.imageUrl || '', published: !!m.published });
  const removeMember = (id) => { deleteTeamMember(id); toast.success('Member deleted'); loadAll(); };
  const toggleMember = (m) => { saveTeamMember({ ...m, published: !m.published }); loadAll(); };

  return (
    <div className="space-y-8">
      {/* Values */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <CardTitle>{valForm.id ? 'Edit Value' : 'Add Value'}</CardTitle>
              <CardDescription>Core values shown on the About page.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitValue} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={valForm.title} onChange={(e) => setValForm({ ...valForm, title: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label>Icon</Label>
              <Select value={valForm.icon} onValueChange={(v) => setValForm({ ...valForm, icon: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {valueIcons.map((i) => (<SelectItem key={i} value={i}>{i}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
            <div className="lg:col-span-2 space-y-2">
              <Label>Description</Label>
              <Textarea rows={3} value={valForm.description} onChange={(e) => setValForm({ ...valForm, description: e.target.value })} />
            </div>
            <div className="flex items-center gap-3 lg:col-span-2">
              <Button type="submit" className="gap-2">
                <Plus className="w-4 h-4" />
                {valForm.id ? 'Save Changes' : 'Add Value'}
              </Button>
              {valForm.id && (
                <Button type="button" variant="ghost" onClick={resetValForm}>Cancel</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((v) => (
          <Card key={v.id} className="h-full">
            <CardHeader className="space-y-2">
              <CardTitle className="text-base">{v.title}</CardTitle>
              <CardDescription>{v.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-between">
              <Badge variant={v.published ? 'default' : 'secondary'}>
                {v.published ? 'Published' : 'Hidden'}
              </Badge>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={() => toggleValue(v)} className="gap-1">
                  {v.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {v.published ? 'Unpublish' : 'Publish'}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => editValue(v)} className="gap-1">
                  <Edit className="w-4 h-4" /> Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => removeValue(v.id)} className="gap-1">
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Team */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage people displayed on the About page.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitMember} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={teamForm.name} onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Input value={teamForm.role} onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input value={teamForm.imageUrl} onChange={(e) => setTeamForm({ ...teamForm, imageUrl: e.target.value })} placeholder="https://..." />
            </div>
            <div className="lg:col-span-2 space-y-2">
              <Label>Bio</Label>
              <Textarea rows={4} value={teamForm.bio} onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })} />
            </div>
            <div className="flex items-center gap-3 lg:col-span-2">
              <Button type="submit" className="gap-2">
                <Plus className="w-4 h-4" />
                {teamForm.id ? 'Save Changes' : 'Add Member'}
              </Button>
              {teamForm.id && (
                <Button type="button" variant="ghost" onClick={resetTeamForm}>Cancel</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m) => (
          <Card key={m.id} className="h-full">
            <CardHeader className="space-y-2">
              <CardTitle className="text-base">{m.name}</CardTitle>
              <CardDescription>{m.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{m.bio}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Badge variant={m.published ? 'default' : 'secondary'}>
                {m.published ? 'Published' : 'Hidden'}
              </Badge>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={() => toggleMember(m)} className="gap-1">
                  {m.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {m.published ? 'Unpublish' : 'Publish'}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => editMember(m)} className="gap-1">
                  <Edit className="w-4 h-4" /> Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => removeMember(m.id)} className="gap-1">
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