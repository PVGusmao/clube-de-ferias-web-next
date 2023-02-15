import { useContext } from "react";
import "../../index.css";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import CardCommentsMolecule from "../moleculas/CardCommentsMolecule";
import { IMyContext, MyContext } from "../../context/MyContext";

type Props = {
  className?: string;
};

export const SlideShowClientsAtom = ({ className }: Props) => {
  const { allSiteTexts } = useContext(MyContext) as IMyContext;

  return (
    <div className={`${className}`}>
      <Slide arrows={false} transitionDuration={250}>
        {allSiteTexts?.data?.paulo?.clients.map((element, index) => (
          <div className="h-full flex items-center justify-center" key={index}>
            <CardCommentsMolecule
              content={element.content}
              name={element.name}
              ocupation={element.ocupation}
              img={element.img}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};
