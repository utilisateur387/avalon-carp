const Home = () => {
  // const backgroundImg = `images/home/img-background-01.png`;

  return (
    <div className="home">
      <img src="images/home/img-background-01.png" className="img-background" alt="lac"/>
      <div className="empty-first-container"></div>
      <div className="flex space-x-11">
        <div className="w-5/12 pr-4 pt-20">
          <h1 className="text-white">Un moment de pêche et de détente au coeur des forêts du Limousin.</h1>
          <img src="images/home/carte-france.svg" alt="Carte de la France" className="pt-10 mx-auto" />
        </div>

        <div className="bg-blur w-7/12 text-white -z-10 px-16 py-14">
          <h3 className="mb-8">À SEULEMENT 20MN DU CENTRE DE LIMOGES LE DOMAINE AVALON CARP LAKE EST UN PLAN D’EAU DE 3 HECTARES EXCLUSIVEMENT DÉDIÉ À LA PÊCHE DE LA CARPE EN NO KILL.</h3>
          <hr className="mb-3"/>
          <hr className="mb-8"/>
          <p className="mb-8">Situé sur la commune de Bonnac-la-Côte (87), la pêche des carpes et silures se pratique sur le plan d’eau situé au centre du domaine bordé de forêts sauvages. Avec son cheptel composé de plus de 350 carpes avec une moyenne de 15kg dont quelques-unes de plus de 30kg ainsi qu’une  quinzaine de silures dont certains dépassent les 80kg les carpistes battent souvent leur record personnel pour note plus grand bonheur.</p>
          <h2 className="text-center">AVALON EST LA DESTINATION PARFAITE POUR UN MOMENT DE PÊCHE EN TOUTE TRANQUILLITÉ.</h2>
        </div>
      </div>

      <div>
        <h2 className="white">LAISSEZ-VOUS SURPRENDRE PAR DES PAYSAGES SPECTACULAIRES ET DES POISSONS HORS DU COMMUN. </h2>
        <a href="">
          <button class="cta bg-blur">DÉCOUVRIR LE DOMAINE </button>
        </a>
      </div>

      <section class="contact-form-section">
        <h2 class="text-center mx-auto">PRÉPAREZ DÈS MAINTENANT VOTRE <strong>PROCHAINE SESSION DE PÊCHE.</strong></h2>
        <form action="" className="mx-auto w-6/12">
          <div class="flex">
            <input type="text" placeholder="Nom"/>
            <input type="text" placeholder="Prénom"/>
          </div>
          <div class="flex">
            <input type="text" placeholder="Mail"/>
            <input type="text" placeholder="Téléphone"/>
          </div>
          <input type="text" placeholder="Message"/>
          <div class="flex">
            <input type="submit" value="Envoyer" class="cta cta-green block w-1/2"/>
            <div class="block w-1/2">
              <a href="">
                <button class="cta cta-red">Infos pratiques</button>
              </a>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Home;