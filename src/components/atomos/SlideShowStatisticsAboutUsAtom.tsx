import React from 'react';
import '../../index.css';

import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import { cards } from '../../constants';

import { CardMolecule } from '../moleculas/CardMolecule';
import { StatisticsAboutUsMolecule } from '../moleculas/StatisticsAboutUsMolecule';
import { statistics } from '../../constants/AboutUs';

type Props = {
    className?: string;
}

export const SlideShowStatisticsAboutUsAtom = ({ className }: Props) => {
    return (
        <div className={`${className}`}>
            <Slide arrows={false} indicators transitionDuration={250}>
                {
                    statistics.map((element, index) => (
                        <div className="h-48 flex items-center justify-center" key={index} >
                            <StatisticsAboutUsMolecule
                                className='flex items-center justify-center h-full w-full'
                                element={element}
                            />
                        </div>
                    ))
                }
            </Slide>
        </div>
    );
};
