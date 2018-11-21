import { User } from '../entities/User'
import React from 'react';
import './userData.css'
const data = {
    results: [
        {
            gender: "female",
            name: { title: "miss", first: "akkelien", last: "laarman" },
            location: {
                street: "4699 hoefsmederijpad",
                city: "heusden",
                state: "noord-brabant",
                postcode: 67753,
                coordinates: { latitude: "43.5498", longitude: "54.8394" },
                timezone: {
                    offset: "+5:00",
                    description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            email: "akkelien.laarman@example.com",
            login: {
                uuid: "062b7568-aaf0-453b-bfeb-a14a21d7e71e",
                username: "sadostrich177",
                password: "tyvugq",
                salt: "N9cwnU09",
                md5: "eb3279c45cb7f9135b96917ea8cfce0e",
                sha1: "20bc3043a600576e90fdd81840dadf60dc807fb0",
                sha256:
                    "4589038bb4246ec87c0d9cc1c6a164fc7c6ef1c452ccc4fede21a935cb0aa773"
            },
            dob: { date: "1960-01-21T17:03:31Z", age: 58 },
            registered: { date: "2012-07-28T06:14:59Z", age: 6 },
            phone: "(184)-940-8468",
            cell: "(373)-508-2121",
            id: { name: "BSN", value: "23080130" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/13.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg"
            },
            nat: "NL"
        },
        {
            gender: "female",
            name: { title: "miss", first: "vanessa", last: "mitchelle" },
            location: {
                street: "5608 denny street",
                city: "mountmellick",
                state: "kerry",
                postcode: 60514,
                coordinates: { latitude: "-5.0043", longitude: "67.0116" },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            email: "vanessa.mitchelle@example.com",
            login: {
                uuid: "d5c690d3-1323-460d-9250-aff90382a58a",
                username: "goldendog456",
                password: "entropy",
                salt: "OceE1g8z",
                md5: "11ff4c171d49a2beee79f2ad49bda0ca",
                sha1: "ffb8f479be8c6021028d529f386f7e817cecaef1",
                sha256:
                    "e71620a2132cad0df493eb68bdafc40acafffe5f0e9fe72960fbf9b5dac5f3b8"
            },
            dob: { date: "1972-04-07T11:08:07Z", age: 46 },
            registered: { date: "2014-09-23T02:32:01Z", age: 4 },
            phone: "021-716-8906",
            cell: "081-174-2789",
            id: { name: "PPS", value: "3426451T" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/5.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg"
            },
            nat: "IE"
        },
        {
            gender: "female",
            name: { title: "miss", first: "flavie", last: "michel" },
            location: {
                street: "4114 avenue de l'abbé-roussel",
                city: "nice",
                state: "hauts-de-seine",
                postcode: 53084,
                coordinates: { latitude: "-82.3223", longitude: "-156.1857" },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            email: "flavie.michel@example.com",
            login: {
                uuid: "7d1f6552-68c0-44c2-aef0-b2b74cef564a",
                username: "lazymouse181",
                password: "rochelle",
                salt: "B2G8zlap",
                md5: "e2e07d8fcd0a344094af3dbf02152f2f",
                sha1: "4032026246375f63501be60acac974689e582687",
                sha256:
                    "b25dc25ad247b2850c3afd9b7790647703f18fede4bd8e0df132a89c47a862b4"
            },
            dob: { date: "1994-03-13T14:58:39Z", age: 24 },
            registered: { date: "2010-06-22T22:21:48Z", age: 8 },
            phone: "01-00-03-04-94",
            cell: "06-44-89-47-74",
            id: { name: "INSEE", value: "2NNaN52409194 90" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/59.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg"
            },
            nat: "FR"
        },
        {
            gender: "male",
            name: { title: "mr", first: "conrad", last: "ippel" },
            location: {
                street: "4206 oudkerkhof",
                city: "brielle",
                state: "noord-holland",
                postcode: 55855,
                coordinates: { latitude: "-3.5867", longitude: "15.9008" },
                timezone: {
                    offset: "+4:00",
                    description: "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            email: "conrad.ippel@example.com",
            login: {
                uuid: "2896b436-0977-47d8-b620-3c7a1f891010",
                username: "ticklishladybug765",
                password: "focus",
                salt: "XWvaa7QX",
                md5: "6255f4a9f5d3dbfe5d2a34fb582a9998",
                sha1: "ccd0cf6ec69c114b96fca604f33fc412230df653",
                sha256:
                    "e6356a1a76e54deb15936e2d44ca674e7ad2c6dc637fe9879bfed5a09f8030b2"
            },
            dob: { date: "1995-12-29T11:44:48Z", age: 22 },
            registered: { date: "2012-02-25T04:35:29Z", age: 6 },
            phone: "(377)-959-6097",
            cell: "(261)-983-7112",
            id: { name: "BSN", value: "20760857" },
            picture: {
                large: "https://randomuser.me/api/portraits/men/47.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
            },
            nat: "NL"
        },
        {
            gender: "female",
            name: { title: "miss", first: "steffanie", last: "van limpt" },
            location: {
                street: "5806 stadhuisbrug",
                city: "schinnen",
                state: "flevoland",
                postcode: 18198,
                coordinates: { latitude: "-33.6549", longitude: "-178.4244" },
                timezone: { offset: "-1:00", description: "Azores, Cape Verde Islands" }
            },
            email: "steffanie.vanlimpt@example.com",
            login: {
                uuid: "6f767df7-bc68-4370-b2f6-f0b02596b2a8",
                username: "blackmouse773",
                password: "1967",
                salt: "0SXiOfao",
                md5: "1e43e02cac53555c6ca1f61bda54c238",
                sha1: "4a25fb9e8d8380006b69203a06ed71cf30351e8f",
                sha256:
                    "795e8c8f4cbc6ae77094c9d494029479f4a82d9603e35f981680773fb2725d76"
            },
            dob: { date: "1967-02-18T12:45:11Z", age: 51 },
            registered: { date: "2005-02-17T23:54:43Z", age: 13 },
            phone: "(512)-658-7022",
            cell: "(800)-882-3224",
            id: { name: "BSN", value: "91750063" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/0.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg"
            },
            nat: "NL"
        },
        {
            gender: "female",
            name: { title: "ms", first: "celine", last: "barros" },
            location: {
                street: "6851 rua alagoas ",
                city: "paulo afonso",
                state: "paraná",
                postcode: 22473,
                coordinates: { latitude: "53.0796", longitude: "103.0457" },
                timezone: { offset: "-10:00", description: "Hawaii" }
            },
            email: "celine.barros@example.com",
            login: {
                uuid: "500fac5d-7bf9-475c-8e8f-a1fb4a2fd5b2",
                username: "purplecat866",
                password: "raining",
                salt: "VFBNwILd",
                md5: "f74ed8f40b8bfdd27f79e35563e62515",
                sha1: "78f679ad30a99f6dc3250f1e787d602c9966781b",
                sha256:
                    "ed7814b08dca288a8ccf5547d170eea3623e2413db333e5e1facae6c51b514e4"
            },
            dob: { date: "1970-09-25T20:50:59Z", age: 48 },
            registered: { date: "2007-01-02T00:55:35Z", age: 11 },
            phone: "(58) 1287-8828",
            cell: "(11) 7995-7023",
            id: { name: "", value: null },
            picture: {
                large: "https://randomuser.me/api/portraits/women/40.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
            },
            nat: "BR"
        },
        {
            gender: "male",
            name: { title: "mr", first: "kenan", last: "kavaklıoğlu" },
            location: {
                street: "3481 anafartalar cd",
                city: "manisa",
                state: "bingöl",
                postcode: 69764,
                coordinates: { latitude: "-56.4295", longitude: "-80.8584" },
                timezone: {
                    offset: "-3:00",
                    description: "Brazil, Buenos Aires, Georgetown"
                }
            },
            email: "kenan.kavaklıoğlu@example.com",
            login: {
                uuid: "40ca0d8c-bded-4169-8b11-fbc2a103029b",
                username: "greenelephant996",
                password: "wives",
                salt: "e2inyMx8",
                md5: "75d5d93735f1df5732f4ed1d7fda7143",
                sha1: "ceee03eff05e1e393b55af29a58a6eb7eaad8109",
                sha256:
                    "1125c06ac07dd1a90691753f8cab770216a966c1a8e815aa43094ac2bdad8770"
            },
            dob: { date: "1959-02-14T00:06:12Z", age: 59 },
            registered: { date: "2004-12-31T17:18:20Z", age: 13 },
            phone: "(796)-655-3818",
            cell: "(234)-308-4355",
            id: { name: "", value: null },
            picture: {
                large: "https://randomuser.me/api/portraits/men/97.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg"
            },
            nat: "TR"
        },
        {
            gender: "male",
            name: { title: "monsieur", first: "philipp", last: "lacroix" },
            location: {
                street: "6702 rue louis-garrand",
                city: "eisten",
                state: "graubünden",
                postcode: 2897,
                coordinates: { latitude: "-13.3879", longitude: "-115.3738" },
                timezone: { offset: "-3:30", description: "Newfoundland" }
            },
            email: "philipp.lacroix@example.com",
            login: {
                uuid: "0923a8dc-144c-400c-9454-36f2b9009509",
                username: "whiteduck219",
                password: "american",
                salt: "L0LgWfWf",
                md5: "5e9d1ea378e33e4c884f54eda6f0ca5f",
                sha1: "1533d7b1840d3772d496e2e2d8a149163641e566",
                sha256:
                    "ab789ed6613202babdaa47c6ce30e6c376b2029237133f1f539878fe0e419e65"
            },
            dob: { date: "1983-01-25T08:49:23Z", age: 35 },
            registered: { date: "2009-02-15T19:14:29Z", age: 9 },
            phone: "(605)-226-8955",
            cell: "(567)-547-9687",
            id: { name: "AVS", value: "756.6452.7755.35" },
            picture: {
                large: "https://randomuser.me/api/portraits/men/12.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"
            },
            nat: "CH"
        },
        {
            gender: "female",
            name: { title: "ms", first: "lou", last: "carpentier" },
            location: {
                street: "5121 rue abel-hovelacque",
                city: "toulon",
                state: "hauts-de-seine",
                postcode: 61145,
                coordinates: { latitude: "-63.8514", longitude: "-152.6595" },
                timezone: { offset: "-8:00", description: "Pacific Time (US & Canada)" }
            },
            email: "lou.carpentier@example.com",
            login: {
                uuid: "c1a1a82c-87a5-4890-ba2d-7468d24ebed4",
                username: "purplekoala494",
                password: "1020",
                salt: "jVbvMRbK",
                md5: "b0bac5ef810ebb1f08f228205eaa6517",
                sha1: "b9e22576da555ccf619e7cc2f862fddf9733be2c",
                sha256:
                    "c9fa8bf126e5f56ba43c15f8a2f483caffd646f57d9a5e97732fff89da0d52d9"
            },
            dob: { date: "1944-12-25T18:19:04Z", age: 73 },
            registered: { date: "2011-11-15T23:25:04Z", age: 7 },
            phone: "04-91-11-49-22",
            cell: "06-77-93-12-35",
            id: { name: "INSEE", value: "2NNaN74470614 17" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/79.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/79.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/79.jpg"
            },
            nat: "FR"
        },
        {
            gender: "female",
            name: { title: "mrs", first: "alberte", last: "rasmussen" },
            location: {
                street: "7633 parkvej",
                city: "sommersted",
                state: "danmark",
                postcode: 71322,
                coordinates: { latitude: "68.7022", longitude: "-136.3233" },
                timezone: { offset: "-11:00", description: "Midway Island, Samoa" }
            },
            email: "alberte.rasmussen@example.com",
            login: {
                uuid: "2bee8c04-6e08-4755-982a-1d236a6ff53f",
                username: "brownleopard518",
                password: "marker",
                salt: "ZUjMwjVs",
                md5: "0c1238858cf059a8a271dd1530d8eb69",
                sha1: "2812fdf697e2076cf146803c1c26ad28522184f1",
                sha256:
                    "f63c41c507c97a445fb63aeeaadf1af80a7d12dcc2e5440664a11f3478b112db"
            },
            dob: { date: "1984-12-18T09:06:56Z", age: 33 },
            registered: { date: "2007-03-22T22:20:42Z", age: 11 },
            phone: "80024968",
            cell: "47029674",
            id: { name: "CPR", value: "644810-4254" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/3.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg"
            },
            nat: "DK"
        },
        {
            gender: "male",
            name: { title: "mr", first: "seyfullah", last: "pieters" },
            location: {
                street: "4852 maliebaan",
                city: "naarden",
                state: "zuid-holland",
                postcode: 23970,
                coordinates: { latitude: "-40.6902", longitude: "-118.3032" },
                timezone: { offset: "+2:00", description: "Kaliningrad, South Africa" }
            },
            email: "seyfullah.pieters@example.com",
            login: {
                uuid: "fcfab984-e2d4-4565-8e65-9925c74ae45d",
                username: "angryswan757",
                password: "defender",
                salt: "Ql13CjxG",
                md5: "e4c8cc37b6bba2a3da2189f00742cf8b",
                sha1: "ceb80e643b173b0348787c92d2d6923830e44efb",
                sha256:
                    "7adc6c35a495387a0b6ab3f88010561eafd78d8cc4f094e07ca4be522e6a54b2"
            },
            dob: { date: "1974-12-16T07:36:12Z", age: 43 },
            registered: { date: "2015-12-09T00:53:04Z", age: 2 },
            phone: "(530)-801-0259",
            cell: "(810)-204-8241",
            id: { name: "BSN", value: "86958710" },
            picture: {
                large: "https://randomuser.me/api/portraits/men/73.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg"
            },
            nat: "NL"
        },
        {
            gender: "female",
            name: { title: "ms", first: "delphine", last: "kasper" },
            location: {
                street: "5621 trans",
                city: "dinkelland",
                state: "overijssel",
                postcode: 63192,
                coordinates: { latitude: "19.9436", longitude: "179.5732" },
                timezone: { offset: "-10:00", description: "Hawaii" }
            },
            email: "delphine.kasper@example.com",
            login: {
                uuid: "91c1c11e-32b6-413a-8934-9ce888ab86cf",
                username: "lazysnake913",
                password: "slick1",
                salt: "kcyFt9rN",
                md5: "c75a0900a3517ef330a6f82ab93b223f",
                sha1: "66566139899aa0aa8c96e4799c052b72074e225f",
                sha256:
                    "e0fc7d06c165d1aea8218a587f6eaad984aac6dde1dd6e8cafa9a7f3bd9e67af"
            },
            dob: { date: "1951-02-12T17:32:25Z", age: 67 },
            registered: { date: "2002-08-12T06:10:14Z", age: 16 },
            phone: "(104)-780-9718",
            cell: "(605)-718-9571",
            id: { name: "BSN", value: "72914694" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/66.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg"
            },
            nat: "NL"
        },
        {
            gender: "male",
            name: { title: "mr", first: "mohammad", last: "schweizer" },
            location: {
                street: "mühlweg 29",
                city: "mühlacker",
                state: "hamburg",
                postcode: 27706,
                coordinates: { latitude: "35.4990", longitude: "125.8043" },
                timezone: {
                    offset: "+8:00",
                    description: "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            email: "mohammad.schweizer@example.com",
            login: {
                uuid: "ca683cc8-8587-4c92-a285-e792c059b090",
                username: "beautifulbutterfly479",
                password: "ou8123",
                salt: "sMLlfZm4",
                md5: "a6475da346d222ad60a46d275f7e54cc",
                sha1: "f1baa5b7bbcb5a9334c1ce73e5f30ed64fb77ab3",
                sha256:
                    "91c8d31956912db916ae042a46de4d73bc333d999635a1667c7004d238344cdd"
            },
            dob: { date: "1983-01-17T10:57:55Z", age: 35 },
            registered: { date: "2010-02-18T06:24:04Z", age: 8 },
            phone: "0003-6318473",
            cell: "0173-8720778",
            id: { name: "", value: null },
            picture: {
                large: "https://randomuser.me/api/portraits/men/47.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
            },
            nat: "DE"
        },
        {
            gender: "male",
            name: { title: "mr", first: "elias", last: "mortensen" },
            location: {
                street: "4707 smedegade",
                city: "viby sj.",
                state: "nordjylland",
                postcode: 25632,
                coordinates: { latitude: "25.4543", longitude: "-19.4233" },
                timezone: {
                    offset: "+8:00",
                    description: "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            email: "elias.mortensen@example.com",
            login: {
                uuid: "709dae12-27e4-43bc-b513-58b66c1a362f",
                username: "ticklishgorilla580",
                password: "11111",
                salt: "Wih8XVqP",
                md5: "189bd0f76de185fcead85e2834187c5a",
                sha1: "19f2bb6aafd441d31f719a3d63271aac797f10f3",
                sha256:
                    "7985557493e85fab4115be2d0d5bfc0e0a464d9f7c3ff0a85e4f8b95e2983d12"
            },
            dob: { date: "1984-02-22T07:45:09Z", age: 34 },
            registered: { date: "2004-07-13T09:23:34Z", age: 14 },
            phone: "26801716",
            cell: "65221826",
            id: { name: "CPR", value: "452925-3253" },
            picture: {
                large: "https://randomuser.me/api/portraits/men/49.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg"
            },
            nat: "DK"
        },
        {
            gender: "female",
            name: { title: "miss", first: "aysha", last: "verhoef" },
            location: {
                street: "1382 bokstraat",
                city: "tynaarlo",
                state: "flevoland",
                postcode: 90550,
                coordinates: { latitude: "-36.3440", longitude: "156.9177" },
                timezone: { offset: "-2:00", description: "Mid-Atlantic" }
            },
            email: "aysha.verhoef@example.com",
            login: {
                uuid: "0e90c9c2-adb2-4a52-8493-87c40e1036fa",
                username: "silverladybug314",
                password: "harley1",
                salt: "p3dG8xjK",
                md5: "32f59d3311e91fba3e234e42ef1361ff",
                sha1: "f0ac468539b6e246949bab483ee107a89a423e6d",
                sha256:
                    "c62ddd4cc72d939ede30aa80dd424853cc103c6c368122892b833581543f841e"
            },
            dob: { date: "1946-06-07T20:48:53Z", age: 72 },
            registered: { date: "2003-01-17T23:42:28Z", age: 15 },
            phone: "(444)-119-9583",
            cell: "(719)-371-5623",
            id: { name: "BSN", value: "23365301" },
            picture: {
                large: "https://randomuser.me/api/portraits/women/16.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg"
            },
            nat: "NL"
        },

    ],
    info: { seed: "56f0706c061c05a6", results: 15, page: 1, version: "1.2" }
};

const listOfUsers = data.results;//api u promenljivu koja je niz

const gridLayout = false;

const hiddingEmail = email => {
    const splitedEmail = email.split("");
    splitedEmail.splice(3, splitedEmail.indexOf("@") - 3, "...");

    const hiddenEmail = splitedEmail.join("");

    return hiddenEmail;
};

const mappedUsers = listOfUsers.map(user => {
    const { name, email, dob, picture } = user;
    const { first, last } = name;
    const { date } = dob;
    const formatedDate = new Date(date).toDateString();

    return new User(
        first,
        last,
        email,
        formatedDate,
        picture,
        hiddingEmail(email)
    );
});

console.log(mappedUsers);

export { data };
export { mappedUsers };

