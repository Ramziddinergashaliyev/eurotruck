import React from 'react'
import logo1 from "../../../assets/w-logo.png"
import "./footer.scss"
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { FiMapPin } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='footer'>
      <div className="footer-container container">

        <div className="footer-imgs">
          <img src={logo1} alt="footer left logo" />
        </div>

        <div className="footer-email">
          <p className='footer-email-text'><FiMapPin />
            Ташкентская область, Зангиатинский район, Тарик-Тешар МСГ, улица Ёгду, 119-121-дом
          </p>
        </div>

        <div className="footer-info">
          <a className='footer-info-link' href="tel: +998 71 202 46 62"><FaPhoneAlt />+99870 202 30 20</a>
        </div>

        <div className="footer-email">
          <a className='footer-email-text' href="mailTo: info@eurotruck.uz"><MdOutlineMail />info@rtgparts.uz</a>
        </div>

      </div>

      <p className="footer-bottom-title">{t("2026")}</p>
    </footer>
  )
}

export default Footer