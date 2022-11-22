import { useTranslation, Trans } from 'react-i18next';

const LanguageButtons = ({scrollTop}) => {
  const { i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'EN' },
    fr: { nativeName: 'FR' }
  };

  return (
    <div className="language-buttons-container">
      <div className='mx-auto'>
        <div className="language-buttons bg-green hidden md:flex align-center">
            {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', margin: '0 2px' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
        </div>
      </div>   
    </div>
  )
}

export default LanguageButtons;
