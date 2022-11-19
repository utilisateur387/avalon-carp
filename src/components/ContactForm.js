import {Link} from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import emailjs from 'emailjs-com';

const ContactForm = ({ title = true, infosPratiques = true }) => {
  const { t, i18n } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d692m41', 'template_yhb9gdf', e.target, 'nnuzeqvSI4LXDh3Uw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section class="contact-form-section">
        <div className="container-child">
            {title && 
              <h2 class="text-center mx-auto"><Trans i18nKey="form.preparez-maintenant">PRÉPAREZ DÈS MAINTENANT VOTRE <strong>PROCHAINE SESSION DE PÊCHE.</strong></Trans></h2>
            }
          <form onSubmit={sendEmail} action="" className="mx-auto contact-form">
            <div class="grid md:grid-cols-2 sm:grid-cols-1 md:gap-4">
              <input type="text" placeholder={t('form.nom')} name='lastName' />
              <input type="text" placeholder={t('form.prenom')} name='firstName'/>
            </div>

            <div class="grid md:grid-cols-2 sm:grid-cols-1 md:gap-4">
              <input type="text" placeholder={t('form.mail')} name='email'/>
              <input type="text" placeholder={t('form.telephone')} name='phone'/>
            </div>

            <textarea type="textarea" placeholder={t('form.message')} className="w-full input-message" name='message'/>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              { !infosPratiques &&
                <div></div>
              }
              <input type="submit" value={t('form.submit')} class="cta cta-green block"/>
              { infosPratiques &&
                <Link to="/contact" className="block">
                    <button class="cta cta-red w-full"><Trans i18nKey="form.infos-pratiques">Infos pratiques</Trans></button>
                </Link>
              }
            </div>
          </form>
        </div>
      </section>
  )
}

export default ContactForm;
