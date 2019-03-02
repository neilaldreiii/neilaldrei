<template>
    <div class="portfolio">
        <header>
            <h1>Portfolio</h1>
        </header>
        <div class="content">
            <div class="projects">
                <div v-for="pro in projects" :key="pro.index" class="projec">
                    <div class="project-img">
                        <img src="" alt="">
                    </div>
                    <div class="project-overlay">
                        <h1>{{ pro.companyName }}</h1>
                        <div class="project-links">
                            <a :href="pro.git">GitHub</a>
                            <span v-if="pro.hasDeployed">
                                <a :href="pro.url">Visit</a>
                            </span>
                            <span v-else>
                                <p>{{ pro.url }}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "portfolio",
    data() {
        return {
            projects: [
                {
                    companyName: "MAADD'S Enterprise",
                    git: "https://www.github.com./neilaldreiii/MAADDS",
                    url: "https://www.maaddsenterprise.firebaseapp.com",
                    hasDeployed: true
                },
                {
                    companyName: "Triton Swim Club",
                    git: "https://www.github.com./neilaldreiii/triton-laravel",
                    url: "This project has not been deployed yet.",
                    hasDeployed: false
                },
                {
                    companyName: "CBSUA College Of Veterinary Medicine Poll",
                    git: "https://www.github.com./neilaldreiii/CBSUA-CVM",
                    url: "https://www.cbsua-cvm-poll.firebaseapp.com",
                    hasDeployed: true
                }
            ]
        }
    },
}
</script>