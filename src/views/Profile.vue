<template>
    <div class="app">
        <app-banner></app-banner>
        <div class="container">
            <div class="left">
                <app-intro></app-intro>
                <app-skills></app-skills>
                <app-contacts></app-contacts>
            </div>
            <div class="right">
                <app-timeline></app-timeline>
            </div>
        </div>
        <div class="col">
            <app-portfolio></app-portfolio>
        </div>
        <div class="col">
            <app-footer></app-footer>
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
import AppFooter from "@/components/AppFooter";

export default {
    name: "profile",
    components: {
        "app-banner": Banner,
        "app-timeline": Timeline,
        "app-intro": Intro,
        "app-skills": Skills,
        "app-portfolio": Portfolio,
        "app-contacts": Contacts,
        "app-footer": AppFooter
    }
}
</script>
