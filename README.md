Tu vas modifier le site pour le faire correspondre à l'entreprise.

---

1: Modifie les couleurs dans global.css par les couleurs suivantes: 
- brand-primary: #116cb1
- brand-accent: #0f5f9e

2: Modifie les informations de l'entrepsise dans constants.ts

name: Turing Software,
tagline: Nous concevons des produits web sur-mesure (SaaS, ERP, sites) adaptés à votre métier.,
siret: 94405082200013,
phone: 06 84 25 95 94,
email: contact@turing-software.com,
address: {
    street: 60 rue francois Ier,
    postalCode: 75008,
    city: Paris,
    country: France
}

3: Dans package.json et package-lock.json , change company-template par le nom de l'entreprise.
Egalement change l'email de destination dans le fomrulaire de contact avec l'email du site: recipientEmail dans le fichier api/contact/route.ts 

4: Je vais te donner ci dessous la description de l'entreprise et de ces services, tu pourras ensuite créer la page services et la page d'accueil à l'aide de ces infos. Met tout le texte dans les pages directement ne t'embete pas à mettre ca dans constants.
Tu n'ai pas obligé de garder les textes ci dessous, tu peux les modifier pour les faire à ta sauce mais au moins tu as une base .

Page d’accueil – paragraphe “Ce que nous faisons”

Nous concevons des produits web sur-mesure pour les entreprises qui ont besoin d’outils adaptés à leur métier.

Qu’il s’agisse de lancer un produit SaaS, de structurer vos opérations avec un ERP métier ou de créer un site web réellement utile à votre activité, nous vous accompagnons de la réflexion stratégique jusqu’à la mise en production.

Notre approche est simple : comprendre vos enjeux business, concevoir une solution claire et efficace, et livrer un produit fiable, évolutif et pensé pour durer. Vous bénéficiez d’un interlocuteur unique, d’une gestion de projet maîtrisée et d’une équipe technique capable de transformer vos besoins concrets en solutions digitales performantes.

Page Services – introduction générale

Nous proposons des solutions digitales sur-mesure, conçues pour répondre à des besoins métiers précis.
Chaque projet commence par une phase de compréhension et de cadrage afin de concevoir un outil réellement utile, aligné avec vos objectifs et vos contraintes opérationnelles.

🔹 Service 1 – Construction de SaaS sur-mesure

Nous transformons votre idée ou votre expertise métier en produit SaaS fonctionnel et exploitable.

Que vous souhaitiez lancer un nouveau produit digital, internaliser un outil métier ou tester un concept via un MVP, nous vous accompagnons de la définition du produit jusqu’à sa mise en ligne.

Nous concevons des applications fiables, évolutives et pensées pour l’usage réel des utilisateurs, avec une attention particulière portée à l’expérience, à la performance et à la maintenabilité.

🔹 Service 2 – Construction d’ERP métier sur-mesure

Un ERP conçu pour s’adapter à votre façon de travailler, et non l’inverse.

Lorsque les solutions du marché sont trop rigides ou inadaptées à vos processus, nous concevons des ERP métiers sur-mesure pour centraliser vos données, structurer vos opérations et gagner en efficacité.

Gestion interne, suivi des opérations, facturation, reporting : nous développons des outils simples à utiliser, parfaitement alignés avec votre organisation et vos enjeux quotidiens.

🔹 Service 3 – Site web sur-mesure orienté business

Un site web pensé comme un véritable outil au service de votre activité.

Nous concevons des sites sur-mesure qui vont au-delà du simple aspect visuel : génération de leads, mise en valeur de votre offre, tunnels de conversion ou espaces dédiés.

Chaque site est conçu pour être rapide, clair, évolutif et aligné avec vos objectifs business, afin de maximiser son impact et sa rentabilité.