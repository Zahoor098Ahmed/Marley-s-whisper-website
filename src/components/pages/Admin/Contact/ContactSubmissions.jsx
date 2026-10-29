import { useState, useEffect } from 'react';
import { Button } from '../../../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../ui/card';
import { Badge } from '../../../ui/badge';
import { Trash2, Mail, Phone, Calendar, User, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { getContactSubmissions, markContactAsRead, deleteContactSubmission } from '../../../../lib/adminStore';
import { contactText } from './contactData';

export function ContactSubmissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    setSubmissions(getContactSubmissions());
  };

  const handleMarkAsRead = (id) => {
    markContactAsRead(id);
    loadSubmissions();
    toast.success('Marked as read');
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      deleteContactSubmission(id);
      loadSubmissions();
      toast.success('Submission deleted');
    }
  };

  const unreadCount = submissions.filter(s => !s.read).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-foreground">{contactText.heading}</h2>
          <p className="text-muted-foreground">
            {contactText.subheading}
            {unreadCount > 0 && (
              <Badge variant="default" className="ml-2">
                {unreadCount} unread
              </Badge>
            )}
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {submissions.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">No contact submissions yet.</p>
            </CardContent>
          </Card>
        ) : (
          submissions.map((submission) => (
            <Card key={submission.id} className={!submission.read ? 'border-[#2C4F4A]' : ''}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle>{submission.name}</CardTitle>
                      {!submission.read && (
                        <Badge variant="default">Unread</Badge>
                      )}
                    </div>
                    <CardDescription>
                      Submitted on {new Date(submission.date).toLocaleDateString()} at{' '}
                      {new Date(submission.date).toLocaleTimeString()}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <a href={`mailto:${submission.email}`} className="text-[#2C4F4A] hover:underline">
                      {submission.email}
                    </a>
                  </div>
                  {submission.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <a href={`tel:${submission.phone}`} className="text-[#2C4F4A] hover:underline">
                        {submission.phone}
                      </a>
                    </div>
                  )}
                  {submission.childAge && (
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span>Child's Age: {submission.childAge}</span>
                    </div>
                  )}
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm">
                    {submission.message}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {!submission.read && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleMarkAsRead(submission.id)}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark as Read
                  </Button>
                )}
                {submission.read && <div />}
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDelete(submission.id)}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
