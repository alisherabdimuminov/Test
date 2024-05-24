<template>
    <div class="h-fit overflow-auto px-3 mb-5">
        <br>
        <p>C++ umumiy maqsadli dasturlash tili boʻlib, bugungi kunda raqobatbardosh dasturlash uchun keng qoʻllaniladi. U imperativ, ob'ektga yo'naltirilgan va umumiy dasturlash xususiyatlariga ega dasturlash tili hisoblanadi. C++ runs on lots of platforms like Windows, Linux, Unix, Mac, etc. Before we start programming with C++. We will need an environment to be set up on our local computer to compile and run our C++ programs successfully. If you do not want to set up a local environment you can also use online IDEs for compiling your program.
<br> <br>
Onlayn IDE dan foydalanish
IDE integratsiyalashgan rivojlanish muhitini anglatadi. IDE - bu dasturiy ta'minotni ishlab chiqish uchun kompyuter dasturchisiga qulayliklar beradigan dasturiy ta'minot. Mahalliy rivojlanish muhitini o'rnatmasdan dasturlarni osongina kompilyatsiya qilish va ishga tushirish uchun foydalanishingiz mumkin bo'lgan ko'plab onlayn IDElar mavjud.</p>
        <br>
        <Code 
            :codes="[
                {
                    id: '1',
                    lang: 'cpp',
                    title: 'main.cpp',
                    icon: 'bx bxl-c-plus-plus text-indigo-500',
                    code: `// Example by AlgorithmsHub
#include <iostream>
using namespace std;

int main()
{
	cout << &#34;Salom dunyo!&#34;;
	return 0;
}`,
                    active: true,
                },
            ]"
        />
        <br>
        <p>Mahalliy muhitni o'rnatish

Mahalliy kompyuteringizda C++ Integrated Development Environment (IDE) ni o'rnatish uchun ikkita muhim dasturni o'rnatishingiz kerak:

C++ compiler
TextEditor</p> <br>
            <p class="text-2xl">1. C++ Compiler</p>
            <p>Matn muharririni o'rnatganingizdan va dasturingizni ".cpp" kengaytmali faylga saqlaganingizdan so'ng, ushbu faylni kompilyatsiya qilish uchun sizga C++ kompilyatori kerak bo'ladi. Kompilyator - bu yuqori darajadagi tilni mashina tushunadigan past darajadagi tilga aylantiruvchi kompyuter dasturi. Boshqacha qilib aytganda, dasturlash tilida yozilgan manba kodini kompyuter tushunadigan boshqa kompyuter tiliga aylantiradi, deyishimiz mumkin. C++ dasturini kompilyatsiya qilish uchun bizga C++ da yozilgan manba kodini mashina kodlariga aylantiradigan C++ kompilyatori kerak bo'ladi. 

Linuxda GNU GCC o'rnatish

Quyidagi harakatlarni ketma-ket bajaring.</p>
                <Code 
                    :codes="[{
                        id: '123123',
                        lang: 'less',
                        title: 'script.bash',
                        code: `sudo apt-get update
sudo apt-get install gcc
sudo apt-get install g++
sudo apt-get install build-essential`,
                        active: true
                    }]"
                />
    </div>
</template>

<script setup lang="ts">
const data = reactive({
    input: ""
});

const response = await $fetch("/api/auth/login");
console.log(response);

</script>

