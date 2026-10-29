/* aide.js — mode d'emploi des convocations AS (lu par eps-aide.js) */
window.EPS_AIDE={appli:'Convocations AS Pompidou',bouton:false,
pied:'La liste des élèves reste dans le navigateur : rien n’est envoyé. Seuls votre nom et votre e-mail sont mémorisés.',
publics:[{id:'prof',titre:'Professeur',chapitres:[
{t:'Faire les convocations en 4 étapes',html:`<ol>
<li><b>Compétition</b> : activité, date, lieu (ou « Autre lieu »), heure de rendez-vous, lieu du RDV, heure de retour. Informations complémentaires si besoin (tenue, repas, licence).</li>
<li><b>Professeur</b> : civilité, nom, e-mail. Ils sont gardés pour la prochaine fois.</li>
<li><b>Élèves</b> : importez la liste (.xlsx, .xls, .csv). Les colonnes nom, prénom, classe et compétition sont détectées ; vérifiez-les dans les menus « Colonne… ». Les boutons « Compétition F / G » cochent l’équipe. « Ajouter et cocher » pour un élève de plus.</li>
<li><b>Éditer</b> : <span class="bouton">Éditer en PDF</span> ou <span class="bouton">Imprimer</span>. Deux convocations par page A4, à découper.</li></ol>`},
{t:'Convocations vierges',html:`<p>Choisissez <b>vierges</b> au lieu de <b>nominatives</b> et indiquez le nombre : l’élève écrit son nom à la maison. Pratique quand l’équipe n’est pas encore fixée.</p>`},
{t:'Hors ligne, lecture facilitée',html:`<ul>
<li>Ouvrez l’outil une fois avec du réseau : il marche ensuite sans réseau.</li>
<li><b>Lecture facilitée</b> (case en haut) : police plus lisible, lettres espacées. Le choix vaut pour toutes les applis EPS de l’appareil. Le PDF produit n’est pas modifié.</li></ul>`}]}]};
