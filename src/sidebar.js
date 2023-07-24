export default function handleSidebar() {
    const sidebarToggle = document.getElementById('Open');
    const sidebar = document.getElementById('sidebarMenu')
    const main = document.getElementById('mainSection');
    const footer = document.getElementById('footerSection');

    sidebarToggle.addEventListener('change', function () {
        if (sidebarToggle.checked) {
            setTimeout(() => {
                main.classList.add('blur');
                footer.classList.add('blur');
            }, 155);
            sidebar.classList.remove('smooth-transition')
        }
        else {
            main.classList.remove('blur');
            footer.classList.remove('blur');
            sidebar.classList.add('smooth-transition')
            setTimeout(() => {
                sidebar.classList.remove('smooth-transition')
            }, 155);
        }
    });
}