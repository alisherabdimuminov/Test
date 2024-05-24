enum Lang {
    "uz",
    "en",
    "ru",
};

enum Label {
    "homePage",
    "auth",
    "authLogin",
    "authSignUp"
}

export const translations: { [key in keyof typeof Lang]: { [key in keyof typeof Label]: string } } = {
    "uz": {
        "homePage": "Bosh sahifa",
        "auth": "Auth",
        "authLogin": "Kirish",
        "authSignUp": "Ro'yxatdan o'tish"
    },
    "en": {
        "homePage": "Home",
        "auth": "Auth",
        "authLogin": "Login",
        "authSignUp": "SignUp",
    },
    "ru": {
        "homePage": "Домашняя страница",
        "auth": "Auth",
        "authLogin": "Авторизоваться",
        "authSignUp": "Регистрация"
    },
};

export const useLang = () => {
    // lang cookie
    const langCookie = useCookie<keyof typeof Lang>(
        "lang", {
            watch: "shallow",
            default: () => "uz",
        }
    );

    // methods
    // get lang
    const getLang = computed(() => {
        return langCookie.value;
    });

    // change lang
    const changeLang = (langCode: keyof typeof Lang, langMenuID: string) => {
        langCookie.value = langCode;
        document.getElementById(langMenuID)?.classList.toggle("hidden");
    };

    // translate
    const translate = (key: keyof typeof Label) => {
        try {
            return translations[getLang.value][key];
        } catch {
            return translations["uz"][key];
        }
    };

    // default lang
    const displayLang = (langCode: keyof typeof Lang) => {
        switch (langCode) {
            case "uz":
                return '🇺🇿 O\'zbek';
            case "en":
                return '🇬🇧 English';
            case "ru":
                return '🇷🇺 Русский';
            default:
                return '🇺🇿 O\'zbek';
        };
    };

    // get langs other than default lang
    const getLangs = computed(() => {
        return ["uz", "en", "ru"].filter((lang) => lang !== getLang.value);
    });

    return {
        getLang,
        changeLang,
        translate,
        displayLang,
        getLangs,
    };
};
