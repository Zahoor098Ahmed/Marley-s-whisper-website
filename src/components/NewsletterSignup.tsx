import { useState, FormEvent } from 'react';
import { Mail, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h2 className="mb-3">Stay Updated</h2>
        <p className="mb-8 opacity-90 max-w-2xl mx-auto">
          Subscribe to our newsletter for educational tips, success stories, and updates on our programmes.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60 flex-1"
            />
            <Button
              type="submit"
              variant="secondary"
              className="px-6"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Subscribed!
                </>
              ) : (
                'Subscribe'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
