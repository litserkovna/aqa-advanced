function checkOrder(available, ordered) {
    if (ordered === 0) {
        console.log("Your order is empty");
    } else if (available < ordered) {
        console.log("Your order is too large, we do not have enough goods.");
    } else {
        console.log("Your order is accepted");
    }
}
checkOrder(20, 0);
checkOrder(20, 100);   
checkOrder(20, 5);   