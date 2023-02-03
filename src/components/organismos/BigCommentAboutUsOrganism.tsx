import { bigComment } from "../../constants/AboutUs";
import { IconAtom } from "../atomos/IconAtom";
import { ImageAtom } from "../atomos/ImageAtome";
import { TextAtom } from "../atomos/TextAtom";

import imageTeste from '../../assets/fotoTesteBigComment.jpg';

export function BigCommentAboutUsOrganism() {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center">
      <div className="sm:mr-10 mt-10 mx-4">
        <ImageAtom
          className="w-[400px] rounded-3xl"
          source={imageTeste}
          alt='foto ilustrativa'
        />

        <TextAtom className="ml-5 text-start text-2xl font-bold" text={bigComment[0].author}> </TextAtom>
        <TextAtom className="ml-5 text-start text-sm" text={bigComment[0].authorSubtitle}> </TextAtom>
      </div>

      <div className="sm:w-[300px] py-6 px-10 h-[380px] sm:mt-20 sm:p-0 flex flex-col">
        <IconAtom icon={bigComment[0].icon} size={42} color='#E00718'/>

        <TextAtom className="text-start text-sm my-1 sm:my-4" text={bigComment[0].text1}> </TextAtom>
        
        <TextAtom className="text-start text-sm my-1 sm:my-4" text={bigComment[0].text2}> </TextAtom>
      </div>
    </div>
  )
}