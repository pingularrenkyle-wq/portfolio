const HomeView = {
    setup(){



        return useModel();
    },

    template: `
    <div class="px-10 pt-10">

        <h1 class="anim-up text-white text-[30px] lg:text-4xl">Hi! It's <span class="text-red-600">Kyle</span></h1>
        <p class="anim-up mt-1 text-white text-2xl" style="--d:.1s">I'm into <span class="font-bold text-red-600">Web Development</span></p>

        <div style="--d:.2s" class="anim-up flex hidden sm:flex bg-black border-[1.5px] border-red-600 mt-5 rounded-xl items-center px-2 py-1">
            <div class="w-[180px]">
                <h3 class="border-r text-[15px] lg:text-[16px] border-white px-4">My Tech Stack</h3>
            </div>
            <div class="grid grid-cols-3 lg:flex justify-center w-full">
                <div class="flex w-full justify-center p-2 rounded-xl items-center ml-5"
                    v-for="(logo, index) in logos"
                    :key="index">
                    <div class="flex items-center gap-2">
                        <img class="w-4 lg:w-7" :src="logo.logo" alt="">
                        <p class="text-xs">{{logo.name}}</p>                    
                    </div>
                </div>
            </div>
        </div>

        <div style="--d:.3s" class="anim-up bg-black border-[1.5px] border-red-600 lg:border-none lg:bg-transparent lg:px-0 my-5 rounded-xl px-[3rem] md:px-6 lg:px-6 py-6 space-y-6">

            <!-- ROW 1: Projects / About / Education (same layout as before) -->
            <div class="md:grid md:grid-cols-2 lg:flex justify-center space-y-5 md:space-y-0 lg:space-y-0 gap-6 items-center">
                <div style="--d:.5s" class="anim-zoom md:col-span-2 lg:col-span-1 rounded-xl lg:w-4/5 bg-black cursor-pointer border-[3px] border-red-600 md:flex items-center justify-center px-3 py-3 items-center gap-6 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,0,0,1)]">
                    <a href="#projects">
                        <div class="flex flex-col md:flex-row md:gap-6">
                            <div>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-regular fa-folder-open"></i>
                                        <h1 class="text-white text-2xl">Projects</h1>
                                    </div>
                                    <p class="text-xs mt-2">Some of the things I've built.</p>                    
                                </div>

                                <div class="flex flex-col items-center mt-3 justify-center">
                                    <img class="rounded-lg w-[200px] lg:h-[175px]" src="imgs/enrollment.png" alt="">
                                </div>                         
                        </div>                  
                    </a>
                </div>  

                
                <div style="--d:.65s" class="anim-zoom rounded-xl bg-black cursor-pointer border-[3px] border-red-600 lg:w-2/5 items-center justify-center px-3 py-3 items-center gap-6 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,0,0,1)]">
                    <a href="#about">
                        <div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-regular fa-user"></i>
                                    <h1 class="text-white text-2xl">About</h1>                            
                                </div>
                                <p class="text-xs mt-2">Who am I and how I work.</p>                    
                            </div>
                            <div class="flex flex-col items-center mt-3 justify-center">
                                <img src="imgs/desk.jpg" class="w-[120px] h-[120px]" alt="">                      
                         </div>                    
                    </a>
                </div>    
                
                
                <div style="--d:.8s" class="anim-zoom rounded-xl bg-black cursor-pointer border-[3px] border-red-600 items-center justify-center px-3 py-3 items-center gap-6 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,0,0,1)]">
                    <a href="#education">
                    <div>
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-school"></i>
                            <h1 class="text-white text-2xl">Education</h1>                            
                        </div>
                        <p class="text-xs mt-2">My academic journey so far.</p>                    
                    </div>
                    <div class="flex flex-col items-center mt-3 justify-center">
                        <img src="imgs/educ.png" class="w-[200px] lg:w-[300px] h-[119px]" alt="">
                    </div>
                    </a>
                </div> 
            </div>

            <!-- ROW 2: Currently Learning + Contact -->
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-[3fr_2fr]">

            <div style="--d:1s" class="anim-zoom rounded-xl bg-black border-[3px] border-red-600 px-4 py-4 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,0,0,1)]">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-book-open-reader"></i>
                    <h1 class="text-white text-2xl">Currently Learning</h1>
                </div>
                <p class="text-xs mt-2">What I'm studying and practicing right now.</p>

                <div class="flex flex-wrap gap-3 mt-4">
                    <div v-for="(item, index) in learning" :key="index"
                         class="flex items-center gap-2 border-2 border-red-600 rounded-full px-4 py-1.5 hover:bg-red-600/20 transition-all duration-300">
                        <img class="w-5 h-5 object-contain" :src="item.logo" alt="">
                        <p class="text-sm">{{item.name}}</p>
                    </div>
                </div>
            </div>

            <div style="--d:1.15s" class="anim-zoom rounded-xl bg-black cursor-pointer border-[3px] border-red-600 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,0,0,1)]">
                <a href="#/contact" class="block px-4 py-4 h-full">
                    <div class="flex items-center gap-2">
                        <i class="fa-regular fa-envelope"></i>
                        <h1 class="text-white text-2xl">Contact</h1>
                    </div>
                    <p class="text-xs mt-2">Have a project in mind? Let's work together.</p>

                    <span class="inline-block mt-4 border-2 border-red-600 rounded-full px-4 py-1.5 text-sm">
                        Get in touch <i class="fa-solid fa-arrow-right ml-1"></i>
                    </span>
                </a>
            </div>
        </div>
        </div>

    </div>
    `
}

const AboutView = {
    setup(){
        return useModel();
    },

    template: `
    <div class="px-10 pt-10 flex flex-col min-h-screen md:min-h-[calc(100vh-10rem)] lg:min-h-screen items-center justify-center pb-16">
        <div>
        
        <h1 class="anim-up text-white text-[30px] lg:text-4xl">About <span class="text-red-600">Me</span></h1>
        <p class="anim-up mt-3 text-white max-w-2xl" style="--d:.1s">
            I'm committed to continuous learning and staying up-to-date with the latest web technologies
            to deliver high-quality results. Dedicated to building efficient, scalable, and visually
            appealing digital experiences.
        </p>

        <h2 class="anim-up text-red-600 text-2xl mt-8" style="--d:.2s">Skills</h2>

        <div class="mt-4 space-y-5 max-w-2xl">
            <div v-for="(skill, index) in skills" :key="index" class="anim-up" :style="{ '--d': (0.3 + index * 0.12) + 's' }">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-8 flex items-center justify-center">
                        <img class="max-w-full max-h-full object-contain" :src="skill.logo" :alt="skill.name">
                    </div>
                    <p>{{skill.name}}</p>
                    <span class="ml-auto text-sm font-bold">{{skill.percent}}%</span>
                </div>

                <div class="mt-1.5 w-full h-2 rounded-full" :style="{ backgroundColor: skill.color + '33' }">
                    <div class="anim-grow h-full rounded-full"
                         :style="{ '--d': (0.5 + index * 0.12) + 's', width: skill.percent + '%', backgroundColor: skill.color, boxShadow: '0 0 4px ' + skill.color + ', 0 0 14px ' + skill.color }">
                    </div>
                </div>
            </div>
        </div>        
        
        </div>
    </div>
    `
}

const ProjectsView = {
    setup(){
        return useModel();
    },

    template: `
    <div class="px-10 pt-10 pb-16">
        <h1 class="anim-up text-white text-[30px] lg:text-4xl">Projects</h1>
        <p class="anim-up mt-3 text-white" style="--d:.1s">Some of the things I've built.</p>

        <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-5">
            <div v-for="(project, index) in projects" :key="index"
                 :style="{ '--d': (0.25 + index * 0.15) + 's' }"
                 class="anim-zoom flex flex-col bg-black border-[3px] border-red-600 rounded-xl p-3 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,0,0,1)]">

                <video v-if="project.type === 'video'" class="rounded-lg w-full h-[180px] object-cover"
                       :src="project.src" autoplay loop muted playsinline></video>
                <img v-else class="rounded-lg w-full h-[180px] object-cover" :src="project.src" :alt="project.title">

                <h3 class="text-white text-xl mt-3">{{project.title}}</h3>
                <p class="text-sm mt-1 flex-1">{{project.desc}}</p>

                <a v-if="project.link" :href="project.link"
                   class="self-start mt-4 border-2 border-red-600 text-sm px-4 py-1.5 rounded-full hover:bg-red-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,0,0,1)]">
                    See Project
                </a>
            </div>
        </div>
    </div>
    `
}

const EducationView = {
    setup(){
        return useModel();
    },

    template: `
    <div class="px-10 pt-10 pb-16">
        <h1 class="anim-up text-white text-[30px] lg:text-4xl">Education</h1>
        <p class="anim-up mt-3 text-white" style="--d:.1s">My academic journey so far.</p>

        <div class="relative max-w-4xl mx-auto mt-10">
            <!-- center line -->
            <div style="--d:.2s" class="anim-line absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-1 bg-red-600 shadow-[0_0_15px_rgba(255,0,0,1)]"></div>

            <div v-for="(edu, index) in educations" :key="index"
                 class="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-16 mb-14 last:mb-0">

                <!-- dot -->
                <span class="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_15px_rgba(255,0,0,1)]"></span>

                <div :style="{ '--d': (0.4 + index * 0.25) + 's' }"
                     :class="index % 2 === 0 ? 'anim-left md:col-start-1 md:text-right' : 'anim-right md:col-start-2 md:text-left'">
                    <span class="block text-xl font-bold text-white">{{edu.year}}</span>
                    <div class="mt-2 bg-black border-[3px] border-red-600 rounded-[2rem] px-8 py-6 shadow-[0_0_20px_rgba(255,0,0,0.8)]">
                        <h3 class="text-red-500 text-2xl">{{edu.level}}</h3>
                        <p class="mt-2 text-white">{{edu.school}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

const ContactView = {
    setup(){
        const { reactive, ref } = Vue;

        // Get your free access key at https://web3forms.com (enter your Gmail there),
        // then paste it here. Messages will be forwarded to that Gmail.
        const ACCESS_KEY = 'cc0a5681-8250-4a8a-a540-cbcdd7a36137';

        const form = reactive({ name: '', email: '', phone: '', subject: '', message: '', botcheck: false });
        const sending = ref(false);
        const sent = ref(false);
        const error = ref(false);

        async function sendMessage(){
            if (sending.value) return;

            sending.value = true;
            sent.value = false;
            error.value = false;

            if (ACCESS_KEY === 'cc0a5681-8250-4a8a-a540-cbcdd7a36137') {
                console.warn('Contact form: paste your Web3Forms access key in ContactView (view.js).');
            }

            try {
                const res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        access_key: ACCESS_KEY,
                        from_name: 'Portfolio Contact Form',
                        subject: form.subject || 'New message from your portfolio',
                        name: form.name,
                        email: form.email,
                        phone: form.phone,
                        message: form.message,
                        botcheck: form.botcheck
                    })
                });
                const data = await res.json();

                if (data.success) {
                    sent.value = true;
                    form.name = form.email = form.phone = form.subject = form.message = '';
                } else {
                    error.value = true;
                }
            } catch (err) {
                error.value = true;
            }

            sending.value = false;
        }

        return { form, sending, sent, error, sendMessage };
    },

    template: `
    <div class="px-10 pt-10 flex flex-col min-h-screen md:min-h-[calc(100vh-10rem)] lg:min-h-screen justify-center items-center pb-16">
        <div>
            <h1 class="anim-up text-white text-[30px] lg:text-4xl">Contact <span class="text-red-500">Me</span></h1>
            <p class="anim-up mt-3 text-white" style="--d:.1s">Have a project or question? Send me a message.</p>

            <form @submit.prevent="sendMessage" class="mt-5 space-y-4 max-w-3xl">
                <!-- spam trap: real visitors never see/tick this -->
                <input type="checkbox" v-model="form.botcheck" class="hidden" style="display:none" tabindex="-1" autocomplete="off">

                <div class="anim-up grid md:grid-cols-2 gap-4" style="--d:.25s">
                    <input v-model="form.name" type="text" placeholder="Full Name" required
                        class="w-full bg-black border-2 border-red-600 rounded-lg px-4 py-2 focus:outline-none focus:shadow-[0_0_15px_rgba(255,0,0,1)] transition-all duration-300">
                    <input v-model="form.email" type="email" placeholder="Email" required
                        class="w-full bg-black border-2 border-red-600 rounded-lg px-4 py-2 focus:outline-none focus:shadow-[0_0_15px_rgba(255,0,0,1)] transition-all duration-300">
                    <input v-model="form.phone" type="tel" placeholder="Phone Number"
                        class="w-full bg-black border-2 border-red-600 rounded-lg px-4 py-2 focus:outline-none focus:shadow-[0_0_15px_rgba(255,0,0,1)] transition-all duration-300">
                    <input v-model="form.subject" type="text" placeholder="Subject"
                        class="w-full bg-black border-2 border-red-600 rounded-lg px-4 py-2 focus:outline-none focus:shadow-[0_0_15px_rgba(255,0,0,1)] transition-all duration-300">
                </div>

                <textarea v-model="form.message" rows="7" placeholder="Your Message" required style="--d:.4s"
                        class="anim-up w-full bg-black border-2 border-red-600 rounded-lg px-4 py-2 focus:outline-none focus:shadow-[0_0_15px_rgba(255,0,0,1)] transition-all duration-300"></textarea>

                <div class="anim-up flex items-center gap-4" style="--d:.55s">
                    <button type="submit" :disabled="sending"
                            class="border-2 border-red-600 bg-red-600 rounded-full px-6 py-1.5 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,0,0,1)] transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none">
                        {{ sending ? 'Sending...' : 'Send Message' }}
                    </button>
                    <p v-if="sent" class="text-sm">Thanks! Your message was sent.</p>
                    <p v-if="error" class="text-sm text-red-500">Sorry, something went wrong. Please try again.</p>
                </div>
            </form>
        </div>
    </div>
    `
}
