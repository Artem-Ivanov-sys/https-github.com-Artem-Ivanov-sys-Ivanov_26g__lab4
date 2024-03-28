{
    let shift_pressed = false;
    for (let elem of document.getElementsByTagName("textarea")) {
        elem.addEventListener("keydown", (e) => {
            if (e.key == "Shift") {
                shift_pressed = true;
            }
            if (e.key == "Enter" && shift_pressed == false && e.target.value != "") {
                let text = e.target.value;
                let message = document.createElement("li");
                let message_text = document.createElement("p");
                let message_text_format = document.createElement("pre");
                if (e.target.name == "first") {
                    message.className = "first";
                } else {
                    message.className = "second";
                }
                message_text_format.textContent = text;
                message_text.append(message_text_format);
                message.append(message_text);
                document.getElementsByClassName("message_list")[0].append(message);
                setTimeout(() => {e.target.value = "";}, 10);
            }
        });
        elem.addEventListener("keyup", (e) => {
            if (e.key == "Shift") {
                shift_pressed = false;
            }
        });
    }
}