import React from 'react'
import img1 from "../../assets/logos/logo-1.webp"
import img2 from "../../assets/logos/logo-2.webp"
import img3 from "../../assets/logos/logo-3.webp"
import img4 from "../../assets/logos/logo-4.webp"
import img5 from "../../assets/logos/logo-5.webp"
import img6 from "../../assets/logos/logo-6.webp"
import img7 from "../../assets/logos/logo-7.webp"
import img8 from "../../assets/logos/logo-8.webp"
import img9 from "../../assets/logos/logo-9.webp"
import img10 from "../../assets/logos/logo-10.webp"
import img11 from "../../assets/logos/logo-11.webp"
import img12 from "../../assets/logos/logo-12.webp"
import img13 from "../../assets/logos/logo-13.webp"
import img14 from "../../assets/logos/logo-14.webp"
import img15 from "../../assets/logos/logo-15.webp"
import img16 from "../../assets/logos/logo-16.webp"
import img17 from "../../assets/logos/logo-17.webp"
import img18 from "../../assets/logos/logo-18.webp"
import img19 from "../../assets/logos/logo-19.webp"
import img20 from "../../assets/logos/logo-20.webp"
import img21 from "../../assets/logos/logo-21.webp"
import img22 from "../../assets/logos/logo-22.webp"
import img23 from "../../assets/logos/logo-23.webp"
import img24 from "../../assets/logos/logo-24.webp"
import img25 from "../../assets/logos/logo-25.webp"
import img26 from "../../assets/logos/logo-26.webp"
import img27 from "../../assets/logos/logo-27.webp"
import img28 from "../../assets/logos/logo-28.webp"
import img29 from "../../assets/logos/logo-29.webp"
import img30 from "../../assets/logos/logo-30.webp"
import img31 from "../../assets/logos/logo-30.webp"
import img32 from "../../assets/logos/logo-31.webp"

import "./brands.scss"
import { useTranslation } from 'react-i18next'

const Brands = () => {
  const { t } = useTranslation()

  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32]

  return (
    <div className='brands container'>
      <h3 className="brands-title">{t("Бренды")}</h3>

      <div className="brands__imgs">
        {
          imgs?.map((el, inx) => (
            <img key={inx} className='brands__imgs-img' src={el} alt="brands img" />
          ))
        }
      </div>

    </div>
  )
}

export default Brands