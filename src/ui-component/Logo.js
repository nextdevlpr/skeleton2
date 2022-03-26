// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();
    const customColor = theme.palette.mode === 'dark' ? '#f3f8f5' : '#1f1a17';
    console.log('colcor', customColor);
    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Berry" width="100" />
         *
         */
        <svg width="100" height="52" viewBox="0 0 1600 900" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="#3d4340ff">
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 783.92 0.00 L 804.92 0.00 C 818.80 1.31 836.73 1.83 843.89 16.18 C 849.03 20.47 854.14 25.84 854.41 33.00 C 854.65 47.63 854.37 62.28 854.54 76.91 C 868.67 77.49 882.85 76.90 897.00 77.20 C 902.38 77.37 907.73 79.62 911.36 83.65 C 913.88 86.19 914.94 89.94 918.06 91.94 C 925.14 97.37 927.23 106.66 928.19 115.06 C 929.38 127.64 929.39 140.45 927.13 152.92 C 925.48 162.80 918.73 173.19 907.99 174.29 C 890.20 174.76 872.37 174.21 854.58 174.56 C 854.40 216.71 854.53 258.87 854.51 301.02 C 855.03 307.74 855.05 314.92 857.91 321.11 C 868.98 324.70 880.87 321.57 891.26 317.20 C 898.34 314.07 907.73 314.82 912.94 321.02 C 915.12 323.28 915.63 326.89 918.54 328.45 C 926.67 333.62 927.21 344.25 928.41 352.85 C 929.28 367.93 929.91 383.81 924.16 398.08 C 919.80 408.56 908.56 413.39 898.37 416.36 C 874.89 422.65 849.95 423.45 826.07 419.05 C 805.01 415.27 784.93 404.36 772.17 386.92 C 750.67 366.01 744.45 334.84 743.67 305.97 C 743.31 262.17 743.74 218.35 743.45 174.55 C 734.98 173.79 725.42 176.39 717.99 171.03 C 714.20 168.76 712.34 164.64 709.71 161.33 C 697.59 152.78 696.99 136.43 696.57 122.99 C 696.63 111.92 696.50 100.34 701.00 89.99 C 703.90 83.09 710.61 77.87 718.15 77.31 C 726.58 76.77 735.06 77.53 743.49 76.93 C 743.63 59.30 743.46 41.65 743.57 24.01 C 743.60 16.99 747.48 10.10 753.66 6.70 C 762.77 1.22 773.71 1.28 783.92 0.00 M 770.61 12.48 C 764.38 13.60 755.58 15.44 754.61 23.01 C 754.36 44.63 754.58 66.27 754.50 87.90 C 742.70 88.34 730.85 87.73 719.05 88.20 C 711.00 89.12 709.15 98.47 708.27 105.07 C 707.20 116.95 706.93 129.10 709.26 140.86 C 710.43 145.92 712.96 152.43 718.94 153.01 C 730.78 153.26 742.64 152.92 754.48 153.17 C 754.57 203.44 754.43 253.71 754.55 303.99 C 755.25 325.41 758.06 347.80 769.63 366.35 C 778.74 381.29 794.25 391.53 810.99 396.00 C 831.79 401.64 853.82 401.57 874.98 398.07 C 883.29 396.44 891.80 394.55 899.12 390.12 C 906.25 385.75 907.52 376.68 908.40 369.09 C 909.31 356.12 909.71 342.71 905.88 330.14 C 904.22 325.39 898.32 325.77 894.61 327.62 C 881.63 333.11 866.57 336.04 852.99 330.95 C 836.76 324.37 835.03 304.14 834.54 289.00 C 834.54 243.70 834.42 198.41 834.60 153.12 C 855.74 152.99 876.90 153.26 898.05 152.98 C 904.46 151.78 906.67 144.46 907.67 138.87 C 909.47 126.22 909.56 113.21 907.48 100.59 C 906.61 95.07 903.47 88.39 897.06 88.15 C 876.24 87.86 855.40 88.18 834.58 87.99 C 834.37 66.39 834.67 44.78 834.43 23.19 C 833.25 15.41 824.21 13.39 817.69 12.37 C 802.09 10.62 786.20 10.56 770.61 12.48 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1429.87 64.64 C 1436.26 64.00 1442.76 64.03 1449.17 64.60 C 1442.73 64.46 1436.30 64.45 1429.87 64.64 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1469.80 76.54 C 1474.05 77.28 1478.92 80.05 1478.94 84.93 C 1479.05 118.07 1478.84 151.22 1479.04 184.36 C 1476.11 187.11 1473.17 189.87 1469.88 192.18 C 1469.46 153.64 1469.63 115.08 1469.80 76.54 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1044.83 162.59 C 1051.23 161.98 1057.75 162.01 1064.16 162.61 C 1057.71 162.45 1051.27 162.42 1044.83 162.59 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1288.89 162.65 C 1294.93 162.01 1301.08 161.94 1307.12 162.64 C 1301.04 162.38 1294.96 162.45 1288.89 162.65 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1527.87 162.62 C 1533.24 161.94 1538.72 162.03 1544.11 162.64 C 1538.69 162.45 1533.27 162.38 1527.87 162.62 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 51.29 175.82 C 51.58 177.05 51.77 178.30 52.17 179.51 C 58.94 180.44 62.19 186.77 60.94 193.15 C 57.90 196.18 55.01 199.37 51.74 202.16 C 51.06 193.40 51.94 184.59 51.29 175.82 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 683.89 178.91 C 687.53 179.63 692.43 180.04 693.88 184.13 C 694.45 187.39 692.64 190.46 691.30 193.31 C 673.76 225.68 655.95 257.92 638.45 290.32 C 657.64 326.36 677.75 361.97 697.16 397.92 C 698.52 400.86 699.72 405.30 696.55 407.52 C 691.33 410.72 684.92 410.63 679.01 410.98 C 665.80 410.98 652.37 412.11 639.32 409.58 C 633.70 408.69 630.05 403.84 628.74 398.61 C 642.93 401.54 657.57 400.38 671.95 400.23 C 677.54 399.60 684.37 400.03 688.53 395.57 C 690.62 390.87 686.87 386.25 684.86 382.19 C 666.45 348.08 647.11 314.39 629.27 280.02 C 646.81 246.01 666.17 212.86 683.89 178.91 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 553.28 180.58 C 556.52 180.37 558.44 183.65 559.89 186.08 C 570.20 205.25 580.13 224.63 590.72 243.64 C 590.11 244.85 589.39 246.00 588.56 247.06 C 576.66 224.98 564.76 202.88 553.28 180.58 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1363.04 188.40 C 1367.77 191.15 1371.90 195.67 1372.67 201.28 C 1374.17 210.74 1374.17 220.42 1373.21 229.94 C 1372.59 234.69 1371.49 240.38 1366.92 242.91 C 1359.55 244.10 1354.40 237.65 1348.61 234.33 C 1333.60 223.35 1313.75 218.38 1295.66 223.73 C 1283.09 227.44 1273.67 238.05 1268.99 249.99 C 1262.38 266.71 1261.59 285.11 1262.45 302.87 C 1263.06 316.50 1266.27 329.96 1272.24 342.24 C 1259.65 332.19 1255.66 315.26 1253.76 300.02 C 1251.97 281.10 1252.24 261.49 1258.19 243.28 C 1261.94 231.46 1269.87 220.54 1281.24 215.13 C 1302.52 205.43 1327.39 213.19 1344.83 227.20 C 1348.75 229.93 1353.56 233.80 1358.60 231.71 C 1362.07 228.90 1363.23 224.23 1363.81 219.99 C 1364.92 209.49 1364.62 198.84 1363.04 188.40 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1599.71 193.56 C 1619.55 212.87 1622.19 242.77 1622.49 269.00 C 1622.45 312.67 1622.55 356.34 1622.43 400.00 C 1621.47 407.29 1612.61 407.75 1606.88 408.57 C 1594.32 409.18 1581.42 410.01 1569.09 407.00 C 1564.51 406.17 1561.07 401.79 1562.12 397.09 C 1575.11 399.08 1588.40 399.07 1601.45 397.55 C 1606.66 397.02 1613.89 394.61 1613.14 388.03 C 1613.12 342.69 1613.27 297.35 1613.06 252.01 C 1613.04 231.82 1609.15 211.53 1599.71 193.56 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 189.83 194.76 C 209.08 212.75 212.73 241.00 213.16 266.03 C 213.38 311.03 213.25 356.03 213.22 401.03 C 213.40 408.35 204.78 409.75 199.20 410.44 C 186.69 411.41 173.90 411.88 161.52 409.52 C 156.23 408.92 151.71 404.67 152.62 399.05 C 165.77 400.94 179.23 401.10 192.40 399.42 C 197.09 398.74 203.98 396.97 203.75 391.00 C 203.81 345.33 203.79 299.66 203.76 253.99 C 203.65 233.52 199.99 212.75 189.83 194.76 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 442.81 201.87 C 463.74 222.05 469.33 253.01 469.36 281.00 C 469.30 289.36 470.26 299.32 463.64 305.66 C 460.08 309.23 454.87 310.37 449.98 310.35 C 407.02 310.37 364.05 310.33 321.09 310.37 C 320.40 322.76 323.48 335.11 328.44 346.37 C 314.93 335.30 311.50 316.38 311.72 299.81 C 355.78 299.31 399.88 299.91 443.95 299.52 C 452.35 299.38 459.01 291.95 459.62 283.82 C 461.57 255.73 457.99 226.18 442.81 201.87 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1138.84 201.66 C 1143.04 204.66 1145.51 209.42 1148.41 213.58 C 1162.45 236.77 1165.00 264.90 1163.59 291.41 C 1163.33 300.28 1156.06 308.29 1146.97 308.27 C 1103.14 308.56 1059.31 308.20 1015.48 308.45 C 1015.18 320.83 1017.83 333.22 1023.11 344.41 C 1009.26 333.64 1006.24 314.48 1006.15 297.99 C 1049.08 297.19 1092.09 297.85 1135.05 297.66 C 1144.04 298.65 1153.04 292.12 1153.91 282.93 C 1156.53 255.15 1152.33 226.34 1138.84 201.66 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1022.67 215.67 C 1032.23 206.51 1046.13 203.34 1059.03 204.93 C 1070.44 205.86 1083.04 211.43 1087.95 222.32 C 1071.32 212.14 1047.53 212.40 1032.60 225.64 C 1023.33 233.88 1018.75 246.04 1016.62 257.98 L 1016.42 258.87 C 1013.09 259.87 1009.50 259.51 1006.10 259.14 C 1006.81 243.53 1010.85 226.71 1022.67 215.67 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 337.93 210.88 C 348.39 205.79 360.66 205.64 371.84 208.15 C 380.49 210.49 389.51 215.54 393.21 224.09 C 376.81 214.43 353.89 214.38 338.91 226.86 C 328.82 235.34 323.90 248.38 321.95 261.09 C 348.61 261.32 375.28 261.13 401.95 261.19 C 372.06 261.48 342.16 261.18 312.27 261.36 C 311.20 242.30 319.55 219.77 337.93 210.88 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1500.00 219.03 C 1515.01 210.22 1537.90 213.91 1545.94 230.42 C 1535.90 224.33 1522.98 223.17 1512.26 228.16 C 1500.04 233.86 1490.60 243.93 1481.93 253.99 C 1480.85 255.56 1478.86 256.84 1478.99 258.95 C 1478.94 305.66 1479.00 352.37 1478.97 399.08 C 1479.14 402.23 1477.00 405.09 1474.12 406.19 C 1466.15 409.34 1457.41 408.92 1449.00 409.20 C 1440.28 408.93 1431.20 409.40 1422.96 406.04 C 1419.47 404.62 1417.78 400.64 1418.66 397.06 C 1431.80 398.98 1445.24 399.07 1458.41 397.40 C 1463.06 396.65 1469.66 394.84 1469.56 388.98 C 1469.98 341.74 1469.04 294.41 1470.02 247.23 C 1478.01 236.12 1488.14 226.04 1500.00 219.03 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 90.93 220.89 C 105.81 212.30 128.35 215.83 136.40 232.11 C 127.41 227.24 116.51 225.31 106.69 228.75 C 91.19 234.50 79.46 247.24 69.64 260.06 C 69.31 307.34 69.61 354.66 69.49 401.95 C 69.71 405.05 67.06 407.40 64.38 408.39 C 56.26 411.36 47.49 410.94 39.00 411.23 C 30.36 410.89 21.28 411.37 13.19 407.82 C 9.74 406.34 8.88 402.40 9.05 399.02 C 22.06 400.95 35.38 401.09 48.42 399.46 C 53.24 398.73 60.20 397.13 60.27 391.04 C 60.63 343.84 60.01 296.60 60.57 249.42 C 68.58 238.11 78.84 227.87 90.93 220.89 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 540.44 395.47 C 554.89 369.60 567.41 342.54 581.89 316.68 C 584.76 321.00 587.02 325.70 589.30 330.36 C 576.32 355.07 563.64 379.95 550.77 404.72 C 547.64 409.65 541.19 410.12 535.95 410.80 C 523.93 411.28 511.84 411.53 499.85 410.50 C 494.10 410.54 486.16 406.71 489.46 399.73 C 501.26 400.86 513.13 400.61 524.96 400.24 C 530.29 399.79 536.43 399.48 540.44 395.47 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1364.72 338.82 C 1368.58 337.35 1372.47 340.21 1372.96 344.13 C 1375.43 356.77 1375.46 369.95 1373.58 382.68 C 1372.93 388.51 1368.57 392.86 1363.83 395.82 C 1346.17 407.29 1324.91 412.71 1303.97 413.04 C 1274.74 413.97 1242.47 404.66 1224.60 380.15 C 1235.84 388.58 1248.22 395.78 1262.07 398.87 C 1290.21 405.61 1320.93 402.88 1346.88 389.78 C 1353.82 385.87 1362.29 381.55 1364.05 372.99 C 1366.26 361.75 1365.41 350.18 1364.72 338.82 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 1144.05 352.75 C 1148.82 351.67 1152.64 355.45 1152.88 360.06 C 1153.83 369.97 1154.13 380.20 1152.10 389.99 C 1150.15 397.33 1142.18 399.60 1135.93 402.03 C 1111.90 410.18 1086.35 413.83 1061.00 413.00 C 1034.45 412.30 1006.49 405.91 986.20 387.79 C 983.16 384.64 979.36 381.93 977.45 377.91 C 996.02 392.77 1019.40 400.29 1042.96 401.81 C 1071.14 403.96 1099.75 400.35 1126.57 391.46 C 1132.72 389.06 1140.62 386.82 1142.63 379.62 C 1144.93 370.88 1143.99 361.69 1144.05 352.75 Z"
                />
                <path
                    fill="#3d4340"
                    opacity="1.00"
                    d=" M 449.37 354.54 C 452.23 354.60 455.82 354.91 457.08 357.97 C 459.92 365.29 458.78 373.36 458.95 381.05 C 458.81 388.42 457.69 397.71 449.63 400.57 C 422.78 412.08 393.01 415.81 363.97 414.95 C 337.69 413.77 310.08 407.07 290.40 388.62 C 288.09 385.99 284.68 383.93 283.56 380.53 C 307.06 399.01 337.67 405.14 367.00 404.44 C 389.17 404.15 411.36 400.43 432.37 393.31 C 438.30 390.87 445.98 388.85 448.08 381.94 C 450.35 373.02 449.67 363.65 449.37 354.54 Z"
                />
            </g>
            <g id="#ffffffff">
                <path
                    fill="#ffffff"
                    opacity="1.00"
                    d=" M 770.61 12.48 C 786.20 10.56 802.09 10.62 817.69 12.37 C 824.21 13.39 833.25 15.41 834.43 23.19 C 834.67 44.78 834.37 66.39 834.58 87.99 C 855.40 88.18 876.24 87.86 897.06 88.15 C 903.47 88.39 906.61 95.07 907.48 100.59 C 909.56 113.21 909.47 126.22 907.67 138.87 C 906.67 144.46 904.46 151.78 898.05 152.98 C 876.90 153.26 855.74 152.99 834.60 153.12 C 834.42 198.41 834.54 243.70 834.54 289.00 C 835.03 304.14 836.76 324.37 852.99 330.95 C 866.57 336.04 881.63 333.11 894.61 327.62 C 898.32 325.77 904.22 325.39 905.88 330.14 C 909.71 342.71 909.31 356.12 908.40 369.09 C 907.52 376.68 906.25 385.75 899.12 390.12 C 891.80 394.55 883.29 396.44 874.98 398.07 C 853.82 401.57 831.79 401.64 810.99 396.00 C 794.25 391.53 778.74 381.29 769.63 366.35 C 758.06 347.80 755.25 325.41 754.55 303.99 C 754.43 253.71 754.57 203.44 754.48 153.17 C 742.64 152.92 730.78 153.26 718.94 153.01 C 712.96 152.43 710.43 145.92 709.26 140.86 C 706.93 129.10 707.20 116.95 708.27 105.07 C 709.15 98.47 711.00 89.12 719.05 88.20 C 730.85 87.73 742.70 88.34 754.50 87.90 C 754.58 66.27 754.36 44.63 754.61 23.01 C 755.58 15.44 764.38 13.60 770.61 12.48 Z"
                />
                <path
                    fill="#ffffff"
                    opacity="1.00"
                    d=" M 1631.21 633.36 L 1632.00 632.49 L 1632.00 642.13 L 1631.38 641.09 C 1631.48 638.51 1631.45 635.92 1631.21 633.36 Z"
                />
            </g>
            <g id="#01458eff">
                <path
                    fill="#01458e"
                    opacity="1.00"
                    d=" M 1409.68 72.70 C 1413.08 65.19 1422.87 65.43 1429.87 64.64 C 1436.30 64.45 1442.73 64.46 1449.17 64.60 C 1456.85 65.20 1470.73 65.67 1469.80 76.54 C 1469.63 115.08 1469.46 153.64 1469.88 192.18 C 1473.17 189.87 1476.11 187.11 1479.04 184.36 C 1492.80 172.72 1509.71 164.08 1527.87 162.62 C 1533.27 162.38 1538.69 162.45 1544.11 162.64 C 1566.32 163.28 1587.34 175.18 1599.71 193.56 C 1609.15 211.53 1613.04 231.82 1613.06 252.01 C 1613.27 297.35 1613.12 342.69 1613.14 388.03 C 1613.89 394.61 1606.66 397.02 1601.45 397.55 C 1588.40 399.07 1575.11 399.08 1562.12 397.09 C 1557.99 396.44 1553.05 393.84 1553.17 389.04 C 1553.12 348.03 1553.20 307.02 1553.13 266.01 C 1553.09 253.88 1552.07 241.18 1545.94 230.42 C 1537.90 213.91 1515.01 210.22 1500.00 219.03 C 1488.14 226.04 1478.01 236.12 1470.02 247.23 C 1469.04 294.41 1469.98 341.74 1469.56 388.98 C 1469.66 394.84 1463.06 396.65 1458.41 397.40 C 1445.24 399.07 1431.80 398.98 1418.66 397.06 C 1415.06 396.46 1411.36 394.78 1409.73 391.31 L 1409.77 390.64 C 1409.62 284.92 1409.67 179.07 1409.75 73.37 L 1409.68 72.70 Z"
                />
                <path
                    fill="#01458e"
                    opacity="1.00"
                    d=" M 963.79 208.79 C 980.40 180.53 1012.49 163.77 1044.83 162.59 C 1051.27 162.42 1057.71 162.45 1064.16 162.61 C 1093.32 163.35 1122.38 177.16 1138.84 201.66 C 1152.33 226.34 1156.53 255.15 1153.91 282.93 C 1153.04 292.12 1144.04 298.65 1135.05 297.66 C 1092.09 297.85 1049.08 297.19 1006.15 297.99 C 1006.24 314.48 1009.26 333.64 1023.11 344.41 C 1034.60 354.84 1051.00 357.35 1066.00 357.16 C 1087.17 357.41 1108.07 352.38 1127.70 344.73 C 1131.73 343.25 1136.44 341.50 1140.61 343.45 C 1143.31 345.67 1143.80 349.47 1144.05 352.75 C 1143.99 361.69 1144.93 370.88 1142.63 379.62 C 1140.62 386.82 1132.72 389.06 1126.57 391.46 C 1099.75 400.35 1071.14 403.96 1042.96 401.81 C 1019.40 400.29 996.02 392.77 977.45 377.91 C 958.65 360.52 949.20 335.35 946.57 310.32 C 942.72 275.93 945.60 239.03 963.79 208.79 M 1022.67 215.67 C 1010.85 226.71 1006.81 243.53 1006.10 259.14 C 1009.50 259.51 1013.09 259.87 1016.42 258.87 L 1016.62 257.98 L 1016.41 259.17 C 1043.09 259.20 1069.77 259.26 1096.45 259.14 C 1096.63 246.59 1095.48 232.75 1087.95 222.32 C 1083.04 211.43 1070.44 205.86 1059.03 204.93 C 1046.13 203.34 1032.23 206.51 1022.67 215.67 Z"
                />
                <path
                    fill="#01458e"
                    opacity="1.00"
                    d=" M 1227.62 186.67 C 1244.30 171.60 1266.67 163.93 1288.89 162.65 C 1294.96 162.45 1301.04 162.38 1307.12 162.64 C 1322.22 163.83 1337.20 168.07 1350.34 175.68 C 1355.53 178.72 1360.80 182.59 1363.04 188.40 C 1364.62 198.84 1364.92 209.49 1363.81 219.99 C 1363.23 224.23 1362.07 228.90 1358.60 231.71 C 1353.56 233.80 1348.75 229.93 1344.83 227.20 C 1327.39 213.19 1302.52 205.43 1281.24 215.13 C 1269.87 220.54 1261.94 231.46 1258.19 243.28 C 1252.24 261.49 1251.97 281.10 1253.76 300.02 C 1255.66 315.26 1259.65 332.19 1272.24 342.24 C 1283.88 352.89 1301.20 353.72 1315.97 350.91 C 1329.31 347.72 1340.78 339.67 1351.42 331.33 C 1354.16 329.15 1358.29 326.88 1361.53 329.47 C 1363.92 331.92 1364.23 335.59 1364.72 338.82 C 1365.41 350.18 1366.26 361.75 1364.05 372.99 C 1362.29 381.55 1353.82 385.87 1346.88 389.78 C 1320.93 402.88 1290.21 405.61 1262.07 398.87 C 1248.22 395.78 1235.84 388.58 1224.60 380.15 C 1196.56 353.76 1189.67 312.87 1191.59 276.04 C 1192.65 243.47 1202.65 209.01 1227.62 186.67 Z"
                />
            </g>
            <g id="#1f1a17ff">
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 1409.40 73.28 L 1409.75 73.37 C 1409.67 179.07 1409.62 284.92 1409.77 390.64 L 1409.42 390.72 C 1409.79 285.03 1409.81 178.89 1409.40 73.28 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 296.47 475.56 C 303.20 463.64 316.58 457.00 329.87 455.74 C 335.61 455.35 341.38 455.20 347.13 455.66 C 353.54 457.05 362.00 457.05 366.06 462.95 C 368.67 469.82 367.91 477.45 367.60 484.65 C 367.40 487.55 366.28 492.52 362.37 491.60 C 355.32 489.05 347.54 486.92 340.09 489.02 C 334.89 490.38 331.56 495.33 330.45 500.35 C 328.44 509.11 329.29 518.19 329.19 527.10 C 338.37 527.36 347.57 526.94 356.75 527.29 C 361.98 528.88 361.75 535.60 362.18 540.03 C 361.99 546.76 363.27 555.04 357.94 560.20 C 348.36 560.58 338.76 560.12 329.17 560.40 C 328.81 599.97 329.02 639.57 329.07 679.15 C 328.18 683.09 323.48 683.81 320.13 684.33 C 311.80 685.15 303.31 685.30 295.03 684.02 C 292.29 683.40 288.33 682.39 288.19 678.96 C 287.91 639.45 288.43 599.91 287.93 560.41 C 281.32 560.18 274.67 560.71 268.08 560.18 C 262.99 556.17 264.01 548.76 263.69 543.00 C 264.07 537.91 263.21 531.19 267.68 527.70 C 274.34 526.44 281.28 527.61 288.05 527.09 C 288.16 509.74 287.46 491.11 296.47 475.56 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 33.33 462.40 C 42.40 461.79 53.41 460.69 60.58 467.43 C 66.06 475.29 65.49 486.06 62.96 494.91 C 60.01 503.94 49.06 504.94 41.00 504.89 C 33.17 504.86 22.39 504.41 19.21 495.72 C 16.56 487.95 16.64 479.10 19.34 471.36 C 21.31 465.49 27.67 463.01 33.33 462.40 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 991.31 488.38 C 999.12 487.39 1007.09 487.46 1014.92 488.29 C 1018.21 488.84 1022.45 489.61 1023.72 493.22 C 1024.10 504.50 1023.64 515.81 1023.94 527.10 C 1034.60 527.32 1045.28 527.03 1055.95 527.22 C 1058.56 527.30 1060.35 529.77 1060.86 532.13 C 1062.44 538.24 1062.06 544.66 1061.69 550.90 C 1061.20 554.31 1060.62 558.84 1056.95 560.26 C 1045.99 560.60 1035.02 560.24 1024.06 560.42 C 1023.59 582.92 1023.98 605.47 1023.86 627.99 C 1024.05 635.51 1024.12 644.42 1030.14 649.88 C 1037.73 655.13 1047.72 652.87 1055.67 649.65 C 1058.23 648.23 1060.75 650.51 1060.95 653.10 C 1062.41 660.83 1062.53 669.03 1060.70 676.71 C 1058.84 683.52 1050.79 684.54 1044.97 685.95 C 1029.42 688.45 1011.74 688.16 998.53 678.50 C 986.26 669.11 983.26 652.66 982.94 638.12 C 982.93 612.21 983.19 586.29 982.82 560.41 C 976.32 560.24 969.81 560.38 963.32 560.21 L 962.88 560.20 C 957.79 554.45 958.89 546.10 958.89 539.01 C 959.33 534.86 959.37 528.72 964.26 527.30 C 970.42 526.93 976.61 527.38 982.79 527.10 C 982.99 516.06 982.65 505.00 982.94 493.97 C 983.27 489.89 988.05 488.97 991.31 488.38 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 185.08 523.62 C 201.07 522.48 218.39 527.41 228.69 540.32 C 239.39 553.27 241.36 570.79 241.64 586.99 C 241.69 617.33 241.69 647.68 241.64 678.02 C 241.96 682.19 237.30 683.68 233.99 684.12 C 225.72 685.26 217.26 685.20 208.98 684.25 C 205.51 683.77 200.34 682.52 200.67 678.04 C 200.62 649.69 200.69 621.34 200.63 592.99 C 200.43 583.85 199.38 573.96 193.39 566.61 C 186.71 558.37 174.02 557.12 164.97 561.97 C 156.47 566.50 149.91 573.82 143.83 581.13 C 142.96 614.10 143.83 647.16 143.40 680.15 C 138.33 686.19 129.03 684.36 121.99 684.91 C 115.67 684.33 106.84 685.91 102.78 679.93 C 102.39 631.30 102.74 582.63 102.61 533.99 C 102.28 531.48 103.36 528.70 105.97 527.96 C 112.89 525.54 120.42 526.13 127.61 526.44 C 131.15 526.95 136.26 527.25 137.35 531.44 C 137.97 537.31 137.31 543.24 137.68 549.14 C 150.46 536.33 166.24 524.35 185.08 523.62 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 568.81 536.78 C 583.93 524.73 604.36 522.23 623.07 524.09 C 632.83 525.36 642.84 527.40 651.31 532.69 C 654.19 534.32 655.01 537.79 655.33 540.84 C 655.80 546.61 655.76 552.42 655.28 558.19 C 655.23 561.21 652.43 564.44 649.28 562.73 C 635.35 555.64 619.38 549.75 603.61 553.63 C 596.71 555.20 591.02 561.76 591.90 569.05 C 592.06 575.38 597.53 579.64 602.67 582.32 C 614.23 588.19 627.06 591.12 638.41 597.49 C 651.20 603.49 661.53 615.55 663.28 629.84 C 663.76 634.93 663.78 640.06 663.28 645.15 C 661.96 654.95 657.48 664.41 650.21 671.20 C 640.33 680.87 626.52 685.21 613.09 686.89 C 594.83 688.95 575.54 686.68 559.24 677.81 C 553.73 675.13 552.65 668.44 552.62 662.94 C 552.68 657.42 552.00 651.57 554.32 646.41 C 555.92 643.58 559.71 644.71 561.97 646.07 C 573.82 652.88 587.06 658.54 601.01 657.96 C 608.86 657.82 618.18 655.62 622.16 648.12 C 625.89 640.97 623.13 631.73 616.04 627.87 C 600.20 618.58 580.77 615.77 566.81 603.18 C 547.59 586.44 548.88 552.46 568.81 536.78 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 897.21 523.56 C 910.16 523.65 923.53 525.69 935.03 531.95 C 942.11 535.80 940.21 545.33 940.63 552.03 C 940.35 555.89 940.87 563.69 935.08 563.05 C 922.89 557.26 909.90 551.48 896.06 552.52 C 889.33 552.69 881.60 554.86 878.32 561.31 C 874.86 567.60 877.17 575.97 883.29 579.70 C 894.97 587.42 909.18 589.82 921.41 596.52 C 933.13 601.81 943.41 611.47 946.96 624.12 C 951.04 639.67 948.06 657.82 936.64 669.65 C 926.72 680.27 912.20 685.15 898.09 686.86 C 880.04 688.96 861.00 686.72 844.78 678.20 C 835.90 673.80 837.43 662.29 837.57 654.06 C 837.37 649.92 839.13 642.43 844.86 645.17 C 861.05 654.29 880.85 662.61 899.30 655.20 C 910.07 651.31 912.16 634.78 902.17 628.78 C 887.04 619.07 868.14 616.51 853.90 605.10 C 834.77 590.68 832.91 560.00 848.17 542.16 C 860.23 528.35 879.48 523.42 897.21 523.56 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 1291.34 549.41 C 1304.78 535.29 1322.43 522.19 1342.97 523.58 C 1360.92 523.20 1378.95 533.16 1386.19 549.95 C 1397.30 538.53 1410.26 527.55 1426.37 524.46 C 1442.16 521.73 1459.99 524.62 1471.85 536.14 C 1486.66 550.49 1488.38 572.55 1488.12 592.00 C 1488.09 620.69 1488.18 649.38 1488.08 678.07 C 1488.23 682.75 1482.72 683.86 1479.13 684.34 C 1471.12 685.16 1462.96 685.23 1454.97 684.18 C 1451.64 683.66 1446.73 682.36 1447.10 678.06 C 1447.00 648.71 1447.13 619.36 1447.03 590.01 C 1446.74 580.80 1444.98 570.65 1437.93 564.09 C 1430.49 557.35 1418.43 557.78 1410.62 563.69 C 1403.82 568.78 1397.54 574.90 1392.76 581.91 C 1392.65 613.94 1392.77 645.99 1392.70 678.03 C 1393.05 681.38 1389.70 683.19 1386.89 683.72 C 1379.09 685.39 1371.03 684.98 1363.13 684.63 C 1359.14 684.05 1354.11 683.93 1351.82 680.04 C 1351.51 648.29 1352.47 616.48 1351.33 584.76 C 1350.50 577.56 1348.52 570.03 1343.29 564.72 C 1336.57 558.00 1325.25 557.53 1317.31 562.33 C 1309.45 567.06 1303.48 574.22 1297.53 581.06 C 1296.73 614.02 1297.42 647.06 1297.19 680.04 C 1294.88 683.92 1289.85 684.06 1285.87 684.63 C 1277.97 684.97 1269.90 685.40 1262.12 683.72 C 1259.29 683.19 1255.94 681.38 1256.31 678.02 C 1256.28 629.68 1256.27 581.33 1256.31 532.98 C 1256.05 530.30 1258.13 528.23 1260.60 527.64 C 1267.32 525.67 1274.46 526.08 1281.38 526.46 C 1284.86 526.93 1289.61 527.25 1291.07 531.09 C 1291.63 537.17 1291.07 543.31 1291.34 549.41 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 1538.18 535.22 C 1558.40 521.30 1585.31 520.97 1608.16 527.86 C 1613.59 530.01 1621.45 531.88 1622.36 538.76 C 1623.36 545.79 1623.74 553.15 1622.11 560.11 C 1621.59 563.12 1617.94 563.82 1615.66 562.31 C 1601.97 555.24 1586.07 549.78 1570.61 553.74 C 1563.86 555.34 1558.52 561.86 1559.26 568.93 C 1559.47 575.97 1565.97 580.45 1571.72 583.20 C 1586.72 590.09 1603.57 593.74 1616.53 604.50 C 1625.18 611.59 1630.25 622.30 1631.21 633.36 C 1631.45 635.92 1631.48 638.51 1631.38 641.09 C 1630.19 649.26 1628.25 657.57 1623.38 664.41 C 1614.82 677.16 1599.79 683.79 1585.07 686.21 C 1565.32 689.39 1544.07 687.37 1526.34 677.65 C 1517.68 672.08 1520.05 659.90 1520.34 651.15 C 1520.04 646.74 1524.14 642.53 1528.39 645.61 C 1544.09 654.62 1563.42 662.30 1581.36 655.37 C 1590.35 652.32 1594.24 640.04 1588.49 632.48 C 1582.03 624.96 1571.93 622.49 1563.11 618.84 C 1551.23 613.96 1538.52 609.08 1530.04 598.96 C 1514.65 580.43 1518.17 549.10 1538.18 535.22 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 392.39 546.41 C 408.02 529.11 432.29 522.60 454.97 523.57 C 473.40 523.77 492.96 528.32 506.69 541.34 C 519.19 552.78 525.18 569.57 527.25 586.04 C 529.51 604.98 528.66 624.73 521.76 642.70 C 516.19 657.36 505.61 670.26 491.70 677.71 C 474.86 687.10 454.85 688.75 435.96 687.00 C 418.97 685.37 401.68 678.84 390.20 665.79 C 378.82 653.05 374.06 635.82 372.73 619.12 C 372.27 611.38 372.20 603.62 372.72 595.88 C 374.22 578.00 380.00 559.78 392.39 546.41 M 443.32 556.40 C 434.48 557.70 426.36 563.07 421.90 570.85 C 415.16 582.28 414.02 596.01 414.30 609.01 C 414.76 620.93 416.48 633.51 423.58 643.46 C 433.77 656.89 454.37 657.93 468.43 650.47 C 483.42 641.40 486.30 622.05 486.30 606.00 C 486.18 591.64 484.91 575.47 474.45 564.55 C 466.61 556.14 454.13 554.74 443.32 556.40 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 1098.37 546.44 C 1112.80 529.32 1136.15 522.26 1157.98 523.62 C 1176.66 523.89 1196.14 530.99 1207.85 546.11 C 1220.80 562.64 1223.15 584.75 1221.91 605.04 C 1221.62 611.11 1216.24 616.36 1210.07 615.96 C 1180.33 616.15 1150.58 615.89 1120.84 616.09 C 1120.73 625.91 1122.57 636.34 1128.69 644.31 C 1134.27 651.43 1143.21 655.04 1151.99 656.09 C 1170.23 658.26 1188.63 654.23 1205.55 647.52 C 1208.77 646.01 1213.91 646.12 1214.44 650.56 C 1215.39 658.06 1215.93 666.16 1213.48 673.42 C 1209.57 679.33 1201.60 680.17 1195.39 682.40 C 1174.51 687.95 1152.28 689.54 1131.05 684.99 C 1116.12 681.75 1101.73 673.85 1092.90 661.11 C 1081.86 645.48 1079.14 625.70 1079.13 607.00 C 1079.04 585.59 1084.04 562.98 1098.37 546.44 M 1129.15 563.16 C 1123.41 570.69 1121.13 580.37 1120.87 589.70 C 1141.43 589.68 1162.00 589.92 1182.55 589.58 C 1182.82 577.81 1180.30 564.22 1169.96 557.07 C 1157.35 549.31 1138.51 551.03 1129.15 563.16 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 28.13 527.13 C 36.00 525.82 44.09 525.89 52.00 526.86 C 55.40 527.50 59.92 528.08 61.27 531.82 C 61.19 581.22 61.30 630.63 61.22 680.03 C 58.98 683.97 53.85 684.03 49.88 684.63 C 41.97 684.97 33.90 685.40 26.11 683.72 C 23.29 683.19 20.02 681.35 20.35 678.02 C 20.31 629.67 20.30 581.31 20.36 532.96 C 20.51 529.04 24.95 527.75 28.13 527.13 Z"
                />
                <path
                    fill={customColor}
                    opacity="1.00"
                    d=" M 674.42 529.40 C 678.20 526.38 683.38 526.70 687.95 526.28 C 695.18 526.29 702.57 525.61 709.67 527.25 C 714.87 528.56 715.58 534.61 717.30 538.83 C 728.64 570.66 739.40 602.74 751.15 634.40 C 762.26 600.24 772.61 565.80 783.51 531.56 C 784.55 527.61 789.14 526.88 792.60 526.52 C 800.02 526.04 807.53 525.92 814.92 526.92 C 818.16 527.41 822.08 528.58 823.22 532.06 C 824.10 537.02 821.95 541.78 820.43 546.39 C 799.00 609.32 777.92 672.37 756.19 735.19 C 752.56 742.89 742.42 742.25 735.24 743.04 C 731.12 743.11 727.00 743.14 722.89 742.98 C 718.23 742.81 709.26 741.93 711.06 735.18 C 717.31 718.08 724.66 701.35 730.95 684.27 C 728.52 681.93 725.82 679.65 724.74 676.33 C 707.96 631.42 691.18 586.50 674.45 541.58 C 673.27 537.75 671.16 532.77 674.42 529.40 Z"
                />
            </g>
            <g id="#da251cff">
                <path
                    fill="#da251c"
                    opacity="1.00"
                    d=" M 60.94 193.15 C 76.21 179.00 94.94 167.36 115.98 164.88 C 137.49 162.49 161.03 166.58 177.66 181.30 C 182.41 185.13 185.87 190.19 189.83 194.76 C 199.99 212.75 203.65 233.52 203.76 253.99 C 203.79 299.66 203.81 345.33 203.75 391.00 C 203.98 396.97 197.09 398.74 192.40 399.42 C 179.23 401.10 165.77 400.94 152.62 399.05 C 148.70 398.02 143.72 395.94 143.95 391.07 C 143.84 352.05 143.93 313.02 143.90 274.00 C 143.89 259.84 143.99 244.61 136.40 232.11 C 128.35 215.83 105.81 212.30 90.93 220.89 C 78.84 227.87 68.58 238.11 60.57 249.42 C 60.01 296.60 60.63 343.84 60.27 391.04 C 60.20 397.13 53.24 398.73 48.42 399.46 C 35.38 401.09 22.06 400.95 9.05 399.02 C 5.21 398.17 1.61 396.08 0.00 392.33 L 0.00 176.53 C 1.20 173.68 3.19 171.08 6.36 170.38 C 16.38 167.44 27.04 167.99 37.33 168.62 C 42.40 169.34 49.79 169.80 51.29 175.82 C 51.94 184.59 51.06 193.40 51.74 202.16 C 55.01 199.37 57.90 196.18 60.94 193.15 Z"
                />
                <path
                    fill="#da251c"
                    opacity="1.00"
                    d=" M 283.62 192.63 C 306.91 169.14 341.94 161.53 373.98 164.94 C 400.81 166.68 427.23 179.56 442.81 201.87 C 457.99 226.18 461.57 255.73 459.62 283.82 C 459.01 291.95 452.35 299.38 443.95 299.52 C 399.88 299.91 355.78 299.31 311.72 299.81 C 311.50 316.38 314.93 335.30 328.44 346.37 C 339.55 356.54 355.44 359.19 370.00 359.19 C 391.02 359.61 411.83 354.90 431.38 347.42 C 435.85 345.81 440.87 343.39 445.63 345.25 C 448.66 347.20 449.13 351.25 449.37 354.54 C 449.67 363.65 450.35 373.02 448.08 381.94 C 445.98 388.85 438.30 390.87 432.37 393.31 C 411.36 400.43 389.17 404.15 367.00 404.44 C 337.67 405.14 307.06 399.01 283.56 380.53 C 258.83 358.01 250.75 323.27 250.70 290.99 C 249.74 255.96 258.00 218.10 283.62 192.63 M 337.93 210.88 C 319.55 219.77 311.20 242.30 312.27 261.36 C 342.16 261.18 372.06 261.48 401.95 261.19 C 402.07 248.54 401.09 234.47 393.21 224.09 C 389.51 215.54 380.49 210.49 371.84 208.15 C 360.66 205.64 348.39 205.79 337.93 210.88 Z"
                />
                <path
                    fill="#da251c"
                    opacity="1.00"
                    d=" M 495.93 169.09 C 511.34 167.80 527.01 167.48 542.35 169.61 C 548.44 169.95 550.80 176.00 553.28 180.58 C 564.76 202.88 576.66 224.98 588.56 247.06 C 589.39 246.00 590.11 244.85 590.72 243.64 C 602.73 220.67 614.84 197.76 626.84 174.80 C 629.88 168.91 637.53 169.35 643.18 168.53 C 654.97 168.09 666.94 167.60 678.64 169.47 C 683.16 169.96 686.48 174.73 683.89 178.91 C 666.17 212.86 646.81 246.01 629.27 280.02 C 647.11 314.39 666.45 348.08 684.86 382.19 C 686.87 386.25 690.62 390.87 688.53 395.57 C 684.37 400.03 677.54 399.60 671.95 400.23 C 657.57 400.38 642.93 401.54 628.74 398.61 C 626.25 397.55 623.60 396.20 622.38 393.64 C 611.37 372.53 600.29 351.47 589.30 330.36 C 587.02 325.70 584.76 321.00 581.89 316.68 C 567.41 342.54 554.89 369.60 540.44 395.47 C 536.43 399.48 530.29 399.79 524.96 400.24 C 513.13 400.61 501.26 400.86 489.46 399.73 C 486.03 399.17 481.78 398.34 480.22 394.79 C 479.53 392.07 480.77 389.37 482.02 387.02 C 501.61 351.95 521.46 317.00 540.98 281.90 C 524.39 251.01 507.15 220.45 490.32 189.68 C 487.93 185.11 484.57 180.66 484.37 175.32 C 485.42 170.20 491.72 169.76 495.93 169.09 Z"
                />
            </g>
            <g id="#2f2a2e41">
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 329.87 455.74 C 335.55 454.73 341.44 454.56 347.13 455.66 C 341.38 455.20 335.61 455.35 329.87 455.74 Z"
                />
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 61.27 531.82 C 61.75 581.20 61.86 630.66 61.22 680.03 C 61.30 630.63 61.19 581.22 61.27 531.82 Z"
                />
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 655.33 540.84 C 656.43 546.54 656.37 552.49 655.28 558.19 C 655.76 552.42 655.80 546.61 655.33 540.84 Z"
                />
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 329.17 560.40 C 338.76 560.12 348.36 560.58 357.94 560.20 C 348.56 561.10 339.10 560.01 329.71 560.75 C 328.91 600.19 330.19 639.73 329.07 679.15 C 329.02 639.57 328.81 599.97 329.17 560.40 Z"
                />
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 963.32 560.21 C 969.81 560.38 976.32 560.24 982.82 560.41 C 983.19 586.29 982.93 612.21 982.94 638.12 C 981.72 612.38 983.08 586.51 982.26 560.75 C 976.14 559.65 968.52 561.62 963.32 560.21 Z"
                />
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 143.40 680.15 C 143.83 647.16 142.96 614.10 143.83 581.13 C 143.67 614.13 144.52 647.20 143.40 680.15 Z"
                />
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 1297.19 680.04 C 1297.42 647.06 1296.73 614.02 1297.53 581.06 C 1297.42 614.05 1298.10 647.09 1297.19 680.04 Z"
                />
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 1351.33 584.76 C 1352.47 616.48 1351.51 648.29 1351.82 680.04 C 1350.79 648.32 1351.77 616.51 1351.33 584.76 Z"
                />
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 372.73 619.12 C 371.64 611.44 371.57 603.56 372.72 595.88 C 372.20 603.62 372.27 611.38 372.73 619.12 Z"
                />
                <path
                    fill="#2f2a2e"
                    opacity="0.25"
                    d=" M 663.28 629.84 C 664.39 634.87 664.34 640.12 663.28 645.15 C 663.78 640.06 663.76 634.93 663.28 629.84 Z"
                />
            </g>
            <g id="#a9acaaff">
                <path
                    fill="#a9acaa"
                    opacity="1.00"
                    d=" M 722.89 742.98 C 727.00 743.14 731.12 743.11 735.24 743.04 L 736.07 744.00 L 723.05 744.00 L 722.89 742.98 Z"
                />
            </g>
        </svg>
    );
};

export default Logo;
