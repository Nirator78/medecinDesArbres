# MedecinDesArbres
Ecologie
- Site documentaire (consultation de fiches) => but éducatif
- Mini jeux type quizz, jeu de roles
- Vente de produits dérivés
- Plein de mini projet avec pour finalité l'écologie

## Technologie utilisée
### Frontend
- [Reactjs](https://fr.reactjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
### Backend
- [Nodejs](https://nodejs.org/fr/)
- [TypeORM](https://typeorm.io/#/)
### Basse de données
- [Mysql](https://www.mysql.com/fr/)
## Version du projet
**1.0.0**
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
Initialisation fichier api
```bash
cd api
npm install
npm start
```
## Information utile

Créer une branch
```bash
git branch nomDeLaBranch
```
Changer de branch
```bash
git checkout nomDeLaBranch
```
Merge branch main sur une branch

```bash
git merge origin/main
```
### Commit
Pour commit des modifications de notre branch
Ne pas oublier d'ajout ces fichiers modifié
```bash
git add *

git add NomDesFichiers
```
Ensuite le commit 

```bash
git commit -m 'Message du commit'

git push
```

Ou en une seule commande ajout et commit 

```bash
git commit -am 'Message du commit'

git push
```