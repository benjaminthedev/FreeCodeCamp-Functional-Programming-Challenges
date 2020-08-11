// Only change code below this line
function urlSlug(title) {
    return title
        .split(/\W/)
        .filter(words => {
            return words !== "";
        })
        .join("-")
        .toLowerCase();
}
// Only change code above this line
