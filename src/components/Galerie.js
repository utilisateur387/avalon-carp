import { useTranslation, Trans } from 'react-i18next';
import ContactForm from './ContactForm';

const Galerie = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className='page-galerie'>
      <div className="container-child">
        <h1 className='text-center green mb-10'><Trans i18nKey="galerie.h1">DÉCOUVREZ LES PLUS BELLES PHOTOS DE AVALON CARP LAKE.</Trans></h1>
          
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <img src="images/galerie/img-galerie-46.jpg" alt="" />
          <img src="images/galerie/img-galerie-47.jpg" alt="" />
          <img src="images/galerie/img-galerie-48.jpg" alt="" />
          <img src="images/galerie/img-galerie-49.jpg" alt="" />
          <img src="images/galerie/img-galerie-50.jpg" alt="" />
          <img src="images/galerie/img-galerie-51.jpg" alt="" />
          <img src="images/galerie/img-galerie-52.jpg" alt="" />
          <img src="images/galerie/img-galerie-53.jpg" alt="" />
          <img src="images/galerie/img-galerie-54.jpg" alt="" />
          <img src="images/galerie/img-galerie-55.jpg" alt="" />
          <img src="images/galerie/img-galerie-56.jpg" alt="" />
          <img src="images/galerie/img-galerie-57.jpg" alt="" />
          <img src="images/galerie/img-galerie-58.jpg" alt="" />
          <img src="images/galerie/img-galerie-59.jpg" alt="" />
          <img src="images/galerie/img-galerie-60.jpg" alt="" />
          <img src="images/galerie/img-galerie-61.jpg" alt="" />
          <img src="images/galerie/img-galerie-62.jpg" alt="" />
          <img src="images/galerie/img-galerie-63.jpg" alt="" />
          <img src="images/galerie/img-galerie-64.jpg" alt="" />
          <img src="images/galerie/img-galerie-65.jpg" alt="" />
          <img src="images/galerie/img-galerie-66.jpg" alt="" />
          <img src="images/galerie/img-galerie-67.jpg" alt="" />
          <img src="images/galerie/img-galerie-68.jpg" alt="" />
          <img src="images/galerie/img-galerie-69.jpg" alt="" />
          <img src="images/galerie/img-galerie-70.jpg" alt="" />
          <img src="images/galerie/img-galerie-71.jpg" alt="" />
          <img src="images/galerie/img-galerie-72.jpg" alt="" />
          <img src="images/galerie/img-galerie-73.jpg" alt="" />
          <img src="images/galerie/img-galerie-74.jpg" alt="" />
          <img src="images/galerie/img-galerie-75.jpg" alt="" />
          <img src="images/galerie/img-galerie-76.jpg" alt="" />
          <img src="images/galerie/img-galerie-77.jpg" alt="" />
          <img src="images/galerie/img-galerie-78.jpg" alt="" />
          <img src="images/galerie/img-galerie-79.jpg" alt="" />
          <img src="images/galerie/img-galerie-80.jpg" alt="" />
          <img src="images/galerie/img-galerie-81.jpg" alt="" />
          <img src="images/galerie/img-galerie-82.jpg" alt="" />
          <img src="images/galerie/img-galerie-83.jpg" alt="" />
          <img src="images/galerie/img-galerie-84.jpg" alt="" />
          <img src="images/galerie/img-galerie-85.jpg" alt="" />
        </div>
      </div>

      <div className="container-full bg-beige">
        <div className="container-child">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Galerie;