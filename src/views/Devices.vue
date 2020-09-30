<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Devices</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Devices</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-list-header>List header</ion-list-header>

        <ion-item router-link="/device">
          <ion-label>Device</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
} from "@ionic/vue";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
  },
};
</script>