// Simple localStorage-backed admin store for demo purposes

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string;
  date: string; // ISO date string (YYYY-MM-DD)
  published: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string; // ISO date string
  published: boolean;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  childAge?: string;
  message: string;
  date: string; // ISO date time
  read: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  published: boolean;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  date: string;
}

const KEYS = {
  BLOG_POSTS: 'mw_blog_posts',
  GALLERY_IMAGES: 'mw_gallery_images',
  CONTACT_SUBMISSIONS: 'mw_contact_submissions',
  TESTIMONIALS: 'mw_testimonials',
  NEWSLETTER: 'mw_newsletter_subscribers',
};

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

// Blog
export function getBlogPosts(): BlogPost[] {
  return read<BlogPost[]>(KEYS.BLOG_POSTS, []);
}

export function saveBlogPost(post: BlogPost): void {
  const posts = getBlogPosts();
  const idx = posts.findIndex(p => p.id === post.id);
  if (idx >= 0) posts[idx] = post; else posts.push(post);
  write(KEYS.BLOG_POSTS, posts);
}

export function deleteBlogPost(id: string): void {
  const posts = getBlogPosts().filter(p => p.id !== id);
  write(KEYS.BLOG_POSTS, posts);
}

// Gallery
export function getGalleryImages(): GalleryImage[] {
  return read<GalleryImage[]>(KEYS.GALLERY_IMAGES, []);
}

export function saveGalleryImage(image: GalleryImage): void {
  const images = getGalleryImages();
  const idx = images.findIndex(i => i.id === image.id);
  if (idx >= 0) images[idx] = image; else images.push(image);
  write(KEYS.GALLERY_IMAGES, images);
}

export function deleteGalleryImage(id: string): void {
  const images = getGalleryImages().filter(i => i.id !== id);
  write(KEYS.GALLERY_IMAGES, images);
}

// Contact
export function getContactSubmissions(): ContactSubmission[] {
  return read<ContactSubmission[]>(KEYS.CONTACT_SUBMISSIONS, []);
}

export function saveContactSubmission(sub: ContactSubmission): void {
  const subs = getContactSubmissions();
  subs.push(sub);
  write(KEYS.CONTACT_SUBMISSIONS, subs);
}

export function markContactAsRead(id: string): void {
  const subs = getContactSubmissions().map(s => (s.id === id ? { ...s, read: true } : s));
  write(KEYS.CONTACT_SUBMISSIONS, subs);
}

export function deleteContactSubmission(id: string): void {
  const subs = getContactSubmissions().filter(s => s.id !== id);
  write(KEYS.CONTACT_SUBMISSIONS, subs);
}

// Testimonials (minimal for stats)
export function getTestimonials(): Testimonial[] {
  return read<Testimonial[]>(KEYS.TESTIMONIALS, []);
}

export function saveTestimonial(t: Testimonial): void {
  const list = getTestimonials();
  const idx = list.findIndex(x => x.id === t.id);
  if (idx >= 0) list[idx] = t; else list.push(t);
  write(KEYS.TESTIMONIALS, list);
}

export function deleteTestimonial(id: string): void {
  const list = getTestimonials().filter(t => t.id !== id);
  write(KEYS.TESTIMONIALS, list);
}

// Newsletter (minimal for stats)
export function getNewsletterSubscribers(): NewsletterSubscriber[] {
  return read<NewsletterSubscriber[]>(KEYS.NEWSLETTER, []);
}

export function addNewsletterSubscriber(email: string): void {
  const list = getNewsletterSubscribers();
  list.push({ id: Date.now().toString(), email, date: new Date().toISOString() });
  write(KEYS.NEWSLETTER, list);
}