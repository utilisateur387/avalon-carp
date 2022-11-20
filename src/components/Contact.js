import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import ContactForm from "./ContactForm";

const Contact = ({scrollTop}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="page-contact">
      <div className="container-full">
        <div className="container-child block md:flex md:space-x-10 justify-between">
          <div className="green w-full md:w-4/12 flex-none">
            <h1 className="text-center md:text-left mb-10"><Trans i18nKey="form.preparez-maintenant">PRÉPAREZ DÈS MAINTENANT VOTRE <strong>PROCHAINE SESSION DE PÊCHE.</strong></Trans></h1>

            <div className="mb-10">
              <p className="mb-5">
                <span className="uppercase">avalon carp lake</span><br/>
                1 route de la faucherie<br/>
                87270 <span className="uppercase">limoges</span>
              </p>
              <hr className="mb-1"/>
              <hr/>
              <p className="my-5">
                +33 (0)6 71 58 56 24<br/>
                avaloncarplake@gmail.com
              </p>
              <hr className="mb-1"/>
              <hr/>
              <p className="mt-5">
                <Trans i18nKey="footer.horaires">9am to 12pm — 2pm to 5pm</Trans>
              </p>
            </div>
          </div>

          <ContactForm title={false} infosPratiques={false} scrollTop={scrollTop} />
        </div>
      </div>

      <img src="images/contact/img-map.png" alt="" />
    </div>
  )
}

export default Contact;