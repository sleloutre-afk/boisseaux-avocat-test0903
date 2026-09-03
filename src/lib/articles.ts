export type Article = {
  slug: string
  titre: string
  resume: string
  date: string
  categorie: string
  contenu: string
}

const articles: Article[] = [
  {
    slug: 'garde-a-vue-droits-procedure',
    titre: 'Garde à vue : vos droits et le rôle de l\'avocat',
    resume: 'La garde à vue est un moment déterminant de la procédure pénale. Quels sont vos droits dès la première heure et pourquoi l\'assistance d\'un avocat est indispensable ?',
    date: '2025-09-10',
    categorie: 'Droit pénal',
    contenu: `
      <p>La garde à vue est la mesure par laquelle une personne soupçonnée d'avoir commis une infraction est retenue dans les locaux de police ou de gendarmerie le temps d'une enquête. Sa durée de droit commun est de 24 heures, renouvelable une fois sur autorisation du procureur de la République, soit 48 heures au total. Pour certaines infractions graves (terrorisme, criminalité organisée), elle peut être prolongée.</p>
      <h2>Les droits fondamentaux dès le début de la mesure</h2>
      <p>Dès le placement en garde à vue, la personne doit être informée de ses droits dans une langue qu'elle comprend. Elle bénéficie notamment du droit d'être informée de la nature et de la date présumée de l'infraction, du droit de prévenir un proche ou son employeur, du droit d'être examinée par un médecin, et surtout du droit d'être assistée par un avocat.</p>
      <h2>Le rôle de l'avocat en garde à vue</h2>
      <p>L'avocat peut intervenir dès la première heure de la garde à vue. Il s'entretient confidentiellement avec son client pendant 30 minutes, consulte le procès-verbal de notification des droits et le certificat médical si une consultation a eu lieu, puis assiste à tous les interrogatoires. Ce droit à l'assistance d'un avocat est fondamental : il permet d'éviter des auto-incriminations inutiles et de s'assurer que la procédure est régulière.</p>
      <h2>Que faire en pratique ?</h2>
      <p>Si vous êtes placé en garde à vue ou si un proche l'est, demandez immédiatement à contacter un avocat. Ne répondez pas aux questions avant son arrivée. L'avocat commis d'office intervient si vous n'en désignez pas un. Il est toutefois recommandé de contacter directement l'avocat de votre choix, qui connaîtra votre dossier et pourra assurer le suivi de la procédure jusqu'à l'éventuel jugement.</p>
      <h2>Après la garde à vue</h2>
      <p>À l'issue de la garde à vue, trois issues sont possibles : la liberté pure et simple, la liberté sous contrôle judiciaire ou l'éventuelle présentation devant un juge (déferrement). L'intervention de l'avocat durant la garde à vue est souvent déterminante pour la suite de la procédure.</p>
    `,
  },
  {
    slug: 'defense-penale-flagrant-delit-droits',
    titre: 'Flagrant délit : comprendre la procédure et organiser sa défense',
    resume: 'Interpellé en flagrant délit, vous êtes soumis à une procédure accélérée. Quelles sont les spécificités de cette voie et comment préparer efficacement votre défense ?',
    date: '2025-09-03',
    categorie: 'Droit pénal',
    contenu: `
      <p>La procédure de flagrant délit — aussi appelée comparution immédiate — est une voie rapide par laquelle une personne interpellée est jugée par le tribunal correctionnel dans les jours qui suivent son arrestation, sans instruction préalable. Elle s'applique aux délits punis d'au moins deux ans d'emprisonnement.</p>
      <h2>La comparution immédiate : une procédure sous pression</h2>
      <p>En comparution immédiate, le prévenu est présenté au procureur de la République qui décide de le poursuivre devant le tribunal correctionnel. L'audience peut avoir lieu le jour même ou dans les trois jours si le prévenu demande un délai pour préparer sa défense — ce qu'il est fortement conseillé de faire. Durant ce délai, il peut être placé en détention provisoire.</p>
      <h2>Pourquoi demander un délai ?</h2>
      <p>Le délai de renvoi est un droit fondamental. Il permet à l'avocat de consulter le dossier, d'entendre la version des faits du prévenu, de rassembler des pièces utiles (attestations, justificatifs, éléments de personnalité) et de construire une défense cohérente. Plaider en comparution immédiate sans préparation expose à des condamnations plus sévères.</p>
      <h2>Les éléments clés de la défense</h2>
      <p>La défense en comparution immédiate porte généralement sur plusieurs axes : la contestation des faits ou de leur qualification juridique, la personnalité de l'auteur (absence de casier, situation professionnelle et familiale stable), les circonstances atténuantes et la proposition d'une mesure alternative à l'emprisonnement ferme (sursis, travail d'intérêt général, sursis probatoire).</p>
      <h2>La détention provisoire durant le délai</h2>
      <p>Si le prévenu est placé en détention provisoire dans l'attente de l'audience, l'avocat peut saisir le juge des libertés et de la détention (JLD) pour en contester le placement ou en demander la mainlevée. La durée de cette détention sera déduite de toute peine prononcée.</p>
    `,
  },
  {
    slug: 'indemnisation-victimes-accident-corporel',
    titre: 'Indemnisation des victimes d\'accident corporel : guide pratique',
    resume: 'Accident de la route, agression, accident médical : comment obtenir une indemnisation juste et complète de votre préjudice corporel et moral ?',
    date: '2025-08-27',
    categorie: 'Indemnisation des victimes',
    contenu: `
      <p>Lorsqu'une personne est victime d'un accident corporel — qu'il s'agisse d'un accident de la route, d'une agression ou d'un accident médical — elle a droit à la réparation intégrale de l'ensemble de ses préjudices. Ce principe, fondamental en droit français, implique que l'indemnisation couvre tous les chefs de préjudice, sans qu'il soit possible de s'enrichir mais sans que la victime supporte une partie du dommage.</p>
      <h2>La nomenclature Dintilhac : les postes de préjudice</h2>
      <p>La nomenclature Dintilhac, utilisée par toutes les juridictions françaises, distingue les préjudices patrimoniaux (pertes économiques mesurables) des préjudices extrapatrimoniaux (souffrances, séquelles). Les principaux postes sont : le déficit fonctionnel temporaire (incapacité pendant la période de soins), les dépenses de santé actuelles et futures, la perte de gains professionnels, le déficit fonctionnel permanent (séquelles définitives), les souffrances endurées, le préjudice esthétique et le préjudice d'agrément.</p>
      <h2>Le rôle de l'expertise médicale</h2>
      <p>L'expertise médicale est le moment clé de l'évaluation du préjudice. Un médecin expert mandaté par l'assureur rencontre la victime et chiffre ses séquelles. Il est fortement conseillé d'être accompagné par un médecin-conseil de recours, choisi par la victime et son avocat, pour contre-expertiser les conclusions et ne pas accepter une évaluation sous-estimée.</p>
      <h2>La transaction avec l'assureur</h2>
      <p>L'assureur du responsable est tenu de faire une offre d'indemnisation dans des délais légaux. Avant d'accepter toute offre, il est indispensable de la soumettre à l'analyse d'un avocat spécialisé. La transaction est définitive et ne peut être remise en cause, même si l'état de santé s'aggrave, sauf clause contraire expressément négociée.</p>
      <h2>Les fonds de garantie</h2>
      <p>Lorsque le responsable est inconnu, insolvable ou non assuré, la victime peut solliciter le Fonds de Garantie des Assurances Obligatoires (FGAO) pour les accidents de la route, ou le Fonds de Garantie des victimes d'actes de Terrorisme et d'autres Infractions (FGTI) pour les victimes d'infractions pénales.</p>
    `,
  },
  {
    slug: 'panneaux-solaires-contrats-annulation',
    titre: 'Panneaux solaires : comment faire annuler un contrat abusif ?',
    resume: 'De nombreux particuliers ont souscrit des contrats de vente et de crédit liés à des installations photovoltaïques dans des conditions irrégulières. Les voies pour obtenir l\'annulation.',
    date: '2025-08-20',
    categorie: 'Droit de la consommation',
    contenu: `
      <p>Depuis plusieurs années, un contentieux massif s'est développé autour des contrats de vente et de crédit affectés liés à des installations de panneaux solaires ou photovoltaïques. Des milliers de particuliers ont été démarchés à domicile et ont signé des contrats qui ne respectaient pas les exigences légales du Code de la consommation.</p>
      <h2>Les irrégularités fréquemment constatées</h2>
      <p>Les contrats de vente conclus lors d'un démarchage à domicile sont soumis à des règles très strictes : information précontractuelle complète, délai de rétractation de 14 jours, interdiction d'exécution avant l'expiration de ce délai. Or, dans de nombreux dossiers, l'installation a été réalisée avant l'expiration du délai de rétractation, le bon de commande était incomplet ou le bordereau de rétractation absent ou irrégulier.</p>
      <h2>La nullité du contrat de vente et du crédit affecté</h2>
      <p>Lorsque le contrat de vente est nul pour non-respect des dispositions relatives au démarchage à domicile, la nullité s'étend automatiquement au contrat de crédit affecté. L'établissement de crédit ne peut alors réclamer le remboursement des sommes versées que si la faute du vendeur lui est inopposable — ce que les juridictions admettent de moins en moins lorsque le prêteur a libéré les fonds sans vérifier la régularité du bon de commande.</p>
      <h2>La procédure et les délais</h2>
      <p>L'action en nullité est soumise à un délai de prescription de 5 ans à compter de la connaissance des irrégularités. Il convient d'agir rapidement. La procédure implique généralement une mise en demeure préalable du vendeur et de l'établissement de crédit, puis la saisine du tribunal judiciaire compétent. Une expertise technique peut être ordonnée pour évaluer le fonctionnement réel de l'installation.</p>
      <h2>Les suites de l'annulation</h2>
      <p>Lorsque l'annulation est prononcée, le vendeur est tenu de reprendre le matériel et de rembourser les sommes versées. Le consommateur est libéré de ses obligations de remboursement envers l'établissement de crédit. Des dommages et intérêts peuvent s'ajouter en cas de préjudice complémentaire (toit endommagé, démarches administratives, perte d'exploitation).</p>
    `,
  },
  {
    slug: 'recouvrement-creances-procedure-injonction',
    titre: 'Recouvrement de créances : choisir la bonne procédure',
    resume: 'Injonction de payer, référé-provision, assignation au fond : quelles sont les voies de recouvrement adaptées à votre situation et comment optimiser les chances de succès ?',
    date: '2025-08-13',
    categorie: 'Droit civil',
    contenu: `
      <p>Le recouvrement d'une créance impayée peut emprunter plusieurs voies judiciaires selon le montant en jeu, la nature de la créance et l'urgence de la situation. Choisir la procédure adaptée est essentiel pour optimiser les coûts et les délais.</p>
      <h2>L'injonction de payer</h2>
      <p>L'injonction de payer est une procédure non contradictoire, rapide et peu coûteuse. Le créancier dépose une requête auprès du tribunal compétent (tribunal judiciaire ou tribunal de commerce selon le cas). Si la créance est fondée en son principe, le juge rend une ordonnance d'injonction de payer. Le débiteur dispose alors d'un mois pour y former opposition. En l'absence d'opposition, l'ordonnance est apposée de la formule exécutoire et peut donner lieu à des mesures d'exécution forcée.</p>
      <h2>Le référé-provision</h2>
      <p>Lorsque l'obligation n'est pas sérieusement contestable, le référé-provision permet d'obtenir rapidement une condamnation provisionnelle. Cette procédure contradictoire est plus rapide que le fond mais nécessite que la créance soit peu discutable. L'ordonnance de référé est exécutoire par provision, c'est-à-dire immédiatement.</p>
      <h2>L'assignation au fond</h2>
      <p>Lorsque le débiteur conteste la créance ou lorsque des questions de fond doivent être tranchées (validité du contrat, montant exact, compensation avec une créance réciproque), l'assignation au fond devant le tribunal judiciaire est inévitable. Cette procédure est plus longue mais conduit à un jugement définitif.</p>
      <h2>Les mesures d'exécution forcée</h2>
      <p>Une fois le titre exécutoire obtenu (jugement, ordonnance d'injonction de payer revêtue de la formule exécutoire), différentes voies d'exécution forcée sont possibles : saisie des comptes bancaires (saisie-attribution), saisie des rémunérations, saisie-vente du mobilier, inscription d'hypothèque judiciaire. L'huissier de justice — désormais commissaire de justice — est le professionnel chargé de mettre en œuvre ces mesures.</p>
    `,
  },
  {
    slug: 'litige-credit-consommation-annulation',
    titre: 'Litiges liés au crédit à la consommation : vos droits face à l\'établissement prêteur',
    resume: 'Taux erroné, défaut d\'information, crédit revolving abusif : les manquements des établissements de crédit peuvent entraîner la déchéance du droit aux intérêts ou la nullité du contrat.',
    date: '2025-08-06',
    categorie: 'Droit de la consommation',
    contenu: `
      <p>Le droit du crédit à la consommation est l'un des domaines les plus protecteurs du droit français. Le Code de la consommation impose aux établissements prêteurs de nombreuses obligations d'information et de forme, dont la méconnaissance peut avoir des conséquences sévères sur la validité du contrat et les droits des parties.</p>
      <h2>Les obligations précontractuelles du prêteur</h2>
      <p>Avant la conclusion d'un crédit à la consommation, le prêteur doit remettre une fiche d'information précontractuelle européenne standardisée (FIPEN), évaluer la solvabilité de l'emprunteur via la consultation du fichier FICP, et laisser un délai de réflexion de 14 jours. Le non-respect de ces obligations peut entraîner la déchéance du droit aux intérêts, c'est-à-dire l'obligation de rembourser uniquement le capital emprunté sans aucun intérêt.</p>
      <h2>Le taux annuel effectif global (TAEG)</h2>
      <p>Le TAEG doit être mentionné de manière lisible dans tout contrat de crédit. Un TAEG erroné — même d'un centième de point — entraîne sa substitution par le taux légal, souvent bien inférieur. Les juridictions ont rendu de nombreuses décisions favorables aux emprunteurs dans des dossiers où les frais d'assurance ou les frais de dossier n'avaient pas été intégrés dans le calcul du TAEG.</p>
      <h2>Le crédit renouvelable (revolving)</h2>
      <p>Le crédit renouvelable est soumis à des règles particulièrement strictes depuis la loi Lagarde. L'offre doit rappeler les conditions d'utilisation, le montant disponible, le taux d'intérêt et les conditions de renouvellement annuel. Les irrégularités dans la gestion du compte peuvent justifier la déchéance des intérêts et la réduction de la dette au seul capital restant dû.</p>
      <h2>Agir face à l'établissement de crédit</h2>
      <p>La première étape consiste à obtenir l'historique complet du contrat et des tableaux d'amortissement. Une analyse juridique permet d'identifier les éventuelles irrégularités. Le recours au médiateur bancaire est obligatoire avant toute saisine du tribunal judiciaire. En cas d'irrégularité avérée, l'action en justice est généralement efficace et les établissements de crédit privilégient souvent la transaction pour éviter un jugement défavorable.</p>
    `,
  },
]

export function getArticles(): Article[] {
  return articles
}

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}
