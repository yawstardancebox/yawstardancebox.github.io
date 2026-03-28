document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // ၁။ Browser ရဲ့ Memory (localStorage) ထဲမှာ သိမ်းထားတဲ့ Theme ရှိမရှိ အရင်စစ်မယ်
    const savedTheme = localStorage.getItem('theme');

    // ၂။ တကယ်လို့ 'light' လို့ သိမ်းထားတာတွေ့ရင် Light Mode ကို အော်တိုပြောင်းပေးမယ်
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        // Icon ကိုလည်း လမင်းပုံ (fa-moon) ပြောင်းမယ်
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // ၃။ Theme Toggle ခလုတ်ကို နှိပ်တဲ့အခါ လုပ်ဆောင်မယ့်အချက်များ
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Body မှာ light-mode class ကို အဖွင့်အပိတ်လုပ်မယ်
            document.body.classList.toggle('light-mode');

            let theme = 'dark'; // မူလက Dark လို့ သတ်မှတ်ထားမယ်

            if (document.body.classList.contains('light-mode')) {
                // Light Mode ဖြစ်သွားရင်
                theme = 'light';
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                // Dark Mode ပြန်ဖြစ်သွားရင်
                theme = 'dark';
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }

            // ၄။ ရွေးချယ်လိုက်တဲ့ Theme ကို Browser Memory ထဲမှာ သိမ်းလိုက်မယ်
            localStorage.setItem('theme', theme);
        });
    }
});