function createTimeline(data, containerId) {
  const svgNS = "http://www.w3.org/2000/svg";
  const container = document.getElementById(containerId);
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 800 200");
  svg.setAttribute("xmlns", svgNS);

  // Timeline base
  const line = document.createElementNS(svgNS, "line");
  line.setAttribute("x1", "50");
  line.setAttribute("y1", "100");
  line.setAttribute("x2", "750");
  line.setAttribute("y2", "100");
  line.setAttribute("stroke", "#666");
  line.setAttribute("stroke-width", "2");
  svg.appendChild(line);

  data.forEach(item => {
    // Timeline points
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", item.x);
    circle.setAttribute("cy", "100");
    circle.setAttribute("r", "8");
    circle.setAttribute("fill", item.color);
    svg.appendChild(circle);

    // Era labels
    const textLabel = document.createElementNS(svgNS, "text");
    textLabel.setAttribute("x", item.x);
    textLabel.setAttribute("y", "140");
    textLabel.setAttribute("text-anchor", "middle");
    textLabel.setAttribute("font-size", "14");
    textLabel.textContent = item.label;
    const tspan = document.createElementNS(svgNS, "tspan");
    tspan.setAttribute("x", item.x);
    tspan.setAttribute("y", "160");
    tspan.textContent = item.subLabel;
    textLabel.appendChild(tspan);
    svg.appendChild(textLabel);

    // Era descriptions
    const textDesc = document.createElementNS(svgNS, "text");
    textDesc.setAttribute("x", item.x);
    textDesc.setAttribute("y", "60");
    textDesc.setAttribute("text-anchor", "middle");
    textDesc.setAttribute("font-size", "12");
    textDesc.setAttribute("fill", "#666");
    textDesc.textContent = item.description;
    svg.appendChild(textDesc);
  });

  container.appendChild(svg);
}

// Example data
const timelineData = [
  { x: 150, color: "#4CAF50", label: "Traditional Manual", subLabel: "Refractometers", description: "1950s-1970s" },
  { x: 350, color: "#2196F3", label: "Laboratory", subLabel: "Analysis", description: "1980s-1990s" },
  { x: 550, color: "#9C27B0", label: "Satellite Remote", subLabel: "Sensing", description: "2000s-2010s" },
  { x: 750, color: "#FF5722", label: "UAV-based", subLabel: "Sensing", description: "2020s-Present" }
];

// Call the function to create the timeline inside a div with id="timeline-container"
document.addEventListener('DOMContentLoaded', (event) => {
    createTimeline(timelineData, "timeline-container");
});