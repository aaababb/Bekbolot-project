import React from 'react'

import facebook from '../../assets/svg/facebook.svg'
import hand from '../../assets/svg/hand.svg'
import instagram from '../../assets/svg/instagram.svg'
import telegram from '../../assets/svg/telegram.svg'
import tiktok from '../../assets/svg/tiktok.svg'
import vk from '../../assets/svg/vk.svg'
import whatsapp from '../../assets/svg/whatsapp.svg'
import youtube from '../../assets/svg/youtube.svg'


import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='all-footer container'>
        <div className='top-footer'>
          <div className='footer-gap'>
              <div className='footer-main-words'>Будьте в курсе новостей </div>
              <div className='footer-small-words'>Подпишитесь на последние обновления и узнавайте о новинках<br/> и специальных предложениях первыми</div>
              <div className='footer-inputs'>
                <input className='footer-input' type='text' placeholder='Адрес электронный почты'/>
                <button className='footer-button'>Подписаться</button>
              </div>
          </div>
          <div className='footer-gap1'>
              <div className='footer-main-words'>Компание ABM</div>
              <div className='footer-small-words'>О компании</div>
              <div className='footer-small-words'>Забота о клиентах</div>
              <div className='footer-small-words'>Маркетинговые акции</div>
              <div className='footer-small-words'>Контакты</div>
          </div>
          <div className='footer-gap'>
              <div className='footer-main-words'>Будь с нами</div>
              <div className='footer-small-words'>Все акции</div>
              <div className='footer-small-words'>Техносервис</div>
              <div className='footer-small-words'>Технобонус</div>
              <div className='footer-small-words'>Подарочные карты</div>
              <div className='footer-small-words'>Техника в кредит</div>
          </div>
          <div className='footer-gap'>
              <div className='footer-main-words'>Интернет-магазин</div>
              <div className='footer-small-words'>Как сделать</div>
              <div className='footer-small-words'>Доставка и оплата</div>
              <div className='footer-small-words'>Условия возврата и обмена</div>
              <div className='footer-small-words'>Официальное уведомление</div>
              <div className='footer-small-words'>Политика конфиденциальности </div>
          </div>
        </div>
        <div  className='main-footer'>
            <img src={youtube}/>
            <img src={telegram}/>
            <img src={vk}/>
            <img src={instagram}/>
            <img src={facebook}/>
            <img src={whatsapp}/>
            <img src={hand}/>
            <img src={tiktok}/>
        </div>
      </div>
    </div>
  )
}

export default Footer