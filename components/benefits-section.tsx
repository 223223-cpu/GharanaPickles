import { Home, ShieldCheck, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Home,
    title: "100% Homemade",
    description:
      "Made entirely in a village home kitchen, ensuring the warmth and hygiene of homemade food.",
    iconBg: "bg-terracotta/10",
    iconColor: "text-terracotta-dark",
  },
  {
    icon: ShieldCheck,
    title: "Zero Preservatives",
    description:
      "Naturally preserved using sunlight, salt, and pure mustard oil. No chemicals, just nature.",
    iconBg: "bg-mustard/10",
    iconColor: "text-mustard-deep",
  },
  {
    icon: Sparkles,
    title: "Small Batches",
    description:
      "We don't mass produce. Each batch is small, ensuring personalized care and perfect taste.",
    iconBg: "bg-chilli/10",
    iconColor: "text-chilli-dark",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-base">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card/70 backdrop-blur-sm p-7 md:p-10 rounded-[2rem] border border-mustard-dark/5 hover:shadow-[0_20px_40px_rgba(161,98,7,0.05)] transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${benefit.iconBg} ${benefit.iconColor} flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform`}
              >
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-serif font-medium text-brown-dark mb-2 md:mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-[0.85rem] md:text-sm text-brown-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
