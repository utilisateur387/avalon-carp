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
            "link1": "The site",
            "link2": "Our offers",
            "link3": "Rules",
            "link4": "Contact us"
          },
          "home": {
            "h1": "A TRADUIRE",
            "h3-01": "A TRADUIRE",
            "p-01": "A TRADUIRE",
            "h2-01": "A TRADUIRE",
            "h2-02": "A TRADUIRE",
            "cta-decouvrir": "A TRADUIRE",
            "h2-preparez": "A TRADUIRE"
          },
          "form": {
            "nom": "Last Name",
            "prenom": "First Name",
            "mail": "Email",
            "telephone": "Phone number",
            "message": "Message",
            "submit": "Submit",
            "infos-pratiques": "A TRADUIRE"
          },
          "domaine": {
            "h1-01": "A TRADUIRE",
            "h3-01": "A TRADUIRE",
            "sanitaires": "A TRADUIRE",
            "clubhouse": "A TRADUIRE",
            "recharge": "A TRADUIRE",
            "wifi": "A TRADUIRE",
            "p-01": "A TRADUIRE",
            "h1-02": "A TRADUIRE",
            "h1-03": "A TRADUIRE",
            "h3-02": "A TRADUIRE",
            "location-materiel": "A TRADUIRE",
            "achat-appats": "A TRADUIRE",
            "cabanes": "A TRADUIRE",
            "p-02": "A TRADUIRE",
            "h1-04": "A TRADUIRE",
            "h3-07": "A TRADUIRE",
            "carp": "A TRADUIRE",
            "catfish": "A TRADUIRE",
            "haute-densite": "A TRADUIRE",
            "decouvrez-photos": "A TRADUIRE",
            "galerie-photos": "A TRADUIRE"
          },
          "reglement": {
            "h1": "A TRADUIRE",
            "horaites-title": "A TRADUIRE",
            "horaires-p": "A TRADUIRE",
            "confort-title": "A TRADUIRE",
            "confort-p": "A TRADUIRE",
            "vehicules-title": "A TRADUIRE",
            "vehicules-p": "A TRADUIRE",
            "accompagnants-title": "A TRADUIRE",
            "accompagnants-p": "A TRADUIRE",
            "amorcage-title": "A TRADUIRE",
            "amorcage-p": "A TRADUIRE",
            "feu-title": "A TRADUIRE",
            "feu-p": "A TRADUIRE",
            "comportement-title": "A TRADUIRE",
            "comportement-p": "A TRADUIRE",
            "dechets-title": "A TRADUIRE",
            "dechets-p": "A TRADUIRE",
            "divers-title": "A TRADUIRE",
            "divers-p": "A TRADUIRE",
            "peche-title": "A TRADUIRE",
            "peche-p": "A TRADUIRE",
            "chiens-title": "A TRADUIRE",
            "chiens-p": "A TRADUIRE",
            "besoin-precisions": "A TRADUIRE",
            "contactez-nous": "A TRADUIRE"
          },
          "footer": {
            "link1": "A TRADUIRE",
            "link2": "A TRADUIRE",
            "link3": "A TRADUIRE",
            "link4": "A TRADUIRE",
            "horaires": "A TRADUIRE",
            "link5": "A TRADUIRE",
            "link6": "A TRADUIRE"
          },
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
            "h2-preparez": "PRÉPAREZ DÈS MAINTENANT VOTRE <strong>PROCHAINE SESSION DE PÊCHE.</strong>"
          },
          "form": {
            "nom": "Nom",
            "prenom": "Prénom",
            "mail": "Mail",
            "telephone": "Téléphone",
            "message": "Message",
            "submit": "Envoyer",
            "infos-pratiques": "Infos pratiques"
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
        }
      }
    }
  });

export default i18n;