import React from "react";
import { hydrateRoot } from "react-dom/client";
import { initializeApp } from "./helpers";

async function main() {
    const App = await initializeApp()

    hydrateRoot(
        document.getElementById('root'),
        <App />   
    );
}

main()