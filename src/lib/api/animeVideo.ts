
// Video source type interface
export interface VideoSource {
  id: string;
  isDrive: boolean;
}

// Comprehensive video mapping for different animes, seasons, and episodes
const animeVideoMapping: Record<string, Record<number, Record<number, VideoSource>>> = {
  // Weathering with You 
  "568160": { 
    1: { 
      1: { id: "1n31X7MsTkLTaUFw7i_VamwI6j5qVnxet", isDrive: true },
    }, 
  },
  "127532": { // Solo Levelling 
    1: { 
      1: { id: "19axSY041thDY-n8qlMcAJW2QyPibDPom", isDrive: true },
      2: { id: "1XbadhoCCYxauTiRgSZBNhsaE-RNEWyVz", isDrive: true },
      3: { id: "1ZeKhtnBxny1H-acXBD7IyEr12Y00ne2N", isDrive: true },
      4: { id: "1Q-De8Z-JMioTz9ohFKXNC1pwEvJryKzz", isDrive: true },
      5: { id: "18t7Ml6DEgvurYfKr00miZVVfOF71eEnS", isDrive: true },
      6: { id: "12KumMskfLZubsKiuRFneXaC6UQuggWyD", isDrive: true },
      7: { id: "13X7WqV-kfalKrEYtu53PBXyIqY7ZxLF-", isDrive: true },
      8: { id: "1J48zDg2TfXkMB--0pkuFBwmbdP--H3N8", isDrive: true },
      9: { id: "1NkGoZX4zT4DfyfdOmi66isxqM9VNl5rw", isDrive: true },
      10: { id: "1cQSVhPhMUZ6NxBcImWFRdwT58XmPkl_5", isDrive: true },
      11: { id: "1CqsdkNtKMAI4y2BWWJySxz6BvohFoZWb", isDrive: true },
      12: { id: "1iM-rzhK8WHyykmtNWfFKYcyTs6tPQeJi", isDrive: true },
      13: { id: "13yu6V6VZPZbzZr-g8_PQ7fme7AFQF2C3", isDrive: true },
      14: { id: "1Me0hMJeLdyuVn58_ALy5k0i8K_Fu-OI1", isDrive: true },
      15: { id: "197CQpGtuGCDYj-vV2kCuH8zwAf8Dxc9R", isDrive: true },
      16: { id: "1tA-YcNx4yJK9Vi_D6WvAiPJoQluilX8f", isDrive: true },
      17: { id: "1FPJ0DM29TF2gTXYznvvgpo1D-lKoi0eQ", isDrive: true },
      18: { id: "1XBXc4JXj_E2GDhFeeldcXZYG5GEWyYky", isDrive: true },
      19: { id: "1sm_zzeQs_bSFCCstuZCwFPsknbpjbHSf", isDrive: true },
      20: { id: "1cbtHbjxGkDl0PSpwYxNgC2vlXJWHJ7Kc", isDrive: true }
    },
  },
  "207332": { // sakamoto days
    1: {
      1: { id: "12W1dYDC9AWxU6RhJ4OOYFkCIM9c7ySHH", isDrive: true },
      2: { id: "12RqTe2YGsOaAS9qy2C8o58GKwWRS_e5B", isDrive: true },
      3: { id: "12RXHMOGKPNUoPTgxC1o7ynTURLQ3L89y", isDrive: true },
      4: { id: "12OTDx_7OxyZjObwASqPqRVeTgSDfZKUd", isDrive: true },
      5: { id: "12OMfNk31-gzd9R9W2QFdi0zTCreLhpn_", isDrive: true },
      6: { id: "12LtysU7a5JizadcHSs8eyoHBW-4lmTHb", isDrive: true },
      7: { id: "12I3qeEIXo2Hjn53Awl8HOpvNFQzvXkTF", isDrive: true },
      8: { id: "12DMUUNFZZQEL8T2bZL-SA6vwVZZnR3sS", isDrive: true },
      9: { id: "124CQRm-qcHXjsJcou5Sx-FMf5X0mKold", isDrive: true },
      10: { id: "12bwYMNROdWnaSsAahmolh0Uq6INcDB1b", isDrive: true }
    },
  },

  "1244492": { 
    1: { 
      1: { id: "1SDmcBaHktPtC8k3Yvw1R-FF5MoMf254t", isDrive: true }, 
    }, 
  },// Look Back
  "378064": { 
    1: { 
      1: { id: "1nYiP5L4hwxvugrVX-WdSvABPsnw2Vs5i", isDrive: true }, 
    }, 
  },// A Silent Voice
  "372058": {
    1: { 
      1: { id: "1Y7TMKubKyFOXF5xiPmD16t8MyTgkMvCq", isDrive: true },
    },
  },// Your Name 
  "667520": { 
    1: { 
      1: { id: "14xgtp5h0ND6yKDU7t1NEqt7rSvX5Y9WU", isDrive: true }, 
    }, 
  }, // A Whisker Away
  "12477": { 
    1: {
      1: { id: "1lVzMdbs1sDAVsImQWK2529hjvNFvSQrs", isDrive: true }, 
    }, 
  }, // Grave of the Fireflies
  "4935": { 
    1: { 
      1: { id: "1GBTdFCXzj7o91gDYNaYFDR1bkgduqCxw", isDrive: true }, 
    }, 
  }, // Howl's Moving Castle
  "504253": { 
    1: { 
      1: { id: "15peRFCblKPXVDq_sIHV3Dhkl8mr9vLwX", isDrive: true },
    }, 
  }, // I Want to Eat Your Pancreas
  "652837": { 
    1: { 
      1: { id: "14ZukJ9TsC01nVD2oDGHZrkRYqxaGBTqy", isDrive: true },
    },
  }, // Josee, the Tiger and the Fish
  "4977": { 1:
    { 
      1: { id: "12K1uMlQBBKR2ZyvHzOJohFCrYa7XxAb0", isDrive: true },
    }, 
  }, // Paprika
  "129": { 
    1: { 
      1: { id: "1VlXjy5VIz3EjXqmxC50zngdHoQKTI3ZX", isDrive: true },
    }, 
  }, // Spirited Away
  "198375": { 
    1: { 
      1: { id: "12uJrcEZ0jz4DzfdrvjbXU0z7o-1Iaft0", isDrive: true }, 
    }, 
  }, // The Garden of Words
  "38142": { 
    1: { 
      1: { id: "1Tzwu4xpyygiye-op71pmN3IYX80dRSSI", isDrive: true },
    }, 
  }, // 5 Centimeters per Second
  "51739": {
    1: { 
      1: { id: "1wgYp1ciZnnyv3FJyAXifo4OIpDqf-nM3", isDrive: true }, 
    }, 
  }, // The Secret World of Arrietty
  "110420": { 
    1: { 
      1: { id: "1FKHLdsOXEoArhhNcyVJnht-EaPshrk2N", isDrive: true }, 
    }, 
  }, // Wolf Children
  "372058": { 
    1: { 
      1: { id: "1Y7TMKubKyFOXF5xiPmD16t8MyTgkMvCq", isDrive: true },
    }, 
  }, // Your Name
  "1231574": { 
    1: { 
      1: { id: "14uRDrqOvX8SDrdbueoqo5tA5wwnFShtu", isDrive: true }, 
    }, 
  },  // My Oni Girl
  "1297763": { 
    1: { 
      1: { id: "189PmHXrfBt5FcZ2fgERP2RAE74opjrAM", isDrive: true }, 
    }, 
  },   // Batman Ninja vs. Yakuza League
  "533514": { 
    1: { 
      1: { id: "1DR6Sr2NOLXvNRJDPIt-FNEq_zhWEXBdf", isDrive: true }, 
    }, 
  }, // Violet Evergarden: The Movie
  
  "63926": {//ONE PUNCH MAN
    1: { // Season 1
      1: { id: "1Jh8EvJ9SuVusLSMxHpSTFazYK2iKXOhx", isDrive: true }, // Episode 1: "The Strongest Man"
      2: { id: "1dGbQljWbKJYGnSS2GEzO2tcMF0kAJjdt", isDrive: true }, // Episode 2: "The Lone Cyborg"
      3: { id: "1K6kozbARn66MRG5p50EP8sY-hDpKbJ6I", isDrive: true }, // Episode 3: "The Obsessive Scientist"
      4: { id: "1UkskHyIG6mmCSX1owfcRlzvBdurmsvDd", isDrive: true }, // Episode 4: "The Modern Ninja"
      5: { id: "1Dh1bok0oFj33Hs3m62kfzSC7ljcz8Bnm", isDrive: true }, // Episode 5: "The Ultimate Master"
      6: { id: "1_pEyvm9xXaAoSeO0X0dXcgFswt848Dpl", isDrive: true }, // Episode 6: "The Terrifying City"
      7: { id: "1YNyyAIpQHyLdHLBQkIpg3LSoRq6skUpb", isDrive: true }, // Episode 7: "The Ultimate Disciple"
      8: { id: "1xrV8fH2TWIZqG5KX0zy47g6zTizEJ6Lg", isDrive: true }, // Episode 8: "The Deep Sea King"
      9: { id: "1BEdkNDPZSJxBcmiaAYcK-ZfmB94NxIBc", isDrive: true }, // Episode 9: "Unyielding Justice"
      10: { id: "1b2s_9IcKMM1URbeH_ltyKReolNr37LZ3", isDrive: true }, // Episode 10: "Unparalleled Peril"
      11: { id: "1EY5rcmkqbCcpHLeuVMGnzqCxMry8RxVM", isDrive: true }, // Episode 11: "The Dominator of the Universe"
      12: { id: "1A5OFrjJLqcwMzjxtocd9Bqp0-34ksSWH", isDrive: true }, // Episode 12: "The Strongest Hero"
    },
    2: { // Season 2
      1: { id: "1kysu3t40aNHybFugWCZ5WRRQGXIGUbTX", isDrive: true }, // Episode 1: "Return of the Hero"
      2: { id: "1XBGN6TX0HkrZFNhqYldPQCP1ZieKnszN", isDrive: true }, // Episode 2: "Human Monster"
      3: { id: "1ZwTqWSeWo7GLIK_Nn61hv9jIqCbvjkdp", isDrive: true }, // Episode 3: "The Hunt Begins"
      4: { id: "1vKmobKZpJmn1w6VaSJJ41Q8b9sEI4wAd", isDrive: true }, // Episode 4: "Metal Bat"
      
    },
  },
  // Demon Slayer: Kimetsu no Yaiba
  "85937": {
    1: {
      1: { id: "18n7C1j9Og9hu0qP1IK1CV8tsBm54zFCl", isDrive: true }, 
      2: { id: "18nJpQUmfBk0N0t6j4jc9ipnQPVJmDCeT", isDrive: true }, 
      3: { id: "18pLbk9bxzY-YqlVK1EzsoabvB6dGv6tV", isDrive: true }, 
      4: { id: "18r77O69L_RTm2C6nBaCRa7r2USSZkuXi", isDrive: true },
      5: { id: "18y55i0fO_7YJciYhOMgI7qDFR5iSqECr", isDrive: true }, 
      6: { id: "18zSzgrMoUxqDVzkJh_uvVV-xdK3cHWIj", isDrive: true }, 
      7: { id: "19-78Cy0Y086Xi-PXu5xNAbrGIi5kKEz3", isDrive: true }, 
      8: { id: "196-AvQhOjAOlf_KiB1RlnY25WClW3I7P", isDrive: true }, 
      9: { id: "19Iel66YDCBxT2cse1yZ6ypWOWTJ3txBB", isDrive: true },
      10: { id: "19KfFCQG3_XOBxFCPy3NqMjY_vw4nFsM8", isDrive: true },
      11: { id: "19P1GkOZJUKM6cjN16LYVYYFi2xycdov8", isDrive: true }, 
      12: { id: "19VBi0iVLy0UI70R4Y9s2UzCskSjCX3cY", isDrive: true }, 
      13: { id: "19VppLoJLFgFnl35rXIpYvT_x8BnrMmli", isDrive: true }, 
      14: { id: "19Y2bkClG4fIy04HLQn3tasdk2JZDRlZh", isDrive: true }, 
      15: { id: "19YEwqAsBO_84wQJMfIL4kn3dfleiWIg9", isDrive: true },
      16: { id: "19aeTyLK9gijPML3QVd5LIonBpnRCMiX_", isDrive: true }, 
      17: { id: "19mvc5pLMcSUo8s1go4UqFyEwCCIYtMff", isDrive: true },
      18: { id: "19nUOO9aHfhTcpZAKqnbz8uSvLZ7dZr7Y", isDrive: true }, 
      19: { id: "19wUWsIzWrMP7Sj8davGZ_vdPRXvn_7IO", isDrive: true },
      20: { id: "19y1zFQ5H2GXRFGtQiVY4R6XzxqqRZ_bg", isDrive: true }, 
      21: { id: "1ADfBV8AVE9GJTM58B4yfL8vftDCicqJq", isDrive: true }, 
      22: { id: "1AAwQLcdKw6EMhKSgV4zKAEQkmRSnDroM", isDrive: true }, 
      23: { id: "1AADd_LSl0AS4F5A_iMuWWDqdHyA_kH5T", isDrive: true }, 
      24: { id: "1A96BUYNgTc-rsuanuLhZGtqrFT_elj-K", isDrive: true }, 
      25: { id: "1A2TMXvYQah89hXUdAwGcHNBPrwF_Db62", isDrive: true }, 
      26: { id: "1A0h3ojGY_F9rsLQWBH0EuUj9DehXhMMp", isDrive: true }, 
    },
    2: {
      1: { id: "1AI2woflTwkLYSt1MzAhbWIBsFiMARQwr", isDrive: true }, 
      2: { id: "1AIDxsZvOTwEYPFlkYHISygXxeFBlQIMB", isDrive: true }, 
      3: { id: "1AOnLgz2WQ1GiQ2vAIs__Il1Ma5r8eBPJ", isDrive: true }, 
      4: { id: "1ARgvowmtB1WNscnSNiYZjjGkpXZToS3_", isDrive: true },
      5: { id: "1ASEbuWFSzoiZZKdYz3QZcIMq1ToNDvmN", isDrive: true }, 
      6: { id: "1ATvXdwv7UmvlQKgeGkU1L9O3q9NVcXZk", isDrive: true }, 
      7: { id: "1AIZ2GOwcyZnhmBUOVzHpO1bA9jaRiZ46", isDrive: true }, 
      8: { id: "1AVerz0mJmJr0dfIx2tB7oPeXMKa5DOYT", isDrive: true },
      9: { id: "1AXbQDEB_d64ascdExIejkto1qhEg_mlG", isDrive: true }, 
      10: { id: "1AohdlA6-HhZsEHsu0mjQozJ24WriswUP", isDrive: true },
      11: { id: "1Ary72utsm_LoSSYyFL7T0suRuFsJu-X_", isDrive: true }, 
      12: { id: "1AvVy4hsGRqhGLXG_lRZ9ThgvpJjKxMCW", isDrive: true }, 
      13: { id: "1B-ElS7JPhoCF1wqSQI1GgvojrLNPSPWH", isDrive: true }, 
      14: { id: "1B2g1G-C4orll1SHVaawJqib9iQ2gYQYD", isDrive: true }, 
      15: { id: "1B52THFXLMMFIENjrrj971JgQLGyD6Scr", isDrive: true }, 
      16: { id: "1BB1hty9XtyndM-Nl5NLfSWtCm3jAL9Av", isDrive: true }, 
      17: { id: "1BBVGsmuvdywLDO7-0VjpI1xYZ0aeLIxJ", isDrive: true }, 
      18: { id: "1BH1c2vj-n3IzHCRkMMGjKIEEz1Vo18BJ", isDrive: true }, 
    },
    3: {
      1: { id: "1BcFKc0WkxHALLYvf2s09n8XZhlzw1SFK", isDrive: true }, 
      2: { id: "1BhFUjfbQLkbNDfTe0TZXWso1Hev6IlV6", isDrive: true },
      3: { id: "1BzC6yyNxkM8UR-lpITn_CGJ_KD5L1TyD", isDrive: true },
      4: { id: "1BTgk2CsQF2Glz-JXkwwU8sI6i8mPBf7h", isDrive: true }, 
      5: { id: "1C5WpIbf1qQP91WYZ-yPiXTBkppZPQZBH", isDrive: true }, 
      6: { id: "1BagNeH6TiDjbwGLklZJy4armcZtxUz-5", isDrive: true },
      7: { id: "1Bbm5vlix1B_uxCfJ_yirF1jnEKxo-B6I", isDrive: true }, 
      8: { id: "1BostN3bra4B48HxeRKY0VImQxH7Pss7x", isDrive: true },
      9: { id: "1BnU9GrhstLZM7rXVC9LSgmkadIhqcCU1", isDrive: true },
      10: { id: "1Bqb_UtXttEP65_vwTxUIzS9bIJJ2yZ0q", isDrive: true },
      11: { id: "1BqpA2lKlITppsJ6gwgg5MW_QPcvNlHSf", isDrive: true },
    },
    4: {
      1: { id: "1CyQEWHyzsQF-h7_1n1B2GaCWbW_CSMP0", isDrive: true }, 
      2: { id: "1D33B5R8HxmRy5wwq_ZXirR5kn9byXSmW", isDrive: true },
      3: { id: "1D9WWRS0SakkaF-vM9_r9unE0U-AZ8Oe4", isDrive: true },
      4: { id: "1DFd42yj_JGIlhQg5s_5vWCWOInJOB3vy", isDrive: true }, 
      5: { id: "1DG85b-eMEO1PUhBu83c1Zo8M6CHtWIu7", isDrive: true }, 
      6: { id: "1DGUjHDMK9oXV5cGUo4THkfprglEcfqCq", isDrive: true }, 
      7: { id: "1Ct_9mHHyk9zUMYCNcOEWGyp847myoAvP", isDrive: true }, 
      8: { id: "1DjbKhBINWNaanW9cFpo7zjo6zoA0KLtG", isDrive: true }, 
      
    },
  },
};

// Get YouTube or Google Drive video ID for an anime
export const getAnimeVideo = async (
  animeId: number,
  title: string,
  season: number = 1,
  episode: number = 1
): Promise<VideoSource | null> => {
  const animeIdString = animeId.toString();
  
  // Step 1: Try to get a specific video for this anime ID, season, and episode
  if (animeVideoMapping[animeIdString]?.[season]?.[episode]) {
    return animeVideoMapping[animeIdString][season][episode];
  }
  
  // Step 2: Try to get any video for this anime ID and season
  if (animeVideoMapping[animeIdString]?.[season]) {
    const episodeKeys = Object.keys(animeVideoMapping[animeIdString][season]);
    if (episodeKeys.length > 0) {
      // Return the first episode available for this season
      return animeVideoMapping[animeIdString][season][parseInt(episodeKeys[0])];
    }
  }
  
  // Step 3: Try to get any video for this anime ID
  if (animeVideoMapping[animeIdString]) {
    const seasonKeys = Object.keys(animeVideoMapping[animeIdString]);
    if (seasonKeys.length > 0) {
      const firstSeason = parseInt(seasonKeys[0]);
      const episodeKeys = Object.keys(animeVideoMapping[animeIdString][firstSeason]);
      if (episodeKeys.length > 0) {
        // Return the first episode of the first season available
        return animeVideoMapping[animeIdString][firstSeason][parseInt(episodeKeys[0])];
      }
    }
  }
  
  // If no video is found, return null
  return null;
};
