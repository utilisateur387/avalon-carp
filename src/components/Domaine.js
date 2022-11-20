import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

const Domaine = ({scrollTop}) => {
  const { t, i18n } = useTranslation();

  const handleClickLink = () => {
    scrollTop()
  }

  return (
    <div className="page-domaine">
      <img src="images/domaine/img-background-domaine.jpg" className="img-background" alt="lac"/> 
      
      <div className="empty-first-container flex items-end">
        <div className="container-child">
          <h1 className="uppercase white md:w-5/12 sm:w-full"><Trans i18nKey="domaine.h1-01">Découvrez tout ce que le domaine avalon carp a à vous offrir.</Trans></h1>
        </div>
      </div>

      <div className="caret-down">
        <img src="images/picto-caret-down.svg" alt="" />
      </div>

      <div className="container-full bg-green">
        <div className="container-child block md:flex space-x-4">
          <div className="bg-blur md:w-5/12 flex-none sm:w-full text-white px-16 py-14 z-10 mb-8">
            <div>
              <h3><Trans i18nKey="domaine.h3-01">Situé en pleine forêt dans un cadre calme et reposant, AVALON est l’endroit idéal pour se déconnecter du quotidien et profiter de la nature.</Trans></h3>
              <div className="flex justify-center space-x-10 mb-5 mt-8">
                <div className="inline-flex flex-col items-center text-center w-3/12">
                  <img src="images/domaine/picto-sanitaires.svg" class="picto-domaine" alt="Icone sanitaires" />
                  <h3><Trans i18nKey="domaine.sanitaires">Sanitaires</Trans></h3>
                </div>
                <div className="inline-flex flex-col items-center text-center w-3/12">
                  <img src="images/domaine/picto-clubhouse.svg" class="picto-domaine" alt="Icone clubhouse" />
                  <h3><Trans i18nKey="domaine.clubhouse">Clubhouse</Trans></h3>
                </div>
              </div>
              <div className="flex justify-center space-x-10 mb-8">
                <div className="inline-flex flex-col items-center text-center w-3/12">
                  <img src="images/domaine/picto-recharge.svg" class="picto-domaine" alt="Icone recharge" />
                  <h3><Trans i18nKey="domaine.recharge">Recharge</Trans></h3>
                </div>
                <div className="inline-flex flex-col items-center text-center w-3/12">
                  <img src="images/domaine/picto-wifi.svg" class="picto-domaine" alt="Icone wifi" />
                  <h3><Trans i18nKey="domaine.wifi">Wifi</Trans></h3>
                </div>
              </div>
              <p><Trans i18nKey="domaine.p-01">Avec toute les commodités mises à dispositions (douche, toilettes, club house avec frigo, congélateur, wifi…) tous les éléments sont réunis pour passer un séjour de pêche parfait. Avalon propose (gratuitement) un service journalier pour recharger vos téléphones, ordinateurs ainsi que vos power Bank.</Trans></p>
            </div>
          </div>

          <div>
            <h1 className="white text-left md:text-right mb-10 mt-16 md:mt-0"><Trans i18nKey="domaine.h1-02">Des <strong>infrastructures</strong> pensées pour <strong>optimiser votre expérience.</strong></Trans></h1>
            <img src="images/domaine/img-domaine-01.png" class="md:-translate-x-24" alt="Icone clubhouse" />
          </div>
        </div>
      </div>

      <div className="container-full bg-mauve">
        <div className="container-child block md:flex md:space-x-4">
          <div className='z-10 w-full md:w-1/2 flex-none'>
            <h1 className="white mb-8"><Trans i18nKey="domaine.h1-03">location de matériel, achat d’appâts... <strong>ON A PENSÉ À TOUT !</strong></Trans></h1>
            <div className="bg-blur text-white -z-10 px-16 py-14 mb-5">
              <div>
                <h3 className='mb-8'><Trans i18nKey="domaine.h3-02">Que ce soit en famille ou entre amis, AVALON CARP LAKE saura vous surprendre agréablement, tant au niveau de la qualité de vie qu’au niveau de la pêche.</Trans></h3>
                <div className="flex justify-center space-x-6 mb-5">
                  <div className="inline-flex flex-col items-center w-4/12">
                    <img src="images/domaine/picto-materiel.svg" class="picto-domaine" alt="Icone materiel" />
                    <h3 className="text-center font-normal"><Trans i18nKey="domaine.location-materiel">Location de matériel</Trans></h3>
                  </div>
                  <div className="inline-flex flex-col items-center w-4/12">
                    <img src="images/domaine/picto-appats.svg" class="picto-domaine" alt="Icone appats" />
                    <h3 className="text-center font-normal"><Trans i18nKey="domaine.achat-appats">Achat<br/>d’appâts</Trans></h3>
                  </div>
                  <div className="inline-flex flex-col items-center w-4/12">
                    <img src="images/domaine/picto-cabane.svg" class="picto-domaine" alt="Icone cabane" />
                    <h3 className="text-center font-normal"><Trans i18nKey="domaine.cabanes">Cabanes de pêche sur chaque poste</Trans></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src="images/domaine/img-domaine-02.png" className="origin-top-right md:scale-125 w-screen md:w-full max-w-none md:max-w-full -translate-x-[32px]  md:translate-x-0" alt="" />
            <div className="md:grid grid-cols-6">
              <div className='col-span-1'></div>
              <p className="white md:translate-y-32 block md:col-span-4 mt-[3rem] md:mt-auto">
                <Trans i18nKey="domaine.p-02">Avec des profondeurs allant de 1 à 6m ce plan d’eau mystérieux vous réserve de belles surprises. Ici vous pourrez louer : cannes, épuisette, rod-pod, bed chair, level chair etc. Des appâts (bouillettes & pellets) sont également disponibles afin que vous puissiez profiter un maximum de votre séjour.</Trans>
              </p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="container-full bg-green">
        <div className="container-child block md:flex md:space-x-4">
          {/* IMAGES */}
          <h1 className="white text-left md:text-right w-full md:w-8/12 mb-10 block md:hidden"><Trans i18nKey="domaine.h1-04">plusieurs centaines de poissons vous attendent !</Trans></h1>

          <div className='w-full md:w-1/2 flex-none origin-top-left md:scale-[115%] mb-10'>
            <div className="mb-4">
              <img src="images/domaine/img-domaine-03.png" class="w-full" alt="" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mb-10">
              <img src="images/domaine/img-domaine-04.png" class="md:col-span-3" alt="" />
              <img src="images/domaine/img-domaine-05.png" class="md:col-span-4" alt="" />
            </div>
          </div>

          {/* TEXTE */}
          <div className="flex items-end flex-col">
            <h1 className="white text-left md:text-right w-8/12 mb-10 hidden md:block"><Trans i18nKey="domaine.h1-04">plusieurs centaines de poissons vous attendent !</Trans></h1>

            <div className="bg-blur text-white px-16 py-14">
              <div>
                <div className="flex justify-end">
                  <h3 className="bold text-right w-8/12 mb-8"><Trans i18nKey="domaine.h3-07">Carpes miroir & communes hors normes et silures très combatifs grâce à une eau pure de très grande qualité et de grande profondeur.</Trans></h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 justify-between gap-6 mb-5 mx-auto">
                  <div className="inline-flex flex-col items-center">
                    <img src="images/domaine/picto-carp.svg" class="picto-domaine" alt="Icone carp" />
                    <h3 className="text-center"><Trans i18nKey="domaine.carp">Carp</Trans></h3>
                  </div>
                  <div className="inline-flex flex-col items-center">
                    <img src="images/domaine/picto-catfish.svg" class="picto-domaine" alt="Icone catfish" />
                    <h3 className="text-center"><Trans i18nKey="domaine.catfish">Catfish</Trans></h3>
                  </div>
                  <div className="inline-flex flex-col items-center col-span-2 sm:col-span-1">
                    <img src="images/domaine/picto-haute-densite.svg" class="picto-domaine" alt="Icone haute densite" />
                    <h3 className="text-center"><Trans i18nKey="domaine.haute-densite">Haute densité de poissons</Trans></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-full bg-beige">
        <div className="container-child text-center flex justify-center flex-col">
          <h1 className="text-center w-8/12 mx-auto green"><Trans i18nKey="domaine.decouvrez-photos">DÉCOUVREZ <strong>LES PLUS BELLES PHOTOS</strong> DE AVALON CARP LAKE :</Trans></h1>

          <div className="flex sm:space-x-3 justify-center my-5">
            <img src="images/domaine/img-domaine-galerie-01.png" alt="" className='max-w-[32%] hidden sm:block'/>
            <img src="images/domaine/img-domaine-galerie-02.png" alt="" className='sm:max-w-[32%]'/>
            <img src="images/domaine/img-domaine-galerie-03.png" alt="" className='max-w-[32%] hidden sm:block'/>
          </div>

          <Link to="/galerie" onClick={handleClickLink}>
            <button className="cta cta-green"><Trans i18nKey="domaine.galerie-photos">GALERIE DE PHOTOS</Trans></button>
          </Link>
        </div>
      </div> 
    
    </div>
  )
}

export default Domaine;