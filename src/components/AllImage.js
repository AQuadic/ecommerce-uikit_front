import React from 'react'
import { useTranslation } from 'react-i18next';

function AllImage() {
  const { t, i18n } = useTranslation();
  return (
  <>
  <div className="imageall">
  <div className="container">
     <div className="image-info">
         <div className="about">
          
           <h2>{t('imagell_title')}</h2>
         </div>
        <div className="inbut">
            <input type="email" name="" id="" placeholder={t('imagell_input')}/>
            <input type="submit" value={t('imagell_btn')}/>
        </div>
    </div>
  </div>
</div>
  </>
  )
}

export default AllImage