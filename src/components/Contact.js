import {Link} from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import ContactForm from "./ContactForm";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="page-contact">
      <div className="container-full">
        <div className="container-child flex space-x-8">
          <div className="green w-6/12">
            <h1>Réservez dès à présent votre prochaine session de pêche.</h1>

            <div className="">
              <p className="mb-5">
                avalon carp lake<br/>
                1 route de la faucherie<br/>
                87270 limoges
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

          <ContactForm title={false} infosPratiques={false}  />
        </div>
      </div>

      <img src="images/contact/img-map.png" alt="" />
    </div>
  )
}

export default Contact;