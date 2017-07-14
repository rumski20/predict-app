// weights driving calculations
// Batting updated through season 40, 9 Feb 2016
var data = {
    AB: {
        Intercept: 27.1665018,
        CN: 0.8936592,
        PW: 0.9863651,
        LH: 1.4264479,
        RH: 1.1459426,
        BE: 0.8424884,
        DU: 1.1555163,
        HE: 0.9948427
    },
    AVG: { // Adj. Rsq: 0.4556606
        Intercept   : 0.16225199,
        CN          : 0.00043660,
        PW          : 0.00002988,
        LH          : 0.00029839,
        RH          : 0.00065737,
        BE          : 0.00025938
    },
    OBP: { // Adj. Rsq: 0.5843929
        Intercept   : 0.19414745,
        CN          : 0.00055082,
        PW          :-0.00002393,
        LH          : 0.00024776,
        RH          : 0.00055231,
        BE          : 0.00092742,
        BR          :-0.00009829
    },
    SLG: { // Adj. Rsq: 0.7152598
        Intercept   : 0.09344395,
        CN          : 0.00063911,
        PW          : 0.00254629,
        LH          : 0.00047962,
        RH          : 0.00101212,
        BE          : 0.00042197,
        SP          : 0.00030252,
    },
    ISO: { // Rsq: 0.7757063
        Intercept  : -0.0864614447,
        CN         :  0.0002902661,
        PW         :  0.0027723559,
        LH         :  0.0002556802,
        RH         :  0.0002588279,
        SP         :  0.0004323230
    },
    SecA: { // Rsq: 0.6908993
        Intercept  : -0.0858520763,
        CN         :  0.0006604749,
        PW         :  0.0024770764,
        RH         :  0.0003379264,
        BE         :  0.0015210492,
        SP         :  0.0008601810
    },
    RC: {  // Adj. Rsq: 0.4026541
        Intercept  :   -70.0391,
        CN         :    0.3414,
        PW         :    0.4296,
        LH         :    0.2728,
        RH         :    0.4595,
        BE         :    0.3133,
        BR         :    0.1922,
        SP         :    0.1616
    },
    wOBA: {  // Adj. Rsq: 0.6483475
        Intercept   : 0.12109470,
        CN          : 0.00041706,
        PW          : 0.00061544,
        LH          : 0.00022901,
        RH          : 0.00050206,
        BE          : 0.00058710,
        SP          : 0.00003814,
    },
    PA: { // Adj. Rsq: 0.08595653
        Intercept  : 83.4805501,
        DU         :  4.3436715,
        HE         :  0.3078353,
    },
    nSB: {  // Adj. Rsq. 0.5421144
        Intercept   : -7.93875062,
        BR          :  0.07701259,
        SP          :  0.10247710,
    },

    // Fielding
    // based on season 35-40
    // updated 30 April 2016, no negatives
    // changed 10 Feb 2017, inluding negatives now (using rlm with psi.bisquare)
    FRAA_1B: {  // Adjusted R-squared:  0.7380654
        Intercept   : -9.0391,
        RA          :  0.0658,
        GL          :  0.0815,
        AS          :  0.0240,
        AA          :  0.0210
    },
    FRAA_2B: {  // Adjusted R-squared:  0.619547
        Intercept   : -18.8610,
        RA          :   0.1144,
        GL          :   0.0689,
        AA          :   0.0763
    },
    FRAA_3B: {  // Adjusted R-squared:  0.7382627
        Intercept   :-29.9776,
        RA          :  0.0930,
        GL          :  0.1804,
        AS          :  0.0607,
        AA          :  0.0645
    },
    FRAA_CF: {  // Adjusted R-squared:  0.749331
        Intercept   : -29.6449,
        RA          :   0.2144,
        GL          :   0.1306,
        AS          :   0.0265
    },
    FRAA_LF: {  // Adjusted R-squared:  0.7383621
        Intercept   : -9.8072,
        RA          :  0.0756,
        GL          :  0.0643,
        AA          :  0.0130
    },
    FRAA_RF: {  // Adjusted R-squared:  0.6406548
        Intercept   : -6.0905,
        RA          :  0.0550,
        GL          :  0.0486
    },
    FRAA_SS: {  // Adjusted R-squared:  0.8610982
        Intercept   : -79.1255,
        RA          :   0.2799,
        GL          :   0.3499,
        AS          :   0.0271,
        AA          :   0.2832
    },

    // Pitching
    // through season 41
    // updated 16 May 2016
    WHIP: { // Adj. Rsq: 0.3400476
        Intercept   :  2.64110034,
        CT          : -0.00517041,
        'LH.1'      : -0.00270443,
        'RH.1'      : -0.00502175,
        VE          :  0.00032748,
        GB          : -0.00067447,
        P1          : -0.00234389,
        P2          : -0.00119078
    },
    SOBB: { // Adj. Rsq: 0.4176027
        Intercept  : -1.42930090,
        CT         :  0.02285972,
        'LH.1'     :  0.00335723,
        'RH.1'     :  0.00710273,
        VE         :  0.00547906,
        GB         : -0.00075743,
        P1         :  0.00591799,
        P2         :  0.00264746,
        P3         :  0.00079343,
        P4         :  0.00093190,
    },
    OPS: { // Adj. Rsq: 0.3661267
        Intercept    : 1.34323252,
        CT           :-0.00148329,
        'LH.1'       :-0.00155544,
        'RH.1'       :-0.00251533,
        VE           : 0.00014770,
        GB           :-0.00058122,
        P1           :-0.00135083,
        P2           :-0.00074725,
    },
    OBP_P: { // Adj. Rsq: 0.2375501
        Intercept   :  .4913137,
        CT          : -.0007802432,
        'LH.1'      : -.0002812215,
        'RH.1'      : -.0008677038,
        VE          :  .00007858515,
        GB          : -.00009133989,
        P2          : -.0002686454
    },
    FIP: { // Adj. Rsq: 0.3658731
        Intercept   :  9.63331856,
        CT          : -0.02109539,
        'LH.1'      : -0.00974451,
        'RH.1'      : -0.01489911,
        VE          : -0.00326881,
        GB          : -0.00635233,
        P1          : -0.00914323,
        P2          : -0.00535757,
    },
    WAR: { // Adjusted R-squared:  0.3886868
        Intercept : -3.277400,
        ST        : 0.018558,
        CT        : 0.026723,
        'LH.1'    : 0.014728,
        'RH.1'    : 0.033864,
        GB        : 0.006769,
        P1        : -0.021490,
        P4        : 0.006437
    },
    IP: { // Adj. R-Squared: 0.6233501
        Intercept : -14.54597716,
        ST        :   2.06963011,
        DU        :   0.51474360
    },
    Myst: { // Adj. R-Squared: 0.3636738
        Intercept   : -0.30430979,
        CT          :  0.00202282,
        'LH.1'      :  0.00093816,
        'RH.1'      :  0.00143225,
        VE          :  0.00031646,
        GB          :  0.00061039,
        P1          :  0.00084945,
        P2          :  0.00053677,
    }
};