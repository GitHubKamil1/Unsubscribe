document.addEventListener('DOMContentLoaded', function() {
    // Funktion zum Abrufen eines URL-Parameters
    function getParameterByName(name, url = window.location.href) {
        const nameEscaped = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + nameEscaped + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(url);
        if (!results || !results[2]) return null;
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Funktion zum Extrahieren von Werten aus dem verschachtelten "parameter"-Objekt
    function getNestedParameterValue(parameterString, key) {
        const urlParams = new URLSearchParams(parameterString);
        return urlParams.get(key);
    }

    // Extrahiere den gesamten "parameter"-String
    const parameterString = getParameterByName('parameter');
    
    // Speichere die spezifischen Parameter als Konstanten
    const emailId = getNestedParameterValue(parameterString, 'emailid');
    const emailAddress = getNestedParameterValue(parameterString, 'emailaddress');
    const contactId = getParameterByName('contactId');

    // Ausgabe der extrahierten Parameter zur Überprüfung
    console.log('Email ID:', emailId);
    console.log('Email Address:', emailAddress);
    console.log('Contact ID:', contactId);

    const form = document.getElementById('unsubscribeForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Verhindert das Standard-Submit-Verhalten

        const reasons = document.querySelectorAll('input[name="reason"]:checked');
        const selectedReasons = [];

        reasons.forEach((reason) => {
            selectedReasons.push(reason.value);
        });

        if (selectedReasons.length > 0) {
            unsubscribeUser(selectedReasons, emailId, emailAddress, contactId);
        } else {
            alert("Bitte wähle mindestens einen Grund aus.");
        }
    });

    function unsubscribeUser(reasons, emailId, emailAddress, contactId) {
        // Simulierte Deabonierung - hier könntest du einen API-Aufruf machen
        console.log('Benutzer wird deabonniert aus folgenden Gründen:', reasons);
        console.log('Email ID:', emailId);
        console.log('Email Address:', emailAddress);
        console.log('Contact ID:', contactId);

        // Simuliere einen erfolgreichen API-Aufruf
        setTimeout(() => {
            alert('Du wurdest erfolgreich abgemeldet.');
            // Weiterleitung zur Startseite oder einer Bestätigungsseite
            window.location.href = '/';
        }, 1000);
    }
});
