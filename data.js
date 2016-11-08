// weights driving calculations
// Batting updated through season 39, 5 Nov 2016
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
    AVG: { // Adj. Rsq: 0.4537446
        Intercept   : 0.16496992,
        CN          : 0.00044130,
        LH          : 0.00029401,
        RH          : 0.00063992,
        BE          : 0.00024742
    },
    OBP: { // Adj. Rsq: 0.5755743
        Intercept   : 0.18826198,
        CN          : 0.00057596,
        LH          : 0.00023557,
        RH          : 0.00051805,
        BE          : 0.00091276
    },
    SLG: { // Adj. Rsq: 0.7061244
        Intercept   : 0.09636942,
        CN          : 0.00064722,
        PW          : 0.00249564,
        LH          : 0.00043688,
        RH          : 0.00101455,
        BE          : 0.00042742,
        SP          : 0.00030968
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
    wOBA: {  // Adj. Rsq: 0.6410838
        Intercept   : 0.12458121,
        CN          : 0.00043428,
        PW          : 0.00062150,
        LH          : 0.00022405,
        RH          : 0.00050366,
        BE          : 0.00058020,
        SP          : 0.00005557
    },
    PA: { // Adj. Rsq: 0.09275659
        Intercept:    89.3994365,
        DU:           4.5678578
    },
    nSB: {  // Adj. Rsq. 0.5534575
        Intercept   : -8.10372369,
        BR          :  0.08047650,
        SP          :  0.10449597
    },

    // Fielding
    // based on season 35-37
    // updated 30 April 2016, no negatives
    FRAA_1B: {  // Adjusted R-squared:  0.5737
        Intercept   : -7.78599,
        RA          :  0.06803,
        GL          :  0.07241,
        AS          :  0.02541
    },
    FRAA_2B: {  // Adjusted R-squared:  0.3616
        Intercept :   -19.60084,
        RA        :     0.09624,
        GL        :     0.08616,
        AA        :     0.08933
    },
    FRAA_3B: {  // Adjusted R-squared:  0.6628
        Intercept: -28.10122,
        RA:  0.04943,
        GL:  0.21999,
        AS:  0.10496
    },
    FRAA_CF: {  // Adjusted R-squared:  0.5089
        Intercept: -24.7173,
        RA:  0.1620,
        GL:  0.1415
    },
    FRAA_LF: {  // Adjusted R-squared:  0.6823
        Intercept: -12.01568,
        RA:  0.10256,
        GL:  0.08208
    },
    FRAA_RF: {  // Adjusted R-squared:  0.4636
        Intercept: -5.01983,
        RA:  0.04544,
        GL:  0.04181
    },
    FRAA_SS: {  // Adjusted R-squared:  0.7694
        Intercept   : -76.77702,
        RA          :   0.25270,
        GL          :   0.29552,
        AA          :   0.36252
    },

    // Pitching
    // through season 39
    // updated 5 Nov 2016
    WHIP: { // Adj. Rsq: 0.3485972
        Intercept   :  2.64072933,
        CT          : -0.00524641,
        'LH.1'      : -0.00236290,
        'RH.1'      : -0.00519483,
        GB          : -0.00078745,
        P1          : -0.00195265,
        P2          : -0.00143592
    },
    SOBB: { // Adj. Rsq: 0.4344198
        Intercept   : -1.26041264,
        CT          :  0.02290595,
        'LH.1'      :  0.00365593,
        'RH.1'      :  0.00567232,
        VE          :  0.00514318,
        P1          :  0.00423316,
        P2          :  0.00369396,
        P4          :  0.00114064
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
    FIP: { // Adj. Rsq: 0.3911203
        Intercept   :  9.53931939,
        CT          : -0.02045330,
        'LH.1'      : -0.00912019,
        'RH.1'      : -0.01595503,
        VE          : -0.00334465,
        GB          : -0.00792188,
        P1          : -0.00616913,
        P2          : -0.00637550
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
    IP: { // Adj. R-Squared: 0.6294969
        Intercept : -14.43936958,
        ST        :   2.08355336,
        DU        :   0.46418526
    },
    Myst: { // Adj. R-Squared: 0.3886868
        Intercept   : -0.29358766,
        CT          :  0.00195594,
        'LH.1'      :  0.00087037,
        'RH.1'      :  0.00152785,
        VE          :  0.00032416,
        GB          :  0.00075519,
        P1          :  0.00056498,
        P2          :  0.00063304
    }
};