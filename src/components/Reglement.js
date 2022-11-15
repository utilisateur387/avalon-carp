import { useTranslation, Trans } from 'react-i18next';

const Reglement = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <img src="images/reglement/img-background-reglement.png" className="img-background" alt="lac"/>
      <div class="empty-first-container"></div>
      <div className="container-full">
        <div className="container-child flex justify-end">
          <h1 class="uppercase white text-right w-5/12">
            <Trans i18nKey="reglement.h1">Quelques règles à connaître pour appréhender au mieux votre visite.</Trans>
          </h1>
        </div>
      </div>
      
      <section className="reglement bg-beige">
        <div className="container-full">
          <div className="container-child lg:columns-3 md:columns-1">
            <div class="reglement-item">
              <img src="images/reglement/picto-horaires.svg" />
              <div>
                <h3><Trans i18nKey="reglement.horaites-title">Horaires de prise et départ des postes</Trans></h3>
                <p><Trans i18nKey="reglement.horaires-p">Prise des postes entre 14h et 17h30. Départ entre 9H et 12H00. Aucun départ ou arrivée ne sera autorisé entre 17H30 et 9H. Merci de prendre vos dispositions. Les semaines de pêche se déroulent du samedi au samedi suivant. Possibilité de séjour sur mesure, nous consulter pour plus d’informations. </Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-confort.svg" />
              <div>
                <h3><Trans i18nKey="reglement.confort-title">Confort</Trans></h3>
                <p><Trans i18nKey="reglement.confort-p">Des cabanes de pêche en bois de 6m2 avec dalle au sol sont mises à disposition sur chacun des 6 postes du plan d’eau. Un état des lieux sera effectué lors de l’arrivée et du départ du pêcheur. Sanitaires (douche, toilettes) sont mis à votre disposition 24h/24h et 7j/7j. Merci de tenir propre ces lieux et de veiller à votre consommation d’eau par respect pour les autres usagers. Seuls les biwy et parapluies-tente de couleur verte ou camouflage sont acceptés. </Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-vehicules.svg" />
              <div>
                <h3><Trans i18nKey="reglement.vehicules-title">véhicules</Trans></h3>
                <p><Trans i18nKey="reglement.vehicules-p">Les véhicules devront être stationnés sur les parkings prévus à cet effet. Interdiction de stationner les véhicules sur les postes. Des charriots sont mis à disposition pour le transfert de matériel sur les postes. </Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-accompagnants.svg" />
              <div>
                <h3><Trans i18nKey="reglement.accompagnants-title">accompagnants</Trans></h3>
                <p><Trans i18nKey="reglement.accompagnants-p">2 accompagnants maximum par pêcheur, gratuit pour les enfants de moins de 12ans. Les accompagnants devront prendre connaissance et respecter le règlement du site. </Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-amorcage.svg" />
              <div>
                <h3><Trans i18nKey="reglement.amorcage-title">amorçage</Trans></h3>
                <p><Trans i18nKey="reglement.amorcage-p">Seuls les amorçages à base de farines, bouilletes, pellets et particules sont autorisés. Asticots, vers de vase, vers de terre sont autorisés si mélangés à de la farine. Les graines et les noix sont INTERDITES hormis le maïs doux. Un contrôle pourra être effectué par un responsable. Les canons à bouillette / catapultes sont interdits. Les embarcations légères type zodiac sont interdites. Bateaux radio commandés sont autorisés. Les surplus d’appâts périmés ou non utilisés ne doivent pas être jetés dans l’étang ni sur les berges avant le départ. </Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-feu.svg" />
              <div>
                <h3><Trans i18nKey="reglement.feu-title">feu/barbecue </Trans></h3>
                <p><Trans i18nKey="reglement.feu-p">Seuls les barbecues sur pied et à gaz sont tolérés (feux au sol interdits). Les cendres froides devront être évacuées dans un sac poubelle et emportées en fin de session. </Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-comportement.svg" />
              <div>
                <h3><Trans i18nKey="reglement.comportement-title">comportement</Trans></h3>
                <p><Trans i18nKey="reglement.comportement-p">Merci de respecter la nature, le calme et la propreté du site. Le domaine Avalon Carp est situé dans une zone naturelle protégée. Le plan d’eau abrite une faune et une flore rares. Tenue correcte exigée dans l’enceinte de l’établissement. Toute consommation de drogues, état d’ébriété manifeste, tapage ou comportement irrespectueux envers les autres personnes entrainera une exclusion définitive sans remboursement des sommes payées et d’éventuelles poursuites judiciaires. De nuit, éclairage le plus discret possible ; les détecteurs de touches et appareils musicaux devront être réglés raisonnablement. Son et éclairages ne doivent pas dépasser la limite du poste. Il est strictement interdit de se baigner, jeter tout déchet, faire la vaisselle, se laver ou faire ses besoins dans le lac ou la nature. Des sanitaires sont mis à dispositions à l’accueil. Ne dégradez pas la végétation, si vous êtes gêné par une branche d’arbre ou autre, merci de prévenir le responsable qui prendra éventuellement les mesures nécessaires. </Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-dechets.svg" />
              <div>
                <h3><Trans i18nKey="reglement.dechets-title">gestion des déchets</Trans></h3>
                <p><Trans i18nKey="reglement.dechets-p">Les postes de pêche seront maintenus propres. Chaque pêcheur est responsable des ses déchets. Il est formellement interdit de jeter des déchets et mégots de cigarettes par terre ou dans le lac. Le poste doit être propre et sans sac poubelle à votre départ ou la caution sera retenue. </Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-divers.svg" />
              <div>
                <h3><Trans i18nKey="reglement.divers-title">divers</Trans></h3>
                <p><Trans i18nKey="reglement.divers-p">Les mineurs doivent être en permanence accompagnés d’un responsable adulte. Chaque pêcheur devra être détenteur d’une assurance responsabilité civile. Des litiges imprévus peuvent toujours survenir. Ils seront tranchés par le gestionnaire ou à défaut le gardien. Dans un but d’équité, toute infraction devra être constatée sans ambiguïté. Les pêcheurs et accompagnants sont prévenus que le site est équipé d’un système de vidéosurveillance ayant pour objet d’assurer la sécurité des biens et des personnes. La société AVALON CARP S.A.S se réserve le droit d’utiliser comme elle le souhaite, toutes les photographies et vidéos réalisées sur le site et ce sans compensation financière d’aucune sorte pour les personnes qui pourraient être vues sur des supports publicitaires. Des poursuites pénales seront engagées en cas de vol, tentative de vol ou de mutilation de poissons. En cas de vol, dégradation ou accident, la responsabilité de l’exploitant ne pourra être mise en cause. Toute personne qui ne respectera pas ce règlement dans son intégralité sera exclue sans délais du site de pêche sans possibilité de remboursement et sans restitution des cautions déposées. Des poursuites judiciaires seront menées si nécessaire suivant la gravité des faits et des dommages subis.</Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-peche.svg" />
              <div>
                <h3><Trans i18nKey="reglement.peche-title">La Pêche/La Capture</Trans></h3>
                <p><Trans i18nKey="reglement.peche-p">Tout matériel (tapis de réception, épuisette...) venant de l’extérieur devra passer par le bac de décontamination. La pêche se pratique UNIQUEMENT EN NO KILL et uniquement de la carpe. Les pêches aux leurres et au vifs sont strictement interdites. Une canne au coup (sans moulinet) par poste est tolérée. Trois cannes par pêcheur. Un seul hameçon par ligne. Les hameçons sans ardillons sont obligatoires (micro ardillon et ardillon complètement écrasé a la pince également acceptés). Aucune canne ne doit rester seule sur le poste. Les têtes des lignes et corps de lignes en tresse sont formellement interdits, de même que les nylons de moins de 28/100 ou plus de 45/100 (sauf tête de ligne de 8m maximum). Le lead-core est interdit. Seuls les montages permettant la libration facile du plomb en cas de casse sont autorisés, une canne sera remontée par un responsable en cours de session pour vérification. Tapis de réception de taille XL toujours humide obligatoire, les tapis de type cradle (berceau) sont obligatoires. Grande épuisette à maille fine et sac de pesée à ARMATURES RIGIDES obligatoires. Toute manipulation de poisson entre le lac et le tapis doit se faire AVEC le sac de pesée à armature rigide et non dans les bras. Les captures doivent être ménagées, humidifiées en permanence et remises à l’eau dans les meilleures conditions. Une seule personne en photo par poisson (le pêcheur uniquement). Des poursuites pénales seront engagées en cas de mutilation de poisson. Tous les poissons doivent être remis en liberté immédiatement après une rapide séance photo à genoux ; le poisson et le tapis seront humidifiés. Obligation de détenir et d’utiliser un désinfectant spécial poisson, à appliquer sur la piqûre de l’hameçon et toute plaie éventuelle. Le pêcheur doit toujours être à proximité des cannes lorsqu’elles sont tendues.</Trans></p>
              </div>
            </div>

            <div class="reglement-item">
              <img src="images/reglement/picto-chiens.svg" />
              <div>
                <h3><Trans i18nKey="reglement.chiens-title">Chiens et animaux domestiques</Trans></h3>
                <p><Trans i18nKey="reglement.chiens-p">Un chien maximum par pêcheur est toléré mais ne devra créer aucune gêne pour les autres pêcheurs (aboiements, agressivité...) et devra être tatoué ou pucé, vacciné et assuré en responsabilité civile. Il devra être tenu en laisse et sous surveillance constante. Interdiction formelle que le chien se baigne ; les excréments devront être ramassés ou la caution pourra être retenue</Trans>.</p>
              </div>
            </div>

            <div className="uppercase text-right">
              <h2 className="bold"><Trans i18nKey="reglement.besoin-precisions">besoin de<br/>précisions ?</Trans></h2>
              <a href="#">
                <button class="cta cta-green"><Trans i18nKey="reglement.contactez-nous">CONTACTEZ-NOUS</Trans></button>  
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reglement;