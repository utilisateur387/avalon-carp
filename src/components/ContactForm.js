import {Link} from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

const ContactForm = ({ title = true, infosPratiques = true }) => {
  const { t, i18n } = useTranslation();

  return (
    <section class="contact-form-section">
        <div className="container-child">
            {title && 
            <h2 class="text-center mx-auto"><Trans i18nKey="form.preparez-maintenant">PRÉPAREZ DÈS MAINTENANT VOTRE <strong>PROCHAINE SESSION DE PÊCHE.</strong></Trans></h2>
            }
          <form action="" className="mx-auto contact-form">
            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder={t('form.nom')}/>
              <input type="text" placeholder={t('form.prenom')}/>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder={t('form.mail')}/>
              <input type="text" placeholder={t('form.telephone')}/>
            </div>

            <textarea type="textarea" placeholder={t('form.message')} className="w-full input-message"/>

            <div class="grid grid-cols-2 gap-4">
              { !infosPratiques &&
                <div></div>
              }
              <input type="submit" value={t('form.submit')} class="cta cta-green block"/>
              { infosPratiques &&
                <a href="" className="block">
                    <button class="cta cta-red w-full"><Trans i18nKey="form.infos-pratiques">Infos pratiques</Trans></button>
                </a>
              }
            </div>
          </form>
        </div>
      </section>
  )
}

export default ContactForm;
