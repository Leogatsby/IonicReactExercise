import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import "./Home.scss";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="HomeWrapper">
          <div className="Home">
            <strong>Ready to create an app?</strong>
            <p>
              Start with Ionic{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ionicframework.com/docs/components"
              >
                UI Components
              </a>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
