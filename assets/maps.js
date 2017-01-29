var fill = d3.scale.quantize()
  .domain([.012, .782])
  .range(["#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"]);
// .range(["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]);
// .range(["#7f2704","#a63603","#d94801","#f16913","#fd8d3c","#fdae6b","#fdd0a2","#fee6ce","#fff5eb"]);


var basic_choropleth = new Datamap({
  element: document.getElementById("basic_choropleth"),
  projection: 'mercator',
  scope: 'world',
  // Zoom in on europe
  setProjection: function(element) {
    var projection = d3.geo.mercator()
      .center([11, 49])
      .scale(700)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geo.path()
      .projection(projection);

    return {
      path: path,
      projection: projection
    };
  },

  height: 500,
  geographyConfig: {
    highlightOnHover: false,
    popupTemplate: function(geography, data) {
      return ['<div class="hoverinfo"><strong>',
        geography.properties.name,
        ': ' + data.surface + ' m2 par hab.',
        '</strong></div>'
      ].join('');
    }
  },

  fills: {
    //  defaultFill: "#DDDDDD",
    defaultFill: "white",
    CYP: fill(.782),
    AUT: fill(.607),
    GRC: fill(.393),
    DEU: fill(.223),
    DNK: fill(.168),
    MLT: fill(.118),
    PRT: fill(.109),
    SVN: fill(.104),
    CZE: fill(.099),
    LUX: fill(.087),
    ESP: fill(.074),
    IRL: fill(.065),
    ITA: fill(.062),
    NLD: fill(.053),
    BEL: fill(.052),
    SWE: fill(.049),
    POL: fill(.046),
    FRA: fill(.042),
    HRV: fill(.037),
    SVK: fill(.031),
    HUN: fill(.022),
    BGR: fill(.012),
    GBR: fill(.011),
    LVA: fill(.009),
    FIN: fill(.009),
    ROU: fill(.009),
    EST: fill(.008),
    LTU: fill(.005)
  },
  data: {
    CYP: {
      fillKey: "CYP",
      surface: .782
    },
    AUT: {
      fillKey: "AUT",
      surface: .607
    },
    GRC: {
      fillKey: "GRC",
      surface: .393
    },
    DEU: {
      fillKey: "DEU",
      surface: .223
    },
    DEN: {
      fillKey: "DEN",
      surface: .168
    },
    MLT: {
      fillKey: "MLT",
      surface: .118
    },
    PRT: {
      fillKey: "PRT",
      surface: .109
    },
    SVN: {
      fillKey: "SVN",
      surface: .104
    },
    CZE: {
      fillKey: "CZE",
      surface: .099
    },
    LUX: {
      fillKey: "LUX",
      surface: .087
    },
    ESP: {
      fillKey: "ESP",
      surface: .074
    },
    IRL: {
      fillKey: "IRL",
      surface: .065
    },
    ITA: {
      fillKey: "ITA",
      surface: .062
    },
    NLD: {
      fillKey: "NLD",
      surface: .053
    },
    BEL: {
      fillKey: "BEL",
      surface: .052
    },
    SWE: {
      fillKey: "SWE",
      surface: .049
    },
    POL: {
      fillKey: "POL",
      surface: .046
    },
    FRA: {
      fillKey: "FRA",
      surface: .042
    },
    HRV: {
      fillKey: "HRV",
      surface: .037
    },
    SVK: {
      fillKey: "SVK",
      surface: .031
    },
    HUN: {
      fillKey: "HUN",
      surface: .022
    },
    BGR: {
      fillKey: "BGR",
      surface: .012
    },
    GBR: {
      fillKey: "GBR",
      surface: .011
    },
    LVA: {
      fillKey: "LVA",
      surface: .009
    },
    FIN: {
      fillKey: "FIN",
      surface: .009
    },
    ROU: {
      fillKey: "ROU",
      surface: .009
    },
    EST: {
      fillKey: "EST",
      surface: .008
    },
    LTU: {
      fillKey: "LTU",
      surface: .005
    }
  }
});
