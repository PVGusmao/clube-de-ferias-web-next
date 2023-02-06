import React, { useEffect, useState } from 'react';
import '../../index.css';

import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import CardClubPosts from '../moleculas/CardClubPosts';
import api from '../../services/api';

type Props = {
    className?: string;
}

export const SlideShowBlogPostAtom = ({ className}: Props) => {
  const [post, setPost] = useState([]);

  async function getData() {
    await api.get("/posts").then((res) => setPost(res.data));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
      <div className={`${className}`}>
          <Slide arrows={false} indicators transitionDuration={250}>
              {
                  post.map((element, index) => (
                    <div className="h-[500px] flex items-center justify-center" key={index} >
                      <CardClubPosts
                        img={element?.image_large}
                        title={element?.title}
                        subtitle={element?.subtitle}
                        slug={element?.slug}
                      />
                      </div>
                  ))
              }
          </Slide>
      </div>
  );
};
