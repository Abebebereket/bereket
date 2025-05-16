const btn1 = document.querySelector(".btn1");
        const btn2 = document.querySelector(".btn2");
        const container1 = document.querySelector(".container1");
        const container2 = document.querySelector(".container2");
        const backButtons = document.querySelectorAll(".back");

        // Function to show container1 and hide main buttons
        btn1.addEventListener("click", function() {
            container1.classList.remove("hidden");
            btn1.classList.add("hidden");
            btn2.classList.add("hidden");
        });

        // Function to show container2 and hide main buttons
        btn2.addEventListener("click", function() {
            container2.classList.remove("hidden");
            btn1.classList.add("hidden");
            btn2.classList.add("hidden");
        });

        // Function to go back to the main screen
        backButtons.forEach(button => {
            button.addEventListener("click", function() {
                container1.classList.add("hidden");
                container2.classList.add("hidden");
                btn1.classList.remove("hidden");
                btn2.classList.remove("hidden");
            });
        });