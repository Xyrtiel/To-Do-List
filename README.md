# Todo List Application

Bienvenue dans l'application **Todo List** ! Ce projet est conçu pour vous permettre de gérer facilement vos tâches quotidiennes. Vous pouvez y ajouter, modifier, marquer comme complètes ou supprimer des tâches. Développée avec **React**, l'application utilise le **localStorage** pour garantir que vos données persistent même après un rechargement de la page.

## Fonctionnalités

L'application vous offre plusieurs fonctionnalités pratiques pour gérer vos tâches :

- Ajouter des tâches avec une description que vous personnalisez.
- Modifier une tâche à tout moment.
- Marquer une tâche comme complétée ou non.
- Supprimer une tâche de votre liste.
- Conserver vos tâches entre différentes sessions grâce à l'utilisation du `localStorage`.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **Node.js** : Si vous ne l'avez pas déjà, vous pouvez télécharger la dernière version stable depuis [Node.js](https://nodejs.org/).
- **npm** (ou **yarn** si vous le préférez) : npm est inclus avec Node.js.

## Installation

Voici les étapes pour faire fonctionner le projet en local sur votre machine :

1. Clonez ce dépôt sur votre machine :

   ```bash
   git clone https://github.com/votre-nom-utilisateur/todolist-app.git
   ```

2. Accédez au dossier du projet :

   ```bash
   cd todolist-app
   ```

3. Installez les dépendances nécessaires :

   Si vous utilisez npm :

   ```bash
   npm install
   ```

   Si vous préférez yarn :

   ```bash
   yarn install
   ```

4. Lancez le projet en mode développement :

   Avec npm :

   ```bash
   npm run dev
   ```

   Avec yarn :

   ```bash
   yarn dev
   ```

5. Ouvrez votre navigateur et allez à l'adresse suivante pour voir l'application :  
   [http://localhost:3000](http://localhost:3000)

## Structure du projet

Le projet est organisé de manière simple et modulaire, facilitant la gestion du code ainsi que son évolution future. Voici un aperçu des principaux répertoires et fichiers du projet :

### `/components`
Ce dossier contient les composants clés qui gèrent la logique de l'application.

- **TodoWrapper.js** : Le composant principal qui gère l'état des tâches, leur ajout, leur suppression et modification.
- **TodoForm.js** : Un formulaire permettant à l'utilisateur d'ajouter de nouvelles tâches.
- **Todo.js** : Représente chaque tâche individuelle avec des options pour l'édition et la suppression.
- **EditTodoForm.js** : Permet de modifier une tâche existante.

### `/styles`
Contient les fichiers CSS pour gérer l'apparence de l'application.

- **style.css** : Fichier de style global pour l'application.

## Fonctionnement

### Ajout de Tâche
Lorsqu'une nouvelle tâche est ajoutée à l'aide du formulaire, elle est générée avec un identifiant unique (`uuidv4`), et ajoutée à la liste des tâches. La tâche est ensuite enregistrée dans le `localStorage` pour être persistée même après un rechargement de la page.

### Modification de Tâche
Chaque tâche peut être modifiée. L'utilisateur peut cliquer sur une tâche pour la mettre en mode édition. Une fois modifiée, la tâche est mise à jour et le changement est également enregistré dans le `localStorage`.

### Marquer une Tâche comme Complète
Chaque tâche peut être marquée comme complétée. Cette action modifie l'état de la tâche et applique une décoration de texte pour indiquer que la tâche est terminée.

### Suppression de Tâche
Les utilisateurs peuvent supprimer une tâche de la liste. Une fois supprimée, la tâche est effacée du tableau et la mise à jour est enregistrée dans le `localStorage`.

### Stockage Local (`localStorage`)
Toutes les tâches sont enregistrées dans le `localStorage` du navigateur. Cela signifie que même après un rechargement de la page, les données restent accessibles. Le projet utilise `JSON.parse` et `JSON.stringify` pour manipuler et conserver les tâches dans le stockage local.

## Interface
L'interface est simple et claire, avec une mise en forme épurée et moderne. Les boutons sont bien visibles pour l'ajout, la modification, la suppression et le changement d'état des tâches.

## Exemple d'Utilisation

- **Ajouter une tâche** : Cliquez sur le champ de texte, entrez la tâche que vous souhaitez ajouter, puis cliquez sur "Ajouter".
- **Modifier une tâche** : Cliquez sur l'icône d'édition à côté d'une tâche pour la modifier.
- **Marquer comme complété** : Cliquez sur la case à cocher pour marquer une tâche comme terminée.
- **Supprimer une tâche** : Cliquez sur l'icône de la poubelle pour supprimer une tâche de la liste.

## Développement et Contributions

Ce projet est open-source et vous êtes invité à contribuer ! Si vous souhaitez améliorer l'application, ajouter de nouvelles fonctionnalités, ou corriger des bugs, vous pouvez créer une pull request.

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer selon les termes de cette licence.
