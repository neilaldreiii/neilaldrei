<template>
    <div class="portfolio">
        <header>
            <h1 v-in-viewport.once>Portfolio</h1>
        </header>
        <div class="content">
            <div class="projects">
                <div v-for="pro in projects" :key="pro.index" class="project" v-in-viewport.fully.once>
                    <div class="project-img" :class="pro.img"></div>
                    <div class="project-overlay">
                        <h1>{{ pro.companyName }}</h1>
                        <a :href="pro.git" target="_blank" class="git">GitHub 
                            <span class="icon">
                                <i class="fas fa-code-branch"></i>
                            </span>
                        </a>
                        <span v-if="pro.hasDeployed">
                            <a :href="pro.url" target="_blank" class="visit">Visit
                                <span class="icon">
                                    <i class="fas fa-external-link-alt"></i>
                                </span>
                            </a>
                        </span>
                        <span v-else>
                            <p>{{ pro.url }}</p>
                            <span class="icon">
                                <i class="far fa-frown"></i>
                            </span>
                        </span>
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
                    git: "https://github.com/neilaldreiii/MAADDS",
                    url: "https://maaddsenterprise.firebaseapp.com/",
                    img: "maadds",
                    hasDeployed: true
                },
                {
                    companyName: "Triton Swim Club",
                    git: "https://github.com/neilaldreiii/Triton-Laravel",
                    url: "This project has not been deployed yet.",
                    img: "triton",
                    hasDeployed: false
                },
                {
                    companyName: "CBSUA College Of Veterinary Medicine Poll",
                    git: "https://github.com/neilaldreiii/cbsua-cvm-poll",
                    url: "https://cbsua-cvm-poll.firebaseapp.com/",
                    img: "cvm",
                    hasDeployed: true
                }
            ]
        }
    },
}
</script>