import React from 'react';

import ReactPlayer from 'react-player'

import videoImage from '../../assets/Imagem-Video.png';

type Props = {
  className: string,
}

export function VideoAtom({ className }: Props) {
  return (
    <div className={`bg-[red] ${className}`}>
      <ReactPlayer
        width='100%'
        height='100%'
        playing
        style={{
          // padding: '34px 0px',
          // background: 'fill'
        }}
        light={videoImage}
        url='https://www.youtube.com/watch?v=WDPEECDz4v8&ab_channel=ClubedeF%C3%A9riasStellaBarros'
      />
    </div>
  )
}