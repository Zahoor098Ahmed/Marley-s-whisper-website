import { motion } from 'motion/react';
import { FileText, Scale, Info } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

export function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm">Terms of Service</span>
            </div>
            <h1 className="mb-4">Clear, Fair Terms</h1>
            <p className="text-muted-foreground">
              These terms govern your use of Marley’s Whisper and the educational support services we provide. By engaging with us, you agree to the following.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Card className="shadow-sm">
              <CardContent className="p-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-2">Services and availability</h2>
                      <p className="text-muted-foreground">
                        We deliver personalised programmes tailored to the child’s needs. Availability may vary and sessions may be rescheduled due to health, safeguarding, or school requirements.
                      </p>
                    </div>
                    <div>
                      <h2 className="mb-2">Bookings, fees, and cancellations</h2>
                      <p className="text-muted-foreground">
                        Bookings are confirmed in writing. Fees are payable as agreed. Please provide reasonable notice for cancellations; late cancellations may incur a fee.
                      </p>
                    </div>
                    <div>
                      <h2 className="mb-2">Safeguarding and conduct</h2>
                      <p className="text-muted-foreground">
                        We work in partnership with families and schools to safeguard children. We expect respectful conduct from all parties to ensure a safe, supportive environment.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-2">Liability</h2>
                      <p className="text-muted-foreground">
                        We provide professional support with reasonable care and skill. To the extent permitted by law, we are not liable for indirect losses or events beyond our reasonable control.
                      </p>
                    </div>
                    <div>
                      <h2 className="mb-2">Intellectual property</h2>
                      <p className="text-muted-foreground">
                        Materials, plans, and resources remain our intellectual property unless otherwise agreed. You may use them for the child’s programme but not distribute them commercially.
                      </p>
                    </div>
                    <div>
                      <h2 className="mb-2">Governing law</h2>
                      <p className="text-muted-foreground">
                        These terms are governed by the laws of England and Wales. Disputes will be handled fairly and, where possible, resolved amicably.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Scale className="w-4 h-4" />
                  <span>Last updated: Jan 2025</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}