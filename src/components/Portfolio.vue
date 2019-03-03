<template>
    <div class="portfolio">
        <header>
            <h1>Portfolio</h1>
        </header>
        <div class="content">
            <!-- 
                Projects set to grid
             -->
            <div class="projects">
                <!-- 
                    Iterate through projects 
                    and get 
                    their property names
                 -->
                <div v-for="pro in projects" :key="pro.index" class="project">
                    <!-- 
                        Project's Images 
                        Set as background image
                    -->
                    <div class="project-img" :class="pro.img"></div>
                    <div class="project-overlay">
                        <h1>{{ pro.companyName }}</h1>
                        <a :href="pro.git" class="git">GitHub 
                            <span class="icon">
                                <i class="fas fa-code-branch"></i>
                            </span>
                        </a>
                        <span v-if="pro.hasDeployed">
                            <a :href="pro.url" class="visit">Visit
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
                    git: "https://www.github.com./neilaldreiii/MAADDS",
                    url: "https://www.maaddsenterprise.firebaseapp.com",
                    img: "maadds",
                    hasDeployed: true
                },
                {
                    companyName: "Triton Swim Club",
                    git: "https://www.github.com./neilaldreiii/triton-laravel",
                    url: "This project has not been deployed yet.",
                    img: "triton",
                    hasDeployed: false
                },
                {
                    companyName: "CBSUA College Of Veterinary Medicine Poll",
                    git: "https://www.github.com./neilaldreiii/CBSUA-CVM",
                    url: "https://www.cbsua-cvm-poll.firebaseapp.com",
                    img: "cvm",
                    hasDeployed: true
                }
            ]
        }
    },
}
</script>