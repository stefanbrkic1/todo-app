const sidebarToggle = document.getElementById('Open');
const sidebar = document.getElementById('sidebarMenu')
const main = document.getElementById('mainSection');
const header = document.getElementById('headerSection');
const floatingActionButton = document.getElementById('floatingActionButton');

export default function handleSidebar() {
    sidebarToggle.addEventListener('change', function () {
        if (sidebarToggle.checked) {
            setTimeout(() => {
                main.classList.add('blur');
                header.classList.add('blur');
                floatingActionButton.classList.add('blur');
                sidebar.classList.add('active-sidebar')
            }, 220);
            handleTransition()
        }
        else {
            main.classList.remove('blur');
            header.classList.remove('blur');
            floatingActionButton.classList.remove('blur');
            sidebar.classList.remove('active-sidebar')
            handleTransition()
        }
    });
}

function handleTransition() {
    if (sidebarToggle.checked) {
        sidebar.classList.remove('smooth-transition')
    }
    else {
        sidebar.classList.add('smooth-transition')
        setTimeout(() => {
            sidebar.classList.remove('smooth-transition')
        }, 155);
    }
}

