// weights driving calculations
// Batting updated through season 43, 18 Nov 2017
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
    AVG: { // Adj. Rsq: 0.4489628
        Intercept : 0.15864779,
        CN          : 0.00046978,
        PW          : 0.00004207,
        LH          : 0.00029211,
        RH          : 0.00062941,
        BE          : 0.00029689
    },
    OBP: { // Adj. Rsq: 0.5767325
        Intercept   : 0.18884322,
        CN          : 0.00057948,
        LH          : 0.00025042,
        RH          : 0.00053894,
        BE          : 0.00094870,
        BR          :-0.00008216
    },
    SLG: { // Adj. Rsq: 0.7149108
        Intercept   : 0.09303755,
        CN          : 0.00066932,
        PW          : 0.00251972,
        LH          : 0.00042150,
        RH          : 0.00101263,
        BE          : 0.00050695,
        SP          : 0.00024250
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
    wOBA: {  // Adj. Rsq: 0.6452137
        Intercept   : 0.12825437,
        CN          : 0.00044525,
        PW          : 0.00068195,
        LH          : 0.00022937,
        RH          : 0.00055758,
        BE          : 0.00059269,
        BU          : 0.00001624,
        SP          : 0.00003916
    },
    BBr: {  // Adj. Rsq: 0.5667815
        Intercept  :  0.01431597,
        CN         :  0.00017089,
        BE         :  0.00091530,
        BR         : -0.00007249
    },
    Kr: {  // Adj. Rsq: 0.8377955
        Intercept   :  0.34645431,
        CN          : -0.00181684,
        PW          :  0.00007881,
        LH          : -0.00015619,
        RH          : -0.00034313,
        BE          : -0.00056325
    },
    PA: { // Adj. Rsq: 0.08595653
        Intercept  : 83.4805501,
        DU         :  4.3436715,
        HE         :  0.3078353,
    },
    nSB: {  // Adj. Rsq. 0.5434735
        Intercept   : -7.88251729,
        BR          :  0.07394533,
        SP          :  0.10214762
    },

    // Fielding
    // based on season 38-43
    // updated 29 November 2017,
    // inluding negatives now (using rlm with psi.bisquare)
    FRAA: {
        '1B': {  // Adjusted R-squared:  0.7548135
            Intercept   : -8.5068,
            RA          :  0.0689,
            GL          :  0.0726,
            AS          :  0.0248,
            AA          :  0.0122
        },
        '2B': {  // Adjusted R-squared:  0.6933526
            Intercept  : -20.3113,
            RA         :   0.1375,
            GL         :   0.0533,
            AS         :   0.0358,
            AA         :   0.0544
        },
        SS: {  // Adjusted R-squared:  0.7874292
            Intercept  : -69.4089,
            RA         :   0.1867,
            GL         :   0.3799,
            AS         :   0.0417,
            AA         :   0.2216
        },
        '3B': {  // Adjusted R-squared:  0.7526783
            Intercept  : -33.0262,
            RA         :   0.1141,
            GL         :   0.1797,
            AS         :   0.0294,
            AA         :   0.1130
        },
        LF: {  // Adjusted R-squared:  0.7397727
            Intercept  : -10.0955,
            RA         :   0.0816,
            GL         :   0.0668,
            AS         :   0.0055,
            AA         :   0.0059
        },
        CF: {  // Adjusted R-squared:  0.7195822
            Intercept  : -26.3370,
            RA         :   0.1979,
            GL         :   0.1107,
            AS         :   0.0234
        },
        RF: {  // Adjusted R-squared:  0.6711656
            Intercept   : -8.3893,
            RA          :  0.0697,
            GL          :  0.0598,
            AS          :  0.0113
        },
    },


    // Pitching
    // through season 43
    // updated 18 Nov 2017
    WHIP: { // Adj. Rsq: 0.3424221
        Intercept   :  2.74082289,
        CT          : -0.00499609,
        'LH.1'        : -0.00311362,
        'RH.1'        : -0.00479710,
        GB          : -0.00051974,
        P1          : -0.00353653,
        P2          : -0.00111146
    },
    SOBB: { // Adj. Rsq: 0.3909498
        Intercept   : -1.53428611,
        CT          :  0.02232946,
        'LH.1'        :  0.00343560,
        'RH.1'        :  0.00745721,
        VE          :  0.00593206,
        P1          :  0.00591244,
        P2          :  0.00338585,
        P3          :  0.00108665
    },
    OPS: { // Adj. Rsq: 0.3715398
        Intercept :  1.35649915,
        CT          : -0.00136397,
        'LH.1'        : -0.00181428,
        'RH.1'        : -0.00225804,
        VE          :  0.00008521,
        GB          : -0.00045268,
        P1          : -0.00180475,
        P2          : -0.00069472,
        P4          :  0.00015607
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
    FIP: { // Adj. Rsq: 0.3613381
        Intercept :  9.83776994,
        CT          : -0.01998778,
        'LH.1'        : -0.01157087,
        'RH.1'        : -0.01447031,
        VE          : -0.00357986,
        GB          : -0.00544110,
        P1          : -0.01191174,
        P2          : -0.00549175
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
    IP: { // Adj. R-Squared: 0.5882197
        Intercept : -15.24165444,
        ST        :   2.01832967,
        DU        :   0.55112507
    },
    Myst: { // Adj. R-Squared: 0.3575664
        Intercept   : -0.35579726,
        CT          :  0.00196328,
        'LH.1'      :  0.00114376,
        'RH.1'      :  0.00142466,
        VE          :  0.00035561,
        GB          :  0.00053429,
        P1          :  0.00115589,
        P2          :  0.00055777
    }
};