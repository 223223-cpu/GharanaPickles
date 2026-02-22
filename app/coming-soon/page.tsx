import { Navbar } from "@/components/navbar"
import { ComingSoonForm } from "@/components/coming-soon-form"

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-dvh flex items-center justify-center relative bg-cream/50 pt-16 md:pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-sunlight opacity-70 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-terracotta/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-mustard/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

        <div className="max-w-xl w-full mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
          <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 px-2">
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-terracotta-dark">
              A Labor of Love
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-brown-dark text-balance">
              Coming Soon
            </h1>
            <p className="text-[0.95rem] md:text-base text-brown-light font-light">
              {"We are taking our time to perfect the recipe. Sign up to be the first to know when we bring the taste of Maa's kitchen to your home."}
            </p>
          </div>

          <ComingSoonForm />
        </div>
      </div>
    </>
  )
}
