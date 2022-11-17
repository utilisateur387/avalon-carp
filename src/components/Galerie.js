import { useTranslation, Trans } from 'react-i18next';
import ContactForm from './ContactForm';

const Galerie = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1 className='text-center green'><Trans i18nKey="galerie.h1">DÉCOUVREZ LES PLUS BELLES PHOTOS DE AVALON CARP LAKE.</Trans></h1>
      
      <div className="container-full bg-beige">
        <div className="container-child">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Galerie;