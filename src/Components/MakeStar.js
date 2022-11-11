function makeStar(star) {
    var starIcon = "";
    
    if (star === 0) {
        starIcon = "❌ ❌ ❌";
    }
    else {
        starIcon = "⭐️ ".repeat(star);
        starIcon += "  ".repeat(5-star);
    }
    
    return starIcon;
} 

export default makeStar;