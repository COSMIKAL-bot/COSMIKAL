// Module de Cryptographie Avancée pour COSMIKAL (Méthode Carré Sator)

class CryptoModule {
    constructor() {
        this.textEncoder = new TextEncoder();
        this.textDecoder = new TextDecoder();
    }

    async generateKey() {
        return await window.crypto.subtle.generateKey(
            { name: "AES-GCM", length: 256 },
            true,
            ["encrypt", "decrypt"]
        );
    }

    async encrypt(text, key) {
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const encodedText = this.textEncoder.encode(text);
        const encrypted = await window.crypto.subtle.encrypt(
            { name: "AES-GCM", iv: iv },
            key,
            encodedText
        );
        return { cipher: encrypted, iv: iv };
    }

    async decrypt(encryptedData, key) {
        const decrypted = await window.crypto.subtle.decrypt(
            { name: "AES-GCM", iv: encryptedData.iv },
            key,
            encryptedData.cipher
        );
        return this.textDecoder.decode(decrypted);
    }
}

// Organisation selon la méthode Carré Sator
const SATOR = ["S", "A", "T", "O", "R"];
const AREPO = ["A", "R", "E", "P", "O"];
const TENET = ["T", "E", "N", "E", "T"];
const OPERA = ["O", "P", "E", "R", "A"];
const ROTAS = ["R", "O", "T", "A", "S"];
const SATOR_SQUARE = [SATOR, AREPO, TENET, OPERA, ROTAS];

console.table(SATOR_SQUARE);

// Exemple d'utilisation
(async () => {
    const cryptoModule = new CryptoModule();
    const key = await cryptoModule.generateKey();
    const message = "Message ultra sécurisé";

    const encryptedData = await cryptoModule.encrypt(message, key);
    console.log("Données chiffrées :", encryptedData);

    const decryptedMessage = await cryptoModule.decrypt(encryptedData, key);
    console.log("Message déchiffré :", decryptedMessage);
})();
