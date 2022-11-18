import { useTranslation, Trans } from 'react-i18next';
import { Link } from "react-router-dom";

const Offres = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="page-offres">
      <img src="images/offres/img-background-offres.jpg" className="img-background" alt="lac"/> 
      
      <div className="empty-first-container flex items-end">
        <div className="container-child">
          <h1 class="uppercase white md:w-5/12 sm:w-full"><Trans i18nKey="offres.h1">retrouvez ici des formules adaptées à chacun, pour une expérience unique.</Trans></h1>
        </div>
      </div>

      <div className="caret-down">
        <img src="images/picto-caret-down.svg" alt="" />
      </div>

      <div className="container-child offres-main-title">
        <h2 className="text-center white"><Trans i18nKey="offres.decouvrez-offres">découvrez <strong>nos offres</strong></Trans></h2>
        <h3 className="text-center white bold uppercase"><Trans i18nKey="offres.dates">du 01/03 au 31/10</Trans></h3>
      </div>

      <div className="container-full bg-mauve">
        <div class="cards container-child justify-between md:columns-3 sm:columns-1">
          <div class="card bg-blur">
            <div className="flex justify-center offre-picto">
              <img src="images/offres/picto-drive-survive.svg" alt="" />
            </div>
            <h3 class="uppercase bold mb-5"><Trans i18nKey="offres.cette-formule-comprend">Cette formule comprend :</Trans></h3>
            <ul>
              <li><Trans i18nKey="offres.acces-lac">accès au lac</Trans></li>
              <li><Trans i18nKey="offres.cabane-peche">cabane de pêche</Trans></li>
              <li><Trans i18nKey="offres.acces-sanitaires">accès aux sanitaires</Trans></li>
              <li><Trans i18nKey="offres.eau-potable">eau potable</Trans></li>
              <li><Trans i18nKey="offres.point-froid">point froid (congélateur)</Trans></li>
            </ul>
            <p><small><Trans i18nKey="offres.charge-telephone">Séjours de 24h, 2 nuits ou semaine complète.</Trans></small></p>
          </div>
          <div class="card bg-blur">
            <div className="flex justify-center offre-picto">
              <img src="images/offres/picto-food-wild.svg" alt=""/>
            </div>
            <h3 class="uppercase bold mb-5"><Trans i18nKey="offres.cette-formule-comprend">Cette formule comprend :</Trans></h3>
            <ul>
              <li><Trans i18nKey="offres.petit-dejeuner">petit déjeuner</Trans></li>
              <li><Trans i18nKey="offres.repas-soir">repas du soir</Trans></li>
              <li><Trans i18nKey="offres.acces-club-house">accès au club house</Trans></li>
            </ul>
            <p><small><Trans i18nKey="offres.precision-reservation">À préciser lors de la réservation sous peine de manque de disponibilité. <br/>Semaine complète.</Trans></small></p>
          </div>
          <div class="card bg-blur">
            <div className="flex justify-center offre-picto">
              <img src="images/offres/picto-on-the-rod.svg" alt="" />
            </div>
            <h3 class="uppercase bold mb-5"><Trans i18nKey="offres.cette-formule-comprend">Cette formule comprend :</Trans></h3>
            <ul>
              <li><Trans i18nKey="offres.cannes">3 cannes</Trans></li>
              <li><Trans i18nKey="offres.rod-pod">1 rod pod</Trans></li>
              <li><Trans i18nKey="offres.bed-chair">1 bed chair</Trans></li>
              <li><Trans i18nKey="offres.level-chair">1 level chair</Trans></li>
              <li><Trans i18nKey="offres.epuisette">1 épuisette</Trans></li>
              <li><Trans i18nKey="offres.tapis-reception">1 tapis de réception</Trans></li>
            </ul>
            <p><small><Trans i18nKey="offres.formule-03">Ne comprends pas les détecteurs et le petit matériel. <br/>Séjours de 24h, 2 nuits ou semaine complète.</Trans></small></p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center white container-child lg:w-8/12 md:w-full">
            <Trans i18nKey="offres.forfaits-personnalisables">Forfaits personnalisables ; consultez-nous pour plus d’informations. possibilité de locations de matériel et d’achats d’appâts sur place. possibilité de privatisation</Trans>
          </h3>
        </div>
      </div>

      <div className="container-full bg-green">
        <div className="container-child block md:flex md:space-x-4">
          <div className="bg-blur md:w-5/12 w-full flex-none z-10 mb-10">
            <h3 className='mb-4'><Trans i18nKey="offres.conditions-reservation">Conditions de réservation</Trans></h3>

            <p><Trans i18nKey="offres.p-01">Pour les réservations, il vous sera demandé 50% du montant total. Le règlement daté et signé devra nous être retourné. Envoi de l’acompte par virement bancaire.</Trans></p>
            <p><Trans i18nKey="offres.p-02">Tout acompte non reçu sous 10 jours entraînera la remise en disponibilité de votre poste.</Trans></p>
            <p><Trans i18nKey="offres.p-03">Le reste du séjour sera réglé à l’arrivée. <br/>(Envoi de l’acompte à AVALON CARP, 1 route de la Faucherie – 87270 Bonnac-la-Côte, à l’ordre AVALON CARP SAS.</Trans></p>
            <p><Trans i18nKey="offres.p-04">L’acompte de 50% obligatoire pour toute réservation ne sera remboursé en aucun cas. En cas d’annulation plus de 1 mois avant la date d’arrivée prévue, il pourra être reporté sur une session ultérieure sous 12 mois, si l’annulation intervient moins de 1 mois avant la date d’arrivée, il sera perdu si vous ne venez pas ou il pourra être cédé à un tiers.</Trans></p>
            <p><Trans i18nKey="offres.p-05">Aucun remboursement, report ou avoir en cas de départ anticipé de la part du pêcheur ne sera effectué quelle qu’en soit la raison.</Trans></p>
          </div>

          <div className='flex items-end flex-col'>
            <img src="images/offres/img-equipe-02.jpg" className="origin-top-right md:scale-[115%] w-screen md:w-full max-w-none md:max-w-full md:mt-10 md:mb-[5rem] translate-x-[32px] md:translate-x-0" alt="" />
            <Link to="/contact" className='z-10 mt-10 md:mt-0 w-full md:w-fit'>
              <button className="cta cta-beige w-full md:w-fit"><Trans i18nKey="offres.contactez-nous">Contactez-nous</Trans></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offres;