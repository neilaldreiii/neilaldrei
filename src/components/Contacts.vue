<template>
    <div class="app-contacts">
        <header>
            <h1>Contacts</h1>
        </header>
        <div class="content">
            <div class="contacts">
                <p>Naga City, Camarines Sur, PH</p>
                <p>neilaldreiii@gmail.com</p>
                <p>+63915-204-4704</p>
            </div>
            <div class="social">
                <a href="https://github.com/neilaldreiii" target="_blank" class="github icon"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/neilaldrei" target="_blank" class="twitter icon"><i class="fab fa-twitter"></i></a>
                <a href="https://www.messenger.com/t/dreiiin" target="_blank" class="mes icon"><i class="fab fa-facebook-messenger"></i></a>
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
                                <input type="text" placeholder="First Name" v-model="firstName" class="form-control">
                                <input type="text" placeholder="Last Name" v-model="lastName" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Email" v-model="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Message" cols="30" rows="10" v-model="message" class="form-control"></textarea>
                            </div>
                            <div class="form-action">
                                <button type="submit">Send </button>
                            </div>
                        </form>
                    </div>
                    <div class="success">
                        <p>Thank you. Your message has been sent successfully.</p>
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
        }
    }
}
</script>