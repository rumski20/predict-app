// weights driving calculations
// Batting updated through season 36, 28-1-2016
// Pitching updated through
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
    AVG: { // Rsq: 0.3676058
        Intercept   : 0.1611460568,
        CN          : 0.0004299073,
        LH          : 0.0003543425,
        RH          : 0.0006718759,
        BE          : 0.0002410961
    },
    OBP: { // Adj. Rsq: 0.4748
        Intercept :  0.1885,
        CN        :  0.0005356,
        LH        :  0.0002549,
        RH        :  0.0005158,
        BE        :  0.0009548
    },
    SLG: { // Adj. Rsq: 0.6103
        Intercept   : 0.08013,
        CN          : 0.0007342,
        PW          : 0.002496,
        LH          : 0.0006226,
        RH          : 0.0009841,
        BE          : 0.0003838,
        SP          : 0.0004009
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
    wOBA: {  // Adj. Rsq: 0.5372
        Intercept   : 0.1249,
        CN          : 0.0004548,
        PW          : 0.0006621,
        LH          : 0.0003043,
        RH          : 0.0005211,
        BE          : 0.0005797,
        SP          : 0.0001070,
    },
    PA: { // Adj. Rsq: 0.04403
        Intercept:    157.2795,
        DU:           3.5055
    },

    // Fielding
    // based on season 35-36
    // updated 5 Feb 2016, no negatives
    FRAA_1B: {  // Adjusted R-squared:  0.5519
        Intercept   : -8.27449,
        RA          :  0.05661,
        GL          :  0.08133,
        AS          :  0.03819
    },
    FRAA_2B: {  // Adjusted R-squared:  0.5106
        Intercept : -18.97386,
        RA : 0.11102,
        GL : 0.07485,
        AA : 0.07550
    },
    FRAA_3B: {  // Adjusted R-squared:  0.653
        Intercept: -27.1442,
        RA:  0.2399,
        GL:  0.1223
    },
    FRAA_CF: {  // Adjusted R-squared:  0.4758
        Intercept: -24.2052,
        RA:  0.1533,
        GL:  0.1466
    },
    FRAA_LF: {  // Adjusted R-squared:  0.673
        Intercept: -11.8359,
        RA:  0.1076,
        GL:  0.0769
    },
    FRAA_RF: {  // Adjusted R-squared:  0.4581
        Intercept: -4.48009,
        RA:  0.04736,
        GL:  0.03177
    },
    FRAA_SS: {  // Adjusted R-squared:  0.765
        Intercept: -74.0116,
        RA:   0.2501,
        GL:   0.2660,
        AA:   0.3659
    },

    // Pitching
    // through season 37
    // updated 26 April 2016
    WHIP: { // Adj. Rsq: 0.2255162
        Intercept  :  0.5121858219,
        CT         : -0.0007593597,
        'LH.1'     : -0.0004094747,
        'RH.1'     : -0.0007306952,
        GB         : -0.0001066045,
        P1         : -0.0002008819,
        P2         : -0.0002791443
    },
    SOBB: { // Adj. Rsq: 0.2842564
        Intercept  : -1.093073263,
        CT         :  0.024917788,
        'LH.1'     :  0.004649837,
        'RH.1'     :  0.005072241,
        VE         :  0.005484983,
        P2         :  0.004759326
    },
    OPS: { // Adj. Rsq: 0.2992437
        Intercept  :  1.1699163374,
        CT         : -0.0011175340,
        'LH.1'     : -0.0015303433,
        'RH.1'     : -0.0023356919,
        GB         : -0.0006109197,
        P2         : -0.0005866027
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
    FIP: { // Adj. Rsq: 0.2689396
        Intercept  :  9.640263513,
        CT         : -0.021570217,
        'LH.1'     : -0.007846156,
        'RH.1'     : -0.016582309,
        VE         : -0.003639219,
        GB         : -0.008289058,
        P1         : -0.005124095,
        P2         : -0.007341389
    },
    WAR: { // Adjusted R-squared:  0.2792
        Intercept : -3.277400,
        ST        : 0.018558,
        CT        : 0.026723,
        'LH.1'    : 0.014728,
        'RH.1'    : 0.033864,
        GB        : 0.006769,
        P1        : -0.021490,
        P4        : 0.006437
    },
    IP: { // Adj. R-Squared: 0.4835
        Intercept : -17.3224,
        ST        :   2.0479,
        DU        :   0.5199
    },
    Myst: { // Adj. R-Squared: 0.2712195
        Intercept  : -0.2960034594,
        CT         :  0.0020349624,
        'LH.1'     :  0.0007658211,
        'RH.1'     :  0.0015543648,
        VE         :  0.0003517259,
        GB         :  0.0007898339,
        P1         :  0.0004486831,
        P2         :  0.0007009246
    }
};