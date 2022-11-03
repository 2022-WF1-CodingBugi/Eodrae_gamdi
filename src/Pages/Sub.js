import "./Sub.css"
import MapDiv from "./MapDiv";
import main_logo from "./images/main_logo.png"

const Sub = () => {
    const init = () => {
        document.write("init");
        var category = document.getElementById("categorySelect");
        var selectedCategory = sessionStorage.getItem('saveData');
        console.log("hello", selectedCategory);
        if(selectedCategory === "food") {
            category.value = "맛집";
        } else if(selectedCategory === "activity") {
            category.value = "액티비티"
        } else if(selectedCategory === "lodging") {
            category.value = "숙소";
        } else {
            category.value = "명소";
        }
    }

    return (
        <>
            <header>
                <img id="logo" src={main_logo} alt="어드레감디"/>
            </header>
            <MapDiv />
        </>
    )
}

export default Sub;