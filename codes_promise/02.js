function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'error');
    });
}

timeout(3000).then((value) => {
    console.log(value);
});