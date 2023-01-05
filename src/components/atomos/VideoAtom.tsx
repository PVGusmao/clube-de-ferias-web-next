import React from 'react';

import ReactPlayer from 'react-player'

type Props = {
  className: string,
}

export function VideoAtom({ className }: Props) {
  return (
    <div className={className}>
      <ReactPlayer
        width='100%'
        height='100%'
        controls
        url='https://www.youtube.com/watch?v=WDPEECDz4v8&ab_channel=ClubedeF%C3%A9riasStellaBarros'
      />
    </div>
  )
}