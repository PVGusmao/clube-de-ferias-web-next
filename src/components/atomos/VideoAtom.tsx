import React from 'react';

import ReactPlayer from 'react-player'

type Props = {
  className: string,
}

export function VideoAtom({ className }: Props) {
  return (
    <div className={`bg-[rgba(0,0,0,0.5)] rounded-xl flex items-center justify-center ${className}`}>
      <ReactPlayer
        width='80%'
        height='80%'
        style={{

        }}
        controls
        url='https://www.youtube.com/watch?v=WDPEECDz4v8&ab_channel=ClubedeF%C3%A9riasStellaBarros'
      />
    </div>
  )
}