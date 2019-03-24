<template>
    <div class="banner">
        <div class="profile-info">
            <div class="dp-container" v-in-viewport.once>
                <div class="dp" v-in-viewport.once></div>
            </div>
            <div class="profile-social">
                <a href="https://github.com/neilaldreiii" target="_blank" class="github icon" v-in-viewport><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/neilaldrei" target="_blank" class="twitter icon" v-in-viewport><i class="fab fa-twitter"></i></a>
                <a href="https://www.messenger.com/t/dreiiin" target="_blank" class="mes icon" v-in-viewport><i class="fab fa-facebook-messenger"></i></a>
            </div>
        </div>
        <div class="profile-info">
            <div class="main-info">
                <h2 v-in-viewport.once>Peralta</h2>
                <h1 v-in-viewport.once>Neil Aldrei</h1>
                <h6 v-in-viewport.once>
                    <i>Web Developer</i>
                </h6>
            </div>
            <div class="profile-contacts" v-in-viewport.once>
                <h3>Naga City, Camarines Sur, PH</h3>
                <h3>neilaldreiii@gmail.com</h3>
                <h3>+63915-204-4704</h3>
                <a href="https://drive.google.com/open?id=1mNdA-2Mz6fgxTA_cxG0MVED-vs0NLmUk" target="_blank" class="download">
                    Resume 
                    <i class="fas fa-file-download"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "banner"
}
</script>