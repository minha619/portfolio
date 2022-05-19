import React from "react";

function Contact() {

    return (
        <div class='main-container'>
            <div id='contact-container'>
                <form method="post" action="mailto:minha619@gmail.com">
                    <fieldset class="uk-fieldset">

                       <h3>Contact</h3>

                        <div class="uk-margin">
                            <input class="uk-input" type="text" placeholder="Name" />
                        </div>

                        <div class="uk-margin">
                            <input class="uk-input" type="text" placeholder="Email" />
                        </div>

                        <div class="uk-margin">
                            <textarea class="uk-textarea" rows="5" placeholder="Message"></textarea>
                        </div>
                        <button class="uk-button uk-button-default" uk-tooltip="title: Send Message; pos: bottom">Submit</button>

                    </fieldset>
                </form>
                <div id="social">
                    <div class="social-icons"> <a href="https://www.linkedin.com/in/minha619" target="_blank" uk-icon="linkedin"></a> </div>
                    <div class="social-icons"> <a href="https://github.com/minha619" target="_blank" uk-icon="github"></a> </div>
                </div>
            </div>
        </div >
    )
}

export default Contact;
