import { Heart } from "lucide-react"

export function StorySection() {
  return (
    <section id="story" className="py-16 md:py-24 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8 md:space-y-12">
        <div className="inline-block mb-2 md:mb-4">
          <Heart className="w-8 h-8 md:w-10 md:h-10 text-chilli opacity-80" />
        </div>
        <h2 className="text-[1.75rem] leading-tight md:text-4xl font-serif font-medium tracking-tight text-brown-dark px-2 text-balance">
          A Recipe Passed Down Through Generations
        </h2>

        <div className="text-[0.95rem] md:text-lg text-brown-light font-light leading-loose space-y-5 md:space-y-6 px-2 sm:px-8">
          <p>
            It begins before dawn in a quiet village courtyard. The freshest,
            most vibrant red chillies are carefully selected, washed, and left to
            dry under the open sky.
          </p>
          <p>
            {"Inside the kitchen, the rhythmic sound of a stone pestle grinding coriander, fennel, and mustard seeds fills the air. Every spice is blended by hand, infused with pure, cold-pressed mustard oil, and most importantly, prepared with a mother's silent blessings."}
          </p>
          <p className="font-medium text-terracotta-dark">
            {"This isn't just a pickle. It's a memory of home, bottled with care, and meant to be shared with family."}
          </p>
        </div>
      </div>
    </section>
  )
}
