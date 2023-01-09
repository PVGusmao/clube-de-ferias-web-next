import React from 'react';
import '../../index.css';

import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import { simulationCard } from '../../constants';

import CardSimulationMolecule from '../moleculas/CardSimulationMolecule';

type Props = {
    className?: string;
}

export const SlideShowSimulationAtom = ({ className }: Props) => {
    return (
        <div className={`${className}`}>
            <Slide arrows={false} indicators transitionDuration={250}>
                {
                    simulationCard.map((element, index) => (
                        <div className="h-full flex items-center justify-center" key={index}>
                            <CardSimulationMolecule
                                hotel=""
                                img={element.img}
                                key={index}
                                estado={element.estado}
                                modelo={element.modelo}
                                preco={element.preco}
                            />
                        </div>
                    ))
                }
            </Slide>
        </div>
    );
};
