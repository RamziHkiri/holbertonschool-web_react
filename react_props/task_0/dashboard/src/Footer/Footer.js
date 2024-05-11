import React from 'react'
import './Footer.css'
import { getFooterCopy } from '../utils/utils';

 function Footer() {
    const footerCopy = getFooterCopy(true);
  return (
    <div className="App-footer">
        <p className='CopyRight'>Copyright 2024 - {footerCopy}</p>
    </div>
  )
}
export default Footer;
