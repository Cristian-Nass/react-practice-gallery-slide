
import { useRef } from 'react';

import img1 from '../assets/images/image-1.png'
import img2 from '../assets/images/image-2.png'
import img3 from '../assets/images/image-3.png'
import img4 from '../assets/images/image-4.png'
import img5 from '../assets/images/image-5.png'
import img6 from '../assets/images/image-6.png'
import next from '../assets/images/next.png'
import back from '../assets/images/back.png'

const Gallery = () => {
  const ref = useRef(null);

  const nextToggle = () => {
      ref.current.style.scrollBehavior= 'smooth'
      ref.current.scrollLeft += 300;
    }
    
    const backToggle = () => {
    ref.current.style.scrollBehavior= 'smooth'
    ref.current.scrollLeft -= 300;
    // console.log('Back')
    // requestAnimationFrame(() => {
    //   const scrollLeft = ref.current.scrollLeft;
    //   const itemWidth = parseInt(
    //     getComputedStyle(ref.current.children[0]).width
    //   );
    //   ref.current.scrollLeft = scrollLeft - itemWidth * 1;
    // });
    
  }


  return(
    <>
    <div className="galley-wrap">
    <div className='galley' ref={ref}>
      <div>
        <span ><img src={img1} /></span>
        <span ><img src={img2} /></span>
        <span ><img src={img3} /></span>
      </div>
      <div>
        <span ><img src={img4} /></span>
        <span ><img src={img5} /></span>
        <span ><img src={img6} /></span>
      </div>
    </div>
    </div>
    <img src={back} onClick={() => backToggle()}/>
    <img src={next} onClick={() => nextToggle()}/>
    </>
  )
}

export default Gallery