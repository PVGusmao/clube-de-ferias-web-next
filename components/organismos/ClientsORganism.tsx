import { useContext } from "react";
import CardCommentsMolecule from "../moleculas/CardCommentsMolecule";

import { ClientsInterface } from "../../constants";
import { SlideShowClientsAtom } from "../atomos/SlideShowClientsAtom";
import { Slide } from "react-slideshow-image";
import { IMyContext, MyContext } from "../../context/MyContext";

export function ClientsOrganism() {
  const { allSiteTexts } = useContext(MyContext) as IMyContext;

  return (
    <div className="py-[120px] px-2">
      <h1 className="text-black text-5xl mb-1 text-center">
        Nossos Clientes recomendam!
      </h1>
      <Slide arrows={false} slidesToShow={3} transitionDuration={10}>
        {allSiteTexts?.data?.paulo?.clients.map((element: ClientsInterface, index: number) => (
          <div key={index} className="hidden sm:flex justify-center flex-row justify-evenly">
            <CardCommentsMolecule
              key={index}
              content={element.content}
              name={element.name}
              travelTo={element.travelTo}
              img={element.img}
            />
          </div>
        ))}
      </Slide>

      <SlideShowClientsAtom className="sm:hidden w-full" />
    </div>
  );
}
