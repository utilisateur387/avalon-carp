import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          "nav": {
            "link1": "The Site",
            "link2": "Offers",
            "link3": "Rules",
            "link4": "Contact Us"
          },
          "home": {
            "h1": "A break fishing and relaxing in the heart of the French forests of the Limousin.",
            "h3-01": "ONLY 20 MINUTES FROM THE CENTER OF LIMOGES, AVALON CARP LAKE IS A 3 HECTARS LAKE EXCLUSIVELY DEDICATED TO NO KILL CARP FISHING.",
            "p-01": "Avalon Carp Lake, situated only 20mins from the centre of Limoges, in the commune of Bonnac-la-Côte (87), is 7 acre water exclusively dedicated to carp and catfish. The lake is in the middle of a site bordered by wild forests. With a stock of about 350 carp with an average weight of 15kg including some which are more than 30kg and about 15 catfish reaching 80kg we are happy to note that carp fishermen often beat their personal best here.",
            "h2-01": "Avalon is the perfect destination for a fishing session in peace and quiet.",
            "h2-02": "Let us surprise you with spectacular countryside and extraordinary fish.",
            "cta-decouvrir": "DISCOVER THE SITE",
          },
          "form": {
            "nom": "Surname",
            "prenom": "First name",
            "mail": "E-mail",
            "telephone": "Telephone number",
            "message": "Message",
            "submit": "Send",
            "infos-pratiques": "Practical information",
            "preparez-maintenant": "START PREPARING YOUR NEXT FISHING SESSION NOW</strong>"
          },
          "domaine": {
            "h1-01": "Discover everything that the site has to offer you.",
            "h3-01": "Situated in the middle of a forest on a site which is quiet and relaxing, Avalon is the ideal place to switch off from your daily routine and make the most of nature.",
            "sanitaires": "Toilets and shower",
            "clubhouse": "Club house",
            "recharge": "Charging point",
            "wifi": "Wifi",
            "p-01": "With facilities available to fishermen (shower, toilets, club house with fridge and freezer space, wifi…) all the elements are in place so you can spend the perfect fishing break.  Avalon also offers (free) a charging point for your telephones, tablets, laptops and power packs.",
            "h1-02": "<strong>Everything</strong> has been thought about so you can <strong>optimise your experience.</strong>",
            "h1-03": "Need to hire material or buy bait... <strong>WE HAVE THOUGHT OF EVERYTHING!</strong>",
            "h3-02": "Whether it’s with family or a group of friends, Avalon Carp Lake will pleasantly surprise you, either with the quality of the environment or the standard of fishing.",
            "location-materiel": "Material rentals",
            "achat-appats": "Bait<br/>purchase",
            "cabanes": "Fishing cabins on every post",
            "p-02": "With depths of between 1 and 6 meters this mysterious lake promises you some nice surprises. On site you can rent : rods, nets, rod-pods, bed-chairs, fishing chairs, etc…  Baits (boillies and pellets) are also available so that you can make tha most of your holiday.",
            "h1-04": "Hundreds of fish are waiting for you !",
            "h3-07": "Extraordinary mirror carp, fabulous commons and strong fighting catfish thanks to very good quality pure deep water.",
            "carp": "Carp",
            "catfish": "Catfish",
            "haute-densite": "High fish density",
            "decouvrez-photos": "DISCOVER <strong>THE BEST PHOTOS</strong> OF AVALON CARP LAKE:",
            "galerie-photos": "PHOTO GALLERY"
          },
          "reglement": {
            "h1": "Just a few rules to be aware of to help you make the most of your stay.",
            "horaites-title": "Arriving and departing your posts",
            "horaires-p": "You can arrive at the lake between 2pm and 5.30pm and on the morning of departure you must leave the lake by midday.  No departures or arrivals are authorised between 5.30pm and 9am.  Weekly sessions on the lake are from Saturday to Saturday. It may be possible to organise your stay differently to suit you, contact us for more information. ",
            "confort-title": "Comfort",
            "confort-p": "Wooden fishing cabins (6m2) with a raised floor are available on each of the 6 fishing posts on the lake. An inspection will be done on arrival and departure of each angler. The toilets and showers are available 24/7 please keep them clean and be careful with your water usage out of respect for other users. Only green or camouflage biwys or brollys are allowed. ",
            "vehicules-title": "vehicles",
            "vehicules-p": "Vehicles should be parked in the parking places provided. It is prohibited to park your vehicle on the post. Carp barrows are available for taking your fishing gear to the post. ",
            "accompagnants-title": "guests",
            "accompagnants-p": "2 guests maximum (non fishing) per angler. Children under 12 years are free. All guests should be aware of and respect the rules of the lake and are the responsibility of the angler. ",
            "amorcage-title": "baiting",
            "amorcage-p": "Only bait based on flour, boillies, pellets and particles are authorised. Maggots, earthworms and bloodworms are authorised if mixed in flour based bait. Grains and nuts are PROHIBITED except prepared corn. A bailiff can come and inspect baits at any time. Boillie cannons and catapults are PROHIBITED. Small rowing boats are PROHIBITED. Remote controlled bait boats are authorised. Any out of date or leftover bait should not be thrown into the lake. The bailiff will dispose of it properly.",
            "feu-title": "fires/barbeques",
            "feu-p": "Only gas barbeques or barbeques on legs are authorised (campfires and any fires on the ground are prohibited). Cold cinders are to be taken away at the end of the session.",
            "comportement-title": "behaviour",
            "comportement-p": "Avalon Carp Lake is situated in a protected zone due to the lake being home to some rare flora and fauna. All anglers are requested to respect the nature, tranquillity and cleanliness of the site. The anglers are expected to wear appropriate clothing whilst on the site. Any drug taking, drunkenness, loudness or lack of respect towards other people will result in an exclusion from the lake without refund and could lead to prosecution. During the night all sound and lights, (detectors, headlights, music, videos) should be as discrete as possible and shouldn’t exceed the limits of the fishing post. It is strictly prohibited to swim, throw rubbish, do washing-up, wash yourself or anything else or use the lake or surroundings as a toilet. Facilities are provided at the reception. Anglers must not damage the vegetation. If you are bothered by bushes, branches, trees etc. tell the bailiff who will take the necessary measures.",
            "dechets-title": "rubbish",
            "dechets-p": "All of the fishing posts are kept clean. Each angler is responsible for his rubbish. On departure the posts should be clean with no rubbish or cigarette buts on the ground and no bin bags left behind. Failure to do this will mean the loss of the deposit. ",
            "divers-title": "miscellaneous",
            "divers-p": "Under 18’s must always be accompanied by a responsible adult. Each fisherman must carry his or her own public liability insurance. Unexpected dispute can occur. They will be settled by the manager or, failing that, the keeper. Every infraction must be unambiguously observed to achieve equity. Anglers and guests should be aware that the site is equipped with CCTV for the safety and security of all people and property. AVALON CARP S.A.S reserves the right to use, as it wishes, every photographs and videos taken on site without financial compensation for the people who might appear on advertising media. Criminal prosecution will be initiated in case of theft of fish mutilation. In case of theft, degradation or accident, the owner responsibility can not be accused. Any person who disrespect this regulation in its entirety will be excluded without delay from the site with no right to any credit refund or indemnity, and with no deposit restitution. Legal proceeding will be led if necessary depending on the seriousness of the facts and damages suffered.",
            "peche-title": "Fishing/Catching",
            "peche-p": "All materiel (nets, slings, unhooking mats, etc) coming in from outside the lake must be placed in a bath of disinfectant for at least 15 mins. All fishing on the site is strictly NO KILL, and is only for carp. Fishing with lures and live bait is prohibited. One pole (without reel) per post is allowed. 3 rods per fisherman are allowed with only one hook per line. Only barbless hooks are allowed (microbarb and flattened barbs are accepted). Rods are never to be left unattended on the posts. End tackle should be respectful of the fish and rigs should allow the lead to be freely dropped in cases of broken lines. Leadcore is prohibited as well as nylon rigs of below 28/100 or over 45/100. The bailiff can ask for lines to be reeled in in order to verify end tackle. An extra large unhooking mat is demanded and should be kept wet at all times. Cradles are obligatory as well as a large net with fine mesh and a weighing sling with rigid handles. Any movement of the fish between the lake and the mat should be done with the weighing sling and not in your arms. And catches should be looked after, constantly wet down and released into the water in the best conditions possible. One person on each photo of the fish (the fisherman who caught it) and photos should be limited to reduce the stress on the fish. Legal action will be taken in the case of any mutilation or bad handling of the fish. All catches should be released as quickly as possible. All fishermen should carry carp clinic, or other disinfectant for treating fish, and treat the site of the capture or any other wounds on the fish before release. The fisherman must always be close to his rods once they are in the water.",
            "chiens-title": "Dogs",
            "chiens-p": "Maximum 1 dog per angler is allowed but must not cause problems for other anglers (barking, aggression, etc). The dog must be identifiable by a chip or tattoo and vaccinated .The dog must be kept on a lead and under the control of the angler at all times. Swimming in the lake is prohibited and all the dog mess must be cleaned from the post or the deposit will not be refunded.",
            "besoin-precisions": "Need more<br/>information ?",
            "contactez-nous": "CONTACT US"
          },
          "footer": {
            "link1": "Home",
            "link2": "The Site",
            "link3": "Rules",
            "link4": "Contact us",
            "horaires": "9am to 12pm — 2pm to 5pm",
            "link5": "Privacy policy",
            "link6": "Legal notices"
          },
          "offres": {
            "h1": "Find here our packages adapted for each fisherman so that everyone can have a unique experience.",
            "decouvrez-offres": "discover <strong>our offers</strong>",
            "dates": "from 01/03 to 31/10",
            "cette-formule-comprend": "This package includes :",
            "acces-lac": "lake access",
            "cabane-peche": "fishing cabin",
            "acces-sanitaires": "toilets and shower",
            "eau-potable": "dresh water",
            "point-froid": "space in freezer",
            "charge-telephone": "A charging point for telephones included.<br/>Full week package.",
            "petit-dejeuner": "breakfast",
            "repas-soir": "evening meal",
            "acces-club-house": "access to the club house",
            "precision-reservation": "English food prepared by Karen to be ordered at the same time as the reservation to ensure availability. <br/>Full week package.",
            "formule-03": "Does not include reels, alarms and end tackle. Full week package",
            "cannes": "3 rods",
            "rod-pod": "1 rod pod",
            "bed-chair": "1 bedchair",
            "level-chair": "1 chair",
            "epuisette": "1 net",
            "tapis-reception": "1 unhooking mat",
            "forfaits-personnalisables": "Packages can be personalised to suit your needs, contact us for more information. It is possible to rent material and to buy baits at the lake. The lake can be booked exclusively.",
            "conditions-reservation": "Booking terms and conditions",
            "p-01": "In order to confirm the reservation a deposit of 50% of the total amount is required to be paid by bank transfer and the booking form returned dated and signed. The balance of the cost should be paid 8 weeks before arrival on the lake, again by bank transfer.",
            "p-02": "Any deposits not received within 10 days of provisional booking will mean that the booking is cancelled and the posts will become available to others.",
            "p-03": "The remaining stay must be paid on arrival. (Deposit must be sent to AVALON CARP, 1 route de la Faucherie - 87270 Bonnac-la-Côte, payable to AVALON CARP SAS).",
            "p-04": "The 50% deposit is non refundable under any conditions. If the cancellation is more than one month before the booked date the booking can be changed to a future date after discussion with the owner and subject to availability. If the cancellation is less than one month before the booked date the deposit is lost or can be transferred to someone else of your choosing. These rules are not applicable in case of restrictions due to Covid-19.",
            "p-05": "No refunds, changes to bookings or credits will be awarded in the case of an early departure of the fisherman for any reason.",
            "contactez-nous": "Contact us"
          },
          "galerie": {
            "h1": "DISCOVER THE BEST PHOTOS OF AVALON CARP LAKE."
          }
        }
      },
      fr: {
        translation: {
          "nav": {
            "link1": "Le Domaine",
            "link2": "Nos Offres",
            "link3": "Règlement",
            "link4": "Contact"
          },
          "home": {
            "h1": "Un moment de pêche et de détente au coeur des forêts du Limousin.",
            "h3-01": "À SEULEMENT 20MN DU CENTRE DE LIMOGES LE DOMAINE AVALON CARP LAKE EST UN PLAN D’EAU DE 3 HECTARES EXCLUSIVEMENT DÉDIÉ À LA PÊCHE DE LA CARPE EN NO KILL.",
            "p-01": "Situé sur la commune de Bonnac-la-Côte (87), la pêche des carpes et silures se pratique sur le plan d’eau situé au centre du domaine bordé de forêts sauvages. Avec son cheptel composé de plus de 350 carpes avec une moyenne de 15kg dont quelques-unes de plus de 30kg ainsi qu’une  quinzaine de silures dont certains dépassent les 80kg les carpistes battent souvent leur record personnel pour note plus grand bonheur.",
            "h2-01": "AVALON EST LA DESTINATION PARFAITE POUR UN MOMENT DE PÊCHE EN TOUTE TRANQUILLITÉ.",
            "h2-02": "LAISSEZ-VOUS SURPRENDRE PAR DES PAYSAGES SPECTACULAIRES ET DES POISSONS HORS DU COMMUN.",
            "cta-decouvrir": "DÉCOUVRIR LE DOMAINE",
          },
          "form": {
            "nom": "Nom",
            "prenom": "Prénom",
            "mail": "Mail",
            "telephone": "Téléphone",
            "message": "Message",
            "submit": "Envoyer",
            "infos-pratiques": "Infos pratiques",
            "preparez-maintenant": "PRÉPAREZ DÈS MAINTENANT VOTRE <strong>PROCHAINE SESSION DE PÊCHE.</strong>"
          },
          "domaine": {
            "h1-01": "Découvrez tout ce que le domaine avalon carp a à vous offrir.",
            "h3-01": "Situé en pleine forêt dans un cadre calme et reposant, AVALON est l’endroit idéal pour se déconnecter du quotidien et profiter de la nature.",
            "sanitaires": "Sanitaires",
            "clubhouse": "Clubhouse",
            "recharge": "Recharge",
            "wifi": "Wifi",
            "p-01": "Avec toute les commodités mises à dispositions (douche, toilettes, club house avec frigo, congélateur, wifi…) tous les éléments sont réunis pour passer un séjour de pêche parfait. Avalon propose (gratuitement) un service journalier pour recharger vos téléphones, ordinateurs ainsi que vos power Bank.",
            "h1-02": "Des <strong>infrastructures</strong> pensées pour <strong>optimiser votre expérience.</strong>",
            "h1-03": "location de matériel, achat d’appâts... <strong>ON A PENSÉ À TOUT !</strong>",
            "h3-02": "Que ce soit en famille ou entre amis, AVALON CARP LAKE saura vous surprendre agréablement, tant au niveau de la qualité de vie qu’au niveau de la pêche.",
            "location-materiel": "Location de matériel",
            "achat-appats": "Achat<br/>d’appâts",
            "cabanes": "Cabanes de pêche sur chaque poste",
            "p-02": "Avec des profondeurs allant de 1 à 6m ce plan d’eau mystérieux vous réserve de belles surprises. Ici vous pourrez louer : cannes, épuisette, rod-pod, bed chair, level chair etc. Des appâts (bouillettes & pellets) sont également disponibles afin que vous puissiez profiter un maximum de votre séjour.",
            "h1-04": "plusieurs centaines de poissons vous attendent !",
            "h3-07": "Carpes miroir & communes hors normes et silures très combatifs grâce à une eau pure de très grande qualité et de grande profondeur.",
            "carp": "Carp",
            "catfish": "Catfish",
            "haute-densite": "Haute densité de poissons",
            "decouvrez-photos": "DÉCOUVREZ <strong>LES PLUS BELLES PHOTOS</strong> DE AVALON CARP LAKE :",
            "galerie-photos": "GALERIE DE PHOTOS"
          },
          "reglement": {
            "h1": "Quelques règles à connaître pour appréhender au mieux votre visite.",
            "horaites-title": "Horaires de prise et départ des postes",
            "horaires-p": "Prise des postes entre 14h et 17h30. Départ entre 9H et 12H00. Aucun départ ou arrivée ne sera autorisé entre 17H30 et 9H. Merci de prendre vos dispositions. Les semaines de pêche se déroulent du samedi au samedi suivant. Possibilité de séjour sur mesure, nous consulter pour plus d’informations. ",
            "confort-title": "Confort",
            "confort-p": "Des cabanes de pêche en bois de 6m2 avec dalle au sol sont mises à disposition sur chacun des 6 postes du plan d’eau. Un état des lieux sera effectué lors de l’arrivée et du départ du pêcheur. Sanitaires (douche, toilettes) sont mis à votre disposition 24h/24h et 7j/7j. Merci de tenir propre ces lieux et de veiller à votre consommation d’eau par respect pour les autres usagers. Seuls les biwy et parapluies-tente de couleur verte ou camouflage sont acceptés. ",
            "vehicules-title": "véhicules",
            "vehicules-p": "Les véhicules devront être stationnés sur les parkings prévus à cet effet. Interdiction de stationner les véhicules sur les postes. Des charriots sont mis à disposition pour le transfert de matériel sur les postes. ",
            "accompagnants-title": "accompagnants",
            "accompagnants-p": "2 accompagnants maximum par pêcheur, gratuit pour les enfants de moins de 12ans. Les accompagnants devront prendre connaissance et respecter le règlement du site. ",
            "amorcage-title": "amorçage",
            "amorcage-p": "Seuls les amorçages à base de farines, bouilletes, pellets et particules sont autorisés. Asticots, vers de vase, vers de terre sont autorisés si mélangés à de la farine. Les graines et les noix sont INTERDITES hormis le maïs doux. Un contrôle pourra être effectué par un responsable. Les canons à bouillette / catapultes sont interdits. Les embarcations légères type zodiac sont interdites. Bateaux radio commandés sont autorisés. Les surplus d’appâts périmés ou non utilisés ne doivent pas être jetés dans l’étang ni sur les berges avant le départ. ",
            "feu-title": "feu/barbecue ",
            "feu-p": "Seuls les barbecues sur pied et à gaz sont tolérés (feux au sol interdits). Les cendres froides devront être évacuées dans un sac poubelle et emportées en fin de session. ",
            "comportement-title": "comportement",
            "comportement-p": "Merci de respecter la nature, le calme et la propreté du site. Le domaine Avalon Carp est situé dans une zone naturelle protégée. Le plan d’eau abrite une faune et une flore rares. Tenue correcte exigée dans l’enceinte de l’établissement. Toute consommation de drogues, état d’ébriété manifeste, tapage ou comportement irrespectueux envers les autres personnes entrainera une exclusion définitive sans remboursement des sommes payées et d’éventuelles poursuites judiciaires. De nuit, éclairage le plus discret possible ; les détecteurs de touches et appareils musicaux devront être réglés raisonnablement. Son et éclairages ne doivent pas dépasser la limite du poste. Il est strictement interdit de se baigner, jeter tout déchet, faire la vaisselle, se laver ou faire ses besoins dans le lac ou la nature. Des sanitaires sont mis à dispositions à l’accueil. Ne dégradez pas la végétation, si vous êtes gêné par une branche d’arbre ou autre, merci de prévenir le responsable qui prendra éventuellement les mesures nécessaires. ",
            "dechets-title": "gestion des déchets",
            "dechets-p": "Les postes de pêche seront maintenus propres. Chaque pêcheur est responsable des ses déchets. Il est formellement interdit de jeter des déchets et mégots de cigarettes par terre ou dans le lac. Le poste doit être propre et sans sac poubelle à votre départ ou la caution sera retenue. ",
            "divers-title": "divers",
            "divers-p": "Les mineurs doivent être en permanence accompagnés d’un responsable adulte. Chaque pêcheur devra être détenteur d’une assurance responsabilité civile. Des litiges imprévus peuvent toujours survenir. Ils seront tranchés par le gestionnaire ou à défaut le gardien. Dans un but d’équité, toute infraction devra être constatée sans ambiguïté. Les pêcheurs et accompagnants sont prévenus que le site est équipé d’un système de vidéosurveillance ayant pour objet d’assurer la sécurité des biens et des personnes. La société AVALON CARP S.A.S se réserve le droit d’utiliser comme elle le souhaite, toutes les photographies et vidéos réalisées sur le site et ce sans compensation financière d’aucune sorte pour les personnes qui pourraient être vues sur des supports publicitaires. Des poursuites pénales seront engagées en cas de vol, tentative de vol ou de mutilation de poissons. En cas de vol, dégradation ou accident, la responsabilité de l’exploitant ne pourra être mise en cause. Toute personne qui ne respectera pas ce règlement dans son intégralité sera exclue sans délais du site de pêche sans possibilité de remboursement et sans restitution des cautions déposées. Des poursuites judiciaires seront menées si nécessaire suivant la gravité des faits et des dommages subis.",
            "peche-title": "La Pêche/La Capture",
            "peche-p": "Tout matériel (tapis de réception, épuisette...) venant de l’extérieur devra passer par le bac de décontamination. La pêche se pratique UNIQUEMENT EN NO KILL et uniquement de la carpe. Les pêches aux leurres et au vifs sont strictement interdites. Une canne au coup (sans moulinet) par poste est tolérée. Trois cannes par pêcheur. Un seul hameçon par ligne. Les hameçons sans ardillons sont obligatoires (micro ardillon et ardillon complètement écrasé a la pince également acceptés). Aucune canne ne doit rester seule sur le poste. Les têtes des lignes et corps de lignes en tresse sont formellement interdits, de même que les nylons de moins de 28/100 ou plus de 45/100 (sauf tête de ligne de 8m maximum). Le lead-core est interdit. Seuls les montages permettant la libration facile du plomb en cas de casse sont autorisés, une canne sera remontée par un responsable en cours de session pour vérification. Tapis de réception de taille XL toujours humide obligatoire, les tapis de type cradle (berceau) sont obligatoires. Grande épuisette à maille fine et sac de pesée à ARMATURES RIGIDES obligatoires. Toute manipulation de poisson entre le lac et le tapis doit se faire AVEC le sac de pesée à armature rigide et non dans les bras. Les captures doivent être ménagées, humidifiées en permanence et remises à l’eau dans les meilleures conditions. Une seule personne en photo par poisson (le pêcheur uniquement). Des poursuites pénales seront engagées en cas de mutilation de poisson. Tous les poissons doivent être remis en liberté immédiatement après une rapide séance photo à genoux ; le poisson et le tapis seront humidifiés. Obligation de détenir et d’utiliser un désinfectant spécial poisson, à appliquer sur la piqûre de l’hameçon et toute plaie éventuelle. Le pêcheur doit toujours être à proximité des cannes lorsqu’elles sont tendues.",
            "chiens-title": "Chiens et animaux domestiques",
            "chiens-p": "Un chien maximum par pêcheur est toléré mais ne devra créer aucune gêne pour les autres pêcheurs (aboiements, agressivité...) et devra être tatoué ou pucé, vacciné et assuré en responsabilité civile. Il devra être tenu en laisse et sous surveillance constante. Interdiction formelle que le chien se baigne ; les excréments devront être ramassés ou la caution pourra être retenue",
            "besoin-precisions": "besoin de<br/>précisions ?",
            "contactez-nous": "CONTACTEZ-NOUS"
          },
          "footer": {
            "link1": "Accueil",
            "link2": "Domaine",
            "link3": "Règlement",
            "link4": "Contact",
            "horaires": "9am to 12pm — 2pm to 5pm",
            "link5": "Politique de confidentialité",
            "link6": "Mentions légales"
          },
          "offres": {
            "h1": "retrouvez ici des formules adaptées à chacun, pour une expérience unique.",
            "decouvrez-offres": "découvrez <strong>nos offres</strong>",
            "dates": "du 01/03 au 31/10",
            "cette-formule-comprend": "Cette formule comprend :",
            "acces-lac": "accès au lac",
            "cabane-peche": "cabane de pêche",
            "acces-sanitaires": "accès aux sanitaires",
            "eau-potable": "eau potable",
            "point-froid": "point froid (congélateur)",
            "charge-telephone": "Séjours de 24h, 2 nuits ou semaine complète.",
            "petit-dejeuner": "petit déjeuner",
            "repas-soir": "repas du soir",
            "acces-club-house": "accès au club house",
            "precision-reservation": "À préciser lors de la réservation sous peine de manque de disponibilité. <br/>Séjours de 24h, 2 nuits ou semaine complète.",
            "formule-03": "Ne comprends pas les détecteurs et le petit matériel. <br/>Séjours de 24h, 2 nuits ou semaine complète.",
            "cannes": "3 cannes",
            "rod-pod": "1 rod pod",
            "bed-chair": "1 bed chair",
            "level-chair": "1 level chair",
            "epuisette": "1 épuisette",
            "tapis-reception": "1 tapis de réception",
            "forfaits-personnalisables": "Forfaits personnalisables ; consultez-nous pour plus d’informations. possibilité de locations de matériel et d’achats d’appâts sur place. possibilité de privatisation",
            "conditions-reservation": "Conditions de réservation",
            "p-01": "Pour les réservations, il vous sera demandé 50% du montant total. Le règlement daté et signé devra nous être retourné. Envoi de l’acompte par virement bancaire.",
            "p-02": "Tout acompte non reçu sous 10 jours entraînera la remise en disponibilité de votre poste.",
            "p-03": "Le reste du séjour sera réglé à l’arrivée. <br/>(Envoi de l’acompte à AVALON CARP, 1 route de la Faucherie – 87270 Bonnac-la-Côte, à l’ordre AVALON CARP SAS.",
            "p-04": "L’acompte de 50% obligatoire pour toute réservation ne sera remboursé en aucun cas. En cas d’annulation plus de 1 mois avant la date d’arrivée prévue, il pourra être reporté sur une session ultérieure sous 12 mois, si l’annulation intervient moins de 1 mois avant la date d’arrivée, il sera perdu si vous ne venez pas ou il pourra être cédé à un tiers.",
            "p-05": "Aucun remboursement, report ou avoir en cas de départ anticipé de la part du pêcheur ne sera effectué quelle qu’en soit la raison.",
            "contactez-nous": "Contactez-nous"
          },
          "galerie": {
            "h1": "DÉCOUVREZ LES PLUS BELLES PHOTOS DE AVALON CARP LAKE."
          }
        }
      }
    }
  });

export default i18n;