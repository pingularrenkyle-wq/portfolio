function useModel() {
    const { ref } = Vue;

    const icons = ref([
        { icon: 'fa-brands fa-facebook', link: 'https://facebook.com' },
        { icon: 'fa-brands fa-github', link: 'https://github.com' },
        { icon: 'fa-brands fa-instagram', link: 'https://instagram.com' },
        { icon: 'fa-brands fa-twitter', link: 'https://twitter.com' }
    ]);

    const navs = ref([
        { icon: 'fa-regular fa-house', nav: 'Home', link: '/home' },
        { icon: 'fa-regular fa-folder', nav: 'Projects', link: '/projects' },
        { icon: 'fa-solid fa-info', nav: 'About', link: '/about' },
        { icon: 'fa-solid fa-graduation-cap', nav: 'Education', link: '/education' },
        { icon: 'fa-regular fa-address-book', nav: 'Contact', link: '/contact' }
    ]);
    
    const logos = ref([
        {logo: 'imgs/Visual_Studio_Code_1.35_icon.svg.webp', name: 'VSCode'},
        {logo: 'imgs/js-removebg-preview.png', name: 'JavaScript'},
        {logo: 'imgs/tailwind-removebg-preview.png', name: 'Tailwind CSS'},
        {logo: 'imgs/vue-removebg-preview.png', name: 'Vue.Js'},
        {logo: 'imgs/PHP-logo.svg.webp', name: 'PHP'},
        {logo: 'imgs/free-mysql-logo-icon-svg-download-png-3030165.webp', name: 'MySQL'},
    ]);

    const learning = ref([
        { logo: 'imgs/js-removebg-preview.png', name: 'JavaScript' },
        { logo: 'imgs/vue-removebg-preview.png', name: 'Vue.Js' },
        { logo: 'imgs/free-mysql-logo-icon-svg-download-png-3030165.webp', name: 'MySQL' },
    ]);

    const skills = ref([
        { logo: 'imgs/PHP-logo.svg.webp', name: 'PHP', percent: 40, color: '#5471f3' },
        { logo: 'imgs/tailwind-removebg-preview.png', name: 'Tailwind CSS', percent: 70, color: '#43defa' },
        { logo: 'imgs/vue-removebg-preview.png', name: 'Vue.js', percent: 60, color: '#36f39e' },
        { logo: 'imgs/js-removebg-preview.png', name: 'JavaScript', percent: 50, color: '#f7df1e' },
    ]);

    const educations = ref([
        { year: '2018', level: 'Junior Highschool', school: 'Governor Luis A Ferrer Junior East NHS' },
        { year: '2022', level: 'Senior Highschool', school: 'Philippine Christian University' },
        { year: '2024', level: 'College', school: 'National College of Science and Technologies' },
    ]);

    const projects = ref([
        { type: 'video', src: 'imgs/solar.mp4', title: 'Earth Orbit', desc: 'Earth orbiting the sun using HTML & CSS', link: 'solar.html' },
        { type: 'img', src: 'imgs/enrollment.png', title: 'Enrollment System', desc: 'School enrollment system for registering and approving students', link: 'https://calzadosia.page.gd/' },
        { type: 'img', src: 'imgs/ecm.png', title: 'E-commerce Website', desc: 'Responsive E-commerce Website using HTML & CSS', link: '#/contact' },
    ]);

    const page = ref('');
    const burger = ref('');

    function openBurger(){
        page.value = 'burgerClicked';
    }

    function closeBurger(){
        page.value = ''
    }    

    return { icons, navs, logos, learning, skills, educations, projects, page, burger, openBurger, closeBurger };
}