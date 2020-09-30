<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Device</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Device</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-list-header>List header</ion-list-header>

        <ion-item router-link="/device/ultrasonic">
          <ion-label>Ultrasonic</ion-label>
        </ion-item>

        <ion-item router-link="/device/gps">
          <ion-label>GPS</ion-label>
        </ion-item>

        <ion-item router-link="/device/lora">
          <ion-label>LoRa</ion-label>
        </ion-item>

        <ion-item router-link="/device/config">
          <ion-label>Configuration</ion-label>
        </ion-item>

        <ion-item router-link="/device/information">
          <ion-label>Information</ion-label>
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
  IonBackButton,
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
    IonBackButton,
  },
};
</script>