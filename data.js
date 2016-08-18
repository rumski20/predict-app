// weights driving calculations
// Batting updated through season 38, 16-8-2016
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
    AVG: { // Adj. Rsq: 0.361687
        Intercept : 0.1626022171,
        CN          : 0.0004573459,
        LH          : 0.0003439136,
        RH          : 0.0006359806,
        BE          : 0.0002287508
    },
    OBP: { // Adj. Rsq: 0.4965694
        Intercept : 0.1854,
        CN          : 0.0005909,
        LH          : 0.0002647,
        RH          : 0.0005153,
        BE          : 0.0009222
    },
    SLG: { // Adj. Rsq: 0.6175492
        Intercept : 0.0893891711,
        CN          : 0.0006960117,
        PW          : 0.0025176214,
        LH          : 0.0005269618,
        RH          : 0.0009753137,
        BE          : 0.0003792422,
        SP          : 0.0003585701
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
    wOBA: {  // Adj. Rsq: 0.5370736
        Intercept : 0.1951,
        CN          : 0.0007775,
        PW          : 0.001401,
        LH          : 0.0005253,
        RH          : 0.0009792,
        BE          : 0.0005264,
        SP          : 0.0003786
    },
    PA: { // Adj. Rsq: 0.04403
        Intercept:    157.2795,
        DU:           3.5055
    },
    nSB: {  // Adj. Rsq. 0.4191733
        Intercept : -15.297365,
        BR          :  0.152053,
        SP          :  0.191949
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
    // through season 38
    // updated 17 August 2016
    WHIP: { // Adj. Rsq: 0.246
        Intercept :  2.5982874,
        CT          : -0.0051723,
        'LH.1'      : -0.0023414,
        'RH.1'      : -0.0050000,
        GB          : -0.0008509,
        P1          : -0.0016507,
        P2          : -0.0013504
    },
    SOBB: { // Adj. Rsq: 0.297
        Intercept : -1.0815232,
        CT          :  0.0245271,
        'LH.1'      :  0.0042485,
        'RH.1'      :  0.0061566,
        VE          :  0.0053841,
        P2          :  0.0043749
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
    FIP: { // Adj. Rsq: 0.2711
        Intercept :  9.7296119,
        CT          : -0.0216730,
        'LH.1'      : -0.0086314,
        'RH.1'      : -0.0165902,
        VE          : -0.0029468,
        GB          : -0.0080610,
        P1          : -0.0063767,
        P2          : -0.0071579
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
    IP: { // Adj. R-Squared: 0.4497
        Intercept : -7.74739,
        ST        :   1.93647,
        DU        :   0.44742
    },
    Myst: { // Adj. R-Squared: 0.2731
        Intercept : -3.046e-01,
        CT          :  0.002046,
        'LH.1'      :  0.0008355,
        'RH.1'      :  0.001558,
        VE          :  0.0002879,
        GB          :  0.0007679,
        P1          :  0.0005632,
        P2          :  0.0006898
    }
};