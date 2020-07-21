// Create IIFE and return from it all you want to become public

const module = (function () {
    const _privateField = "private field";
    const publicField = "public field";

    return {
        publicField,
        logPrivate: () => {
            console.log(_privateField);
        }
    }
})();