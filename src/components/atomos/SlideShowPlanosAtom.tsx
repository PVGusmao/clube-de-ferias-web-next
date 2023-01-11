import React from 'react';
import '../../index.css';

import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import { planos } from '../../constants';

import { CardPlanosMolecule } from '../moleculas/CardPlanosMolecule';

type Props = {
    className?: string;
}

export const SlideShowPlansAtom = ({ className }: Props) => {
    return (
        <div className={`${className}`}>
            <Slide arrows={false} indicators transitionDuration={250}>
                {
                    planos.map((element, index) => (
                        <div className="h-full flex items-center justify-center" key={index}>
                            <CardPlanosMolecule
                                plano={element.plan}
                                desconto={element.discount}
                                content1={element.content1}
                                content2={element.content2}
                                valor={element.value}
                                btnColor={element.btn_color}
                            />
                        </div>
                    ))
                }
            </Slide>
        </div>
    );
};
