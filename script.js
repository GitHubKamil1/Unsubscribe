function getURLParameters() {
    const params = new URLSearchParams(window.location.search);

    // Für jeden Parameter in der URL, geben wir den Namen und den Wert aus
    params.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}

// Diese Methode aufrufen, um die Parameter auszugeben
getURLParameters();
