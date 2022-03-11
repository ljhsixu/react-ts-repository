import React from 'react'
import styles from './Carousel.module.css'
import { Image, Carousel as AntCarousel} from 'antd'
import  CarouselIamge1 from '../../assets/images/carousel_1.jpg'
import  CarouselIamge2 from '../../assets/images/carousel_2.jpg'
import  CarouselIamge3 from '../../assets/images/carousel_3.jpg'
export const Carousel: React.FC =()=> {
  return <AntCarousel autoplay className={styles['slider']}>
<Image src={CarouselIamge1}></Image>
<Image src={CarouselIamge2}></Image>
<Image src={CarouselIamge3}></Image>
  </AntCarousel>
}
