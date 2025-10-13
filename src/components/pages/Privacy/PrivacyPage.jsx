import { motion } from 'motion/react';
import { Shield, Info, FileText } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

export function PrivacyPage() {
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
              <Shield className="w-4 h-4" />
              <span className="text-sm">Privacy Policy</span>
            </div>
            <h1 className="mb-4">Your Privacy Matters</h1>
            <p className="text-muted-foreground">
              We respect your privacy and follow UK GDPR. Here’s how we collect, use, and protect your information when you engage with Marley’s Whisper.
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
                      <h2 className="mb-2">Information we collect</h2>
                      <p className="text-muted-foreground">
                        We may collect your name, contact details, and relevant information about a child’s learning needs to deliver our services. We only collect what is
                        necessary for providing personalised programmes and communicating with you.
                      </p>
                    </div>
                    <div>
                      <h2 className="mb-2">How we use your information</h2>
                      <p className="text-muted-foreground">
                        We use your information to provide and manage our educational support, communicate with families and schools, maintain records, and improve our service. We do not sell your data.
                      </p>
                    </div>
                    <div>
                      <h2 className="mb-2">Lawful basis</h2>
                      <p className="text-muted-foreground">
                        Our processing is based on legitimate interests and, where appropriate, your consent. For safeguarding or legal obligations, we may process data to comply with regulatory requirements.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-2">Data retention</h2>
                      <p className="text-muted-foreground">
                        We retain information only for as long as necessary to deliver our services and meet legal obligations. When data is no longer required, it is securely deleted.
                      </p>
                    </div>
                    <div>
                      <h2 className="mb-2">Your rights</h2>
                      <p className="text-muted-foreground">
                        You have rights to access, rectify, erase, and restrict processing of your data. To exercise these rights, please contact us using the details on the Contact page.
                      </p>
                    </div>
                    <div>
                      <h2 className="mb-2">Contact</h2>
                      <p className="text-muted-foreground">
                        For privacy enquiries, please email
                        {' '}
                        <a className="underline" href="mailto:Merceron@marleyswhisper.com">Merceron@marleyswhisper.com</a>.
                        {' '}We aim to respond promptly and resolve matters in a fair and transparent manner.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="w-4 h-4" />
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