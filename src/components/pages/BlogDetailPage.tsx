import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { blogPosts } from './blogData';

export function BlogDetailPage({ params, onNavigate }: { params: Record<string, string>; onNavigate?: (page: string) => void }) {
  const slug = params?.slug || '';
  const post = blogPosts.find(p => p.slug === slug);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-6 sm:pt-8 pb-6 sm:pt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start justify-between gap-6"
          >
            <div className="min-w-0">
              {post && (
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-primary/10 text-primary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.date} • {post.readTime}</span>
                </div>
              )}
              <h1 className="tracking-tight">{post ? post.title : 'Post Not Found'}</h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
                {post ? post.excerpt : 'We couldn’t find this post.'}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="outline" onClick={() => onNavigate?.('resources')}>Back to Blogs</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-border p-6 sm:p-8"
            >
              <div className="prose prose-sm sm:prose max-w-none text-muted-foreground whitespace-pre-line">
                {post.content}
              </div>
            </motion.div>
          ) : (
            <div className="text-muted-foreground">Select a post from the Resources page.</div>
          )}
        </div>
      </section>
    </div>
  );
}