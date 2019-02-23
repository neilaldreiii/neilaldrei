<template>
    <div class="app">
        <app-banner></app-banner>
        <div class="container">
            <div class="row">
                <div class="col">
                    <app-intro></app-intro>
                    <app-timeline></app-timeline>
                </div>
                <div class="col">
                    <app-skills></app-skills>
                    <app-contacts></app-contacts>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <app-portfolio></app-portfolio>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// CSS Files
require("@/assets/css/default.css");
require("@/assets/css/main.css");

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
