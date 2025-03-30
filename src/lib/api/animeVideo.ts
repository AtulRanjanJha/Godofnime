
// Video source type interface
export interface VideoSource {
  id: string;
  isDrive: boolean;
}

// Comprehensive video mapping for different animes, seasons, and episodes
const animeVideoMapping: Record<string, Record<number, Record<number, VideoSource>>> = {
  
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
      20: { id: "1cbtHbjxGkDl0PSpwYxNgC2vlXJWHJ7Kc", isDrive: true },
      21: { id: "1DwUZpCv0mP5KLdd8rcfe00jmwRVzAknC", isDrive: true },
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
      10: { id: "12bwYMNROdWnaSsAahmolh0Uq6INcDB1b", isDrive: true },
      11: { id: "1HUcC6i3MyrdB9RUnEZv3xfWNFzE2kCVA", isDrive: true },

    },
  },
  
  "63926": {//ONE PUNCH MAN
    1: { // Season 1
      1: { id: "1Jh8EvJ9SuVusLSMxHpSTFazYK2iKXOhx", isDrive: true }, 
      2: { id: "1dGbQljWbKJYGnSS2GEzO2tcMF0kAJjdt", isDrive: true }, 
      3: { id: "1K6kozbARn66MRG5p50EP8sY-hDpKbJ6I", isDrive: true }, 
      4: { id: "1UkskHyIG6mmCSX1owfcRlzvBdurmsvDd", isDrive: true },
      5: { id: "1Dh1bok0oFj33Hs3m62kfzSC7ljcz8Bnm", isDrive: true }, 
      6: { id: "1_pEyvm9xXaAoSeO0X0dXcgFswt848Dpl", isDrive: true }, 
      7: { id: "1YNyyAIpQHyLdHLBQkIpg3LSoRq6skUpb", isDrive: true },
      8: { id: "1xrV8fH2TWIZqG5KX0zy47g6zTizEJ6Lg", isDrive: true }, 
      9: { id: "1BEdkNDPZSJxBcmiaAYcK-ZfmB94NxIBc", isDrive: true }, 
      10: { id: "1b2s_9IcKMM1URbeH_ltyKReolNr37LZ3", isDrive: true },
      11: { id: "1EY5rcmkqbCcpHLeuVMGnzqCxMry8RxVM", isDrive: true },
      12: { id: "1A5OFrjJLqcwMzjxtocd9Bqp0-34ksSWH", isDrive: true },
    },
    2: { // Season 2
      1: { id: "1kysu3t40aNHybFugWCZ5WRRQGXIGUbTX", isDrive: true }, 
      2: { id: "1XBGN6TX0HkrZFNhqYldPQCP1ZieKnszN", isDrive: true }, 
      3: { id: "1ZwTqWSeWo7GLIK_Nn61hv9jIqCbvjkdp", isDrive: true },
      4: { id: "1vKmobKZpJmn1w6VaSJJ41Q8b9sEI4wAd", isDrive: true }, 
      
    },
  },
  "1216221": { 1: { 1: { id: "1JCLush8txbeaUnEsSs2gdSNITG7hU1ST", isDrive: true }, }, }, //Demon Slayer: Kimetsu no Yaiba -To the Hashira Training
  "85937": {// Demon Slayer: Kimetsu no Yaiba
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
  "810693": { 1: { 1: { id: "1JMHmD61VrXPJ-6nNzq6-uRrXTfmxmSXt", isDrive: true }, }, },//Jujutsu Kaisen 0
  "95479": { // jujutsu kaisen
    1: {
        1: { id: "1CE4mp_RZQza_nv32G2vnbJgrKPHFsc1P", isDrive: true },
        2: { id: "1CJEg2TeDoRPNN2z7QdGxNjgvpfskoSXC", isDrive: true },
        3: { id: "1CRiRFc59H2e8G7_JNEgHuMMmsoZOPyCg", isDrive: true },
        4: { id: "1CUo2l_zZ0valxHZ4FZRxXp2g6BrEVCyg", isDrive: true },
        5: { id: "1CXg6DJxVhIzxqNRiUXnR7Br2aFFTmUPA", isDrive: true },
        6: { id: "1CfDj3tvzidTB6gqMNoUWlffFaSMTfQmy", isDrive: true },
        7: { id: "1CfMfxVxtIJpRw-gTiohNdTSgHR9MJMTM", isDrive: true },
        8: { id: "1CgCDkkHlf4jCtQphVLXuZozQJABHo3Z4", isDrive: true },
        9: { id: "1Cvxe_toMdV65-cKyHDXZZEr9OoAacc42", isDrive: true },
        10: { id: "1CzDnCAEO8vUW99oTIC2jBV0bn-Aw_OLy", isDrive: true },
        11: { id: "1D98cABLB2Q2A0ECHQ3MgezM1UfUlkPb4", isDrive: true },
        12: { id: "1DBstzyUdSTOFyp1AyXte6NtDRk1mearH", isDrive: true },
        13: { id: "1DEKt6eKFJfyy7zr5uPS3USN2NltGwNLm", isDrive: true },
        14: { id: "1DESeXE4mmMelE4xxuKY0cKY4KR6OZNhN", isDrive: true },
        15: { id: "1DGt7Z64BeSp6NIN7Rzw10LueIHP9mIro", isDrive: true },
        16: { id: "1Dx1B4to8OkblRxcrwavmO464MY062aPd", isDrive: true },
        17: { id: "1DyOcdpybKwWN5tECfiu4ChXkjDe7YUHK", isDrive: true },
        18: { id: "1E0pAiFDucRnLDUDo2WDqjD1tLyk7bNgz", isDrive: true },
        19: { id: "1E1uZkJDEQ_4LIY1-sXCTIh4WmnaGELOi", isDrive: true },
        20: { id: "1E2lNYln3XjAUcMj1WAxtxRSrRpXHotns", isDrive: true },
        21: { id: "1ENiPXOgz8G4yVBShUju9gTntOo9Cz7x9", isDrive: true },
        22: { id: "1ET74el8R5uo3KTcAxD0kTP5DhqT5V5ri", isDrive: true },
        23: { id: "1EhuVbZwnanQ_724iB_GX9VQP3Cik4LUT", isDrive: true },
        24: { id: "1EiZkewxBpRXoFdZLsFUx-_Elaz4kVahv", isDrive: true },
        25: { id: "1El1h64WmvsALa-ZgAqbl1PGpKiB-8A9b", isDrive: true },
        26: { id: "1EmPjhiW4RSMEaWr-GBgtto3JQXzvNlsg", isDrive: true },
        27: { id: "1Eos74_40dcFEOkSoUpY6etLcbkIobG2I", isDrive: true },
        28: { id: "1Eq50O7JONdjlvCRB15P4lBjgDTFxqE0f", isDrive: true },
        29: { id: "1ExpIkRtXM4uGQAVk4m1A7r7FMOPeGrOD", isDrive: true },
        30: { id: "1F-7lvZR3BIYJBqtbiTNv477Ct-5SNEUf", isDrive: true },
        31: { id: "1F1VLam25GkU9b6rwkNcdMR7GpdJOWavz", isDrive: true },
        32: { id: "1F2C6V0FAEyyi6HOzMiaX7Xmmxe3Ka4_8", isDrive: true },
        33: { id: "1F4t-2Vtc-XzrhN9Vg7ZJboV6-9n8Fd8T", isDrive: true },
        34: { id: "1FIgVovbfcuavqKIpw1KLnVD5Anvczuce", isDrive: true },
        35: { id: "1FQ408BpucceXulBp89meneZVazSWyg-o", isDrive: true },
        36: { id: "1FYpenXoE0sVKo0JjjmGysklXaPjhxMlB", isDrive: true },
        37: { id: "1FfMtZl8TRvIMHiYahRQf-yDe2D8PEv2B", isDrive: true },
        38: { id: "1Fhl4rV8_vWEi1z7wVmEuxWajSWRYiF8b", isDrive: true },
        39: { id: "1FkrMsUQSsX18vRJPlgt8THgNIkGvvYxQ", isDrive: true },
        40: { id: "1FqqEljgg3krzW-rlRW1gRbkR8pJRm8-4", isDrive: true },
        41: { id: "1Fs8jN-IHjIV7HsZ-tQSukSWEV4OFkw81", isDrive: true },
        42: { id: "1FxfyytgQgJiHxJd4qSB-hKinxPMsaCvw", isDrive: true }, 
    },
  },
  "65249":{ // Erased
    1: {
      1: { id: "1DDRL1b4vetrKF3e1Dw7-G2mzs6dDLOgS", isDrive: true }, 
      2: { id: "1DDoE6IacYLGjWDTVENd21ce61gttaOVf", isDrive: true },
      3: { id: "1DEqqcwFWJ3mFMlQRny-a1fJPK1Lx6adg", isDrive: true },
      4: { id: "1DPvToFgvblv0ZAMackSL_t30kDJ18Iao", isDrive: true }, 
      5: { id: "1DS4qN-qPo7oEzdV1H9K5lZ0yTXHrklWt", isDrive: true }, 
      6: { id: "1DkcgM9w4uAWGLmddhO0bUcEwr0xCE20M", isDrive: true }, 
      7: { id: "1Du1JowKp1N1C6IOovqfGYkHh8Fp8x05X", isDrive: true }, 
      8: { id: "1E-bXEacBXNDuh-ddrzlmj4Lq91hY4qcI", isDrive: true }, 
      9: { id: "1E08xHENCIdCQdUFqoCRaqXUb-2mD3IFe", isDrive: true },
      10: { id: "1E14K31K6HfrBKCNToKu3IQdf4G2Etfug", isDrive: true },
      11: { id: "1E8EqW5ACKE5qM2WQLY3xLWOZ_tJjIwGY", isDrive: true },
      12: { id: "1EGhahGCQ8q7-pFfSlalJpEyO2k9Mnmpm", isDrive: true },
    },
  },
  "87142":{ // YU-NO 
    1: {
      1: { id: "1F73ntrnR-cD1Pxocbl9atJuq6SjCQuFJ", isDrive: true }, 
      2: { id: "1FA6mlvkgiMaRrWXV_A7atECZL6k2uvlb", isDrive: true },
      3: { id: "1FAO5ef1hqLw_DUrLUDD8S-kWWZQfEzX4", isDrive: true },
      4: { id: "1FBzhVptlPErP1AIOsJ4PnsCY24K6eKGp", isDrive: true }, 
      5: { id: "1FIeV1Tmj1w6Ct2zTkryA0gXHaAJij0oI", isDrive: true }, 
      6: { id: "1FOhlgzjvHcaDCYGwP9SFe5fRKBoYOQoB", isDrive: true }, 
      7: { id: "1FX_g0AydOtX8VVQZQ_NsZLVb27qsIv_N", isDrive: true }, 
      8: { id: "1FYswoaCldM1pnujHJ_9BH02R9QBy-BF6", isDrive: true }, 
      9: { id: "1FeyteRrHPQCxQseR65p_mmVFO5lJjxIF", isDrive: true },
      10: { id: "1Ff6J8HDeFcNLtlE5k_jIEX6GuuSTACt2", isDrive: true },
      11: { id: "1FfzJIiCQPAT87AQl9VydF9FDlPEYcidM", isDrive: true },
      12: { id: "1FhVTmYYHzbCZ7wkRJ5MvOau4DfLyGKsP", isDrive: true },
      13: { id: "1Fi6uSV-Xam3zsYjRiChVAMGdWpKpQ49a", isDrive: true },
      14: { id: "1FijaMh_Djl9E6Q1y5aW7F4kee261fTGK", isDrive: true },
      15: { id: "1FnkTCflOk8OiBKS2i5NHmvi6xqiSjoyj", isDrive: true },
      16: { id: "1FpsqXZJthYHLqqbs6nyDy5_zLMTxtkXN", isDrive: true },
      17: { id: "1Ft_GM0HRYeJvP6GkbhT43AamBx8w9Ex8", isDrive: true },
      18: { id: "1Fvi5apvjcBIbaSUZEFIrFhKONGMylNC9", isDrive: true },
      19: { id: "1FwE5JKFSOTkdENJlnqZxeUPZXNtGKExH", isDrive: true },
      20: { id: "1GRo-7D1iBuc6k-uLA_qjWjoj6-mqvfb0", isDrive: true },
      21: { id: "1GZiZnxaguuHLmZvIebK6KCFNiyaDSx76", isDrive: true },
      22: { id: "1GdAoJppjwyCJhRQ4kvHBLRtFz4hQwVXt", isDrive: true },
      23: { id: "1Gg7AHrXkGVfnkikoEes1_Y1c8ZUCpHlB", isDrive: true },
      24: { id: "1Gk1skvi3TNEQlcxib4zmxdpT3W9OFq8s", isDrive: true },
      25: { id: "1Gv__tZ5u-zyPrA0zhvS_puW5Lya9_8uy", isDrive: true },
      26: { id: "1GxO3RlE99b3nSZwKetw4_wdgGI2KM_00", isDrive: true },
    },
  },
  "76121":{ // darling of the fanxx
     1: {
       1: { id: "1E5YfN8koIao_yYAoGC_BWvbxFuD98xWI", isDrive: true },
       2: { id: "1E75UxbjRKyT7SOXARR2Iut54uWgcBqIp", isDrive: true },
       3: { id: "1E8AHvKDw7KfXRnV-YZZ4ltAVeiZrHCHZ", isDrive: true },
       4: { id: "1H6MW2wgRDoe0D6_V-1PILSGLtxfMdmRQ", isDrive: true },
       5: { id: "1H8d7yKxYZKjNuXSP0Bnf5D1idNrpejoF", isDrive: true },
       6: { id: "1H9eMT8ifJy_PppZugi0G6QBQ8LAjWt0-", isDrive: true },
       7: { id: "1H_A4jnoUxJaRVkem9kpJWXWJl8KfznBW", isDrive: true },
       8: { id: "1HBP9fmMW67tRSwVxWyKR5r9LyO4rJYT8", isDrive: true },
       9: { id: "1HCKNspIYfCUSlQaZUc4MCrHduMk3MQHB", isDrive: true },
       10: { id: "1HD9utAcGu6v-Wn4Ru5cNEBirrymGcsxl", isDrive: true },
       11: { id: "1HPJMJP7Myt01QypPqSlwxB0SttBXkFrS", isDrive: true },
       12: { id: "1HPYcTm6Xycru8oOzMfXHT4ekND5inlZL", isDrive: true },
       13: { id: "1EBgCGfdUIFcQU44-Y1Sk6_O3Qv87dRwM", isDrive: true },
       14: { id: "1ER5auwjvbpHWbhb3jGDk2lIo9mO2Ji_L", isDrive: true },
       15: { id: "1GvWfbO_M5_PELhPsXtKEyS3cfuYQDEns", isDrive: true },
       16: { id: "1GI6dG3YjhSrWEPU83k4TREK6zCG2aJEX", isDrive: true },
       17: { id: "1GFPg_CE2WR5WGyXeHUvXuhv7nrW_HyaC", isDrive: true },
       18: { id: "1GEFs8AlaiBE2DIaZ-LsOvOR8QxxvV3FH", isDrive: true },
       19: { id: "1GBzuvK4h-lGllNpm98D6XCDCYG_VYTWu", isDrive: true },
       20: { id: "1GBMIHAdJhV9X8a9NOKtrs5oRMybEevMD", isDrive: true },
       21: { id: "1GI8v0Qq5gI_Q0KWcF5PJGV0qqs-5TM9Z", isDrive: true },
       22: { id: "1GeUYRRRgK7bPUwQJ0JuS1_0-xJppB32A", isDrive: true },
       23: { id: "1GwIPdtyujXL0TaatOmZ1vOtFSUV8EHEq", isDrive: true },
       24: { id: "1H-z_mBafXxK4-8AUTBLsjdf7l3fg7ATK", isDrive: true },
     },   
  }, 
  "60834":{ // Black bullet
    1: { 
      1: { id: "12Zn3EEEZMPGb1_O7BDs1jBDlUbj7srPn", isDrive: true },
      2: { id: "12fiju9hIInpRO1p8jhqvijsZ2lDBWVv9", isDrive: true }, 
      3: { id: "12i_XIav9p3UE-owma5OJxKaFU6XqFUL5", isDrive: true }, 
      4: { id: "12jPSzA8JQW1jnX7YU3b08QnLtj3gfd1D", isDrive: true }, 
      5: { id: "12miciK8cDdwpgkAvpDxrk4zTZeZ7rgNm", isDrive: true }, 
      6: { id: "136uQkCdiEbOr6b_Fxe2J9gTX8YkfUswr", isDrive: true }, 
      7: { id: "13CsrWC4OKRQIEcFGDhGZkQOFXy7kNDNN", isDrive: true }, 
      8: { id: "13EwXNNdK-x66A3AQtzyZnVKfy6kSWXw-", isDrive: true }, 
      9: { id: "13ITojMg0p2cvikVaKs-O4CCNfBVuICkt", isDrive: true }, 
      10: { id: "13Lqy8Ve-o_eCAf2IUBbOcCLtoQHhBY4V", isDrive: true }, 
      11: { id: "13R_Z4Wgt30pDLLgyGzONo7c_SkZfE85m", isDrive: true }, 
      12: { id: "13NICQj0I8Ym28wvq3E8MMpB3JEIydqa-", isDrive: true }, 
      13: { id: "13Pw4ZILrn18XVQLWAODC-2Ol676WHCiR", isDrive: true }, 
    }, 
  },

  "508883":{ 1:{ 1: { id: "1I9Y9IyeXg72jR7sz1vg1TvHM64T1K4Z5", isDrive: true }, }, },//The_Boy_and_the_Heron
  "916224":{ 1:{ 1: { id: "1ICJH4RuNY6YLgDjeYI2vS8ixB7Hwhaws", isDrive: true }, }, },//suzume no tojomari
  "877957":{ 1:{ 1: { id: "1HcNL2HciJuiSWbHKpu7x2QF2xBkS0NgO", isDrive: true }, }, },//drifting home
  "1357633": {1: { 1:{ id: "1ETBzaYdT75iUbPoAodXLtNz0WgP-xTLY", isDrive: true}, }, },// Solo Levelling reawaekening
  "1244492": { 1: { 1: { id: "1SDmcBaHktPtC8k3Yvw1R-FF5MoMf254t", isDrive: true }, }, },// Look Back
  "378064": { 1: { 1: { id: "1nYiP5L4hwxvugrVX-WdSvABPsnw2Vs5i", isDrive: true }, }, },// A Silent Voice
  "372058": { 1: { 1: { id: "1Y7TMKubKyFOXF5xiPmD16t8MyTgkMvCq", isDrive: true }, }, },// Your Name
  "667520": { 1: { 1: { id: "14xgtp5h0ND6yKDU7t1NEqt7rSvX5Y9WU", isDrive: true }, }, },// A Whisker Away
  "504253": { 1: { 1: { id: "15peRFCblKPXVDq_sIHV3Dhkl8mr9vLwX", isDrive: true }, }, },// I Want to Eat Your Pancreas
  "652837": { 1: { 1: { id: "14ZukJ9TsC01nVD2oDGHZrkRYqxaGBTqy", isDrive: true }, }, },// Josee, the Tiger and the Fish
  "198375": { 1: { 1: { id: "1JaYtxlIEd9q2Wkzreh30Haywacm6cWt7", isDrive: true }, }, },// The Garden of Words
  "1231574": { 1: { 1: { id: "14uRDrqOvX8SDrdbueoqo5tA5wwnFShtu", isDrive: true }, }, },// My Oni Girl
  "1297763": { 1: { 1: { id: "189PmHXrfBt5FcZ2fgERP2RAE74opjrAM", isDrive: true }, }, },// Batman Ninja vs. Yakuza League
  "533514": { 1: { 1: { id: "1DR6Sr2NOLXvNRJDPIt-FNEq_zhWEXBdf", isDrive: true }, }, },// Violet Evergarden: The Movie
  "568160": { 1: { 1: { id: "1n31X7MsTkLTaUFw7i_VamwI6j5qVnxet", isDrive: true }, }, },// Weathering with You
  "430447": { 1: { 1: { id: "1JyHdnn4fbHlXyZdBIYLwmOxWmoZLS5NO", isDrive: true }, }, },//Mary and the Witch's_Flower
  "149870": { 1: { 1: { id: "1-OddvJIuLDKShhlCrZzwukaMB7I8vFBS", isDrive: true }, }, },//The Wind Rises
  "530079": { 1: { 1: { id: "1Jy_0UTtutllNNcK2MnHIDBevZhFMf6MJ", isDrive: true }, }, },//Ride Your Wave
  "144288": { 1: { 1: { id: "1-TaO_MIsbeSuwRY8K0WozIhNowSfFWH6", isDrive: true }, }, },//Berserk: The Golden Age Arc III - The Advent
  "916192": { 1: { 1: { id: "1JUGnCTB4kwg1yA_iEOfum-XrtJrQ9iI9", isDrive: true }, }, },//The Tunnel to Summer, the Exit of Goodbyes
  "14069": { 1: { 1: { id: "1JnOVNksC-bPniSnCqBOsauh_YaRfn3Hf", isDrive: true }, }, },//The Girl Who Leapt Through Time
  "378108": { 1: { 1: { id: "10DY3xyFBSZye9eGcj5Mwt-GsEnNlWUU9", isDrive: true }, }, },//In This Corner of the World
  "317442": { 1: { 1: { id: "12RPfAQ_IVxIQzShhp-6wqd4LYXIKYyTl", isDrive: true }, }, },//The Last: Naruto the Movie
  "579741": { 1: { 1: { id: "179iVbM4NQ6UxmAA6jF_mzbf9mylmIPw3", isDrive: true }, }, },//Words Bubble Up Like Soda Pop
  "475215": { 1: { 1: { id: "17Ni4aPkaSIuU8gYIoQHEus1DQfPBaA6Y", isDrive: true }, }, },//Mirai 
  "514710": { 1: { 1: { id: "17LyM5HnPrPxIrHGZPOjHo3EUMnz1i187", isDrive: true }, }, },//Modest Heroes
  "913001": { 1: { 1: { id: "14zzzc3VgAF3MwQM5ubTQqAeVe_Au3myq", isDrive: true }, }, },//The Imaginary
  "": { 1: { 1: { id: "", isDrive: true }, }, },
  "": { 1: { 1: { id: "", isDrive: true }, }, },
  "": { 1: { 1: { id: "", isDrive: true }, }, },
  "": { 1: { 1: { id: "", isDrive: true }, }, },


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
