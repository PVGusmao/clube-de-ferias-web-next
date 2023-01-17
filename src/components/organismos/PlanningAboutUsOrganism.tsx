import { plansDescriptions } from "../../constants/AboutUs"

import { PlanningAboutUsMolecule } from "../moleculas/PlanningAboutUsMolecule"

export function PlanningAboutUsOrganism() {
  return (
    <div className="flex flex-wrap items-center justify-center sm:my-24">
      {
        plansDescriptions.map((element) => (
          <PlanningAboutUsMolecule className="flex m-6" element={element} />
        ))
      }
    </div>
  )
}