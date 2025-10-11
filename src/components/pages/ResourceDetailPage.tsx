import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { resources } from './resourcesData';

export function ResourceDetailPage({ params, onNavigate }: { params: Record<string, string>; onNavigate?: (page: string) => void }) {
  const slug = params?.slug || '';
  const resource = resources.find(r => r.slug === slug);

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
              {resource && (
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                  <span className="text-xs">{resource.type}</span>
                </div>
              )}
              <h1 className="tracking-tight">{resource ? resource.title : 'Resource Not Found'}</h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
                {resource ? resource.description : 'We couldn’t find this resource.'}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="outline" onClick={() => onNavigate?.('resources')}>Back to Resources</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {resource ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-border p-6 sm:p-8"
            >
              <div className="prose prose-sm sm:prose max-w-none text-muted-foreground whitespace-pre-line">
                {resource.content || 'More details coming soon.'}
              </div>
            </motion.div>
          ) : (
            <div className="text-muted-foreground">Try selecting a resource from the Resources page.</div>
          )}
        </div>
      </section>
    </div>
  );
}