const Domaine = () => {
  return (
    <div className="page-domaine">
      <img src="images/domaine/img-background-domaine.png" className="img-background" alt="lac"/> 
      
      <div className="empty-first-container"></div>

      <h1 className="uppercase white">Découvrez tout ce que le domaine avalon carp a à vous offrir.</h1>

      <div className="bg-blur w-7/12 text-white -z-10 px-16 py-14">
        <div>
          <h3>Situé en pleine forêt dans un cadre calme et reposant, AVALON est l’endroit idéal pour se déconnecter du quotidien et profiter de la nature.</h3>
          <div className="flex justify-center space-x-10 mb-5">
            <div className="inline-flex flex-col items-center w-3/12">
              <img src="images/domaine/picto-sanitaires.svg" class="picto-domaine" alt="Icone sanitaires" />
              <h3>Sanitaires</h3>
            </div>
            <div className="inline-flex flex-col items-center w-3/12">
              <img src="images/domaine/picto-clubhouse.svg" class="picto-domaine" alt="Icone clubhouse" />
              <h3>Clubhouse</h3>
            </div>
          </div>
          <div className="flex justify-center space-x-10">
            <div className="inline-flex flex-col items-center w-3/12">
              <img src="images/domaine/picto-recharge.svg" class="picto-domaine" alt="Icone recharge" />
              <h3>Recharge</h3>
            </div>
            <div className="inline-flex flex-col items-center w-3/12">
              <img src="images/domaine/picto-wifi.svg" class="picto-domaine" alt="Icone wifi" />
              <h3>Wifi</h3>
            </div>
          </div>
          <p>Avec toute les commodités mises à dispositions (douche, toilettes, club house avec frigo, congélateur, wifi…) tous les éléments sont réunis pour passer un séjour de pêche parfait. Avalon propose (gratuitement) un service journalier pour recharger vos téléphones, ordinateurs ainsi que vos power Bank.</p>
        </div>
      </div>

      <h1 className="white text-right">Des <strong>infrastructures</strong> pensées pour <strong>optimiser votre expérience.</strong></h1>
      <img src="images/domaine/img-domaine-01.png" class="" alt="Icone clubhouse" />

      <h1 className="white">location de matériel, achat d’appâts... <strong>ON A PENSÉ À TOUT !</strong></h1>
      <img src="images/domaine/img-domaine-02.png" class="" alt="Icone clubhouse" />

      <div className="bg-blur w-7/12 text-white -z-10 px-16 py-14">
        <div>
          <h3>Que ce soit en famille ou entre amis, AVALON CARP LAKE saura vous surprendre agréablement, tant au niveau de la qualité de vie qu’au niveau de la pêche.</h3>
          <div className="flex justify-center space-x-6 mb-5">
            <div className="inline-flex flex-col items-center w-4/12">
              <img src="images/domaine/picto-materiel.svg" class="picto-domaine" alt="Icone materiel" />
              <h3 className="text-center">Location de matériel</h3>
            </div>
            <div className="inline-flex flex-col items-center w-4/12">
              <img src="images/domaine/picto-appats.svg" class="picto-domaine" alt="Icone appats" />
              <h3 className="text-center">Achat<br/>d’appâts</h3>
            </div>
            <div className="inline-flex flex-col items-center w-4/12">
              <img src="images/domaine/picto-cabane.svg" class="picto-domaine" alt="Icone cabane" />
              <h3 className="text-center">Cabanes de pêche sur chaque poste</h3>
            </div>
          </div>
        </div>
      </div>

      <p className="white">Avec des profondeurs allant de 1 à 6m ce plan d’eau mystérieux vous réserve de belles surprises. Ici vous pourrez louer : cannes, épuisette, rod-pod, bed chair, level chair etc. Des appâts (bouillettes & pellets) sont également disponibles afin que vous puissiez profiter un maximum de votre séjour.</p>
    
      <div className="flex">
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
          <h1 className="white text-right w-7/12">plusieurs centaines de poissons vous attendent !</h1>

          <div className="bg-blur text-white px-16 py-14">
            <div>
              <div className="flex justify-end">
                <h3 className="bold text-right w-8/12">Carpes miroir & communes hors normes et silures très combatifs grâce à une eau pure de très grande qualité et de grande profondeur.</h3>
              </div>
              <div className="flex justify-center space-x-6 mb-5">
                <div className="inline-flex flex-col items-center w-3/12">
                  <img src="images/domaine/picto-carp.svg" class="picto-domaine" alt="Icone carp" />
                  <h3 className="text-center">Carp</h3>
                </div>
                <div className="inline-flex flex-col items-center w-3/12">
                  <img src="images/domaine/picto-catfish.svg" class="picto-domaine" alt="Icone catfish" />
                  <h3 className="text-center">Catfish</h3>
                </div>
                <div className="inline-flex flex-col items-center w-3/12">
                  <img src="images/domaine/picto-haute-densite.svg" class="picto-domaine" alt="Icone haute densite" />
                  <h3 className="text-center">Haute densité de poissons</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center flex justify-center flex-col">
        <h1 className="text-center w-6/12 mx-auto">DÉCOUVREZ <strong>LES PLUS BELLES PHOTOS</strong> DE AVALON CARP LAKE :</h1>

        <a href="">
          <button className="cta cta-green">GALERIE DE PHOTOS</button>
        </a>
      </div>
    </div>
  )
}

export default Domaine;