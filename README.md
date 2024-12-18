# Todo List Application

Bienvenue dans l'application **Todo List** ! Ce projet est une application simple de gestion de tâches permettant d'ajouter, modifier, marquer comme complètes ou supprimer des tâches. Elle est construite avec **React** et utilise le **localStorage** pour conserver les données, ce qui permet à l'utilisateur de retrouver ses tâches même après un rechargement de la page.

## Fonctionnalités

L'application vous permet de :
- Ajouter des tâches avec une description personnalisée.
- Modifier les tâches existantes.
- Marquer les tâches comme complètes ou non complètes.
- Supprimer des tâches.
- Conserver vos tâches entre les sessions grâce au stockage local (`localStorage`).

## Prérequis

Avant de commencer, vous devez avoir installé les outils suivants :

- **Node.js** : Vous pouvez installer Node.js en visitant le site officiel [Node.js](https://nodejs.org/) et en téléchargeant la dernière version stable.
- **npm** (ou **yarn** si vous préférez) : npm est livré avec Node.js.

## Installation

1. Clonez ce projet sur votre machine locale :

   ```bash
   git clone https://github.com/votre-nom-utilisateur/todolist-app.git
   ```
Accédez au répertoire du projet :

```bash
cd todolist-app
 ```
Installez les dépendances nécessaires :

Si vous utilisez npm :
```bash
npm install
 ```
Si vous préférez yarn :
```bash
yarn install
```
Lancez le projet en mode développement :

Avec npm :
```bash
npm run dev
```
Ou avec yarn :
```bash
yarn dev
```
Vous pouvez maintenant ouvrir votre navigateur et accéder à l'application à l'adresse suivante : http://localhost:3000.

Structure du projet
Le projet est structuré de manière simple et modulaire, facilitant la gestion du code et son extensibilité. Voici un aperçu des principaux répertoires et fichiers :

/components : Contient les composants principaux de l'application.
TodoWrapper.js : Composant principal gérant l'état des tâches, l'ajout, la suppression, et la modification des tâches.
TodoForm.js : Composant pour ajouter de nouvelles tâches.
Todo.js : Composant représentant chaque tâche individuelle avec ses options d'édition et de suppression.
EditTodoForm.js : Composant pour éditer une tâche existante.
/styles : Contient les fichiers CSS pour le style de l'application.
style.css : Fichier CSS global pour la mise en forme de l'application.
Fonctionnement
Ajout de Tâche
Lorsqu'une nouvelle tâche est ajoutée à l'aide du formulaire, elle est générée avec un identifiant unique (uuidv4), et ajoutée à la liste des tâches. La tâche est ensuite enregistrée dans le localStorage pour être persistée même après un rechargement de la page.

Modification de Tâche
Chaque tâche peut être modifiée. L'utilisateur peut cliquer sur une tâche pour la mettre en mode édition. Une fois modifiée, la tâche est mise à jour et le changement est également enregistré dans le localStorage.

Marquer une Tâche comme Complète
Chaque tâche peut être marquée comme complétée. Cette action modifie l'état de la tâche et applique une décoration de texte pour indiquer que la tâche est terminée.

Suppression de Tâche
Les utilisateurs peuvent supprimer une tâche de la liste. Une fois supprimée, la tâche est effacée du tableau et la mise à jour est enregistrée dans le localStorage.

Stockage Local (localStorage)
Toutes les tâches sont enregistrées dans le localStorage du navigateur. Cela signifie que même après un rechargement de la page, les données restent accessibles. Le projet utilise JSON.parse et JSON.stringify pour manipuler et conserver les tâches dans le stockage local.

Interface
L'interface est simple et claire, avec une mise en forme épurée et moderne. Les boutons sont bien visibles pour l'ajout, la modification, la suppression et le changement d'état des tâches.

Exemple d'Utilisation
Ajouter une tâche : Cliquez sur le champ de texte, entrez la tâche que vous souhaitez ajouter, puis cliquez sur "Ajouter".
Modifier une tâche : Cliquez sur l'icône d'édition à côté d'une tâche pour la modifier.
Marquer comme complété : Cliquez sur la case à cocher pour marquer une tâche comme terminée.
Supprimer une tâche : Cliquez sur l'icône de la poubelle pour supprimer une tâche de la liste.
Exemple de l'interface

Développement et Contributions
Ce projet est open-source et vous êtes invité à contribuer ! Si vous souhaitez améliorer l'application, ajouter de nouvelles fonctionnalités, ou corriger des bugs, vous pouvez créer une pull request.

Voici quelques idées de contributions :

Améliorer l'interface avec des animations ou transitions.
Ajouter une fonctionnalité de tri des tâches (par date d'ajout, par statut, etc.).
Ajouter un système de priorités pour les tâches.
Améliorer la gestion des erreurs pour le stockage local (par exemple, lorsque le stockage local est plein).
Créer une Pull Request
Forkez ce repository.
Créez une nouvelle branche pour vos modifications.
Appliquez vos modifications et assurez-vous que tout fonctionne comme prévu.
Envoyez une pull request avec une description claire de ce que vous avez changé.
Remerciements
Merci à la communauté open-source pour leurs contributions et à tous ceux qui rendent ce projet possible.

Licence
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer selon les termes de cette licence.


---

### Explications :

- **Usage de Markdown** : Le format Markdown permet de structurer le README avec des titres, des sections claires et lisibles. 
- **Explication complète** : Chaque fonctionnalité et étape est bien détaillée pour que même un développeur débutant puisse comprendre le projet et l'utiliser.
- **Instructions d'installation et d'utilisation** : Un guide complet sur la façon d'installer et de faire fonctionner le projet localement.
- **Contributions et développement** : Encourage les autres à contribuer et fournit des instructions pour créer des pull requests.