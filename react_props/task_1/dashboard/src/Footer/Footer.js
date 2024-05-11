import React from 'react';
import { getFooterCopy } from '../utils/utils';
import './Footer.css'


 function Footer() {
    const footerCopy = getFooterCopy(true);
  return (
    <div className="App-footer">
        <p className='CopyRight'>Copyright 2024 - {footerCopy}</p>
    </div>
  )
}
export default Footer;
