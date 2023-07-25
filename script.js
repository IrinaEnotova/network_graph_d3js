"use strict";
// import d3
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// add nodes and links
const nodes = [
  {
    id: "Grete Eglese",
    email: "geglese0@hao123.com",
    phone: "353-523-7002",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Filberte Jeens",
    email: "fjeens1@printfriendly.com",
    phone: "412-961-7092",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Heidie Sandham",
    email: "hsandham2@mtv.com",
    phone: "609-450-0901",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Gladi Stevani",
    email: "gstevani3@webs.com",
    phone: "282-562-6149",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Dori Tabourin",
    email: "dtabourin4@csmonitor.com",
    phone: "500-179-6229",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Lyle Hynd",
    email: "lhynd5@rambler.ru",
    phone: "378-108-9159",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Dario Kulis",
    email: "dkulis6@netvibes.com",
    phone: "664-413-2577",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Reinhard Allom",
    email: "rallom7@rambler.ru",
    phone: "513-244-0478",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Marney Faulconbridge",
    email: "mfaulconbridge8@microsoft.com",
    phone: "730-177-4376",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Karel Probyn",
    email: "kprobyn9@europa.eu",
    phone: "270-140-2892",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Vikky Rockwill",
    email: "vrockwilla@aol.com",
    phone: "346-592-8869",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Clementine Beartup",
    email: "cbeartupb@ning.com",
    phone: "265-647-4840",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Hendrika Odger",
    email: "hodgerc@patch.com",
    phone: "678-932-3988",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Masha Barrowcliff",
    email: "mbarrowcliffd@senate.gov",
    phone: "680-305-8998",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Chic Konig",
    email: "ckonige@army.mil",
    phone: "687-296-9943",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Britni Sedger",
    email: "bsedgerf@moonfruit.com",
    phone: "947-448-5651",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Ceciley Marczyk",
    email: "cmarczykg@hc360.com",
    phone: "260-360-5721",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Faunie Densumbe",
    email: "fdensumbeh@bizjournals.com",
    phone: "145-777-9064",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Tresa Paulmann",
    email: "tpaulmanni@nps.gov",
    phone: "569-824-2992",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Annie Lammers",
    email: "alammersj@e-recht24.de",
    phone: "204-530-6858",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Manya Baughn",
    email: "mbaughnk@army.mil",
    phone: "360-443-8399",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Curran Caghy",
    email: "ccaghyl@slate.com",
    phone: "264-317-6772",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Michelina MacKellen",
    email: "mmackellenm@hostgator.com",
    phone: "955-630-3174",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Sula Sommerville",
    email: "ssommervillen@businessweek.com",
    phone: "587-460-9240",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Sim Ladewig",
    email: "sladewigo@dailymail.co.uk",
    phone: "673-832-0909",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Tamas Gornar",
    email: "tgornarp@constantcontact.com",
    phone: "694-881-0422",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Christophorus Reedman",
    email: "creedmanq@sakura.ne.jp",
    phone: "628-872-5671",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Timothee Wapple",
    email: "twappler@alexa.com",
    phone: "863-989-5344",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Olly Ferran",
    email: "oferrans@bravesites.com",
    phone: "620-275-4575",
    color: "#1FB54B",
    type: "person",
  },
  {
    id: "Stern Bouchard",
    email: "sbouchardt@freewebs.com",
    phone: "102-524-6439",
    color: "#1FB54B",
    type: "person",
  },
  // 10 companies
  {
    id: "Realbridge",
    email: "rgauvain0@smh.com.au",
    phone: "761-402-1232",
    color: "#258CF1",
    type: "company",
  },
  {
    id: "Voolith",
    email: "chaken1@nasa.gov",
    phone: "600-390-0961",
    color: "#258CF1",
    type: "company",
  },
  {
    id: "Janyx",
    email: "krenfield2@time.com",
    phone: "376-377-2226",
    color: "#258CF1",
    type: "company",
  },
  {
    id: "Voonte",
    email: "ichadd3@etsy.com",
    phone: "198-599-9773",
    color: "#258CF1",
    type: "company",
  },
  {
    id: "Gabspot",
    email: "amacdavitt4@digg.com",
    phone: "268-995-5477",
    color: "#258CF1",
    type: "company",
  },
  {
    id: "Divavu",
    email: "soneill5@yolasite.com",
    phone: "412-889-6801",
    color: "#258CF1",
    type: "company",
  },
  {
    id: "Skyble",
    email: "esheaf6@homestead.com",
    phone: "348-786-6271",
    color: "#258CF1",
    type: "company",
  },
  {
    id: "Aivee",
    email: "sohanessian7@reference.com",
    phone: "368-704-3476",
    color: "#258CF1",
    type: "company",
  },
  {
    id: "Fivespan",
    email: "sragate8@github.io",
    phone: "330-326-9323",
    color: "#258CF1",
    type: "company",
  },
  {
    id: "Skyble",
    email: "mcastanaga9@yellowpages.com",
    phone: "873-815-2497",
    color: "#258CF1",
    type: "company",
  },
  // 10 cities
  {
    id: "Hamilton",
    color: "#6541C5",
    type: "city",
  },
  {
    id: "Delhi",
    color: "#6541C5",
    type: "city",
  },
  {
    id: "Shanghai",
    color: "#6541C5",
    type: "city",
  },
  {
    id: "New York",
    color: "#6541C5",
    type: "city",
  },
  {
    id: "Buenos Aires",
    color: "#6541C5",
    type: "city",
  },
  {
    id: "Rio de Janeiro",
    color: "#6541C5",
    type: "city",
  },
  {
    id: "Los Angeles",
    color: "#6541C5",
    type: "city",
  },
  {
    id: "Toronto",
    color: "#6541C5",
    type: "city",
  },
  {
    id: "Madrid",
    color: "#6541C5",
    type: "city",
  },
  {
    id: "Atlanta",
    color: "#6541C5",
    type: "city",
  },
];

const links = [
  {
    source: nodes[0],
    target: nodes[30],
    distance: 100,
  },
  {
    source: nodes[1],
    target: nodes[30],
    distance: 100,
  },
  {
    source: nodes[2],
    target: nodes[30],
    distance: 100,
  },
  {
    source: nodes[3],
    target: nodes[31],
    distance: 100,
  },
  {
    source: nodes[4],
    target: nodes[31],
    distance: 100,
  },
  {
    source: nodes[5],
    target: nodes[31],
    distance: 100,
  },
  {
    source: nodes[6],
    target: nodes[32],
    distance: 100,
  },
  {
    source: nodes[7],
    target: nodes[32],
    distance: 100,
  },
  {
    source: nodes[8],
    target: nodes[32],
    distance: 100,
  },
  {
    source: nodes[9],
    target: nodes[33],
    distance: 100,
  },
  {
    source: nodes[10],
    target: nodes[33],
    distance: 100,
  },
  {
    source: nodes[11],
    target: nodes[33],
    distance: 100,
  },
  {
    source: nodes[12],
    target: nodes[34],
    distance: 100,
  },
  {
    source: nodes[13],
    target: nodes[34],
    distance: 100,
  },
  {
    source: nodes[14],
    target: nodes[34],
    distance: 100,
  },
  {
    source: nodes[15],
    target: nodes[35],
    distance: 100,
  },
  {
    source: nodes[16],
    target: nodes[35],
    distance: 100,
  },
  {
    source: nodes[17],
    target: nodes[35],
    distance: 100,
  },
  {
    source: nodes[18],
    target: nodes[36],
    distance: 100,
  },
  {
    source: nodes[19],
    target: nodes[36],
    distance: 100,
  },
  {
    source: nodes[20],
    target: nodes[36],
    distance: 100,
  },
  {
    source: nodes[21],
    target: nodes[37],
    distance: 100,
  },
  {
    source: nodes[22],
    target: nodes[37],
    distance: 100,
  },
  {
    source: nodes[23],
    target: nodes[37],
    distance: 100,
  },
  {
    source: nodes[24],
    target: nodes[38],
    distance: 100,
  },
  {
    source: nodes[25],
    target: nodes[38],
    distance: 100,
  },
  {
    source: nodes[26],
    target: nodes[38],
    distance: 100,
  },
  {
    source: nodes[27],
    target: nodes[39],
    distance: 100,
  },
  {
    source: nodes[28],
    target: nodes[39],
    distance: 100,
  },
  {
    source: nodes[29],
    target: nodes[39],
    distance: 100,
  },
  {
    source: nodes[30],
    target: nodes[40],
    distance: 100,
  },
  {
    source: nodes[31],
    target: nodes[41],
    distance: 100,
  },
  {
    source: nodes[32],
    target: nodes[42],
    distance: 100,
  },
  {
    source: nodes[33],
    target: nodes[43],
    distance: 100,
  },
  {
    source: nodes[34],
    target: nodes[44],
    distance: 100,
  },
  {
    source: nodes[35],
    target: nodes[45],
    distance: 100,
  },
  {
    source: nodes[36],
    target: nodes[46],
    distance: 100,
  },
  {
    source: nodes[37],
    target: nodes[47],
    distance: 100,
  },
  {
    source: nodes[38],
    target: nodes[48],
    distance: 100,
  },
  {
    source: nodes[39],
    target: nodes[49],
    distance: 100,
  },
  {
    source: nodes[0],
    target: nodes[29],
    distance: 100,
  },
  {
    source: nodes[1],
    target: nodes[28],
    distance: 100,
  },
  {
    source: nodes[2],
    target: nodes[27],
    distance: 100,
  },
  {
    source: nodes[3],
    target: nodes[26],
    distance: 100,
  },
  {
    source: nodes[4],
    target: nodes[25],
    distance: 100,
  },
  {
    source: nodes[5],
    target: nodes[24],
    distance: 100,
  },
  {
    source: nodes[6],
    target: nodes[23],
    distance: 100,
  },
  {
    source: nodes[7],
    target: nodes[22],
    distance: 100,
  },
  {
    source: nodes[8],
    target: nodes[21],
    distance: 100,
  },
  {
    source: nodes[9],
    target: nodes[20],
    distance: 100,
  },
  {
    source: nodes[10],
    target: nodes[19],
    distance: 100,
  },
  {
    source: nodes[11],
    target: nodes[18],
    distance: 100,
  },
  {
    source: nodes[12],
    target: nodes[17],
    distance: 100,
  },
  {
    source: nodes[13],
    target: nodes[16],
    distance: 100,
  },
  {
    source: nodes[14],
    target: nodes[15],
    distance: 100,
  },
  {
    source: nodes[0],
    target: nodes[5],
    distance: 100,
  },
  {
    source: nodes[1],
    target: nodes[25],
    distance: 100,
  },
  {
    source: nodes[3],
    target: nodes[27],
    distance: 100,
  },
  {
    source: nodes[4],
    target: nodes[8],
    distance: 100,
  },
  {
    source: nodes[5],
    target: nodes[7],
    distance: 100,
  },
  {
    source: nodes[5],
    target: nodes[15],
    distance: 100,
  },
  {
    source: nodes[6],
    target: nodes[9],
    distance: 100,
  },
  {
    source: nodes[7],
    target: nodes[13],
    distance: 100,
  },
  {
    source: nodes[8],
    target: nodes[7],
    distance: 100,
  },
  {
    source: nodes[12],
    target: nodes[13],
    distance: 100,
  },
  {
    source: nodes[16],
    target: nodes[19],
    distance: 100,
  },
  {
    source: nodes[19],
    target: nodes[22],
    distance: 100,
  },
  {
    source: nodes[20],
    target: nodes[27],
    distance: 100,
  },
  {
    source: nodes[21],
    target: nodes[10],
    distance: 100,
  },
  {
    source: nodes[10],
    target: nodes[1],
    distance: 100,
  },
];

// choose the container for our graph
const svgParent = d3.select("svg");
const WIDTH = 1650;
const HEIGHT = 870;
const zoomG = d3
  .select("#graph-container")
  .attr("width", WIDTH)
  .attr("height", HEIGHT)
  .append("g");
const svgInnerGroup = zoomG.append("g");

const centerX = WIDTH / 2;
const centerY = HEIGHT / 2;

// create simulation
const MANY_BODY_STRENGTH = -200;
const simulation = d3
  .forceSimulation(nodes)
  .force("charge", d3.forceManyBody().strength(MANY_BODY_STRENGTH))
  .force(
    "link",
    d3.forceLink(links).distance((link) => link.distance)
  )
  .force("center", d3.forceCenter(centerX, centerY));

// drag
const dragInteraction = d3.drag().on("drag", (event, node) => {
  node.fx = event.x;
  node.fy = event.y;
  simulation.alpha(1);
  simulation.restart();
});

// ZOOM and PAN

svgParent.call(
  d3.zoom().on("zoom", (event) => {
    zoomG.attr("transform", event.transform);
  })
);

// create elements
const lines = svgInnerGroup
  .selectAll("line")
  .data(links)
  .enter()
  .append("line")
  .attr("stroke", (link) => link.color || "#BFBFBF");

const circles = svgInnerGroup
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("fill", (node) => node.color || "gray")
  .attr("stroke", "white")
  .attr("style", "cursor: pointer;")
  .attr("r", 27)
  .call(dragInteraction);

const text = svgInnerGroup
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .attr("text-anchor", "middle")
  .attr("dy", -35)
  .style("pointer-events", "none")
  .attr("fill", "white")
  .text((node) => node.id);

// simulation on
simulation.on("tick", () => {
  circles.attr("cx", (node) => node.x).attr("cy", (node) => node.y);
  text.attr("x", (node) => node.x).attr("y", (node) => node.y);
  lines
    .attr("x1", (link) => link.source.x)
    .attr("y1", (link) => link.source.y)
    .attr("x2", (link) => link.target.x)
    .attr("y2", (link) => link.target.y);
});
