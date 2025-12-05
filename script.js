james_intro_body = document.getElementById("james-intro-body")
        function james_change_colour() {
            james_intro_colour = james_intro_body.style.backgroundColor;
            if (james_intro_colour === "aqua") {
                james_intro_body.style.backgroundColor = "red";
            }
            if (james_intro_colour === "red") {
                james_intro_body.style.backgroundColor = "aqua";
            }
        }

        jj_intro_body = document.getElementById("jj-intro-body")
        function jj_change_colour() {
            jj_intro_colour = jj_intro_body.style.backgroundColor;
            if (jj_intro_colour === "purple") {
                jj_intro_body.style.backgroundColor = "green";
            }
            if (jj_intro_colour === "green") {
                jj_intro_body.style.backgroundColor = "purple";
            }
        }