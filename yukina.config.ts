import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Antropogenesi",
  subTitle: "",
  brandTitle: "Antropogenesi",

  description: "Digtal Garden",

  site: "https://antropogenesi.vercel.app",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/Asyn-c",
    },
  ],

  username: "Pantope",
  sign: "「现在，他相信他理解了那句格言的意义：通过认识不可知的东西，我们知道的不是某种关于它的东西，而是某种关于我们自己的东西。那个永远不可能是第一的东西，在自身的消逝中，让他瞥见了开端的微光。」——Giorgio Agamben",
  avatarUrl: "https://youke1.picui.cn/s1/2025/11/27/69285581d2e74.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/Asyn-c",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/2965849?spm_id_from=333.1007.0.0",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://www.douban.com/people/120166641/?_i=4247712oip4gEZ",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
    "https://s2.loli.net/2025/01/25/6bKcwHZigzlM4mJ.webp",
    "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
    "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
    "https://s2.loli.net/2025/01/25/tozsJ8QHAjFN3Mm.webp",
    "https://s2.loli.net/2025/01/25/Pm89OveZq7NWUxF.webp",
    "https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
    "https://s2.loli.net/2025/01/25/JjpLOW8VSmufzlA.webp",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
