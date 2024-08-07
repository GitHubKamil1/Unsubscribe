document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('unsubscribeForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Verhindert das Standard-Submit-Verhalten

        const reasons = document.querySelectorAll('input[name="reason"]:checked');
        const selectedReasons = [];

        reasons.forEach((reason) => {
            selectedReasons.push(reason.value);
        });

        if (selectedReasons.length > 0) {
            unsubscribeUser(selectedReasons);
        } else {
            alert("Bitte wähle mindestens einen Grund aus.");
        }
    });

    function unsubscribeUser(reasons) {
        // Simulierte Deabonierung - hier könntest du einen API-Aufruf machen
        console.log('Benutzer wird deabonniert aus folgenden Gründen:', reasons);

        // Simuliere einen erfolgreichen API-Aufruf
        setTimeout(() => {
            alert('Du wurdest erfolgreich abgemeldet.');
            // Weiterleitung zur Startseite oder einer Bestätigungsseite
            window.location.href = '/';
        }, 1000);
    }
});
