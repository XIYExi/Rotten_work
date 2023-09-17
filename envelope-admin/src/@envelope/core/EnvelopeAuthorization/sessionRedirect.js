const sessionStorageKey = 'envelopeRedirectUrl';

export const getSessionRedirectUrl = () => {
    return window.sessionStorage.getItem(sessionStorageKey);
};

export const setSessionRedirectUrl = (url) => {
    window.sessionStorage.setItem(sessionStorageKey, url);
};

export const resetSessionRedirectUrl = (url) => {
    window.sessionStorage.removeItem(sessionStorageKey);
};
