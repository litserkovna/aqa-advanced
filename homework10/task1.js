function greetCustomer(greetText, ms) {
    setTimeout(() => console.log(greetText), ms);
}
greetCustomer("Hello there", 1000);