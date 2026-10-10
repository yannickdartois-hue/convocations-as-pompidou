# Convocations AS Pompidou

Outil web pour éditer les convocations aux compétitions UNSS de l'association sportive du lycée Georges Pompidou (Castelnau-le-Lez) : deux convocations par page A4, à découper.

## Utilisation

1. Choisir l'activité, la date, le lieu et les horaires.
2. Saisir le nom et l'e-mail du professeur responsable.
3. Importer la liste des élèves (.xlsx, .xls ou .csv). Les colonnes Nom, Prénom, Classe et Compétition sont détectées automatiquement ; les boutons « Compétition F / G » cochent l'équipe correspondante. On peut aussi ajouter un élève à la main.
4. Éditer en PDF ou imprimer, en convocations nominatives ou vierges (l'élève écrit son nom à la maison).

## Confidentialité

Tout fonctionne dans le navigateur : le fichier des élèves n'est envoyé sur aucun serveur, et aucune donnée élève n'est stockée dans ce dépôt. Seuls le nom et l'e-mail du professeur sont mémorisés, dans le navigateur de l'utilisateur.

## Hors ligne

`index.html` est autonome (bibliothèques jsPDF et SheetJS incluses) : on peut aussi le télécharger et l'ouvrir par double-clic, sans connexion.
