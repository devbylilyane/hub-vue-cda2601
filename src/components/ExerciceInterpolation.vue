<script setup>
const titre = "Mon premier exercice Vue"
const prenom = "Lilyane"
const age = 23
const estEnFormation = true

const loisirs = ["lecture", "dessin", "musique"]

const utilisateur = {
  ville: "Toulouse",
  pays: "France"
}
</script>

<template>
    <!-- aggrandir la police et mettre du gras au titre pour faire la distinction -->
  <h1 class="text-2xl font-bold mb-4">{{ titre }}</h1>
  <p>Prénom : {{ prenom }}</p>
  <p>Âge : {{ age }}</p>
  <p>En formation : {{ estEnFormation ? 'Oui' : 'Non' }}</p>
  <p>Premier loisir : {{ loisirs[0] }}</p>
  <p>Deuxième loisir : {{ loisirs[1] }}</p>
  <p>Troisième loisir : {{ loisirs[2] }}</p>
  <p>Ville : {{ utilisateur.ville }}</p>
  <p>Pays : {{ utilisateur.pays }}</p>
</template>