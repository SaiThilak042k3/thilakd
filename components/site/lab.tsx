import { LabLoader } from "@/components/lab/lab-loader"
import { SectionHead } from "./section"

export function Lab() {
  return (
    <section id="lab" className="py-24 md:py-36">
      <div className="page">
        <SectionHead
          eyebrow="Lab · Interactive"
          title={
            <>
              Can you find the minimum?
              <span className="text-mute"> Every model I train is a ball rolling downhill.</span>
            </>
          }
          lead="Training is gradient descent on a loss surface. Choose a landscape and an optimiser, set the learning rate and momentum, drop the ball, and watch whether it converges, gets stuck in a local minimum, or blows up."
        />
        <div className="mt-14 md:mt-20">
          <LabLoader />
        </div>
      </div>
    </section>
  )
}
