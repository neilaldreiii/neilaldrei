<template>
    <div class="container">
        <div class="col">
            <app-intro></app-intro>
            <app-timeline></app-timeline>
        </div>
        <div class="co">
            <app-skills></app-skills>
            <app-contacts></app-contacts>
        </div>
    </div>
</template>

<script>
import Banner from "@/components/Banner";
import Timeline from "@/components/Timeline";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contacts from "@/components/Contacts";

export default {
    name: "profile",
    components: {
        "app-banner": Banner,
        "app-timeline": Timeline,
        "app-intro": Intro,
        "app-skills": Skills,
        "app-portfolio": Portfolio,
        "app-contacts": Contacts
    }
}
</script>

<style>

</style>
