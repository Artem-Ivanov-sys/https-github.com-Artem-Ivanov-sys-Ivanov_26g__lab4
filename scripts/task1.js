{
    let vals = ["Select", "Долар США", "Євро", "Японська єна", "Фунт стерлінгів", "Китайська юань"];
    let courses = [39.23, 42.48, 0.26, 49.61, 5.43];
    let count = vals.length;
    let select = document.getElementsByTagName("select")[0];
    for (let i = 0; i < count; i++) {
        let elem = document.createElement("option");
        elem.value = i;
        elem.textContent = vals[i];
        select.appendChild(elem);
    }

    function f(e) {
        if (e.value > 0)
            document.getElementsByTagName("input")[0].value = courses[e.value-1]+" грн";
        else
            document.getElementsByTagName("input")[0].value = "##.## грн";
    }
}