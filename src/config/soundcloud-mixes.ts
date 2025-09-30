export interface SoundCloudMix {
  id: string;
  title: string;
  url: string;
  description?: string;
  date?: string;
  youtubeUrl?: string;
}

export const quitplayingMixes: SoundCloudMix[] = [
  {
    id: "quitplaying001",
    title: "QUITPLAYING 001",
    url: "https://soundcloud.com/tangleton/quitplaying001",
    description: "The first installment of the QUITPLAYING series",
    date: "2024-01-15"
  },
  {
    id: "quitplaying002", 
    title: "QUITPLAYING 002",
    url: "https://soundcloud.com/tangleton/quitplaying002",
    description: "Second chapter in the QUITPLAYING journey",
    date: "2024-02-20"
  },
  {
    id: "quitplaying003",
    title: "QUITPLAYING 003 - 04:00 in Shibuya Isolation",
    url: "https://soundcloud.com/tangleton/quitplaying003-0400-in-shibuya-isoulation",
    description: "Late night vibes from the heart of Tokyo",
    date: "2024-03-10"
  },
  {
    id: "quitplaying004",
    title: "QUITPLAYING 004 - Booty Bounce Edition",
    url: "https://soundcloud.com/tangleton/quitplaying004-booty-bounce-edition",
    description: "High energy beats for the dancefloor",
    date: "2024-04-05",
    youtubeUrl: "https://youtu.be/VmM0j0AZH1I?si=VGKVd9TooL1VphSM"
  },
  {
    id: "quitplaying005",
    title: "QUITPLAYING 005 - It's Pronounced Garage",
    url: "https://soundcloud.com/tangleton/quitplaying005-its-pronounced-garage",
    description: "UK garage vibes with a modern twist",
    date: "2024-05-12",
    youtubeUrl: "https://youtu.be/3pIeFL_8Rc8?si=10n206hj_51r6Nlr"
  },
  {
    id: "quitplaying006",
    title: "QUITPLAYING 006 - Back2Trapping (Trap OG Phonk Southern Rap Mix)",
    url: "https://soundcloud.com/tangleton/quitplaying006-back2trapping-trap-og-phonk-southern-rap-mix",
    description: "Southern rap and phonk fusion",
    date: "2024-06-18",
    youtubeUrl: "https://youtu.be/08Znc62_ZHA?si=3nMofctHjQlAI95O"
  }
];

export const vibesRnBounceMixes: SoundCloudMix[] = [
  {
    id: "rllylikewhatudo-vol1",
    title: "rllylikewhatudo vol.1",
    url: "https://soundcloud.com/tangleton/rllylikewhatudo-vol-1",
    description: "Smooth vibes and R&B bounce for the soul",
    date: "2024-07-20"
  },
  {
    id: "dontmatterwhatudo-vol2",
    title: "dontmatterwhatudo vol.2",
    url: "https://soundcloud.com/tangleton/dontmatterwhatudo-vol-2",
    description: "Deep R&B vibes and soulful bounce continuation",
    date: "2024-08-15"
  }
];

export const houseAndBounceMixes: SoundCloudMix[] = [
  {
    id: "aftertheafters",
    title: "aftertheafters",
    url: "https://soundcloud.com/tangleton/aftertheafters",
    description: "Deep house vibes with infectious bounce energy",
    date: "2024-09-10"
  }
];

// Legacy export for backward compatibility
export const soundcloudMixes = [...quitplayingMixes, ...vibesRnBounceMixes, ...houseAndBounceMixes];
