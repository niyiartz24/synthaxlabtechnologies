import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-content flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-xl">
          Have an Idea Worth Building?
        </h2>
        <p className="text-gray-soft max-w-md">
          Let's work together to transform your idea into a modern digital solution.
        </p>
        <Button to="/contact" variant="primary">
          Start a Project
        </Button>
      </div>
    </section>
  )
}
