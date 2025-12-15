import { Alert, AlertButton } from "react-native";

/**
 * @namespace MapsAirportAlert
 * Contient les fonctions de gestion d'alertes spécifiques à l'application.
 */
export const MapsAirportAlert = {
    /**
     * Affiche une boîte de dialogue d'alerte native.
     * * @param title Le titre de l'alerte.
     * @param message Le message principal affiché.
     * @param onConfirm Callback exécuté si l'utilisateur appuie sur le bouton de confirmation (optionnel).
     */
    handleAlert: (
        title: string,
        message: string,
        onConfirm?: () => void,
    ): void => {

        // Correction 1: Le tableau de boutons doit être explicitement typé AlertButton[]
        let buttons: AlertButton[];

        // Si un onConfirm est fourni, nous affichons deux boutons : Annuler et OK.
        if (onConfirm) {
            buttons = [
                {
                    text: 'Annuler',
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: onConfirm
                },
            ];

            Alert.alert(title, message, buttons);

        } else {
            // Si pas de onConfirm, un seul bouton "OK" par défaut.
            buttons = [{ text: 'OK' }];
            Alert.alert(title, message, buttons);
        }
    }
};

// Si vous ne voulez qu'exporter la fonction directement (la plus simple):
// export const handleAlert = MapsAirportAlert.handleAlert;