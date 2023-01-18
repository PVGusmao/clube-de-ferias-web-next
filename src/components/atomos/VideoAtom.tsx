import ReactPlayer from 'react-player'

type Props = {
  className: string,
  videoLink: string,
  videoImage?: string,
}

export function VideoAtom({ className, videoLink, videoImage }: Props) {
  return (
    <div className={`bg-[red] ${className}`}>
      <ReactPlayer
        width='100%'
        height='100%'
        playing
        light={videoImage}
        url={videoLink}
      />
    </div>
  )
}