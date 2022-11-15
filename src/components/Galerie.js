import { useTranslation, Trans } from 'react-i18next';

const Galerie = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1 className='text-center green'><Trans i18nKey="galerie.h1">DÉCOUVREZ LES PLUS BELLES PHOTOS DE AVALON CARP LAKE.</Trans></h1>
    </div>
  )
}

export default Galerie;