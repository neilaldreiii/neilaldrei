<template>
    <div class="app-skills">
        <header>
            <h1>Skills</h1>
        </header>
        <div class="content">
            <div class="skills">
                <div class="skill" v-for="skill in skills" :key="skill.index">
                    <div class="skill-info">
                        <h4>{{ skill.skill }}</h4>
                        <p>{{ skill.progress }}</p>
                    </div>
                    <div class="progress-bar">
                        <div class="bar-fill" :style="{width: skill.progress}"></div>
                    </div>
                </div>
            </div>
            <div class="add-skills" v-if="showExtras">
                <div class="skill" v-for="extras in skillsHidden" :key="extras.index">
                    <div class="skill-info">
                        <h4>{{ extras.skill }}</h4>
                        <p>{{ extras.progress }}</p>
                    </div>
                    <div class="progress-bar">
                        <div class="bar-fill" :style="{width: extras.progress}"></div>
                    </div>
                </div>
            </div>
            <div class="skill-controls">
                <button @click="showExtras = !showExtras">
                    <span v-if="!showExtras">
                        Show more
                        <!-- Icon Goes Here -->
                    </span>
                    <span v-else>
                        Show Less
                        <!-- Icon Goes Here -->
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "skills",
    data() {

        return {

            showExtras: false,
            skills: [
                {
                    skill:"HTML5",
                    progress: "85%"
                },
                {
                    skill: "CSS3",
                    progress: "80%"
                },
                {
                    skill: "JavaScript",
                    progress: "80%"
                },
                {
                    skill: "Vue.JS",
                    progress: "75%"
                },
                {
                    skill: "Laravel",
                    progress: "70%"
                }
            ],
            skillsHidden: [
                {
                    skill: "Firebase",
                    progress: "65%"
                },
                {
                    skill: "GIT",
                    progress: "60%"
                },
                {
                    skill: "PHP",
                    progress: "60%"
                },
                {
                    skill: "MySql",
                    progress: "50%"
                },
                {
                    skill: "C#",
                    progress: "40%"
                },
                {
                    skill: "ASP.NET 4.6",
                    progress: "40%"
                },
                {
                    skill: "Python",
                    progress: "35%"
                },
                {
                    skill: "React JS",
                    progress: "30%"
                },
                {
                    skill: "React Native",
                    progress: "15%"
                },
                {
                    skill: "SEO",
                    progress: "40%"
                },
                {
                    skill: "Responsive",
                    progress: "70%"
                },
                {
                    skill: "Photoshop",
                    progress: "45%"
                },
                {
                    skill: "Unity",
                    progress: "30%"
                }
            ]
        }
    }
}
</script>