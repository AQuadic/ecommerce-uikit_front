import React from 'react'
import { useTranslation } from 'react-i18next';

function Shap() {
const { t, i18n } = useTranslation();
  return (
  
<div className="shap">
 
<div className="allshape">
<div className="part">
  <div className="part1"><img src="./images/Group 208.svg" alt=""/><div className="about1"><h2>{t("us2.head1")}</h2><p>{t("us2.text1")}</p></div></div>
  <div className="part2"><img src="./images/Group 209.svg" alt=""/><div className="about1"><h2>{t("us2.head2")}</h2><p>{t("us2.text2")}</p></div></div>
  <div className="part3"><img src="./images/Group 210.svg" alt=""/><div className="about1"><h2>{t("us2.head3")}</h2><p>{t("us2.text3")}</p></div></div>
</div>
</div>

 
</div>

  )
}

export default Shap