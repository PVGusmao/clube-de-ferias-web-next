import { plansDescriptions } from "../../constants/AboutUs"

import { PlanningAboutUsMolecule } from "../moleculas/PlanningAboutUsMolecule"

export function PlanningAboutUsOrganism() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {
        plansDescriptions.map((element) => (
          <PlanningAboutUsMolecule element={element} />
        ))
      }
    </div>
  )
}