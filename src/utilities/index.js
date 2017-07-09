const debounce = (context = this, func, delay) => {
    let timeout = null;
    let callbackArgs = null;

    const later = () => func.apply(context, callbackArgs);

    return function() {
        callbackArgs = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(later, delay);
    }
};

export { debounce };