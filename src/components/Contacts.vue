<template>
    <div class="app-contacts">
        <header>
            <h1 v-in-viewport.once>Contacts</h1>
        </header>
        <div class="content">
            <div class="contacts" v-in-viewport.once>
                <p>Naga City, Camarines Sur, PH</p>
                <p>neilaldreiii@gmail.com</p>
                <p>+63915-204-4704</p>
            </div>
            <div class="social">
                <a href="https://github.com/neilaldreiii" target="_blank" class="github icon" v-in-viewport.once><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/neilaldrei" target="_blank" class="twitter icon" v-in-viewport.once><i class="fab fa-twitter"></i></a>
                <a href="https://www.messenger.com/t/dreiiin" target="_blank" class="mes icon" v-in-viewport.once><i class="fab fa-facebook-messenger"></i></a>
            </div>
            <div class="direct-message">
                <div class="caption">
                    <span class="line"></span>
                    <p><b>OR</b></p>
                    <span class="line"></span>
                </div>
                <div class="main-message">
                    <p>Send a Direct Message</p>
                    <div class="form">
                        <form v-on:submit.prevent="directMessage">
                            <div class="form-group">
                                <input type="text" placeholder="First Name" v-model="details.firstName" class="form-control">
                                <input type="text" placeholder="Last Name" v-model="details.lastName" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Email" v-model="details.email" class="form-control">
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Message" cols="30" rows="10" v-model="details.message" class="form-control"></textarea>
                            </div>
                            <div class="form-action">
                                <button type="submit" :disabled="sent" :class="{ sent : sent }">Send</button>
                            </div>
                        </form>
                    </div>
                    <div v-if="alerts.length" class="alerts">
                        <ul>
                            <li v-for="alert in alerts" :key="alert.index"><p>{{ alert }}</p></li>
                        </ul>
                    </div>
                    <div v-if="success.length" class="success">
                        <p v-for="s in success" :key="s.index">{{ s }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from "@/firebase/firebaseInit";

export default {
    name: "contacts",
    data() {
        return {
            details: {
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            },
            sent: false,
            alerts: [],
            success: []
        }
    },
    methods: {
        directMessage() {
            
            this.alerts = [];

            if(!this.details.firstName) {

                this.alerts.push("*First name is required");

            } else if (!this.details.lastName) {

                this.alerts.push("*Last name is required");

            } else if (!this.details.email) {

                this.alerts.push("*Email is required");

            } else if (!this.details.message) {

                this.alerts.push("*Message is required");

            } else {

                db.collection("userMessages")
                .add({
                    
                    firstName: this.details.firstName,
                    lastName: this.details.lastName,
                    email: this.details.email,
                    message: this.details.message
                
                })
                .then(
                    
                    docRef => {

                        this.sent = true;
                        this.success.push("Message sent! Thank you for visiting my profile :) ");
                        this.clearForm();

                })
                .catch(

                    error => this.alerts.push(error.message)

                )

            }
        },
        clearForm() {

            this.details.firstName = "";
            this.details.lastName = "";
            this.details.email = "";
            this.details.message = "";

        }
    }
}
</script>