export const useTheme = () => {

    // Theme enum
    enum Theme {
        "light",
        "dark",
    };

    // theme toggler
    const themeToggler: { [key in keyof typeof Theme]: keyof typeof Theme } = {
        "light": "dark",
        "dark": "light",
    };

    // theme cookie
    const themeCookie = useCookie<keyof typeof Theme>(
        "theme", {
            watch: "shallow",
            default: () => "light", // TODO: please fix me.
            maxAge: 604800 // 604800 seconds is 7 days
        }
    );

    // methods
    // get theme
    const getTheme = computed(() => {
        return themeCookie.value;
    });

    // change theme
    const changeTheme = () => {
        themeCookie.value = themeToggler[themeCookie.value];
    };

    return {
        getTheme,
        changeTheme,
    };
};
