const Offres = () => {
  return (
    <div className="page-offres">
      {/* A CHANGER !!!  */}
      <img src="images/home/img-background-01.png" className="img-background" alt="lac"/> 
      
      <div className="empty-first-container"></div>

      <h1 class="uppercase white">retrouvez ici des formules adaptées à chacun, pour une expérience unique.</h1>
    
      <h2 className="text-center white">découvrez <strong>nos offres</strong></h2>
      <h3 className="text-center white bold uppercase">du 01/03 au 31/10</h3>

      <div class="cards flex">
        <div class="card bg-blur w1/4">
          <h3 class="uppercase">Cette formule comprend :</h3>
          <ul>
            <li>accès au lac</li>
            <li>cabane de pêche</li>
            <li>accès aux sanitaires</li>
            <li>eau potable</li>
            <li>point froid (congélateur)</li>
          </ul>
          <p><small>Service de charge de téléphone inclus.<br/>Semaine complète.</small></p>
        </div>
        <div class="card bg-blur w1/4">
          <h3 class="uppercase">Cette formule comprend :</h3>
          <ul>
            <li>petit déjeuner</li>
            <li>repas du soir</li>
            <li>accès au club house</li>
          </ul>
          <p><small>À préciser lors de la réservation sous peine de manque de disponibilité. <br/>Semaine complète.</small></p>
        </div>
        <div class="card bg-blur w1/4">
          <h3 class="uppercase">Cette formule comprend :</h3>
          <ul>
            <li>3 cannes</li>
            <li>1 rod pod</li>
            <li>1 bed chair</li>
            <li>1 level chair</li>
            <li>1 épuisette</li>
            <li>1 tapis de réception</li>
          </ul>
          <p><small>Service de charge de téléphone inclus.<br/>Semaine complète.</small></p>
        </div>
      </div>

      <h3 className="text-center white">Forfaits personnalisables ; consultez-nous pour plus d’informations. possibilité de locations de matériel et d’achats d’appâts sur place. possibilité de privatisation</h3>
    
      <div className="bg-blur">
        <h3>Conditions de réservation</h3>

        <p>Pour les réservations, il vous sera demandé 50% du montant total. Le règlement daté et signé devra nous être retourné. Envoi de l’acompte par virement bancaire.</p>
        <p>Tout acompte non reçu sous 10 jours entraînera la remise en disponibilité de votre poste.</p>
        <p>Le reste du séjour sera réglé à l’arrivée. <br/>(Envoi de l’acompte à AVALON CARP, 1 route de la Faucherie – 87270 Bonnac-la-Côte, à l’ordre AVALON CARP SAS.</p>
        <p>L’acompte de 50% obligatoire pour toute réservation ne sera remboursé en aucun cas. En cas d’annulation plus de 1 mois avant la date d’arrivée prévue, il pourra être reporté sur une session ultérieure sous 12 mois, si l’annulation intervient moins de 1 mois avant la date d’arrivée, il sera perdu si vous ne venez pas ou il pourra être cédé à un tiers.</p>
        <p>Aucun remboursement, report ou avoir en cas de départ anticipé de la part du pêcheur ne sera effectué quelle qu’en soit la raison.</p>
      </div>

      <a href="">
        <button className="cta">Contactez-nous</button>
      </a>
    </div>
  )
}

export default Offres;