genPass = () => {
    const inputPassLen = document.getElementById('inputPassLen');
    const inputPassLenValue = inputPassLen.value;

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+=-[]{}:;'<>,./";

    let  randPass = '';

    for(let i=0; i<inputPassLenValue; i++)
    {
        const randIndex = Math.round(Math.random()*charset.length);
        // console.log(randIndex);

        const randChar = charset[randIndex];
        // console.log(randChar);

        randPass += randChar;
    }
    document.getElementById('showPassword').textContent = randPass;
};