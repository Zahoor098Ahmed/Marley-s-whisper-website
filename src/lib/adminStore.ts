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
  role?: string;
  location?: string;
  rating?: number;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  date: string;
}

// Services
export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  color?: string;
  icon?: string; // lucide icon name
  features?: string[];
  benefits?: string[];
  published: boolean;
}

export interface OfferingItem {
  id: string;
  title: string;
  description: string;
  icon?: string; // lucide icon name
  published: boolean;
}

// About
export interface AboutValue {
  id: string;
  title: string;
  description: string;
  icon?: string; // lucide icon name
  published: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  published: boolean;
}

const KEYS = {
  BLOG_POSTS: 'mw_blog_posts',
  GALLERY_IMAGES: 'mw_gallery_images',
  CONTACT_SUBMISSIONS: 'mw_contact_submissions',
  TESTIMONIALS: 'mw_testimonials',
  NEWSLETTER: 'mw_newsletter_subscribers',
  SERVICES: 'mw_services',
  OFFERINGS: 'mw_additional_offerings',
  ABOUT_VALUES: 'mw_about_values',
  TEAM_MEMBERS: 'mw_team_members',
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

// Services
export function getServices(): ServiceItem[] {
  return read<ServiceItem[]>(KEYS.SERVICES, []);
}

export function saveService(item: ServiceItem): void {
  const list = getServices();
  const idx = list.findIndex(s => s.id === item.id);
  if (idx >= 0) list[idx] = item; else list.push(item);
  write(KEYS.SERVICES, list);
}

export function deleteService(id: string): void {
  const list = getServices().filter(s => s.id !== id);
  write(KEYS.SERVICES, list);
}

// Additional Offerings
export function getOfferings(): OfferingItem[] {
  return read<OfferingItem[]>(KEYS.OFFERINGS, []);
}

export function saveOffering(off: OfferingItem): void {
  const list = getOfferings();
  const idx = list.findIndex(o => o.id === off.id);
  if (idx >= 0) list[idx] = off; else list.push(off);
  write(KEYS.OFFERINGS, list);
}

export function deleteOffering(id: string): void {
  const list = getOfferings().filter(o => o.id !== id);
  write(KEYS.OFFERINGS, list);
}

// About Values
export function getAboutValues(): AboutValue[] {
  return read<AboutValue[]>(KEYS.ABOUT_VALUES, []);
}

export function saveAboutValue(val: AboutValue): void {
  const list = getAboutValues();
  const idx = list.findIndex(v => v.id === val.id);
  if (idx >= 0) list[idx] = val; else list.push(val);
  write(KEYS.ABOUT_VALUES, list);
}

export function deleteAboutValue(id: string): void {
  const list = getAboutValues().filter(v => v.id !== id);
  write(KEYS.ABOUT_VALUES, list);
}

// Team Members
export function getTeamMembers(): TeamMember[] {
  return read<TeamMember[]>(KEYS.TEAM_MEMBERS, []);
}

export function saveTeamMember(member: TeamMember): void {
  const list = getTeamMembers();
  const idx = list.findIndex(m => m.id === member.id);
  if (idx >= 0) list[idx] = member; else list.push(member);
  write(KEYS.TEAM_MEMBERS, list);
}

export function deleteTeamMember(id: string): void {
  const list = getTeamMembers().filter(m => m.id !== id);
  write(KEYS.TEAM_MEMBERS, list);
}