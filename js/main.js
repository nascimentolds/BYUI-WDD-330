const links = [{
    label: "Week 1",
    url: "week1/index.html"
},
{
    label: "Week 2",
    url: "week2/index.html"
},
{
    label: "Week 3",
    url: "week3/index.html"
},
{
    label: "Week 4",
    url: "week4/index.html"
},
{
    label: "Week 5",
    url: "week5/index.html"
},
{
    label: "Week 6",
    url: "week6/index.html"
},
{
    label: "Week 7",
    url: "week7/index.html"
},
{
    label: "Week 8",
    url: "week8/index.html"
},
{
    label: "Week 9",
    url: "week9/index.html"
},
{
    label: "Week 10",
    url: "week10/index.html"
},
]

function generateContents() {
    var list = document.getElementById("table-of-contents");
    for (i in links) {
        var node = document.createElement("li");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", links[i].url);
        anchor.innerText = links[i].label;
        node.appendChild(anchor);
        list.appendChild(node);
    };
}

generateContents();