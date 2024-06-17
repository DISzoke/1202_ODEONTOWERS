var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.480293881229592,
          "pitch": 0.7179900342838472,
          "rotation": 0,
          "target": "1-guest-wc"
        },
        {
          "yaw": 1.841564102843118,
          "pitch": 0.3683890573542854,
          "rotation": 0,
          "target": "2-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-guest-wc",
      "name": "GUEST WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2512229549421257,
          "pitch": 0.650123144928429,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance-hall",
      "name": "ENTRANCE HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8517787874322664,
          "pitch": 0.45312508828491005,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 2.05179330255363,
          "pitch": 0.4997814296144565,
          "rotation": 6.283185307179586,
          "target": "3-dining-room-1"
        },
        {
          "yaw": 0.12637114438505925,
          "pitch": 0.5066287459056564,
          "rotation": 0,
          "target": "23-passage-4"
        },
        {
          "yaw": 1.104672519747142,
          "pitch": 0.3852951247170395,
          "rotation": 0,
          "target": "8-lounge-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-room-1",
      "name": "DINING ROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.644171982477352,
          "pitch": 0.46047702938810886,
          "rotation": 0,
          "target": "2-entrance-hall"
        },
        {
          "yaw": 0.6878637929887219,
          "pitch": 0.45555897353882635,
          "rotation": 0,
          "target": "4-kitchen-1"
        },
        {
          "yaw": -1.7780648797598282,
          "pitch": 0.3784699385551402,
          "rotation": 6.283185307179586,
          "target": "8-lounge-1"
        },
        {
          "yaw": -0.06537248469287604,
          "pitch": 0.25380263197710917,
          "rotation": 0,
          "target": "7-dinning-room-2"
        },
        {
          "yaw": -2.77861309821359,
          "pitch": 0.4502317162631879,
          "rotation": 0,
          "target": "23-passage-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen-1",
      "name": "KITCHEN 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8583813301181227,
          "pitch": 0.49229331623064354,
          "rotation": 0,
          "target": "3-dining-room-1"
        },
        {
          "yaw": 0.8259787708288755,
          "pitch": 0.5387920916577187,
          "rotation": 0,
          "target": "5-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen-2",
      "name": "KITCHEN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5123533428263745,
          "pitch": 0.4866340575111394,
          "rotation": 0,
          "target": "4-kitchen-1"
        },
        {
          "yaw": -0.13178747110418954,
          "pitch": 0.48164404617034684,
          "rotation": 0,
          "target": "6-scullery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-scullery",
      "name": "SCULLERY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9065622173068464,
          "pitch": 0.4702652106487051,
          "rotation": 0,
          "target": "5-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dinning-room-2",
      "name": "DINNING ROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1826317591847246,
          "pitch": 0.37444563559805566,
          "rotation": 0,
          "target": "3-dining-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lounge-1",
      "name": "LOUNGE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.106347737552113,
          "pitch": 0.41822245217490384,
          "rotation": 0,
          "target": "3-dining-room-1"
        },
        {
          "yaw": -0.33664367280040963,
          "pitch": 0.28285175669740426,
          "rotation": 0,
          "target": "9-lounge-2"
        },
        {
          "yaw": -2.5677206945205437,
          "pitch": 0.3083635618723619,
          "rotation": 0,
          "target": "2-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lounge-2",
      "name": "LOUNGE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.922989578924014,
          "pitch": 0.3165074511049575,
          "rotation": 0,
          "target": "8-lounge-1"
        },
        {
          "yaw": 0.4383992489776034,
          "pitch": 0.35176282997169217,
          "rotation": 0,
          "target": "10-balcony-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-balcony-door",
      "name": "BALCONY DOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7975559009081898,
          "pitch": 0.34130494372599784,
          "rotation": 0,
          "target": "9-lounge-2"
        },
        {
          "yaw": -2.3613829254919345,
          "pitch": 0.3244858739860952,
          "rotation": 0,
          "target": "11-balcony-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-balcony-1",
      "name": "BALCONY 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4250695134671636,
          "pitch": 0.2905703858634201,
          "rotation": 0,
          "target": "10-balcony-door"
        },
        {
          "yaw": -2.3088090583912475,
          "pitch": 0.2710414274150761,
          "rotation": 5.497787143782138,
          "target": "12-balcony-2"
        },
        {
          "yaw": 2.9745492101825306,
          "pitch": 0.26872789669872965,
          "rotation": 0,
          "target": "14-main-bedroom-balcony-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-balcony-2",
      "name": "BALCONY 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0310692403786383,
          "pitch": 0.2874916037792481,
          "rotation": 0,
          "target": "11-balcony-1"
        },
        {
          "yaw": -0.19003644693441224,
          "pitch": 0.17459779478749482,
          "rotation": 0,
          "target": "13-balcony-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-balcony-3",
      "name": "BALCONY 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1566605389145703,
          "pitch": 0.29865397065926835,
          "rotation": 11.780972450961727,
          "target": "12-balcony-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-main-bedroom-balcony-door",
      "name": "MAIN BEDROOM BALCONY DOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5693021688853594,
          "pitch": 0.3236384267308505,
          "rotation": 0,
          "target": "11-balcony-1"
        },
        {
          "yaw": 0.4446039333846663,
          "pitch": 0.3214591410824834,
          "rotation": 0,
          "target": "15-main-bedroom"
        },
        {
          "yaw": -1.253026852211896,
          "pitch": 0.6211486133580078,
          "rotation": 0,
          "target": "17-walk-in-closet-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-main-bedroom",
      "name": "MAIN BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2269916353691457,
          "pitch": 0.420980980914468,
          "rotation": 0,
          "target": "14-main-bedroom-balcony-door"
        },
        {
          "yaw": -0.6961921684948731,
          "pitch": 0.40178721137019124,
          "rotation": 0,
          "target": "16-main-ensuite-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-main-ensuite-bathroom",
      "name": "MAIN ENSUITE BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1377118514903728,
          "pitch": 0.42907171921735454,
          "rotation": 0,
          "target": "15-main-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-walk-in-closet-1",
      "name": "WALK-IN CLOSET 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.337543693591778,
          "pitch": 0.6730239838171279,
          "rotation": 0,
          "target": "14-main-bedroom-balcony-door"
        },
        {
          "yaw": -0.6441346811098967,
          "pitch": 0.4283992426833212,
          "rotation": 0,
          "target": "18-walk-in-closet-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-walk-in-closet-2",
      "name": "WALK-IN CLOSET 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5919965977459452,
          "pitch": 0.5851759107659014,
          "rotation": 0,
          "target": "17-walk-in-closet-1"
        },
        {
          "yaw": -2.2105849947085012,
          "pitch": 0.6178573633051467,
          "rotation": 0.7853981633974483,
          "target": "19-bedroom-1"
        },
        {
          "yaw": -2.4727545107804154,
          "pitch": 0.5028764006706883,
          "rotation": 0,
          "target": "20-passage-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1000001076903647,
          "pitch": 0.4315958118239749,
          "rotation": 0,
          "target": "18-walk-in-closet-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-passage-1",
      "name": "PASSAGE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.104039432857549,
          "pitch": 0.5172318372212334,
          "rotation": 0,
          "target": "18-walk-in-closet-2"
        },
        {
          "yaw": 2.661404289122741,
          "pitch": 0.6405651901170728,
          "rotation": 4.71238898038469,
          "target": "19-bedroom-1"
        },
        {
          "yaw": 0.017441258763264855,
          "pitch": 0.3561515541463649,
          "rotation": 0,
          "target": "21-passage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-passage-2",
      "name": "PASSAGE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1769100140788247,
          "pitch": 0.4063539754784209,
          "rotation": 0,
          "target": "20-passage-1"
        },
        {
          "yaw": -0.9728071770318714,
          "pitch": 0.7775286830316528,
          "rotation": 0,
          "target": "22-passage-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-passage-3",
      "name": "PASSAGE 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.424344046478561,
          "pitch": 0.6943458400077542,
          "rotation": 0,
          "target": "21-passage-2"
        },
        {
          "yaw": -2.0538598797083907,
          "pitch": 0.6957826148429405,
          "rotation": 0,
          "target": "23-passage-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-passage-4",
      "name": "PASSAGE 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7636121257469766,
          "pitch": 0.7788097183264249,
          "rotation": 0,
          "target": "22-passage-3"
        },
        {
          "yaw": 0.03503054098180414,
          "pitch": 0.5092044825685811,
          "rotation": 0,
          "target": "24-bedroom-2"
        },
        {
          "yaw": -2.0140684158223294,
          "pitch": 0.3746776556597524,
          "rotation": 0,
          "target": "3-dining-room-1"
        },
        {
          "yaw": -1.2592487229669036,
          "pitch": 0.4974074094105969,
          "rotation": 6.283185307179586,
          "target": "2-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8069555334972147,
          "pitch": 0.5486350263970543,
          "rotation": 0,
          "target": "23-passage-4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
