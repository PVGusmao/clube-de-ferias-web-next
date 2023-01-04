import React from 'react';
import { TextAtom } from '../atomos/TextAtom';
import { VideoAtom } from '../atomos/VideoAtom';
import { ButtonMolecule } from '../moleculas/ButtonMolecule';
import { CardMolecule } from '../moleculas/CardMolecule';

export function WelcomeOrganism() {
  return (
    <div>
      <div>
        <div>
          <TextAtom
            children
            text=''
            className=''
          />

          <TextAtom
            children
            text=''
            className=''
          />

          <TextAtom
            children
            text=''
            className=''
          />

          <ButtonMolecule children title='OUR PROJETCT' />
        </div>

        <VideoAtom />
      </div>

      <div>
        
      </div>
    </div>
  )
}