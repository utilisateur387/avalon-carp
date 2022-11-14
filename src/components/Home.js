import { useTranslation, Trans } from 'react-i18next';
const Home = () => {
  // const backgroundImg = `images/home/img-background-01.png`;
  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <img src="images/home/img-background-01.png" className="img-background" alt="lac"/>
      <div className="empty-first-container"></div>

      <div className="container-full">
        <h1 className="text-white w-1/3"><Trans i18nKey="home.h1">Un moment de pêche et de détente au coeur des forêts du Limousin.</Trans></h1>
      </div>

      <div className="bg-green">
        <div class="container-full">
          <div className="flex space-x-11 ">
            <div className="w-5/12 pr-4 pt-20">
              <img src="images/home/carte-france.svg" alt="Carte de la France" className="pt-10 mx-auto" />
            </div>
    
            <div className="bg-blur w-7/12 text-white px-16 py-14">
              <h3 className="mb-8"><Trans i18nKey="home.h3-01">À SEULEMENT 20MN DU CENTRE DE LIMOGES LE DOMAINE AVALON CARP LAKE EST UN PLAN D’EAU DE 3 HECTARES EXCLUSIVEMENT DÉDIÉ À LA PÊCHE DE LA CARPE EN NO KILL.</Trans></h3>
              <hr className="mb-3"/>
              <hr className="mb-8"/>
              <p className="mb-8"><Trans i18nKey="home.p-01">Situé sur la commune de Bonnac-la-Côte (87), la pêche des carpes et silures se pratique sur le plan d’eau situé au centre du domaine bordé de forêts sauvages. Avec son cheptel composé de plus de 350 carpes avec une moyenne de 15kg dont quelques-unes de plus de 30kg ainsi qu’une  quinzaine de silures dont certains dépassent les 80kg les carpistes battent souvent leur record personnel pour note plus grand bonheur.</Trans></p>
              <h2 className="text-center"><Trans i18nKey="home.h2-01">AVALON EST LA DESTINATION PARFAITE POUR UN MOMENT DE PÊCHE EN TOUTE TRANQUILLITÉ.</Trans></h2>
            </div>
          </div>
    
          <div>
            <h2 className="white"><Trans i18nKey="home.h2-02">LAISSEZ-VOUS SURPRENDRE PAR DES PAYSAGES SPECTACULAIRES ET DES POISSONS HORS DU COMMUN.</Trans></h2>
            <a href="">
              <button class="cta bg-blur"><Trans i18nKey="home.cta-decouvrir">DÉCOUVRIR LE DOMAINE</Trans></button>
            </a>
          </div>
        </div>
      </div>

      <section class="contact-form-section">
        <h2 class="text-center mx-auto"><Trans i18nKey="home.h2-preparez">PRÉPAREZ DÈS MAINTENANT VOTRE <strong>PROCHAINE SESSION DE PÊCHE.</strong></Trans></h2>
        <form action="" className="mx-auto w-6/12">
          <div class="flex">
            <input type="text" placeholder={t('form.nom')}/>
            <input type="text" placeholder={t('form.prenom')}/>
          </div>
          <div class="flex">
            <input type="text" placeholder={t('form.mail')}/>
            <input type="text" placeholder={t('form.telephone')}/>
          </div>
          <input type="text" placeholder={t('form.message')}/>
          <div class="flex">
            <input type="submit" value={t('form.submit')} class="cta cta-green block w-1/2"/>
            <div class="block w-1/2">
              <a href="">
                <button class="cta cta-red"><Trans i18nKey="form.infos-pratiques">Infos pratiques</Trans></button>
              </a>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Home;