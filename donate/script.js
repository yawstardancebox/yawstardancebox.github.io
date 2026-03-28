document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // ၁။ Page စဖွင့်တာနဲ့ Memory (localStorage) ထဲမှာ Theme သိမ်းထားတာ ရှိမရှိ အရင်စစ်မယ်
    const savedTheme = localStorage.getItem('theme');

    // ၂။ တကယ်လို့ 'light' လို့ သိမ်းထားတာရှိရင် Body ကို Light Mode ပြောင်းမယ်
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        // Icon ကိုလည်း လမင်းပုံ ပြောင်းထားမယ်
        if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    // ၃။ Toggle ခလုတ်နှိပ်တဲ့အခါ
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');

            let theme = 'dark';
            if (document.body.classList.contains('light-mode')) {
                theme = 'light';
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }

            // ၄။ ရွေးချယ်လိုက်တဲ့ Theme ကို Memory ထဲမှာ သိမ်းလိုက်မယ်
            localStorage.setItem('theme', theme);
        });
    }
});