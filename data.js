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
    AVG: { // Adj. Rsq: 0.4575396
        Intercept   : 0.16390368,
        CN          : 0.00044105,
        LH          : 0.00029557,
        RH          : 0.00065299,
        BE          : 0.00025876
    },
    OBP: { // Adj. Rsq: 0.5853907
        Intercept   :  0.19484593,
        CN          :  0.00056449,
        PW          : -0.00003179,
        LH          :  0.00023969,
        RH          :  0.00053941,
        BE          :  0.00092009,
        BR          : -0.00009030
    },
    SLG: { // Adj. Rsq: 0.7122923
        Intercept   : 0.09377309,
        CN          : 0.00064560,
        PW          : 0.00252323,
        LH          : 0.00045478,
        RH          : 0.00102080,
        BE          : 0.00042028,
        SP          : 0.00032535,
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
    wOBA: {  // Adj. Rsq: 0.645207
        Intercept   : 0.12847131,
        CN          : 0.00045030,
        PW          : 0.00067645,
        LH          : 0.00024292,
        RH          : 0.00054350,
        BE          : 0.00058415,
        SP          : 0.00007257
    },
    PA: { // Adj. Rsq: 0.08962556
        Intercept:    92.2305391,
        DU:           4.5266297
    },
    nSB: {  // Adj. Rsq. 0.5534575
        Intercept   : -8.10372369,
        BR          :  0.08047650,
        SP          :  0.10449597
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
    // through season 40
    // updated 9 Feb 2016
    WHIP: { // Adj. Rsq: 0.337519
        Intercept   :  2.65160647,
        CT          : -0.00513903,
        'LH.1'        : -0.00262721,
        'RH.1'        : -0.00504524,
        GB          : -0.00057997,
        P1          : -0.00213803,
        P2          : -0.00151048
    },
    SOBB: { // Adj. Rsq: 0.4164057
        Intercept : -1.33310110,
        CT          :  0.02260808,
        'LH.1'      :  0.00320269,
        'RH.1'      :  0.00641253,
        VE          :  0.00539894,
        P1          :  0.00484802,
        P2          :  0.00318013,
        P3          :  0.00092277,
        P4          :  0.00069721
    },
    OPS: { // Adj. Rsq: 0.3614178
        Intercept :  1.35098512,
        CT          : -0.00145351,
        'LH.1'      : -0.00151492,
        'RH.1'      : -0.00257232,
        GB          : -0.00056543,
        P1          : -0.00126463,
        P2          : -0.00087139
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
        Intercept   :  9.56413245,
        CT          : -0.02028604,
        'LH.1'      : -0.00918308,
        'RH.1'      : -0.01531768,
        VE          : -0.00356699,
        GB          : -0.00700736,
        P1          : -0.00756948,
        P2          : -0.00624385
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
    IP: { // Adj. R-Squared: 0.6124783
        Intercept : -17.47651717,
        ST        :   2.08316956,
        DU        :   0.51189863
    },
    Myst: { // Adj. R-Squared: 0.3624296
        Intercept :   -0.29668571,
        CT        :    0.00194372,
        'LH.1'    :    0.00087861,
        'RH.1'    :    0.00146624,
        VE        :    0.00034447,
        GB        :    0.00066710,
        P1        :    0.00070028,
        P2        :    0.00062454,
    }
};