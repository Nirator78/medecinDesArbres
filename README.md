# MedecinDesArbres
Ecologie
- Site documentaire (consultation de fiches) => but éducatif
- Mini jeux type quizz, jeu de roles
- Vente de produits dérivés
- Plein de mini projet avec pour finalité l'écologie

## Backlog
### Création d'un compte
- Email
- Nom
- Prénom
- Mot de passe 
- Surnom
### Se connecter
- Bouton de connexion
- Email
- Mot de passe 
- Text mot de passe oublié
### Se déconnecter
- Bouton de déconnexion
### Faire une demande de mot de passe oublié
Page de demande : 
- Email du compte
- Verification + sauvegarde dans la base de données de la demande
- Generateur code unique 
- Envoie d'un mail avec un lien avec un code unique

Page de modification  :
- Email du compte 
- Nouveau mot de passe
- Sauvegarde du nouveau mot de passe dans la base de données
- Redirection vers se connecter 
### Super Admin
- Ajouter des administrateurs
- Créer / Modifier / Supprimer / ajouter des questions a un quizz 
- Créer / Modifier / Supprimer de nouveaux produits dans la boutique en ligne
- Créer / Modifier / Supprimer un nouveau meet up irl 
### Admin
- Créer / Modifier / Supprimer / ajouter des questions a un quizz 
- Créer / Modifier / Supprimer de nouveaux produits dans la boutique en ligne
- Créer / Modifier / Supprimer un nouveau meet up irl 
### Quizz
- Ajout de question 
- Création du quizz 
- Supprimer un quizz
- Commencer un quizz
- Répondre a une question
- Passer a la question suivante
- Valider ses réponses
- Regarder ses scores (?) 
### Boutique
- Ajouter
- Supprimer 
- Modifier prix, quantité dispo 
- Gestion stock disponible 
- Visionner les porduits
- Ajouter un produit a son panier
- Valider son panier
- Payer
### Meet Up IRL
- Ajouter
- Supprimer 
- Modifier
- Récupérer la liste des meet up a venir / passé
- Afficher les spécificités d'un meet up (lieu / date / autres) 
- Annoncer sa participation a un meet up
### Fiches pédagogiques
- Liste des fiches (differents thèmes)
- Lire la fiche 
### Mon compte
- Affichage / Modifier ces informations
- Liste de ces commandes
- Affichage de ces succés 
### Accueil
- Message 
- Liste des meilleurs netoyeurs 
- Liste netoyages récents 
- Liste de quelques fiches pédagogiques
- Liste de quelques quizz
- Liste de quelques articles en boutiques 
- Menu de navigation 
- Bouton connexion
- Bouton déconnexion
- Bouton profile 

## Installation
Récuperation du projet git.
```bash
git clone https://github.com/Nirator78/medecinDesArbres.git
```
Initialisation fichier frontend
```bash
cd frontend
npm install
npm start
```
```bash
git clone https://github.com/Nirator78/medecinDesArbres.git
```
Créer une branch.
```bash
git branch nomDeLaBranch
```
Changer de branch.
```bash
git checkout nomDeLaBranch
```

