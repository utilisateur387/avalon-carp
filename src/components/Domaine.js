import { useTranslation, Trans } from 'react-i18next';

const Domaine = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="page-domaine">
      <img src="images/domaine/img-background-domaine.png" className="img-background" alt="lac"/> 
      
      <div className="empty-first-container"></div>

      <div className="container-child">
        <h1 className="uppercase white w-1/3"><Trans i18nKey="domaine.h1-01">Découvrez tout ce que le domaine avalon carp a à vous offrir.</Trans></h1>
      </div>

      <div className="container-full bg-green">
        <div className="container-child">
          
          <div className="bg-blur w-7/12 text-white -z-10 px-16 py-14">
            <div>
              <h3><Trans i18nKey="domaine.h3-01">Situé en pleine forêt dans un cadre calme et reposant, AVALON est l’endroit idéal pour se déconnecter du quotidien et profiter de la nature.</Trans></h3>
              <div className="flex justify-center space-x-10 mb-5">
                <div className="inline-flex flex-col items-center w-3/12">
                  <img src="images/domaine/picto-sanitaires.svg" class="picto-domaine" alt="Icone sanitaires" />
                  <h3><Trans i18nKey="domaine.sanitaires">Sanitaires</Trans></h3>
                </div>
                <div className="inline-flex flex-col items-center w-3/12">
                  <img src="images/domaine/picto-clubhouse.svg" class="picto-domaine" alt="Icone clubhouse" />
                  <h3><Trans i18nKey="domaine.clubhouse">Clubhouse</Trans></h3>
                </div>
              </div>
              <div className="flex justify-center space-x-10">
                <div className="inline-flex flex-col items-center w-3/12">
                  <img src="images/domaine/picto-recharge.svg" class="picto-domaine" alt="Icone recharge" />
                  <h3><Trans i18nKey="domaine.recharge">Recharge</Trans></h3>
                </div>
                <div className="inline-flex flex-col items-center w-3/12">
                  <img src="images/domaine/picto-wifi.svg" class="picto-domaine" alt="Icone wifi" />
                  <h3><Trans i18nKey="domaine.wifi">Wifi</Trans></h3>
                </div>
              </div>
              <p><Trans i18nKey="domaine.p-01">Avec toute les commodités mises à dispositions (douche, toilettes, club house avec frigo, congélateur, wifi…) tous les éléments sont réunis pour passer un séjour de pêche parfait. Avalon propose (gratuitement) un service journalier pour recharger vos téléphones, ordinateurs ainsi que vos power Bank.</Trans></p>
            </div>
          </div>

          <h1 className="white text-right"><Trans i18nKey="domaine.h1-02">Des <strong>infrastructures</strong> pensées pour <strong>optimiser votre expérience.</strong></Trans></h1>
          <img src="images/domaine/img-domaine-01.png" class="w-7/12" alt="Icone clubhouse" />
        </div>
      </div>

      <div className="container-full bg-mauve">
        <div className="container-child">
          <h1 className="white"><Trans i18nKey="domaine.h1-03">location de matériel, achat d’appâts... <strong>ON A PENSÉ À TOUT !</strong></Trans></h1>
          <img src="images/domaine/img-domaine-02.png" class="w-3/4" alt="Icone clubhouse" />

          <div className="bg-blur w-7/12 text-white -z-10 px-16 py-14">
            <div>
              <h3><Trans i18nKey="domaine.h3-02">Que ce soit en famille ou entre amis, AVALON CARP LAKE saura vous surprendre agréablement, tant au niveau de la qualité de vie qu’au niveau de la pêche.</Trans></h3>
              <div className="flex justify-center space-x-6 mb-5">
                <div className="inline-flex flex-col items-center w-4/12">
                  <img src="images/domaine/picto-materiel.svg" class="picto-domaine" alt="Icone materiel" />
                  <h3 className="text-center"><Trans i18nKey="domaine.location-materiel">Location de matériel</Trans></h3>
                </div>
                <div className="inline-flex flex-col items-center w-4/12">
                  <img src="images/domaine/picto-appats.svg" class="picto-domaine" alt="Icone appats" />
                  <h3 className="text-center"><Trans i18nKey="domaine.achat-appats">Achat<br/>d’appâts</Trans></h3>
                </div>
                <div className="inline-flex flex-col items-center w-4/12">
                  <img src="images/domaine/picto-cabane.svg" class="picto-domaine" alt="Icone cabane" />
                  <h3 className="text-center"><Trans i18nKey="domaine.cabanes">Cabanes de pêche sur chaque poste</Trans></h3>
                </div>
              </div>
            </div>
          </div>

          <p className="white"><Trans i18nKey="domaine.p-02">Avec des profondeurs allant de 1 à 6m ce plan d’eau mystérieux vous réserve de belles surprises. Ici vous pourrez louer : cannes, épuisette, rod-pod, bed chair, level chair etc. Des appâts (bouillettes & pellets) sont également disponibles afin que vous puissiez profiter un maximum de votre séjour.</Trans></p>
        </div>
      </div>

    
      <div className="container-full bg-green">
        <div className="flex container-child">
          <div>
            <div className="">
              <img src="images/domaine/img-domaine-03.png" class="w-full" alt="Icone clubhouse" />
            </div>
            <div className="flex space-x-2">
              <img src="images/domaine/img-domaine-04.png" class="w-5/12" alt="Icone clubhouse" />
              <img src="images/domaine/img-domaine-05.png" class="w-7/12" alt="Icone clubhouse" />
            </div>
          </div>

          <div className="flex items-end flex-col">
            <h1 className="white text-right w-7/12"><Trans i18nKey="domaine.h1-04">plusieurs centaines de poissons vous attendent !</Trans></h1>

            <div className="bg-blur text-white px-16 py-14">
              <div>
                <div className="flex justify-end">
                  <h3 className="bold text-right w-8/12"><Trans i18nKey="domaine.h3-07">Carpes miroir & communes hors normes et silures très combatifs grâce à une eau pure de très grande qualité et de grande profondeur.</Trans></h3>
                </div>
                <div className="flex justify-center space-x-6 mb-5">
                  <div className="inline-flex flex-col items-center w-3/12">
                    <img src="images/domaine/picto-carp.svg" class="picto-domaine" alt="Icone carp" />
                    <h3 className="text-center"><Trans i18nKey="domaine.carp">Carp</Trans></h3>
                  </div>
                  <div className="inline-flex flex-col items-center w-3/12">
                    <img src="images/domaine/picto-catfish.svg" class="picto-domaine" alt="Icone catfish" />
                    <h3 className="text-center"><Trans i18nKey="domaine.catfish">Catfish</Trans></h3>
                  </div>
                  <div className="inline-flex flex-col items-center w-3/12">
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

          <div className="flex space-x-3 justify-center my-5">
            <img src="images/domaine/img-domaine-galerie-01.png" alt="" className='max-w-[32%]'/>
            <img src="images/domaine/img-domaine-galerie-02.png" alt="" className='max-w-[32%]'/>
            <img src="images/domaine/img-domaine-galerie-03.png" alt="" className='max-w-[32%]'/>
          </div>

          <a href="/galerie">
            <button className="cta cta-green"><Trans i18nKey="domaine.galerie-photos">GALERIE DE PHOTOS</Trans></button>
          </a>
        </div>
      </div> 
    
    </div>
  )
}

export default Domaine;